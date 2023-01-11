import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'

// reducers
import { metaReducer } from 'entities/meta'

// api


const persistConfig = {
  key: 'root',
  storage: storageSession,
  blacklist: []
}

const rootReducer = combineReducers({
  meta: metaReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat()
})

export type AppStoreType = typeof store

export const persistor = persistStore(store)