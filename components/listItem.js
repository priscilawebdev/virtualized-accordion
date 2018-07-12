import styled from 'preact-emotion'

const Wrapper = styled('li')`
  padding: 12px 24px;
  width: 100%;
  display: flex;
  position: relative;
  box-sizing: border-box;
  text-align: left;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
`

const Inner = styled('div')`
  flex: 1 1 auto;
  padding: 0 16px;
  min-width: 0;
`

const Title = styled('div')`
  background-color: #eeeeee;
  user-select: none;
  font-weight: 200;
  cursor: pointer;
  padding: 0.2em 0.5em;
  text-transform: capitalize;
  border-radius: 3px;
`

const Description = styled('div')`
  padding: 0.2em 0.5em;
`

const ListItem = ({ title, description }) => (
  <Wrapper>
    <Inner>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Inner>
  </Wrapper>
)

export default ListItem
