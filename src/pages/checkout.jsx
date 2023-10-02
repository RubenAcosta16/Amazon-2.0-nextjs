import Image from "next/image";
import Header from "../components/header";
import { useSelector } from "react-redux";
import { selectItems,selectTotal } from "../slices/basketSlice";

import CheckoutProduct from "../components/CheckoutProduct";
import { useSession } from "next-auth/react";

export default function checkout() {
  const items = useSelector(selectItems);
  const total=useSelector(selectTotal)

  const session=useSession()
  return (
    <div className="">
      <Header></Header>

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <img
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : "Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct key={i} product={item}></CheckoutProduct>
            ))}
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal {items.length} items: <span className="font-bold">${total}</span>
              </h2>

              <button
              disabled={!session}
              className={`button mt-2 ${!session&&"from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"}`}>
                {!session?"Sign in to checkout":"Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
