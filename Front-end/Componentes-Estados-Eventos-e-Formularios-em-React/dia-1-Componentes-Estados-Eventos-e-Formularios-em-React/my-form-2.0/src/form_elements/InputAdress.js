import React from "react";

class InputAdress extends React.Component {
  render() {
    const { handleChange, value } = this.props;
        
    let error = undefined;
    if(value.length > 200) error = '* O campo "Endereço" excedeu o numero de caracteres permitidos';
    
    return (
      <label>
        Endereço:
        <input
          name="inputAdress"
          type="text"
          onChange={handleChange}
          value={value.replace(/[^\w\s]/gi, '')}
          required
        ></input>
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default InputAdress;