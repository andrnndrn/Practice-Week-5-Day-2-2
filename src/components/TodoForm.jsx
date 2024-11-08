import React, { useContext, useState } from "react";
import { LanguageContext } from "../App";
import PropTypes from "prop-types";

function TodoForm(props) {
  const { handleChange, handleSubmit, newTodo } = props;
  const {language} = useContext(LanguageContext)

  return (
    <form className="d-flex mb-3">
      <input
        onChange={handleChange}
        value={newTodo}
        type="text"
        className="form-control me-2"
        placeholder={language === "en" ? "Add Todo..." : "Tambah Todo..."}
      />
      <button onClick={handleSubmit} type="submit" className="btn btn-primary">
      {language === "en" ? "Add" : "Tambah"}
      </button>
    </form>
  );
}

TodoForm.prototypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTodo: PropTypes.string.isRequired,
};

export default TodoForm;
