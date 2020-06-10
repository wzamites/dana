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
        repos: []
      }
  }

  handleTextChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  logThings() {
    console.log(this.state.userInput)
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
          repos: data
        })
      })
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Enter Gene IDs Here:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl as="textarea" aria-label="With textarea" onChange={this.handleTextChange} />
            <InputGroup.Append>
              <Button variant="outline-secondary" value={this.state.userInput} onClick={() => this.callApi(this.state.userInput)}>Chart</Button>
            </InputGroup.Append>
          </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
          {this.state.repos}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
