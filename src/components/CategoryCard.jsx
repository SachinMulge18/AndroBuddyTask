/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../feature/cartSlice";

const CategoryCard = () => {
  const cartData = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <p className="text-gray-500 text-center p-5 text-xl font-bold">
          Loading...
        </p>
      ) : (
        <section className="container max-w-7xl mx-auto py-5">
          {/* <img
          src={cardImage}
          alt="category"
          className="w-20 h-20 rounded-full"
        /> */}
          <h1 className="text-lg font-bold">Shop by Category</h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
            {data.length > 0 ? (
              data.map((item) => (
                <div key={item.id} className="flex flex-col items-center gap-2">
                  <div className="relative  rounded-lg p-2 border border-gray-100 w-full ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-28 object-contain hover:transform hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      className=" absolute bottom-2 right-2 border border-pink-700 rounded-md  px-1 border-b-2 border-r-2 text-pink-700 font-semibold hover:text-black cursor-pointer focus:outline-none"
                      onClick={() => dispatch(addItem(item))}
                    >
                      ADD
                    </button>
                  </div>
                  <div className="flex flex-col items-start gap-1 w-full">
                    <p className="text-gray-900 text-sm font-medium text-start">
                      <p className="bg-green-800 text-white py-1 px-2 rounded-md w-fit text-start  text-md font-bold">
                        ${item.price}
                      </p>
                      {item.title}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No data available</p>
            )}
          </div>
        </section>
      )}
      {error && <p className="text-red-500">Error: {error.message}</p>}
    </>
  );
};

export default CategoryCard;
