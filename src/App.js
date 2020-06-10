import React from 'react';
import './App.css';
import geneHash from './gene_results.js'

import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
    var inputArray = this.state.userInput.split(', ');
    for (let gene of inputArray) {
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
    const percentageItems = this.state.percentages.map((item) =>
      <div>{item[1]}, {item[0]}</div>
    );

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
              <Button variant="outline-secondary" value={this.state.userInput} onClick={() => this.pressChartButton()}>Chart</Button>
            </InputGroup.Append>
          </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
          {percentageItems}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
