import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./reducers/authReducer";
import { bookmarkReducer } from "./reducers/bookmarkReducer";
import { caregiverReducer } from "./actions/caregiverReducer";

const bookmarkPersistConfig = {
  key: "bookmarks",
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  bookmarks: persistReducer(bookmarkPersistConfig, bookmarkReducer),
  caregivers: caregiverReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
