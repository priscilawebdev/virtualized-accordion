import React, { Component } from 'react'
import Link from 'next/link'
import loremIpsum from 'lorem-ipsum'
import { List as VList, WindowScroller } from 'react-virtualized'
import List from '../components/list'
import ListItem from '../components/listItem'
import Spinner from '../components/spinner'

const rowCount = 1000
const rowHeight = 48

export default class App extends Component {
  state = { scrollElement: null, list: [] }

  componentDidMount = () => {
    this.setState({
      list: Array(rowCount)
        .fill()
        .map((val, index) => ({
          id: index,
          title: loremIpsum({
            count: 1,
            units: 'word',
            sentenceLowerBound: 4,
            sentenceUpperBound: 10,
          }),
          description: loremIpsum({
            count: 1,
            units: 'sentences',
            sentenceLowerBound: 4,
            sentenceUpperBound: 30,
          }),
        })),
    })
  }

  renderRow = ({ index, key, style }) => (
    <ListItem
      key={key}
      style={style}
      title={this.state.list[index].title}
      description={this.state.list[index].description}
    />
  )

  setScrollElement = scrollElement => this.setState({ scrollElement })

  render() {
    return this.state.list.length ? (
      <List innerRef={this.setScrollElement}>
        {this.state.scrollElement && (
          <WindowScroller scrollElement={this.state.scrollElement}>
            {({ onChildScroll, height = 400, ...props }) => (
              <VList
                {...props}
                width={800}
                height={height}
                onScroll={onChildScroll}
                rowHeight={rowHeight}
                rowRenderer={this.renderRow}
                rowCount={this.state.list.length}
                autoHeight
              />
            )}
          </WindowScroller>
        )}
      </List>
    ) : (
      <Spinner />
    )
  }
}
