/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import react from "react";

function Cadastro(){
    return(   
    <div class="flex justify-center">    
    <div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow d sm:px-6 md:px-8 lg:px-10">
    <div class="self-center mb-2 text-xl font-light text-gray-700 sm:text-2xl d">
        Realize seu cadastro
    </div>
    <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
        Já possui uma conta ?
        <a href="/login" class="text-sm text-purple-300 underline hover:text-purple-700">
            Login
        </a>
    </span>
    <div class="p-6 mt-8">
        <form action="#">
            <div class="flex flex-col mb-2">
                <div class=" relative ">
                    <input type="text" id="cadastro-usuario" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" name="Usuário" placeholder="Usuário"/>
                    </div>
                </div>
                <div class="flex gap-4 mb-2">
                    <div class=" relative ">
                        <input type="text" id="cadastro-nome" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" name="Nome" placeholder="Nome"/>
                        </div>
                        <div class=" relative ">
                            <input type="text" id="cadastro-sobrenome" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" name="Sobrenome" placeholder="Sobrenome"/>
                            </div>
                        </div>
                        <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="text" id="cadastro-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" placeholder="E-mail"/>
                                </div>
                            </div>
                            <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="password" id="cadastro-senha" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" placeholder="Senha"/>
                                </div>
                            </div>
                            <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="date" id="cadastro-nascimento" class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 decoration-gray-700 focus:ring-purple-300 focus:border-transparent" name="Nascimento" placeholder="Data de Nascimento"/>
                                </div>
                            </div>
                            <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="number" id="cadastro-cpf" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent" name="CPF" placeholder="CPF"/>
                                </div>
                            </div>
                            
                        
        
                           
                            <div class="flex w-full my-4">
                                <button type="submit" class="py-2 px-4  bg-purple-300 hover:bg-purple-400 focus:ring-purple-400 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Cadastre-se!
                                </button>
                            </div>
                        </form>
                        <div class="flex items-center justify-center mt-6">
                            <div>
                                <label class="flex items-center space-x-3 mb-3">
                                    <input type="checkbox" name="checked-demo" class="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-300 checked:border-transparent focus:outline-none"/>
                                        <span class="text-gray-400 font-normal text-sm">
                                            Gostaria de assinar a nossa Newsletter?
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
    )
}export default Cadastro;