import styles from './App.module.css'
import { FlightBooker } from './components/FlightBooker'

const App = () => {
  return (
    <div className={styles.app}>
      <FlightBooker />
    </div>
  )
}

export default App