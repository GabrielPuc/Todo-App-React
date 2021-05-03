import React from 'react';
import AddTask from '../containers/AddTask';
import VisibleTodoList from '../containers/VisibleTodoList';
import ToogleDone from './ToogleDone';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../index.css"

const App = () => (
    <div className="card center-content">
        <h1 style={{"fontWeight": "bold"}}> Lista de Tareas </h1>
        <ToogleDone />
        <AddTask />
        <VisibleTodoList />
    </div>
);

export default App;