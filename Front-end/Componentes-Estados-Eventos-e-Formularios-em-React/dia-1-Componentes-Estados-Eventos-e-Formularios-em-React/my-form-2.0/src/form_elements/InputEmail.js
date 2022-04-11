import React from "react";

class InputEmail extends React.Component {
  render() {
    const { handleChange, value } = this.props;
        
    let error = undefined;
    if(value.length > 50) error = '* O campo "Email" excedeu o numero de caracteres permitidos';
    
    return (
      <label>
        Email:
        <input
          name="inputEmail"
          type="email"
          onChange={handleChange}
          value={value}
          required
        ></input>
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default InputEmail;