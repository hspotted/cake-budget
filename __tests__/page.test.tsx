import { render, screen } from '@testing-library/react'

import HomePage from '../src/app/page'

it('renders the home page', () => {
  render(<HomePage />)
  expect(
    screen.getByText(/To get started, edit the page\.tsx file\./i)
  ).toBeInTheDocument()
})
