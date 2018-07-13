import styled from 'preact-emotion'

const List = styled('div')`
  position: relative;
  width: 800px;
  height: 400px;
  background-color: #f8f8f8;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-x: hidden;
  overflow-y: scroll;
`

export default List
