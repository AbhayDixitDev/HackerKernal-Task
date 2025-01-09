import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "TaskProductData",
  version: 1,
  storage,
};

import productSlice from "./Redux/productSlice";

const persistedReducer = persistReducer(persistConfig, productSlice);

const store = configureStore({
  reducer: {
    product: persistedReducer,
  },
});

export const persistor = persistStore(store);

export default store;