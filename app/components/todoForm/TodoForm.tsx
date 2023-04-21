"use client";
// React
import { useState } from "react";
// Styles
import styles from "./TodoForm.module.css";
// External Libs
import { v4 as uuidv4 } from "uuid";
// Interfaces
import { Todo, TodoFormProps } from "./interfaces";

const INITIAL_VALUES: Todo = {
  title: "",
  priority: "Alta",
  state: "Nueva",
  description: "",
  id: uuidv4(),
};

export function TodoForm({ todos, setTodos }: TodoFormProps) {
  const [todo, setTodo] = useState<Todo>(INITIAL_VALUES);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newValue = { ...todo, id: uuidv4() };

    const newArray = [...todos, newValue];
    setTodos(newArray);
    setTodo(INITIAL_VALUES);
  };

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setTodo({ ...todo, [name]: value });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.title}>
        <span>Titulo</span>
        <input
          required
          className="input"
          type="text"
          name="title"
          value={todo.title}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <div className={styles.states}>
        <label className={styles.title}>
          <span>Prioridad</span>
          <select
            className="select"
            name="priority"
            onChange={(e) => handleChange(e)}
            value={todo.priority}
          >
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>
        </label>
        <label className={styles.title}>
          <span>Estado</span>
          <select
            className="select"
            name="state"
            value={todo.state}
            onChange={(e) => handleChange(e)}
          >
            <option value="Nueva">Nueva</option>
            <option value="En proceso">En proceso</option>
            <option value="Terminada">Terminada</option>
          </select>
        </label>
      </div>
      <label className={styles.title}>
        <span>Descripción</span>
        <textarea
          required
          className="textarea"
          name="description"
          value={todo.description}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <button type="submit" className={styles.submitBtn}>
        Crear Tarea!
      </button>
    </form>
  );
}
