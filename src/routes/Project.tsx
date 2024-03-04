import { useParams } from 'react-router-dom'

export const Project = () => {
  const { id } = useParams()

  return <p>Project: {id}</p>
}
