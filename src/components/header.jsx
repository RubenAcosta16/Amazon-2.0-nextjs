import Image from "next/image";
import {useRouter} from 'next/router'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import { signIn, signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

// https://console.cloud.google.com/apis/credentials?hl=es-419&project=amzn-2-nextjs-c69b7
// para cambiar cosa en cloud con la autenticacion
const Header = () => {

  const router=useRouter()
  const { data: session } = useSession();

  // items in the basket
  const items=useSelector(selectItems)

  // session.user.
  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 gap-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          {/* better use Image, it is more faster and using format .wepg */}
          <Image
          onClick={()=>router.push("/")}
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          ></Image>
        </div>

        {/* search bar */}
        <div className="bg-yellow-400 hover:bg-yellow-500 sm:flex items-center h-10 rounded-md flex-grow cursor-pointer">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4"></SearchIcon>
        </div>
        {/* right */}

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link" onClick={!session ? signIn : signOut}>
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p className="font-extrabold md:text-sm">Hello Account & Lists</p>
          </div>

          <div className="link hidden md:inline">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="link relative flex items-center"           onClick={()=>router.push("/checkout")}>
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-medium">
              {items.length}
            </span>

            <ShoppingCartIcon className="h-10"></ShoppingCartIcon>
            <p className="font-extrabold md:text-sm hidden md:inline mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>

      <div className="flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1"></MenuIcon>
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Ruben Store</p>
        <p className="link">Today's Deals</p>

        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
