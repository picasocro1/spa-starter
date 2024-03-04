import { useTailwind } from '@/hooks'

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
    </div>
  )
}

export default App
