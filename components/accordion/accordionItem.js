import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'preact-emotion'
import AccordionItemHeader from './accordionItemHeader'
import AccordionItemBody from './accordionItemBody'

const Item = styled('div')`
  background: #ffffff;
  height: ${({ height }) => height}px;
  ${({ last }) =>
    !last &&
    `&:after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #ccc;
    }`};
`

class AccordionItem extends Component {
  state = { height: undefined }

  componentDidMount() {
    if (this.item) {
      this.setState({
        height: this.item.clientHeight,
      })
    }
  }

  render() {
    const { expanded = false, last = false, ...props } = this.props
    return (
      <Item
        innerRef={node => (this.item = node)}
        height={this.state.height}
        last={last}
      >
        <AccordionItemHeader expanded={expanded} {...props} />
        <AccordionItemBody expanded={expanded} {...props} />
      </Item>
    )
  }
}

AccordionItem.propTypes = {
  headerContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  bodyContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  last: PropTypes.bool,
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
}

export default AccordionItem
