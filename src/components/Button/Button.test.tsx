import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, it, vi } from 'vitest'
import { Button } from '.'

describe('MyButton test:', () => {
  afterEach(cleanup)

  it('should render component', () => {
    render(<Button label='Testing' />)
  })

  it('should render label', () => {
    render(<Button label='Testing' />)
    screen.getByText('Testing')
  })

  it('should be disabled', () => {
    render(
      <Button
        label='Testing'
        disabled
      />
    )
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('onClick triggers properly', async () => {
    const mockFn = vi.fn()
    render(
      <Button
        onClick={mockFn}
        label='Testing'
      />
    )
    expect(mockFn).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByRole('button'))
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  it('disabled prevents action', async () => {
    const mockFn = vi.fn()
    render(
      <Button
        onClick={mockFn}
        label='Testing'
        disabled
      />
    )
    expect(mockFn).toHaveBeenCalledTimes(0)
    fireEvent.click(screen.getByRole('button'))
    expect(mockFn).toHaveBeenCalledTimes(0)
  })
})