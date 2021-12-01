import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Auth/userSlice";
import counterReducer from '../features/Counter_DemoRedux/counterSlice';
import cartReducer from '../features/Cart/cartSlice.js';
const rootReducer = {
    counter : counterReducer,
    user: userReducer,
    cart: cartReducer,
}

const store = configureStore({
    reducer: rootReducer,
    
});

export default store;