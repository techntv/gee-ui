import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import { Accordion } from '.'

const data = [
    {
      title: 'HTML',
      content:
        'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
      key: 'html',
    },
    {
      title: 'CSS',
      content:
        'Cascading Style Sheets is a style sheet language used to describe the presentation of a document written in HTML or XML.',
      key: 'css',
    },
    {
      title: 'JavaScript',
      content:
        'JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
      key: 'javascript',
    },
  ]

describe('Accordion component', () => {
  afterEach(cleanup)
  
  it('should render accordion', () => {
    render(<Accordion sections={data} />)
    const htmlButton = screen.getByText('HTML')
    expect(htmlButton).toBeInTheDocument()
  })

  it('should expand content when click header item', () => {
    render(<Accordion sections={data} />)
    const htmlButton = screen.getByText('HTML')
    fireEvent.click(htmlButton)
    expect(screen.getByTestId('accordion-content-html')).toBeInTheDocument()
  })

  it('should collapse content when click header item', () => {
    render(<Accordion sections={data} />)
    const htmlButton = screen.getByText('HTML')
    fireEvent.click(htmlButton)
    fireEvent.click(htmlButton)
    expect(screen.queryByTestId('accordion-content-html')).not.toBeInTheDocument()
  })
})  