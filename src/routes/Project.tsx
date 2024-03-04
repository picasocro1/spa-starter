import { useParams, useSearchParams } from 'react-router-dom'

export const Project = () => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()

  return (
    <>
      <p>Project: {id}</p>
      <p>
        {[...searchParams.keys()].length > 0
          ? `(${[...searchParams.entries()].map(([key, value]) => `${key}: ${value}`).join(' | ')})`
          : ''}
      </p>
    </>
  )
}
