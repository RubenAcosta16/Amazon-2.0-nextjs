import Stripe from "stripe";
// secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  //   console.log(items)
  //   console.log(email)

  // const transformedItems = items.map((item) => ({
  //   description: item.description,
  //   quantity: 1,
  //   price_data: {
  //     currency: "mxn",
  //   //   el precio es en centavos, por eso *100
  //     unit_amount: item.price * 100,
  //     product_data: {
  //       name: item.title,
  //       images: [item.image],
  //     },
  //   },
  // }));

  let itemsArr=items.map((item) => ({
        price_data: {
          product_data: {
            name: item.title,
            description:item.description,
            images: [item.image],
          },
          currency: "usd",
          unit_amount: item.price * 100,
        },
        quantity: 1,
      }))

      console.log(itemsArr)
  

  //genera la compra con la informacion que le demos
  const session = await stripe.checkout.sessions.create({
    // el arreglo con los objetos que se quieren cobrar
    line_items: itemsArr,
    mode: "payment",
    success_url:`${process.env.HOST}/success`,
    cancel_url:`${process.env.HOST}/checkout`,
    metadata:{
        email,
        images:JSON.stringify(items.map((item) =>item.image))
    }
  });

  return res.json(session);
};


// const { items, email } = req.body;

//   //   console.log(items)
//   //   console.log(email)

//   const transformedItems = items.map((item) => ({
//     description: item.description,
//     quantity: 1,
//     price_data: {
//       currency: "mxn",
//     //   el precio es en centavos, por eso *100
//       unit_amount: item.price * 100,
//       product_data: {
//         name: item.title,
//         images: [item.image],
//       },
//     },
//   }));

//   //3:58:54 esta cosa bien
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     // esta cosa es del shipping rate, 1-3 dias puse
//     shipping_rates:["shr_1NxMPgGEnpkETLH3Eearutx8"],
//     shipping_address_collection:{
//         allowed_countries:["GB","US","MX"]
//     },
//     line_items:transformedItems,
//     mode:"payment",
//     success_url:`${process.env.HOST}/success`,
//     cancel_url:`${process.env.HOST}/checkout`,
//     metadata:{
//         email,
//         images:JSON.stringify(items.map((item) =>item.image))
//     }
//   });

//   res.status(200).json({id:session.id})