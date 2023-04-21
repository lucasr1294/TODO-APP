// React
import { useMemo } from "react";
// Interfaces
import { TodoFormProps } from "../todoForm/interfaces";
// Styles
import styles from "./Todos.module.css";
// Constants
import { INITIAL_STATE } from "../../constants";
// Icons
import TrashIcon from "@/public/icons/TrashIcon";

export function Todos({
  todos,
  setTodos,
  selectedState,
  selectedPriority,
}: TodoFormProps) {
  function getFilteredList() {
    if (selectedPriority === INITIAL_STATE && selectedState === INITIAL_STATE) {
      return todos;
    }
    if (selectedPriority === INITIAL_STATE && selectedState !== INITIAL_STATE) {
      return todos.filter((todo) => todo.state === selectedState);
    }
    if (selectedPriority !== INITIAL_STATE && selectedState === INITIAL_STATE) {
      return todos.filter((todo) => todo.priority === selectedPriority);
    }
    return todos.filter(
      (todo) =>
        todo.priority === selectedPriority && todo.state === selectedState
    );
  }

  let filteredList = useMemo(getFilteredList, [
    selectedPriority,
    todos,
    selectedState,
  ]);

  const stateEmoji = (state: string) => {
    let emoji = "🐣";
    if (state === "Terminada") {
      emoji = "✅";
    } else if (state === "En proceso") {
      emoji = "🔜";
    }
    return emoji;
  };

  const emptyMessage = () => {
    return todos.length === 0
      ? "Crea tu primera tarea ✍🏼 !"
      : " 🚨 La busqueda no ha arrojado resultados 🚨";
  };

  const handleDelete = (id: string) => {
    const filteredList = todos.filter((todo) => todo.id !== id);
    setTodos(filteredList);
  };

  const handleInputChange = (e: any, id: string) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, [name]: value };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div className={styles.container}>
      {filteredList.length > 0 ? (
        filteredList.map((todo, idx) => {
          return (
            <div key={idx} className={styles.todoContainer}>
              <div className={styles.emoji}>{stateEmoji(todo.state)}</div>
              <div className={styles.infoContainer}>
                <div className={styles.todoStates}>
                  <span>Prioridad</span>
                  <select
                    className="select"
                    name="priority"
                    value={todo.priority}
                    onChange={(e) => handleInputChange(e, todo.id)}
                  >
                    <option value="Alta">Alta</option>
                    <option value="Media">Media</option>
                    <option value="Baja">Baja</option>
                  </select>
                  <span>Estado</span>
                  <select
                    className="select"
                    name="state"
                    onChange={(e) => handleInputChange(e, todo.id)}
                  >
                    <option value="Nueva">Nueva</option>
                    <option value="En proceso">En proceso</option>
                    <option value="Terminada">Terminada</option>
                  </select>
                </div>
                <div className={styles.bodyTodo}>
                  <div>Titulo:<span  className={styles.title}>{todo.title}</span> </div>
                  <hr></hr>
                  <div>Descripcion:<br></br><span className={styles.description}> {todo.description}</span></div>
                </div>
              </div>
              <div
                className={styles.icon}
                onClick={() => handleDelete(todo.id)}
              >
                <TrashIcon />
              </div>
            </div>
          );
        })
      ) : (
        <div className={styles.emptyMessage}>{emptyMessage()}</div>
      )}
    </div>
  );
}
