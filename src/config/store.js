import products from './gen/products';

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
        return {
          product: state.products.find(product => product.id === item[0]),
          amount: item[1]
        }
      });
    },
    getCartAmount: state => state.cart.length
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
          return [item[0], amount]
        }
      });

      if (!productFound) {
        state.cart.push([id, amount]);
      }
    }
  },
};

export default storeConfig;