import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import ArticleToc, { findTocTarget } from '@/themes/insignificantia/components/ArticleToc'

const rawId = 'a1234567-b123-c123-d123-e12345678901'
const compactId = rawId.replace(/-/g, '')
const items = [{ id: rawId, text: 'First heading', indentLevel: 0 }]
let root

beforeEach(() => {
  root = document.createElement('article')
  root.innerHTML = '<h2 id="' + compactId + '">First heading</h2>'
  document.body.appendChild(root)
  window.matchMedia.mockReturnValue({ matches: false })
})
afterEach(() => {
  cleanup()
  root.remove()
  window.history.replaceState(window.history.state, '', '/')
})

const mount = () => render(<ArticleToc items={items} articleRef={{ current: root }} postId='post-one' />)

it('matches dashed Notion IDs to compact IDs and block classes', () => {
  expect(findTocTarget(root, rawId)).toBe(root.firstChild)
  root.innerHTML = '<h2 class="notion-block-' + compactId + '">First heading</h2>'
  expect(findTocTarget(root, rawId)).toBe(root.firstChild)
  expect(findTocTarget(root, 'missing')).toBeNull()
})

it('mounts outside the page and closes on an outside press without disabling the page', () => {
  const onClick = jest.fn()
  const outside = document.createElement('button')
  outside.addEventListener('click', onClick)
  document.body.appendChild(outside)
  const { container, unmount } = mount()
  const overflow = document.body.style.overflow
  fireEvent.click(screen.getByRole('button', { name: '展开文章目录' }))
  expect(screen.getByRole('navigation', { name: '文章目录' }).closest('aside').parentElement).toBe(document.body)
  expect(container.querySelector('aside')).toBeNull()
  fireEvent.pointerDown(outside)
  fireEvent.click(outside)
  expect(onClick).toHaveBeenCalledTimes(1)
  expect(screen.queryByRole('navigation', { name: '文章目录' })).toBeNull()
  expect(document.body.style.overflow).toBe(overflow)
  unmount()
  outside.remove()
})

it('scrolls to the rendered heading and closes the drawer', () => {
  root.firstChild.scrollIntoView = jest.fn()
  const { unmount } = mount()
  fireEvent.click(screen.getByRole('button', { name: '展开文章目录' }))
  fireEvent.click(screen.getByRole('link', { name: 'First heading' }))
  expect(root.firstChild.scrollIntoView).toHaveBeenCalledWith({ block: 'start', behavior: 'smooth' })
  expect(window.location.hash).toBe('#' + compactId)
  expect(screen.queryByRole('navigation', { name: '文章目录' })).toBeNull()
  unmount()
})

it('closes with Escape and honors reduced motion for navigation', () => {
  root.firstChild.scrollIntoView = jest.fn()
  window.matchMedia.mockReturnValue({ matches: true })
  const { unmount } = mount()
  fireEvent.click(screen.getByRole('button', { name: '展开文章目录' }))
  fireEvent.keyDown(document, { key: 'Escape' })
  expect(screen.queryByRole('navigation', { name: '文章目录' })).toBeNull()
  fireEvent.click(screen.getByRole('button', { name: '展开文章目录' }))
  fireEvent.click(screen.getByRole('link', { name: 'First heading' }))
  expect(root.firstChild.scrollIntoView).toHaveBeenCalledWith({ block: 'start', behavior: 'auto' })
  unmount()
})

it('uses exactly three marks without visible menu labels', () => {
  const { unmount } = mount()
  const trigger = screen.getByRole('button', { name: '展开文章目录' })
  expect(trigger.textContent).toBe('')
  expect(trigger.querySelectorAll('.ins-reading-toc-marks > span')).toHaveLength(3)
  fireEvent.click(trigger)
  expect(screen.getByRole('navigation', { name: '文章目录' }).textContent).toBe('First heading')
  unmount()
})
