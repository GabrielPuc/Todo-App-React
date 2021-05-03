import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

const TodoList = ({ tasks, toggleDone,toggleEdit,editTask }) => (
    
    <div className="shadow-sm rounded card" style={{ padding: '20px', width: '80%'}}>
        {
            tasks.length != 0? 
            <div>
                {tasks.map(task =>
                    <Task
                        key={task.id}
                        {...task}
                        onClick={() => toggleDone(task.id)}
                        onEdit={() => toggleEdit(task.id)}
                        editTask={editTask}
                        taskId={task.id}
                    />                
                )}
            </div>
            
            :<p>Sin Tareas Pendientes</p>
        }
    </div>
    
);

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        done: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        isEditing: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    
    toggleDone: PropTypes.func.isRequired
};


export default TodoList
