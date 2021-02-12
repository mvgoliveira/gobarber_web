import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default function percistRecucer (reducers) {
   const persistedReducer = persistReducer({
      key: 'gobarber',
      storage,
      whitelist: ['auth', 'user']
   }, 
      reducers
   );

   return persistedReducer;
}