import {configureStore} from '@reduxjs/toolkit'
import postReducer from './Slices/postSlices'

 


const rootReducer ={

    post: postReducer,
}



const store = configureStore({reducer: rootReducer})
export default store