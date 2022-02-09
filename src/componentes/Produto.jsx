import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import {NavLink} from 'react-router-dom';

const Produto = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);

        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading....
            </>
        )
    }


    const ShowProduct = () => {
        return (
            <>
            <div className='mt-40 flex mx-36 space-x-8 justify-center mb-16'>
                <div className='items-center relative w-96 h-96'>
                    <img className='object-fill h-80 w-80 justify-center items-center mb-28' src={product.image}/>
                </div>
                <div className='space-y-2'>
                <div className='text-3xl font-marca'>
                    {product.title}
                </div>
                <div className='text-base'>
                    {product.category}
                </div>
                <div className='text-lg w-[32rem]'>
                    {product.description}
                </div>
                <div className='text-xl font-semibold'>
                   $ {product.price}
                </div>
                
                <div className='space-x-3'>
                <button className="px-6 py-[5px] text-xl font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-purple-300 rounded-md hover:bg-purple-400 focus:outline-none focus:ring focus:ring-white focus:ring-opacity-80 focus:text-white font-header hover:text-white" onClick={()=>addProduct(product)}>
                        Adicionar ao Carrinho
                    </button >
                    <NavLink to="/carrinho" className="px-10 py-2 text-xl font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-purple-300 rounded-md hover:bg-purple-400 focus:outline-none focus:ring focus:ring-white focus:ring-opacity-80 focus:text-white font-header hover:text-white">
                        Ir para o carrinho
                    </NavLink>
                </div></div></div>
            </>
        )
    }


    return (
        <div>
            <div>
                <div>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Produto
