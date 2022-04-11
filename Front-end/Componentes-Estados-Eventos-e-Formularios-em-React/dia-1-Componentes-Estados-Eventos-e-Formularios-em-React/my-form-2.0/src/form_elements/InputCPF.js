import React from "react";

class InputCPF extends React.Component {
  render() {
    const { handleChange, value } = this.props;
        
    let error = undefined;
    if(value.length > 11) error = '* O campo "CPF" excedeu o numero de caracteres permitidos';
    
    return (
      <label>
        CPF:
        <input
          name="inputCPF"
          type="text"
          onChange={handleChange}
          value={value}
          required
        ></input>
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default InputCPF;