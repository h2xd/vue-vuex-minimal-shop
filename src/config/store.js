import products from './gen/products';

const storeConfig = {
  modules: {},
  getters: {
    getProducts: state => state.products
  },
  state: {
    products,
  },
  mutations: {},
  actions: {},
};

export default storeConfig;