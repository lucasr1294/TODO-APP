"use client";
// React
import { useState } from "react";
// Styles
import styles from "./AppContainer.module.css";
// Components
import { FilterNav } from "./filters/FilterNav";
import { Todo } from "./todoForm/interfaces";
import { TodoForm } from "./todoForm/TodoForm";
import { Todos } from "./todos/Todos";
// Constants
import { INITIAL_STATE } from "../constants";

export function AppContainer() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedPriority, setSelectedPriority] = useState(INITIAL_STATE);
  const [selectedState, setSelectedState] = useState(INITIAL_STATE);

  return (
    <div className={styles.componentContainer}>
      <h1 className={styles.title}>Todo App 🗒</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <hr className={styles.divider}></hr>
      <FilterNav
        setSelectedPriority={setSelectedPriority}
        setSelectedState={setSelectedState}
      />
      <hr className={styles.divider}></hr>
      <Todos
        todos={todos}
        setTodos={setTodos}
        selectedPriority={selectedPriority}
        selectedState={selectedState}
        setSelectedPriority={setSelectedPriority}
        setSelectedState={setSelectedState}
      />
    </div>
  );
}
