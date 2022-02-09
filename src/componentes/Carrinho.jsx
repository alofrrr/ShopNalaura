import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { addCart, delCart } from '../redux/action';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

class Global {
     static total1 = 0 ;
 }

const Carrinho = () => {
 var total = 0;

 
    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    const handleDel = (item) => {
        dispatch(delCart(item))
    }

    const emptyCart = () => {
        return (
            <div className="">
                <div className="">
                <div className="text-2xl text-white mt-16 justify-center text-center items-center font-header max-w-full">
                        <h3>Que pena, seu carinho está vazio!</h3>
                    </div>
                </div>
            </div>
        )
    }


    const cartItems = (product) => {

        
        return (
            <>
                <div class="flex bg-white rounded-lg shadow max-w-[40vw] mb-10 max-h-[35vh]">
                    <div class="flex-none w-24 relative items-center">
                        <img src={product.image} alt={product.title} class="mt-10 ml-2 absolute rounded-lg inset-0 w- h-1/2 object-fill" />
                    </div>
                    <form class="flex-auto p-6">
                        <div class="flex flex-wrap">
                            <h1 class="flex-auto text-xl font-semibold dark:text-black">
                                {product.title.substring(0, 30)}
                            </h1>
                            <div class="text-xl font-semibold text-gray-500 dark:text-gray-300">
                                ${product.qty * product.price}
                            </div>
                            <div class="w-full flex-none text-sm font-medium text-gray-500 dark:text-gray-300 mt-2">
                                Em Estoque
                            </div>
                        </div>
                        <div class="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
                            <div class="space-x-2 flex">
                                <div class="flex items-center">
                                    <button type="button" onClick={() => handleDel(product)} class="w-full border-l border-t border-b text-base font-medium rounded-l-md text-black bg-white hover:bg-gray-100 px-4 py-2">
                                        Remover
                                    </button>
                                    <button type="button" onClick={() => handleAdd(product)} class="w-full border text-base font-medium text-black bg-white hover:bg-gray-100 px-4 py-2">
                                        Adicionar
                                    </button>
                                </div>
                            </div>

                            <h2 class="ml-auto hidden md:block text-sm text-gray-500">
                                Quantidade: {product.qty}
                            </h2>
                        </div>
                        <div class="flex mb-4 text-sm font-medium">
                            <button type="button" class="py-2 px-4  bg-purple-300  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg ">
                                ${product.price} 
                            </button>
                        </div>
                        
                    </form>
                </div>
                <div className='hidden'>
                {total = total + product.qty * product.price}
                {Global.total1 = total}
                </div>
            </>
        )
    }

    const buttons = () => {
        return (
            <>
                <div className="">
                    <div className="">
                    <NavLink className="flex" to="/carrinho">
               
                        <button type="button" class="py-2 px-4  bg-white hover:bg-purple-400 focus:ring-purple-400 hover:text-white focus:ring-offset-indigo-200 text-purple-300 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                 Aplicar Cupom - ANA15
                        </button>
                        </NavLink>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && buttons()}
        
        </div>
    );
}

export {Carrinho, Global};
