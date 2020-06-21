import React, { Component, Fragment } from 'react';
import Product from './Product';
import axios from "axios";
const config = require('../config.json');

export default class Products extends Component {

  state = {
    newproduct: null,
    products: []
  }

  fetchProducts = async () => {
    // add call to AWS API Gateway to fetch object here
    // then set them in state below is exmple
//    const options = {
//  headers: {'X-Custom-Header': 'value'}
//};
//
//axios.post('/save', { a: 10 }, options);
    try {
      const res = await axios.get(`${config.api.invokeUrl}/loginuser`);
      const products = res.data;
      console.log(`srupe occurred: ${res}`);
      this.setState({ products: products });
    } catch (err) {
      console.log(`An error has occurred: ${err}`);
    }
  }

  componentDidMount = () => {
    this.fetchProducts();
  }

  render() {
    return (
      <Fragment>
        <section className="section">
          <div className="container">
            <h1>Request</h1>
            <p className="subtitle is-5">Seeker</p>
            <br />
            <div className="columns">
              <div className="column">
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-parent  is-vertical">
                    { 
                      this.state.products && this.state.products.length > 0
                      ? this.state.products.map(product => <Product name={product.productname} id={product.id} key={product.id} />)
                      : <div className="tile notification is-warning">No request to you</div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}
