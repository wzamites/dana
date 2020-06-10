import React from 'react';
import './App.css';

import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner'

class App extends React.Component {
  constructor() {
      super()
      this.state = {
        repos: [],
      }
  }

  componentDidMount() {
    const url = "https://www.cbioportal.org/api/molecular-profiles/gbm_tcga_gistic/molecular-data?sampleListId=gbm_tcga_cna&entrezGeneId=1956&projection=SUMMARY"
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .then(data => {
      this.setState({
        repos: data
      })
    })
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
            <FormControl as="textarea" aria-label="With textarea" />
            <InputGroup.Append>
              <Button variant="outline-secondary">Show Chart</Button>
            </InputGroup.Append>
          </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
