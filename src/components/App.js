import React, { Component } from 'react';
import Products from './Products';
import Cart from './Cart';
import '../styles/App.css';
import { Container, Row, Col, CardColumns, Table } from 'react-bootstrap';


export default class App extends Component {
  render() {   
    return (
      <div className="App">
        <div style={{backgroundColor:'#00AEC7'}}>
          <p className="cintillo"><strong>Arma tu carrito</strong> y pide tus productos favoritos <strong>¡Ahora mismo!</strong></p>
        </div>
        <Container fluid>
          <Row>
            <Col>
              <p style={{color:'grey',fontSize:'20px'}}>Selecciona poductos para agregarlos al carrito de compras</p>              
              <CardColumns>
                <Products/>
              </CardColumns>
              <Cart/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}





