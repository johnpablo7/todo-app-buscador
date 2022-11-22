import React from "react";
import { useNavigate } from "react-router-dom";
import { ChangeAlert } from "../../ui/ChangeAlert";
import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { EmptyTodos } from "../../ui/EmptyTodos";
import { TodoCounter } from "../../ui/TodoCounter";
import { TodoHeader } from "../../ui/TodoHeader";
import { TodoItem } from "../../ui/TodoItem";
import { TodoList } from "../../ui/TodoList";
import { TodoSearch } from "../../ui/TodoSearch";
import { TodosError } from "../../ui/TodosError";
import { TodosLoading } from "../../ui/TodosLoading";
import { useTodos } from "../useTodos";

export const HomePage = () => {
  const navigate = useNavigate();
  const { state, stateUpdaters } = useTodos();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    // openModal,
    searchValue,
  } = state;

  const {
    // setOpenModal,
    // addTodo,
    completeTodo,
    deleteTodo,
    setSearchValue,
    sincronizeTodos,
  } = stateUpdaters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}>
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onEdit={() => navigate("/edit/" + todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        )}
      </TodoList>

      {/* {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )} */}

      <CreateTodoButton
        onClick={() => navigate("/new")}
        // setOpenModal={setOpenModal}
      />

      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  );
};
