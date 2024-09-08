import { FC } from 'react'
import { Recipe } from '../../../../services/recipes/type'

const ModalDetail: FC<{ data: Recipe }> = ({ data }) => {
  const { title } = data
  return <div>{title}</div>
}
export default ModalDetail
