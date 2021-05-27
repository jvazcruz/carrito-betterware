import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import { Table } from 'react-bootstrap';

class Cart extends Component {
  render() {

    //this.props.cart se agrega a través de mapStateToProps
    //this.props.removeFromCart se agrega a través de mapDispatchToProps
    
    const cartList = this.props.cart.map(( item, index) =>{
      return (
        <div key={index} className="item-cart">
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>${item.price} MXN</td>
            <td><button className="button" style={{ backgroundColor: "#b73535"}} onClick={ () => this.props.removeFromCart(item)} ><i className="fas fa-trash-alt"></i> Eliminar </button></td>
          </tr>
        </div>
      );
    });

    const totalList=this.props.cart.reduce((sum, product) => sum + product.price, 0)

    return (
      <div>
        <div style={{backgroundColor:'#00AEC7'}}>
          <p className="cintillo"><strong>Mi Carrito</strong> <i className="fas fa-cart-arrow-down"></i></p>
        </div>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartList}
          </tbody>
        </Table>
        <h2 style={{color:'#53565a'}}><strong>Total</strong></h2>
        <div>
          <h3 style={{ color: "#53565a"}}>$ <span style={{ color: "#53565a" ,fontSize:22}}><strong>{totalList}</strong></span> </h3>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: item => dispatch(removeFromCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
