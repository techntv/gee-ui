import { useState } from 'react'
import styles from './styles.module.css'

interface AccordionProps {
  sections: { title: string, content: string, key: string }[]
}

export const Accordion = ({ sections }: AccordionProps) => {
  const [openSections, setOpenSections] = useState(new Set())

  return (
    <div className={styles.accordion}>
      {sections.map(({ title, content, key }) => {
        const isExpanded = openSections.has(key)

        return (
          <div key={key}>
            <button
              type='button'
              className={styles.accordion_header}
              onClick={() => {
                const newOpenSections = new Set(openSections)
                if (isExpanded) {
                  newOpenSections.delete(key)
                } else {
                  newOpenSections.add(key)
                }
                setOpenSections(newOpenSections)
              }}
            >
              <h3>{title}</h3>
              <span
                aria-hidden={true}
                className={[styles.accordion_icon, isExpanded && styles.accordion_icon__rotated]
                  .filter(Boolean)
                  .join(' ')}
              />
            </button>
            {openSections.has(key) && (
              <div className={styles.accordion_content} data-testid={`accordion-content-${key}`}>
                <span>{content}</span>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
