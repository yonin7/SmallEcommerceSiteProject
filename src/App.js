import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Homepage from './components/Homepage';

import './App.css';

const App = () => {
  const [cartCounter, setCartCounter] = useState(0);
  const [cartArr, setCartArr] = useState([]);

  const addToCart = (product) => {
    setCartCounter(cartCounter + 1);

    let added = false;
    cartArr.forEach((cartProduct, index) => {
      if (cartProduct.product.id === product.id) {
        const newArr = [...cartArr];
        newArr[index].quantity += 1;
        setCartArr(newArr);
        added = true;
      }
    });

    if (!added) {
      setCartArr([...cartArr, { product, quantity: 1 }]);
    }
  };
  const newQuantity = (product, sign) => {
    const newArr = [...cartArr];
    setCartCounter(cartCounter + 1);
    newArr.forEach((cartProduct, index) => {
      if (cartProduct.product.id === product.product.id) {
        if (newArr[index].quantity + sign < 0) handleDelete(product.product.id);
        else {
          newArr[index].quantity += sign;
          setCartArr(newArr);
        }
      }
    });
  };
  const handleDelete = (id) => {
    const newArr = [...cartArr];

    let quantity = 0;
    newArr.forEach((cartProduct) => {
      if (cartProduct.product.id === id)
        return (quantity = cartProduct.quantity);
    });
    const newList = cartArr.filter((card) => card.product.id !== id);
    setCartArr(newList);
    setCartCounter(cartCounter - quantity);
  };

  return (
    <div className="App">
      <Router>
        <Navbar cartCounter={cartCounter} />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/products" exact>
            <Products addToCart={addToCart} />
          </Route>
          <Route path="/cart" exact>
            <Cart
              cartList={cartArr}
              newQuantity={newQuantity}
              handleDelete={handleDelete}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

// ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
