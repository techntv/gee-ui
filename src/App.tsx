import { Accordion } from './components/Accordion'
import styles from './App.module.css'

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
const App = () => {
  return (
    <div className={styles.app}>
      <Accordion sections={data} />
    </div>
  )
}

export default App