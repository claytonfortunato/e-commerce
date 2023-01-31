import React, { useState } from "react";

import Product from "./components/Product";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <NavBar click={handleClick} />
      <Cart open={open} click={handleClick} />
      <Product />
    </div>
  );
}

export default App;
