import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";

import {addToBasket,removeFromBasket} from '../slices/basketSlice'

function CheckoutProduct({ product }) {
  const { id, title, price, description, category, image, hasPrime, rating } =
    product;

    const dispatch = useDispatch();

    function addItemToBasket(){
        // push item into redux
        dispatch(addToBasket(product))
    }

    function removeItemFromBasket(){
        // remove item from redux
        dispatch(removeFromBasket({id}))
    }

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      {/* middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>

        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <div>
                <StarIcon className="h-5 text-yellow-500"></StarIcon>
              </div>
            ))}
        </div>

        {/* creo que el line-clamp es para que solo se vean esas lineas de todo un texto largote */}
        <p className="text-xs my-2 line-clamp-3">{description}</p>

        <p>${price}</p>

        {hasPrime && (
          <div className="flex items-center space-x-2 mb-2 mt-auto">
            <img
              src="https://www.nicepng.com/png/full/115-1159983_amazon-prime-logo-prime-amazon.png"
              alt=""
              className="w-12"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* right add/remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end"> 
        <button className="button" onClick={addItemToBasket}>Add to Basket</button>
        <button className="button" onClick={removeItemFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
