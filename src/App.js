import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Orders from "./components/Orders";
import OrderList from "./components/OrderList";
import Categories from "./components/Categories";
import Goods from "./components/Goods";
import SearchBar from "./components/SearchBar";

import { goods as goodsData } from "./data";

export default function App() {
  const [category, setCategory] = useState("appetizer");
  const [carts, setCarts] = useState([]);
  const [search, setSearch] = useState("");
  const [goods, setGoods] = useState(
    goodsData.filter((e) => e.category === category)
  );

  function selectGoodHandler(good) {
    const existGood = carts.filter((cart) => cart.good === good);
    if (existGood.length) {
      let ncarts = carts;
      ncarts.map((ct, i) => {
        if (ct.good === good) {
          ct.count += good.set;
        }
        return ct;
      });
      setCarts([...ncarts]);
    } else {
      setCarts([...carts, { good: good, count: good.set }]);
    }
  }

  function selectCategoryHandler(category) {
    setCategory(category);
    setGoods(goodsData.filter((e) => e.category === category));
  }

  return (
    <div className="App">
      <Router>
        <div>
          <Header />

          <Switch>
            <Route exact path="/">
              <Redirect to="/current" />
            </Route>
            <Route path="/orders">
              <Orders />
            </Route>
            <Route path="/current">
              <Container fluid className="pt-4">
                <Row>
                  <Col xs={12} md={8} className="border-right">
                    <Row>
                      <Col xs={12}>
                        <SearchBar search={search} setSearch={setSearch} />
                      </Col>
                      <Col xs={12} md={3}>
                        <Categories
                          active={category}
                          selectCategoryHandler={selectCategoryHandler}
                        />
                      </Col>
                      <Col xs={12} md={9}>
                        <Goods
                          goods={goods}
                          selectGoodHandler={selectGoodHandler}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={4}>
                    <OrderList carts={carts} setCarts={setCarts} />
                  </Col>
                </Row>
              </Container>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
