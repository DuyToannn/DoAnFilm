import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../feafures/userSlice';

export default configureStore({
    reducer: {
        user: userReducer
    }
})