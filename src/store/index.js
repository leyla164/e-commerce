import { createStore } from "vuex";
import users from "./modules/user";
import brands from "./modules/brands";
import product from "./modules/product";
import categories from "./modules/categori";
import auth from "./modules/auth";
import cart from "./modules/cart";

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    users,
    auth,
    brands,
    product,
    categories,
    cart
  },
});

export default store;