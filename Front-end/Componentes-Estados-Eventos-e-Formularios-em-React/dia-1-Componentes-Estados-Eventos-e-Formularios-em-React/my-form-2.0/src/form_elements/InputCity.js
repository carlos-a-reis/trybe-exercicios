import React from "react";

class InputCity extends React.Component {
  constructor() {
    super()

    this.checkCity = this.checkCity.bind(this);
  }
  
  checkCity(event){ 
    const { removeInputValue, value } = this.props;
    const { name } = event.target;

    if(typeof parseInt(value) === 'number' && !isNaN(parseInt(value))) removeInputValue(name); 
  }
  
  render() {
  const { handleChange, value } = this.props;
        
  let error = undefined;
  if(value.length > 28) error = '* O campo "Cidade" excedeu o numero de caracteres permitidos';

  return (
    <label>
      Cidade:
      <input
        name="inputCity"
        type="text"
        onChange={handleChange}
        onBlur={this.checkCity}
        value={value}
        required
      ></input>
      <span>{error ? error : ''}</span>
    </label>
  )
}
}

export default InputCity;