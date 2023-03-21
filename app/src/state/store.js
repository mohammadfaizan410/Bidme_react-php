import { createStore, action } from 'easy-peasy';
  
  export const store = createStore({
      userStore: localStorage.getItem("current_user") ? JSON.parse(localStorage.getItem("current_user")) : {},  
      productList: [],
        setUserStore: action((state, payload) => {
        state.userStore = {
            id: payload.id,
            name: payload.name,
            surname: payload.surname,
            email : payload.email
        };    
    }),
      setProductList: action((state, payload) => {
          state.productList = payload;
      }),
  })