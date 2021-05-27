import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { Card } from 'react-bootstrap';

class Products extends Component {

  render() {
    //this.props.cart se agrega a través de mapStateToProps
    //this.props.removeFromCart se agrega a través de mapDispatchToProps
    const productList = this.props.products.map( (item,index)  => {
      return (
        <div key={index}>
          <Card>
            <Card.Img variant="top" src={item.image} alt="producto seleccionado" style={{ width:'100%'}} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.category}</Card.Text>
              <Card.Text><strong>$ {item.price} MXN</strong></Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"><button className="button" onClick={() => this.props.addToCart(item)}> <i className="fas fa-shopping-cart"></i> Agregar al carrito </button></small>
            </Card.Footer>
          </Card>
        </div>
      );
    });

    return (
      <div className= "products">
         { productList }
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        products: state.products
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: item => dispatch(addToCart(item))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);

