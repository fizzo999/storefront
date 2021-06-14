
let initialState = {
  products: [
    {
      _id: 1000001, product: 'Oculus Quest 2 Advanced Virtual Reality Headset - 256GB', description: 'Oculus Quest 2 is our most advanced all-in-one VR system yet. Every detail has been engineered to make virtual worlds adapt to your movements, letting you explore awe-inspiring games and experiences with unparalleled freedom. No PC or console required.', price: 395.00, image: 'https://i5.walmartimages.com/asr/09f19275-814b-45b8-88cf-bffaab49aa13.939bafaea101076159c00b36664147f7.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff', category: 'electronics', inventory: 10, inCart: 0
    },
    {
      _id: 1000002, product: 'Massage Gun, 6 Speeds with The Range of 1500 to 3100 RPM', description: 'Deep Powerful Massage: The hand-held massager has a powerful motor to provide strong power. It can relieve the muscle ache after exercise, reduce muscle rigidity, reduce fatigue, effectively relax the body and make you become healthier.', price: 39.99, image: 'https://i5.walmartimages.com/asr/b909027d-7808-4a29-9aa8-59fcf4f471b9.5727995b67d230d2cc20f54b24fd6245.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff', category: 'electronics', inventory: 10, inCart: 0
    },
    {
      _id: 1000003, product: 'Star Trek: First Contact Movie Poster Black T-Shirt', description: 'Champion Men\'s Classic Jersey Script T-Shirt, Surf the Web2, X-Large', price: 28.95, image: 'https://i5.walmartimages.com/asr/9e984a7b-b390-4367-b27e-70287b88598f_1.4c794ba17811a3b9117cfcf6508a9d4e.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff', category: 'clothes', inventory: 10, inCart: 0
    },
    {
      _id: 1000004, product: 'Scooby Doo Men\'s Tie Dye Graphic Tee Shirt', description: 'Champion Boys Sweatpant Heritage Collection Slim Fit Brushed Fleece Big and Little Boys Kids', price: 11.98, image: 'https://i5.walmartimages.com/asr/9bf985ff-c195-4051-83dd-a47aede45083_1.6baa9cb1cca2dd590b663d0bb61cc593.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff', category: 'clothes', inventory: 10, inCart: 0
    },
    {
      _id: 1000005, product: 'The Alchemist, 25th Anniversary: A Fable About Following Your Dream', description: 'Paulo Coelho\'s masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago\'s journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life\'s path, and, most importantly, to follow our dreams.', price: 8.89, image: 'https://images-na.ssl-images-amazon.com/images/I/51kcX5PpaZL._SX329_BO1,204,203,200_.jpg', category: 'books', inventory: 10, inCart: 0
    },
    {
      _id: 1000006, product: 'The Red Lion: The Elixir of Eternal Life', description: 'This is definitely one of the most unusual novels I\'ve ever read (think Titus Groan or Dune) with a premise both bold and unique. It appears to be well-researched (I looked up some of the alchemy references) in a fresh and original voice which is all the more impressive considering it\'s translated from the author\'s native Hungarian. Lastly, it\'s one of those timeless pieces of literature that commands focused attention.', price: 20.99, image: 'https://images-na.ssl-images-amazon.com/images/I/51C41SCMY8L._SX310_BO1,204,203,200_.jpg', category: 'books', inventory: 10, inCart: 0
    },
  ]
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
  case 'GET PRODUCTS':
    return state.products;
  case 'SELECT CATEGORY':
    if (payload) {
      return { products: [...initialState.products.filter(eachProduct => eachProduct.category === payload && eachProduct.inventory > 0)] };
    }
    return { products: [...initialState.products.filter(eachProduct => eachProduct.inventory > 0)]};
  case 'ADD TO CART':
    return {
      products: [...state.products.map(eachProduct => {
        if ( eachProduct.product === payload.product ) {
          return ( eachProduct.inventory > 0 ) ? { ...eachProduct, inventory: eachProduct.inventory - 1} : `Sorry but we are temporarily out of ${eachProduct.product}`;
        } else {
          return eachProduct;
        }
      })],
    };
  case 'REDUCE ITEM IN CART':
    return {
      products: [...state.products.map(eachProduct => {
        if ( eachProduct.product === payload.product ) {
          return { ...eachProduct, inventory: eachProduct.inventory + 1};
        } else {
          return eachProduct;
        }
      })]};
  case 'REMOVE FROM CART':
    return {
      products: [...state.products.map(eachProduct => {
        if ( eachProduct.product === payload.product ) {
          return { ...eachProduct, inventory: eachProduct.inventory + payload.inCart};
        } else {
          return eachProduct;
        }
      })]};
  default:
    return state;
  }
};

export const getProducts = () => {
  return {
    type: 'GET PRODUCTS',
  };
};

export const getProductsByCategory = (category) => {
  return {
    type: 'SELECT CATEGORY',
    payload: category,
  };
};

export const reduceQuantity = (product) => {
  return {
    type: 'REDUCE ITEM IN CART',
    payload: product
  };
};
