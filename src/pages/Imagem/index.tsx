import * as S from './styles'
import { dados } from "../../services/dados"
import { ComponentCard } from '../../components'

export function Imagem() {
  return (
    <S.Section>
      {dados.map(item => (
        <ComponentCard
          key={item.id}
          data={item.data}
          img = {item.img}
        />
      ))}
    </S.Section>
  )
}
