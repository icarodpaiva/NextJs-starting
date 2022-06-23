import { Todo } from "../types/Todo"

interface TodoProps {
  todo: Todo[]
}

const Todo = ({ todo }: TodoProps) => {
  return (
    <div>
      <h1>Lista de tarefas</h1>

      <ul>
        {todo.map(todoItem => (
          <li key={todoItem.id}>
            {todoItem.title} - {todoItem.completed.toString()}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo

export const getServerSideProps = async () => {
  const req = await fetch("https://jsonplaceholder.typicode.com/todos/")
  const todoList: Todo[] = await req.json()

  return {
    props: {
      todo: todoList
    }
  }
}
