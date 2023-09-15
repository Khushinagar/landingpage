import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../src/routerReducer";
const store =configureStore({
   reducer:{
    root:rootReducer,
   }
});


export default store