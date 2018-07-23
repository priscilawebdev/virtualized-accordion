import React, { Component } from 'react'
import loremIpsum from 'lorem-ipsum'
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from 'react-virtualized'
import { Accordion, AccordionItem } from '../components/accordion'
import Spinner from '../components/spinner'

const rowCount = 1000

const cache = new CellMeasurerCache({
  defaultHeight: 60,
  fixedWidth: true,
})

export default class App extends Component {
  state = { list: [] }

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
          active: false,
        })),
    })
  }

  rowRenderer = ({ index, parent, style }) => {
    const { list } = this.state
    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={list[index].id}
        parent={parent}
        rowIndex={index}
      >
        <div style={{ ...style, transform: 'height 200ms ease-in-out' }}>
          <AccordionItem
            headerContent={list[index].title}
            bodyContent={list[index].description}
            onClick={this.handleTogle(index)}
            expanded={list[index].active}
            last={index === list.length - 1}
          />
        </div>
      </CellMeasurer>
    )
  }

  getRowHeight = ({ index }) =>
    this.state.list[index].active ? cache.getHeight(index) : cache.defaultHeight

  handleTogle = index => () => {
    const { list } = this.state
    this.setState(
      {
        list: list.map(item => ({
          ...item,
          active: item.id === list[index].id ? !item.active : false,
        })),
      },
      () => {
        setTimeout(() => {
          this.list.recomputeRowHeights()
          this.list.forceUpdate()
        }, list[index].active ? 200 : 0)
      }
    )
  }

  render() {
    const { list } = this.state
    return list.length ? (
      <Accordion>
        <AutoSizer defaultHeight={400} defaultWidth={500}>
          {({ height, width }) => (
            <List
              deferredMeasurementCache={cache}
              height={height}
              width={width}
              ref={element => {
                this.list = element
              }}
              rowCount={list.length}
              rowHeight={this.getRowHeight}
              rowRenderer={this.rowRenderer}
            />
          )}
        </AutoSizer>
      </Accordion>
    ) : (
      <Spinner />
    )
  }
}
