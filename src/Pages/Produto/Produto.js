import React from 'react';
import '../../componentes/Header';
import Header from '../../componentes/Header';
import "../../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from '../../componentes/Footer';
import ProdutoComponente from '../../componentes/Produto';

function Produto() {
    return(

        <div>
      <div class='mt-0 flex'><Header /></div>
      <div className='mt-20 mb-20'><ProdutoComponente /></div>
      <div><Footer /></div>
      
      
      
        </div>
        ) 
}

export default Produto;
