import Head from "next/head";

import Header from "../components/header";
import Banner from '../components/Banner'
import ProductFeed from '../components/ProductFeed'

export default function Home({products}) {
  return (
    <div className="bg-gray-100 ">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* <h1>a</h1> */}
      {/* header */}
      <Header></Header>

      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner></Banner>

        {/* product feed */}
        <ProductFeed products={
          products
        }></ProductFeed>
        {/* <p>{products}</p> */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context){
  const products=await fetch("https://fakestoreapi.com/products").then((res)=>res.json())
  return {props:{
    products,
  }}
}