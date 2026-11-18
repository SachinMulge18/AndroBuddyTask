import { useEffect } from "react";
import { useSelector } from "react-redux";

const MyCart = () => {
  const cartData = useSelector((state) => state.cart.items);
  console.log(cartData);

  function totalAmt() {
    let totalAmout = 0;
    for (let i = 0; i < cartData.length; i++) {
      totalAmout += cartData[i].price;
    }

    return totalAmout;
  }

  useEffect(() => {
    totalAmt;
  }, [cartData,]);

  return (
    <section className="w-full md:w-[70%] xl:w-[30%] h-auto pb-5 bg-blue-50 fixed top-20 right-0 z-50 shadow-lg overflow-y-auto transition-transform duration-300 ease-in-out rounded-2xl">
      <h2 className="text-lg font-semibold mb-4 bg-gray-100 text-start px-5 p-2">
        Cart
      </h2>
      {cartData.length === 0 && <h1>Cart is Empty</h1>}

      <div className="flex flex-col justify-between">
      
        <div className="border m-2 bg-white rounded-md p-2">
          {cartData.map((curr) => (
            <div key={curr.id} className="flex justify-between gap-2 my-2 border p-1 rounded-md">
               <img src={curr.image} className="w-10 h-10" /> 
              <h1>{curr.title}</h1>
              <span className="text-lg font-semibold">{curr.price}</span>
            </div>
          ))}
        </div>

        <div className="m-2 bg-white rounded-md p-2">
          <h1 className="text-lg font-semibold">Bill Summary</h1>
          <p className="flex justify-between items-center"><span className="text-gray-500">Item Total</span> <span className="font-semibold text-lg"> {totalAmt()}</span></p>
        </div>
      
      </div>

    </section>
  );
};

export default MyCart;
