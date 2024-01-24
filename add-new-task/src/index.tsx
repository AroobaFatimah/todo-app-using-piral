import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'todo-app';

const addTask = (app: PiletApi, event:any) => {
  event.preventDefault(); 
  const new_task = (event.target as HTMLFormElement).task.value;
  app.setData("new_task", new_task);
  {console.log(app.getData("new_task"))}
}

export function setup(app: PiletApi) {
  app.registerTile(() =>
    <>
      <form onSubmit={(e) => addTask(app, e)}>
        <div style={{ display: "inline" }}>
          <input type="text" name="task" id="task" />
          <button type='submit'>Add New Task</button>
        </div>
      </form>
    </>, {
      initialColumns: 2,
      initialRows: 2,
    });
}
