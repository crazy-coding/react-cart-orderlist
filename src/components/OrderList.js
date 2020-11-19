import React, { useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { categories } from "./../data";
import { Row, Col, Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function OrderList(props) {
  function clearHanlder() {
    props.setCarts([]);
  }
  function swapHanlder() {}
  function countHandler(cart, plus) {
    const existCart = props.carts.filter((ct) => ct === cart);
    if (existCart[0].count + (plus ? 1 : -1) > 0) {
      let ncarts = props.carts;
      ncarts.map((ct, i) => {
        if (ct === cart) {
          ct.count += plus ? 1 : -1;
        }
        return ct;
      });
      props.setCarts([...ncarts]);
    } else {
      props.setCarts([...props.carts.filter((ct) => ct !== cart)]);
    }
  }
  let total = 0;
  props.carts.forEach((e) => {
    total += e.good.price * e.count;
  });
  return (
    <div className="bg-light p-2">
      <div className="d-flex justify-content-between">
        <label htmlFor="basic-url">Table 5 | Max</label>
        <div>
          <a href="#" onClick={clearHanlder} className="mr-2 small">
            Clear
          </a>
          <a href="#" onClick={swapHanlder} className="small">
            Swap
          </a>
        </div>
      </div>
      <InputGroup className="mb-3">
        <FormControl name="filter_name" placeholder="9876543210" />
      </InputGroup>
      <Table responsive className="text-left">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.carts.map((e, i) => (
            <tr key={i}>
              <td>{e.good.name}</td>
              <td>
                <Button
                  size="sm"
                  variant="outline-secondary"
                  className="rounded-circle count-btn"
                  onClick={() => countHandler(e, false)}
                >
                  -
                </Button>
                <span className="mx-1">{e.count}</span>
                <Button
                  size="sm"
                  variant="outline-secondary"
                  className="rounded-circle count-btn"
                  onClick={() => countHandler(e, true)}
                >
                  +
                </Button>
              </td>
              <td>$ {e.good.price * e.count}</td>
              <td>
                <a href="#">
                  <i className="fa fa-user">Edit</i>
                </a>
              </td>
            </tr>
          ))}
          <tr>
            <td>Taxes</td>
            <td></td>
            <td>$ {total * 0.1}</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <div className="mt-3">
        <a href="#" className="mr-3">
          Bulk discount
        </a>
        <a href="#">Coupon code</a>
      </div>
      <div className="mt-3">
        <Button variant="primary" className="w-50">
          Order Ticket <small>(F9)</small>
        </Button>
        <Button variant="success" className="w-50">
          Charge $ {total} <small>(F2)</small>
        </Button>
      </div>
    </div>
  );
}
