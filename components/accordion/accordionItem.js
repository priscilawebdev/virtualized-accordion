import React from 'react'
import PropTypes from 'prop-types'
import AccordionItemHeader from './accordionItemHeader'
import AccordionItemBody from './accordionItemBody'

const AccordionItem = ({ expanded = false, key, ...props }) => (
  <div id={key}>
    <AccordionItemHeader expanded={expanded} {...props} />
    <AccordionItemBody expanded={expanded} {...props} />
  </div>
)

AccordionItem.propTypes = {
  headerContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  bodyContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
}

export default AccordionItem
