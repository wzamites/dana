import React from 'react'
import './App.css'
import geneHash from './gene_results.js'

import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {
  XYPlot,
  YAxis,
  HorizontalBarSeries,
} from 'react-vis';

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        userInput: '',
        percentages: [],
      }
  }

  handleTextChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  pressChartButton() {
    this.setState({
      percentages: []
    })
    let inputArray = this.state.userInput.split(', ')
    for (let gene of inputArray) {
      gene = gene.toUpperCase()
      this.callApi(gene)
    }
  }

  callApi(gene) {
    if (gene in geneHash) {
      const url =
      "https://www.cbioportal.org/api/molecular-profiles/gbm_tcga_gistic/molecular-data?sampleListId=gbm_tcga_cna&entrezGeneId="
      + geneHash[gene]
      + "&projection=SUMMARY"

      fetch(url)
      .then(response => response.json())
      .then(function(data){
        let count = 0
        for (let patient of data) {
          if (patient.value === 2)
            count++
        }
        return count/data.length
      })
      .then(data => {
        this.setState({
          percentages: [...this.state.percentages, [gene, data]]
        })
      })
    }
  }

  render() {
    const data = []
    for (let item of this.state.percentages) {
      data.push({y: item[0], x: item[1]})
    }

    return (
      <Container>
        <Row>
          <Col>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Enter Gene IDs Here:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl aria-label="With textarea" onChange={this.handleTextChange} />
            <InputGroup.Append>
              <Button type="submit" variant="outline-secondary" value={this.state.userInput} onClick={() => this.pressChartButton()}>Chart</Button>
            </InputGroup.Append>
          </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <XYPlot width={400} height={50 + (50 * this.state.percentages.length)} yType="ordinal" margin={{left: 200}} xRange={[0, 100]}>
              <YAxis />
              <HorizontalBarSeries data={data} />
            </XYPlot>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
