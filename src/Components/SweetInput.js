import React, { useState } from "react";

const SweetInput = props => {
  const {
    placeholder = "",
    handleSubmit,
    cleanAfter,
    hotAction,
    handleChange,
    hotValue,
    labelText
  } = props;

  const [inputValue, setInputValue] = useState("");
  const handleInput = ({ target: { value } }) => {
    setInputValue(value);
  };
  const handleClick = ev => ev.target.focus();
  const preventDefault = ev => {
    ev.preventDefault();
    handleSubmit && handleSubmit(inputValue);
    setInputValue(cleanAfter ? "" : inputValue);
  };
  return (
    <form
      onSubmit={preventDefault}
      style={{ position: "relative" }}
      className="col-12"
    >
      <div class="input-group">
        {hotAction ? (
          <input
            type="text"
            onChange={handleChange}
            value={hotValue}
            placeholder={placeholder}
            onClick={handleClick}
            class="form-control"
            aria-label={labelText}
          />
        ) : (
          <input
            Type="text"
            onChange={handleInput}
            value={inputValue}
            placeholder={placeholder}
            onClick={handleClick}
            class="form-control"
            aria-label={labelText}
          />
        )}
      </div>
    </form>
  );
};

export default SweetInput;
