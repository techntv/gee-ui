import React, { useState } from 'react'

const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  return `${year}-${month}-${day}`
}

const DAY_IN_SECONDS = 24 * 60 * 60 * 1000
const TODAY = formatDate(new Date())

export const FlightBooker = () => {
  const [flightType, setFlightType] = useState('oneway')
  const [from, setFrom] = useState(formatDate(new Date()))
  const [to, setTo] = useState(formatDate(new Date(Date.now() + DAY_IN_SECONDS)))

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (flightType === 'oneway') {
      alert(`You are booking a one-way flight on ${from}`)
    } else {
      alert(`You are booking a round trip flight on ${from} to ${to}`)
    }
  }

  return (
    <form onSubmit={submitForm}>
      <div style={{ marginBottom: '10px' }}>
        <select
          onChange={(e) => setFlightType(e.target.value)}
          value={flightType}
        >
          <option value='oneway'>One Way Flight</option>
          <option value='roundtrip'>Round Trip</option>
        </select>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <div>
          <input
            type='date'
            placeholder='From'
            value={from}
            min={TODAY}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
      </div>
      <div style={{ marginBottom: '10px' }}>
        {flightType === 'roundtrip' ? (
          <div>
            <input
              type='date'
              placeholder='To'
              value={to}
              min={from}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
        ) : null}
      </div>
      <button type='submit'>Book</button>
    </form>
  )
}
