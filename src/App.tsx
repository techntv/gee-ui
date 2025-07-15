import styles from './App.module.css'
import { ControlBar } from './components/ControlBar'

const App = () => {
  return (
    <div className={styles.app}>
      <ControlBar />
    </div>
  )
}

export default App
