export interface Todo {
    title: string
    priority: "Alta" | "Media"| "Baja"
    state: "Nueva" | "En proceso" | "Terminada"
    description: string
    id: string
}

export interface TodoFormProps {
    todos: Todo[]
    setTodos: Function;
    selectedState?:any;
    selectedPriority?: any; 
    setSelectedPriority?: any;
    setSelectedState?: any;
}