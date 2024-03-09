import React from 'react';
import { ReactToPrint } from 'react-to-print';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosPrint } from "react-icons/io";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ChequeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();

    this.state = {
      banqueName: '',
      montant: '',
      aLordreDe: '',
      faitA: '',
      date: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
        <Container fluid>
            <Row >
                <Col xs={12} sm={12} >
        <Form  onSubmit={(e) => e.preventDefault()}>
          <Form.Group controlId="banqueName" className="mb-3">
          <Form.Select
  name="banqueName"
  value={this.state.banqueName}
  onChange={this.handleInputChange}
  required
  style={{ width: '100%' }}
>
  <option value="CIH">CIH</option>
  <option value="ATTIJARIWAFA BANK">ATTIJARIWAFA BANK</option>
  <option value="BANK OF AFRICA">BANK OF AFRICA</option>
  <option value="AL BARID BANK">AL BARID BANK</option>
  <option value="CREDIT AGRICOLE">CREDIT AGRICOLE</option>
  <option value="SOCIETE GENERALE">SOCIETE GENERALE</option>
  <option value="CREDIT DU MAROC">CREDIT DU MAROC</option>
  
  {/* Add more options as needed */}
</Form.Select>

          </Form.Group>
          <Form.Group controlId="montant" className="mb-3">
            <Form.Label style={{marginTop:"20%"}}>Montant:</Form.Label>
            <Form.Control
            required
              type="text"
              name="montant"
              value={this.state.montant}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="aLordreDe" className="mb-3">
            <Form.Label>A l'ordre de:</Form.Label>
            <Form.Control
            required
              type="text"
              name="aLordreDe"
              value={this.state.aLordreDe}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="faitA" className="mb-3">
            <Form.Label>Fait a:</Form.Label>
            <Form.Control
            required
              type="date"
              name="faitA"
              value={this.state.faitA}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="date" className="mb-3">
            <Form.Label>Date:</Form.Label>
            <Form.Control
            required
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleInputChange}
            />
          </Form.Group>
        </Form>
        </Col>
        
        <Col xs={12} sm={6}>
        <ReactToPrint
  trigger={() => <Button variant="success" style={{ marginLeft: '10px' }}>Print Cheque <IoIosPrint/></Button>}
  content={() => this.componentRef.current}
/>

        <div style={{ marginLeft: '20px' }} ref={this.componentRef} className="w-50">
          {/* Your Cheque content goes here */}
          <p>BanqueName: {this.state.banqueName}</p>
          <p>Montant: {this.state.montant}</p>
          <p>A l'ordre de: {this.state.aLordreDe}</p>
          <p>Fait a: {this.state.faitA}</p>
          <p>Date: {this.state.date}</p>
        </div>
        </Col>
     
        </Row>
      </Container>
    );
  }
}

export default ChequeComponent;
