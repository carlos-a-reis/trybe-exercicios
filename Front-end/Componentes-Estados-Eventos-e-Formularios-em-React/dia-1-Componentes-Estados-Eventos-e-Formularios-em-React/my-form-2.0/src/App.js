import React from 'react';
import InputName from './form_elements/InputName';
import InputEmail from './form_elements/InputEmail';
import InputCPF from './form_elements/InputCPF';
import InputAdress from './form_elements/InputAdress';
import InputCity from './form_elements/InputCity';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.removeInputValue = this.removeInputValue.bind(this);

    this.state = {
      inputName: '',
      inputEmail: '',
      inputCPF: '',
      inputAdress: '',
      inputCity: '',
    }
  }
  
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  removeInputValue(name) {
    this.setState({
      [name]: '',
    })
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Cadastro de Currículo</legend>
          <InputName value={this.state.inputName} handleChange={this.handleChange}/>
          <InputEmail value={this.state.inputEmail} handleChange={this.handleChange}/>
          <InputCPF value={this.state.inputCPF} handleChange={this.handleChange}/>
          <InputAdress value={this.state.inputAdress} handleChange={this.handleChange}/>
          <InputCity value={this.state.inputCity} handleChange={this.handleChange} removeInputValue={this.removeInputValue}/>
        </fieldset>
      </form>
    );
  }
}

export default App;
