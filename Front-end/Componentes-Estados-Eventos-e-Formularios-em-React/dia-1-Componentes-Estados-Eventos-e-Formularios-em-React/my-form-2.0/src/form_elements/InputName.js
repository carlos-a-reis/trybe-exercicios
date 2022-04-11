import React from "react";

class InputName extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    
    let error = undefined;
    if(value.length > 40) error = '* O campo "Nome" excedeu o numero de caracteres permitidos';

    return (
      <label>
        Nome:
        <input
          name="inputName"
          type="text"
          onChange={handleChange}
          value={value.toUpperCase()}
          required
        ></input>
        <span>{error ? error : ''}</span>
      </label>
    )
  }
}

export default InputName;