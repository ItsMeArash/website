import React, { Component } from "react";
import styles from "./Card.module.css";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      qty: 0,
    };
  }
  increase = () => {
    this.setState((prevState) => ({ qty: prevState.qty + 1 }));
  };
  decrease = () => {
    if (this.state.qty > 0) {
      this.setState((prevState) => ({ qty: prevState.qty - 1 }));
    }
  };
  render() {
    const { image, name, price } = this.props;
    return (
      <div className={styles.container}>
        <img src={image} alt="Phone" />
        <h3>{name}</h3>
        <p>
          {price}{" "}
          {this.state.qty
            ? `* ${this.state.qty} = ${
                Number(price.split("$")[0]) * this.state.qty
              }$`
            : ""}
        </p>
        <div className={styles.qty}>
          <span
            className={this.state.qty ? "" : styles.deactive}
            onClick={this.decrease}
          >
            ➖
          </span>
          <span className={styles.counter}>{this.state.qty}</span>
          <span onClick={this.increase}>➕</span>
        </div>
      </div>
    );
  }
}

export default Card;
