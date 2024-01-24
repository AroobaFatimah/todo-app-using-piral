import * as React from 'react';
import type { PiletApi } from 'todo-app';
import "./style.css"
export function setup(app: PiletApi) {
  const TodoList: React.FC = () => {
    const [todoList, setTodoList] = React.useState([
      {
        id: 1,
        task: "Create document",
      },
      {
        id: 2,
        task: "Create application",
      },
      {
        id: 3,
        task: "Create SRS document",
      },
    ]);

    React.useEffect(() => {
      let new_task = app.getData("new_task");
      console.log("task", new_task)
      if (new_task !== "") {
        const newTaskobj = {
          id: todoList.length + 1,
          task: new_task,
        };
        setTodoList((prevTodoList) => [...prevTodoList, newTaskobj]);
      }
    }, [app.getData("app")]);

    return (
      <>
        <table style={{marginLeft: "100px"}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.task}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  app.registerTile(TodoList);
}
