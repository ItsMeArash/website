import React, { Component } from "react";
import Card from "./Card";

import styles from "./Cards.module.css";

import iphonex from "../images/iphoneX.jpg";
import iphone11 from "../images/iphone11.jpg";
import iphone12 from "../images/iphone12.jpg";
import s21 from "../images/s21.jpg";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      phoneData: [
        {id: 1, image: iphonex, name: "iPhone X", price: "700$" },
        {id: 2, image: iphone11, name: "iPhone 11", price: "750$" },
        {id: 3, image: iphone12, name: "iPhone 12", price: "800$" },
        {id: 4, image: s21, name: "Galaxy S21", price: "850$" },
      ],
    };
  }
  render() {
    return (
      <div className={styles.container}>
        {this.state.phoneData.map(phone => <Card key={phone.id} image={phone.image} name={phone.name} price={phone.price}/>)}
      </div>
    );
  }
}

export default Cards;
