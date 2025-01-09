

import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const productSlice = createSlice(
    {
        name:"products",
        initialState:{
            products:[],
            search:[]
        },
        reducers:{
            addProduct : (state,action)=>{
                console.log(action.payload)
                state.products.push(action.payload)
                message.success("Product added successfully")
            },
            searchProduct : (state,action)=>{
                if(action.payload.length > 0){
                    state.search = state.products.filter((item)=>{
                        return item.name.toLowerCase().includes(action.payload.toLowerCase())
                    })
                }
                else{
                    state.search = []
                }
            },
            deleteProduct : (state,action)=>{
                state.products = state.products.filter((item)=>{
                    return item.id !== action.payload
                })
                message.success("Product deleted successfully")
            }
        }
    }
)

export const {addProduct,searchProduct,deleteProduct} = productSlice.actions

export default productSlice.reducer