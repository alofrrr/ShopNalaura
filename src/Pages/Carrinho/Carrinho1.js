import React from 'react';
import {Carrinho, Global } from '../../componentes/Carrinho';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';


function Carrinho1() {
  var desconto = 0;
  var final = 0;
  
  return (
    <>
      <div className="grid  grid-cols-1 sm:grid-cols-2">

<div>
        <div className='ml-7 w-[45vw] mt-36 mb-10 flex flex-col justify-center pl-10 pr-10 pt-10 pb-10 bg-purple-300 rounded-lg shadow-2xl '>
          <div className="flex mb-10 self-center text-white text-xl font-semibold">
            <h3>Carrinho de Compras</h3>
          </div>
          <Carrinho />
        </div>
</div>

<div>

        <div className="w-[45vw] ml-10 mb-10 mt-36 flex flex-col justify-center pl-10 pr-10 pt-10 pb-10 bg-purple-300 rounded-lg shadow-2xl ">
            <div className="flex mb-10 self-center text-white text-xl font-semibold">
            <h3>Finalizar o Pedido</h3>
            </div>
            <div className="mb-10 text-white text-xl font-semibold">
          <div className=" text-white text-xl font-semibold">
              <h2>Subtotal</h2>
          </div>

            <div className="ml-[25vw] text-white text-xl font-semibold">
            
            
            <div className="grid grid-cols-2">
              <div className='flex flex-col'>
                <h3>Produtos:</h3>
              </div>

              <div className='flex flex-col'> 
                <h3>${Global.total1.toFixed(2)}</h3>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className='flex flex-col'>
                <h3>Desconto:</h3>
              </div>

              <div className='hidden'>
                {desconto = 0.15*Global.total1};
                {final = 0.85*Global.total1}
              </div>

              <div className='flex flex-col'> 
                ${desconto.toFixed(2)}
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className='flex flex-col'>
                <h3>Frete:</h3>
              </div>

              <div className='flex flex-col'> 
                <h3>GRÁTIS</h3>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div className='flex flex-col'>
                <h3>Total:</h3>
              </div>

              <div className='flex flex-col'> 
                <h3>${final.toFixed(2)}</h3>
              </div>
            </div>

            </div>

            </div>


            <div className=" text-white text-xl font-semibold">
            <h2>Endereço de entrega</h2>
            </div>
          <div className="mb-10 ml-[10vw] text-white text-xl font-semibold">
            <form>
            <div class=" relative ">
                <input type="text" id="destinatario" class="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" name="destinatario" placeholder="Destinatário" />
              </div>
              <div class=" relative ">
                <input type="text" id="endereço1" class="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" name="endereço1" placeholder="Endereço" />
              </div>
              <div class=" relative ">
                <input type="text" id="endereço2" class="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" name="endereço1" placeholder="Complemento" />
              </div>
              <div class=" relative ">
                <input type="text" id="cidade-estado" class="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" name="cidade-estado" placeholder="Cidade - Estado" />
              </div>
              <div class=" relative ">
                <input type="text" id="cep" class="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" name="cep" placeholder="CEP" />
              </div>
            </form>
            </div>

            <div className=" text-white text-xl font-semibold">
            <h2>Método de Pagamento</h2>
            </div>

            <div className="mb-10 ml-[10vw] text-white text-xl font-semibold">
            <select id="metodopagamento" class=" mt-2 text-gray-700 block w-[30vw] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
              <option value="credito">
                Cartão de Crédito
              </option>
              <option value="boleto">
                Boleto Bancário
              </option>
              <option value="pix">
                PIX
              </option>
              <option value="paypal">
                PayPal
              </option>
              <option value="mercadopago">
                Mercado Pago
              </option>
              <option value="picpay">
                PicPay
              </option>
            </select>
            <form>
              <div class=" relative ">
                <input type="text" id="numerocartao" class="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" name="numerocartao" placeholder="Número do cartão" />
              </div>
              <div class=" relative ">
                <input type="text" id="nomecartao" class="mt-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" name="nomecartao" placeholder="Nome no cartão" />
              </div>
              <div class="flex gap-4 mb-2">
                <select id="mes" class="relative text-gray-700 block w-80 mt-2 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                  <option value="jan">
                    01
                  </option>
                  <option value="fev">
                    02
                  </option>
                  <option value="mar">
                    03
                  </option>
                  <option value="abr">
                    04
                  </option>
                  <option value="mai">
                    05
                  </option>
                  <option value="jun">
                    06
                  </option>
                  <option value="jul">
                    07
                  </option>
                  <option value="ago">
                    08
                  </option>
                  <option value="set">
                    09
                  </option>
                  <option value="out">
                    10
                  </option>
                  <option value="nov">
                    11
                  </option>
                  <option value="dez">
                    12
                  </option>
                </select>
                <select id="mes" class="py-2 relative text-gray-700 block w-80 mt-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                  <option value="2022">
                    2022
                  </option>
                  <option value="2023">
                    2023
                  </option>
                  <option value="2024">
                    2024
                  </option>
                  <option value="2025">
                    2025
                  </option>
                  <option value="2026">
                    2026
                  </option>
                  <option value="2027">
                    2027
                  </option>
                  <option value="2028">
                    2028
                  </option>
                  <option value="2029">
                    2029
                  </option>
                  <option value="2030">
                    2030
                  </option>
                  <option value="2031">
                    2031
                  </option>
                  <option value="2032">
                    2032
                  </option>
                </select>
              </div>
              <div class=" relative ">
                <input type="text" id="cvv" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" name="cvv" placeholder="CVV" />
              </div>
            </form>
          </div>
        
          <NavLink className="flex" to="/checkout">
              
        <button type="button" class="py-2 px-4  bg-white hover:bg-purple-400 focus:ring-purple-400 hover:text-white focus:ring-offset-indigo-200 text-purple-300 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
          Finalizar Pedido
        </button>
        </NavLink>

        </div>
      </div>
      </div>

    </>
  )
}

export default Carrinho1;
