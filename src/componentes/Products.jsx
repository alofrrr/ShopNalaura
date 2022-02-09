import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");

            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;
            }

        }

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div>
                    <Skeleton height={350} />
                </div>
                <div>
                    <Skeleton height={350} />
                </div> <div>
                    <Skeleton height={350} />
                </div> <div>
                    <Skeleton height={350} />
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const Cproducts = () => {
        return (
            <>
                <div className='flex space-x-3 justify-center my-8 font-marca text-lg'>
                   <div className='border-purple-300 text-gray-600 border-2 border-solid rounded w-40 h-8 text-center items-center'><button onClick={() => setFilter(data)}>Todos os Produtos</button></div> 
                    <button className='border-purple-300 text-gray-600 border-2 border-solid rounded w-40 h-8 text-center items-center' onClick={() => filterProduct("men's clothing")}>Masculino</button>
                    <button className='border-purple-300 text-gray-600 border-2 border-solid rounded w-40 h-8 text-center items-center' onClick={() => filterProduct("women's clothing")}>Feminino</button>
                    <button className='border-purple-300 text-gray-600 border-2 border-solid rounded w-40 h-8 text-center items-center' onClick={() => filterProduct("jewelery")}>Joalheria</button>
                    <button className='border-purple-300 text-gray-600 border-2 border-solid rounded w-40 h-8 text-center items-center' onClick={() => filterProduct("electronics")}>Eletronicos</button>
                    <hr />
                </div>
            </>
        )

    }

    const ShowProducts = () => {
        return (
            <>
                {filter.map((product) => {
                    return (

                        <div className='flex justify-center items-center'>
                            <div key={product.id}>
                                <div className='flex-shrink-0 mx-1 mb-6 relative overflow-hidden bg-white rounded-lg max-w-[280px] min-w-[280px] shadow-lg max-h-[320px] min-h-[320px]'>

                                    <div class="relative px-10 flex items-center justify-center ">
                                        <div class=" absolute w-28">
                                                <img className='object-fill h-36 w-36 justify-center mb-28' src={product.image} />
                                            </div>
                                            <div className="relative px-6 mt-48">
                                                <div className=" justify-center items-center text-center">
                                                    <span className=" font-header text-xl text-center">
                                                        <div className="">{product.title.substring(0, 17)}</div>
                                                    </span>


                                                    <div class="bg-purple-300 rounded-md text-white text-base font-bold py-2 flex justify-center text-center w-48 mb-2 mt-2">${product.price}</div>
                                                    <div className='h-1 w-2'></div>

                                                    <div >
                                                        <NavLink className="px-10 py-2 text-xl font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-verde rounded-md hover:bg-verde-escuro focus:outline-none focus:ring focus:ring-white focus:ring-opacity-80 focus:text-white font-header hover:text-white" to={`/produto/${product.id}`}>
                                                            Ver produto
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                              
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

    return (
        <div className='mt-36'>

            <div className='text-center my-5 font-header text-3xl text-gray-600 mt-10'><h1>Produtos</h1></div>
            <hr />

            <Cproducts />
            <div className='mx-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {loading ? <loading /> : <ShowProducts />}
            </div>

        </div>
    )
}

export default Products;
