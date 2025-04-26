import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { FlightBooker } from '.'

describe('FlightBooker component', () => {
  afterEach(cleanup)

  it('should render flight booker', () => {
    render(<FlightBooker />)

    // Check for initial elements
    expect(screen.getByDisplayValue('One Way Flight')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Book/i })).toBeInTheDocument()
    // We expect only one date input initially for one-way
    expect(screen.getAllByDisplayValue(/^\d{4}-\d{2}-\d{2}$/)).toHaveLength(1)
  })

  it('should show return date input when round trip is selected', () => {
    render(<FlightBooker />)

    const flightTypeSelect = screen.getByDisplayValue('One Way Flight')
    fireEvent.change(flightTypeSelect, { target: { value: 'roundtrip' } })

    // Check that the select value updated
    expect(screen.getByDisplayValue('Round Trip')).toBeInTheDocument()

    // Check that two date inputs are now visible
    expect(screen.getAllByDisplayValue(/^\d{4}-\d{2}-\d{2}$/)).toHaveLength(2)
  })

  it('should submit form when valid data is entered', () => {
    render(<FlightBooker />)

    const flightTypeSelect = screen.getByDisplayValue('One Way Flight')
    fireEvent.change(flightTypeSelect, { target: { value: 'roundtrip' } })

    const fromDateInput = screen.getByPlaceholderText('From')
    fireEvent.change(fromDateInput, { target: { value: '2024-01-01' } })

    const toDateInput = screen.getByPlaceholderText('To')
    fireEvent.change(toDateInput, { target: { value: '2024-01-02' } })

    const bookButton = screen.getByRole('button', { name: /Book/i })
    fireEvent.click(bookButton)

    expect(window.alert).toHaveBeenCalledWith(
      'You are booking a round trip flight on 2024-01-01 to 2024-01-02'
    )
  })
})
