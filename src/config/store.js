import products from './gen/products';

const storeConfig = {
  modules: {},
  getters: {
    getProducts: state => state.products,
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id)
    }
  },
  state: {
    products,
  },
  mutations: {},
  actions: {},
};

export default storeConfig;