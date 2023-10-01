import {configureStore} from '@reduxjs/toolkit';
import baseApi from './features/api/baseApi';
// import baseApi from './features/api/baseApi';
// import baseApi from './features/bh urp9zapi/baseApi';



const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    // [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  // middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;