// Interfaces
import { FilterNavProps } from "./interfaces";
// Styles
import styles from './FilterNav.module.css'

export function FilterNav({setSelectedPriority, setSelectedState}: FilterNavProps) {

  const handlePriorChange = (e: any) => {
    e.preventDefault();
    setSelectedPriority(e.target.value);
  };

  const handleStateChange = (e: any) => {
    e.preventDefault();
    setSelectedState(e.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <label className={styles.filter} >
        <span>Prioridad</span>
        <select
          className="select"
          name="priority"
          onChange={(e) => handlePriorChange(e)}
        >
            <option value="All">Todos</option>
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>
      </label>
      <label className={styles.filter}>
        <span>Estado</span>
        <select
          className="select"
          name="state"
          onChange={(e) => handleStateChange(e)}
        >
            <option value="All">Todos</option>
          <option value="Nueva">Nueva</option>
          <option value="En proceso">En proceso</option>
          <option value="Terminada">Terminada</option>
        </select>
      </label>
    </div>
  );
}
