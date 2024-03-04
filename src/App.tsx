import { useTailwind } from '@/hooks'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
  const {
    theme: {
      colors: {
        red: { [500]: red },
      },
    },
  } = useTailwind()

  return (
    <div className="grid h-full place-content-center">
      <p>{import.meta.env.BASE_URL}</p>
      <p>{red}</p>
      <FontAwesomeIcon icon={faLightbulb} />
    </div>
  )
}

export default App
