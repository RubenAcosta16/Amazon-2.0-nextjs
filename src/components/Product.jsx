import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const MaxRating = 5;
const MinRating = 1;

function Product({ product }) {
  const { id, title, price, description, category, image } = product;

  const rating = Math.floor(
    Math.random() * (MaxRating - MinRating + 1) + MinRating
  );

  const hasPrime = Math.random() < 0.5;
  return (
    <div className="relative flex flex-col m-5 bg-white z-20 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      {/* <p>{price}</p> */}
      <div className="min-h-[200px] flex items-center">
        <Image src={image} height={200} width={200} objectFit="contain"></Image>
      </div>

      <h4 className="my-5">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500"></StarIcon>
          ))}
      </div>

      <p className="text- my-2 line-clamp-2">{description}</p>

      <div className="m-2 ">
        {/* <Currency quantity={price} currency="GBP"></Currency> */}${price}
      </div>

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

      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
