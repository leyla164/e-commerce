import { createStore } from "vuex";
import users from "./modules/user";

import auth from "./modules/auth";

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    users,
    auth
  },
});

export default store;