import React, { Component } from 'react'
import Link from 'next/link'
import loremIpsum from 'lorem-ipsum'
import List from '../components/list'
import ListItem from '../components/listItem'

const rowCount = 1000

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
        })),
    })
  }

  renderList = () => (
    <List>
      {this.state.list.map(item => (
        <ListItem title={item.title} description={item.description} />
      ))}
    </List>
  )

  render() {
    return this.state.list.length > 0 ? this.renderList() : 'Loading...'
  }
}
