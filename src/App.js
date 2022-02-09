import './componentes/Header'
import Header from './componentes/Header';
import Slider from './componentes/Slider/Slider';
import { TruckIcon } from '@heroicons/react/outline';
import { CurrencyDollarIcon } from '@heroicons/react/outline';
import { RefreshIcon } from '@heroicons/react/outline';
import HeaderIcon from "./componentes/HeaderIcon";
import "./App.css";
import React from "react";
import Routes from './routes';


import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Cadastro from './Pages/Cadastro/Cadastro';
import Inicial from './Pages/Inicial/Inicial';
import Login from './Pages/Login/Login';
import Historia from './Pages/Historia/Historia';
import Produtos from './Pages/Produtos/Produtos';
import Produto from './componentes/Produto';

import Footer from './componentes/Footer';
import Carrinho from './Pages/Carrinho/Carrinho1';
import Checkout from './Pages/Checkout/Checkout';




function App() {
  return (
    <div>
<>
<div className='mt-0 flex'><Header /></div>

        
            <Switch>
                <Route exact path="/" component={Inicial} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/cadastro" component={Cadastro} />
                <Route exact path="/historia" component={Historia} />
                <Route exact path="/produtos" component={Produtos} />
                <Route exact path="/produto/:id" component={Produto} />
                <Route exact path="/carrinho" component={Carrinho} />
                <Route path="/checkout" component={Checkout} />
            </Switch>        
        
        <Footer/>
        </>
 
    </div>
  )
}

export default App
