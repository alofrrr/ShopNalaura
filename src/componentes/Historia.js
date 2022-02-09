import React from 'react';


function Historia() {
  return <div>

<div class="bg-white overflow-hidden relative mx-28 mt-4 lg:mx-80">
    <div class="text-start w-1/2 py-12 px-4 lg:py-16 lg:px-8 z-20">
        <h2 class=" text-gray-800">
            <div class="text-4xl text-marca mb-4">
                História
            </div>
            <div class="text-gray-600 text-marca text-2xl mb-4">
                ShopNalaura
            </div>
        </h2>
        <p class="text-xl mt-4 text-gray-500 mb-1">
           A ShopNalaura surgiu de um processo seletivo para a empresa tech Liven. Um projeto desafiador, visto que eu ainda não havia tido contato com algumas tecnologias. O que impulsionou ainda mais minha vontade de entregar o meu melhor. Cada Div deste projeto foi minimamente pensada para que o resultado final ficasse não só funcional como um lindo site.  
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
           
        </div>
    </div>
    <img src={process.env.PUBLIC_URL + `/Imgs/Nalaura.png`} class="absolute h-full max-w-1/2 hidden lg:block right-0 top-0"/>
</div>



  </div>;
}

export default Historia;
