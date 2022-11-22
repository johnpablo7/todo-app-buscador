import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

export const NewTodoPage = () => {
  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;

  return (
    <TodoForm
      label='Escribe tu nuevo TODO'
      submitText='Añadir'
      submitEvent={(text) => addTodo(text)}
    />
  );
};
