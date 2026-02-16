import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders name and headline', () => {
  render(<App />)
  expect(screen.getByText(/Yusuf Ahmad/i)).toBeInTheDocument()
  expect(screen.getByText(/Software Test Engineer/i)).toBeInTheDocument()
})
