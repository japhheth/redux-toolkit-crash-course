import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/user';
import themeReducer from '../features/theme/theme';

const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer
    }
});

export default store