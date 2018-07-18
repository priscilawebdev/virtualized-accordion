import React from 'react'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'

const Header = styled('div')`
  background-color: #fafafa;
  border-top: 1px solid #ccc;
  color: #333;
  padding: 20px;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1.17em;
  position: relative;
  transition: background-color 0.3s;
  &:hover {
    background-color: #8ac7fc;
    color: #fff;
  }
  ${({ expanded }) =>
    expanded && {
      backgroundColor: '#27a4fe',
      color: '#fff',
      ':hover': {
        backgroundColor: '#27a4fe',
      },
    }};
`

const AccordionItemHeader = ({ headerContent, onClick, ...props }) => {
  return (
    <Header {...props} onClick={onClick}>
      {headerContent}
    </Header>
  )
}

AccordionItemHeader.propTypes = {
  headerContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
}

export default AccordionItemHeader
