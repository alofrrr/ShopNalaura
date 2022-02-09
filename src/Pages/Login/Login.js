import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginComponente from '../../componentes/Login';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function Login() {
  const adminUser = {
    name: "ana",
    password: "123"
  }

  const [user, setUser] = useState({name:"",email:""});
  const [error, setError] = useState("");

  const FuncaoLogin = details => {
    console.log(details);

    if (details.name == adminUser.name && details.password == adminUser.password) {
      console.log("Logado");
      toast('Login efetuado com Sucesso!')
      setUser({
        name: details.name,

      })
    } else {
      toast('Usuário/Senha Inválidos!')
      console.log("deu ruim");
    }
  }

  const Logout = () =>{
    console.log("Logout");
  }
  return (
    <div class='max-h-screen max-w-full mt-40 mb-16'>
    
     
        <LoginComponente FuncaoLogin={FuncaoLogin} />




    </div>
  )
}

export default Login