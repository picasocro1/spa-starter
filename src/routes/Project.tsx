import { useParams, useSearchParams } from 'react-router-dom'

export const Project = () => {
  const { id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  return (
    <>
      <p>Project: {id}</p>
      <p>
        {[...searchParams.keys()].length > 0
          ? `(${[...searchParams.entries()].map(([key, value]) => `${key}: ${value}`).join(' | ')})`
          : ''}
      </p>
      <button className="mt-2 bg-gray-200 p-2" onClick={() => setSearchParams('')}>
        Clear
      </button>
      <button
        className="mt-2 bg-gray-200 p-2"
        onClick={() =>
          setSearchParams((current) => {
            current.append('something', 'new')
            return current
          })
        }
      >
        Add something new
      </button>
    </>
  )
}
