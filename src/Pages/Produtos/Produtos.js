import React from 'react';
import '../../componentes/Header';
import Header from '../../componentes/Header';
import "../../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from '../../componentes/Footer';
import ProdutosComponente from '../../componentes/Products';

function Produtos() {
    return(

        <div>
     
      <div className='mt-20 mb-20'><ProdutosComponente /></div>
     
      
      
      
        </div>
        ) 
}

export default Produtos;
