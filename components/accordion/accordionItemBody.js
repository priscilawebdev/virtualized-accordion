import React from 'react'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'

const Body = styled('div')`
  color: #666;
  transition: padding 200ms ease-in-out;
  padding: 0px 20px;
  margin: 10px 0;
  ${({ expanded }) =>
    expanded && {
      padding: '10px 20px',
      margin: 0,
    }};
`

const AccordionItemBody = ({ bodyContent, ...props }) => (
  <Body {...props}>{bodyContent}</Body>
)

AccordionItemBody.propTypes = {
  bodyContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  expanded: PropTypes.bool,
}

export default AccordionItemBody
