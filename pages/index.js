import React, { Component } from 'react'
import Link from 'next/link'
import loremIpsum from 'lorem-ipsum'

const rowCount = 1000

export default class App extends Component {
  state = { list: [] }

  componentDidMount = () => {
    this.setState({
      list: Array(rowCount)
        .fill()
        .map((val, index) => ({
          id: index,
          text: loremIpsum({
            count: 1,
            units: 'sentences',
            sentenceLowerBound: 4,
            sentenceUpperBound: 30,
          }),
        })),
    })
  }

  render() {
    return <div>Virtualized Accordion</div>
  }
}
