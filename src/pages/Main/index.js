import React, { Component } from 'react';
import api from '../../services/api'

import './styles.css';
import logo from '../../assets/logo.svg';

export default class Main extends Component {

  state ={
    newBox: '',

  };
  
  // funcao/metodo responsavel por capturar o submit do form
  handleSubmit = async (e) => {
    // previne que o browser atualize a pagina após o submit
    e.preventDefault();
    // captura response da api com o retono de criacao do box
    const response = await api.post('boxes',{
      title: this.state.newBox
    });
    // encaminha para outro componente com id da box criada
    this.props.history.push(`/box/${response.data._id}`)
    
  

  }
  // metodo captura evento de onChenge no input
  handleInputChange = (e) =>{
    this.setState({newBox: e.target.value})
  }
  // contem o que é renderizado na pagina
  render() {
    return (
       <div id="main-container">
         <form onSubmit={this.handleSubmit}>
           <img src={logo}/> 
           <input
             placeholder = "Criar um box"
             value={this.state.newBox}
             onChange={this.handleInputChange}
           /> 
           <button type="submit" >Criar box</button>         
         </form>
       </div>
     
    );
  }
}
