import { useState } from "react";
import CategoryCard from "./components/CategoryCard";
import HeadTabs from "./components/HeadTabs";
import Navbar from "./components/Navbar";
import MyCart from "./components/MyCart";

const App = () => {
  const [openCart, setOpenCart] = useState(false);
  return (
    <main className="px-5 xl:px-0">
      <Navbar openCart={openCart} setOpenCart={setOpenCart} />
      <HeadTabs />
      <CategoryCard />
      {openCart && <MyCart />} 
    </main>
  );
};

export default App;
