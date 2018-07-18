import React from 'react'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'

const Body = styled('div')`
  color: #666;
  transition: 200ms ease-in-out;
  padding: 0 20px;
  max-height: 0px;
  overflow: hidden;
  ${({ expanded }) =>
    expanded && {
      maxHeight: 'none',
      overflow: 'visible',
      padding: '10px 20px',
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
