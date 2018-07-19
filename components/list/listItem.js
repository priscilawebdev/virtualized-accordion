import React from 'react'
import styled from 'preact-emotion'
import PropTypes from 'prop-types'

const Wrapper = styled('div')(
  {
    borderBottom: '1px solid #ddd',
  },
  props => ({ ...props })
)

const Inner = styled('div')`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  padding: 0 24px;
  &:hover {
    background-color: #eeeeee;
  }
`

const Title = styled('div')`
  user-select: none;
  font-weight: 200;
  text-transform: capitalize;
  padding: 0.2em 0.5em;
`

const Description = styled('div')`
  padding: 0.2em 0.5em;
  display: none;
`

const ListItem = ({ title, description, ...props }) => (
  <Wrapper {...props}>
    <Inner>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Inner>
  </Wrapper>
)

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default ListItem
