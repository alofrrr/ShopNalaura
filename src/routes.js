import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Cadastro from './Pages/Cadastro/Cadastro';
import Inicial from './Pages/Inicial/Inicial';
import Login from './Pages/Login/Login';
import Historia from './Pages/Historia/Historia';
import Produtos from './Pages/Produtos/Produtos';
import Produto from './componentes/Produto';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Carrinho from './Pages/Carrinho/Carrinho1';



function Routes(){
    return(
<>
<div className='mt-0 flex'></div>

        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Inicial} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/historia" component={Historia} />
                <Route path="/produtos" component={Produtos} />
                <Route path="/produto/:id" component={Produto} />
                <Route path="/carrinho" component={Carrinho} />
            </Switch>        
        </BrowserRouter>
        <Footer/>
        </>
    );
};

export default Routes;