import React, { Component } from "react";
import axios from "axios";
import styles from "./Product.module.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productTitle: "",
      productImage: "",
      productPrice: "",
      productDescription: "",
      prdouctCategory: "",
      productRate: "",
      productRateCount: "",
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      this.setState({
        productTitle: res.data.title,
        productImage: res.data.image,
        productPrice: res.data.price,
        productDescription: res.data.description,
        prdouctCategory: res.data.category,
        productRate: res.data.rating.rate,
        productRateCount: res.data.rating.count,
      });
    });
  }
  render() {
    return (
      <div className={styles.container}>
        <h1>{this.state.productTitle}</h1>
        <p>{this.state.prdouctCategory}</p>
        <div style={{display: "flex", flexDirection: 'row', flexWrap: "wrap"}}>
          <img
            src={this.state.productImage}
            alt="product avatar"
            style={{ width: "200px" }}
          />
          <p>{this.state.productDescription}</p>
          <h2>{this.state.productPrice}$</h2>
        </div>
      </div>
    );
  }
}

export default Product;
