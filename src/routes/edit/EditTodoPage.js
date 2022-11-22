import React from "react";
import { useParams } from "react-router-dom";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

export const EditTodoPage = () => {
  const params = useParams();
  // console.log(params.id);
  const id = Number(params.id);

  const { stateUpdaters } = useTodos();
  const { editTodo } = stateUpdaters;

  return (
    <TodoForm
      label='Edita tu TODO'
      submitText='Editar'
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
};
