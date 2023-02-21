import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import styles from "./Products.module.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };
  }
  componentDidMount() {
    console.log(this.props)
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => this.setState({ product: res.data }));
  }
  render() {
    return (
      <div className={styles.container}>
        {this.state.product.length ? (
          this.state.product.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              name={product.title}
              price={`${Math.round(product.price)}$`}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }
}

export default Products;
