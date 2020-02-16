import products from './gen/products';
import formatPrice from '../utils/formatPrice';

const storeConfig = {
  modules: {},
  getters: {
    getProducts: state => state.products,
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id)
    },
    search: (state) => (search) => {
      return state.products.find(product => product.title.toLowerCase().search(search.toLowerCase()) > 0)
    },
    getCart: state => {
      return state.cart.map(item => {
        const product = state.products.find(product => product.id === item[0]);

        return {
          product,
          totalPrice: formatPrice(product.price * item[1]),
          singlePrice: formatPrice(product.price),
          amount: item[1]
        }
      });
    },
    getCartAmount: state => state.cart.length,
    getTotalCartAmount: state => state.cart.map(item => {
      const product = state.products.find(product => product.id === item[0]);

      return product.price * item[1];
    }).reduce((prev, current) => prev + current, 0)
  },
  state: {
    products,
    cart: []
  },
  mutations: {
    addToCart(state, payload) {
      const { id, amount } = payload;

      let productFound = false;

      state.cart = state.cart.map(item => {
        if (item[0] === id) {
          productFound = true;
          return [item[0], item[1] + amount]
        } else {
          return [item[0], item[1]]
        }
      });

      if (!productFound) {
        state.cart.push([id, amount]);
      }
    }
  },
};

export default storeConfig;