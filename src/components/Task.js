import React from 'react'
import PropTypes from 'prop-types'
var newName = "";


const Task = ({ onClick, done, name, taskId, onEdit, isEditing, editTask }) => (
    <div>
        <input type="checkbox" checked={done} onClick={onClick} readOnly/> 
        
        <label onClick={onEdit} 
            style={{
                textDecoration: done ? 'line-through' : 'none'
            }}> {name} 
        </label>

        {
            isEditing?
            
            <div style={{ padding: '20px' }}>
                <div>
                    <input
                        onChange={event => newName = event.target.value}
                        placeholder="Nuevo nombre"
                        className="form-control" style={{"display": "inline-block","width":"auto"}}
                    />
                    <button 
                        className="btn btn-secondary"
                        onClick={()=>editTask(taskId,newName)}>
                        Editar
                    </button>
                </div>
            </div>
            
            :null
        }
        
    </div>
)


Task.propTypes = {
    onClick: PropTypes.func.isRequired,
    done: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    isEditing: PropTypes.bool.isRequired
}


export default Task