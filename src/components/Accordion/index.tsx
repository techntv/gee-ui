import styles from './styles.module.css'

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
  {},
]

export const Accordion = () => {
  return (
    <div className={styles.accordion}>
      {data.map((item) => (
        <div key={item.key}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <span
            aria-hidden={true}
            className={styles.accordion_icon}
          />
        </div>
      ))}
    </div>
  )
}
