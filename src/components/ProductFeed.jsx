import Product from "../components/Product";

function ProductFeed({ products }) {
  return (
    // dense es que use todo el espacio
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:md:grid-cols-4 md:-mt-52 mx-auto">
      {products.slice(0, 4).map((product) => (
        <Product key={product.id} product={product}></Product>
        // <p>{product.title}</p>
      ))}

      {/* {products.map((product) => (
        <Product key={product.id} product={product}></Product>
        // <p>{product.title}</p>
      ))} */}

      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => (
          <Product key={product.id} product={product}></Product>
          // <p>{product.title}</p>
        ))}
      </div>

      {products.slice(5, products.length).map((product) => (
          <Product key={product.id} product={product}></Product>
          // <p>{product.title}</p>
        ))}
    </div>
  );
}

export default ProductFeed;
