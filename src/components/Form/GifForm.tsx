import styled from '@emotion/styled'
import { useRootState } from '../../hooks/useRootState'

const Group = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const Item = styled.div`
  position: relative;
  cursor: pointer;
  height: 200px;

  background-color: #fff;
`

const GifImage = styled.img`
  width: 100%;
  height: 100%;

  filter: brightness(70%);

  &:hover {
    filter: brightness(95%);
  }
`

const Label = styled.div`
  position: absolute;

  z-index: 2;

  font-size: 20px;
  font-weight: 900;

  bottom: 0;
  left: 0;

  margin: 10%;

  color: #ffffff;
`

const GifForm = () => {
  const { gif } = useRootState((state) => state.post)

  return (
    <>
      <Group>
        {gif?.tags.map((category) => (
          <Item
            key={`${category.name}-gif-form`}
            onClick={() => {
              console.log(category.path)
            }}
          >
            <GifImage src={`${category.image}`} alt="gif_category"></GifImage>
            <Label>{category.name}</Label>
          </Item>
        ))}
      </Group>
    </>
  )
}

export default GifForm
