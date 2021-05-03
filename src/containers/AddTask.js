import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions'

const AddTask = ({ dispatch }) => {
    let input

    return (
        <div style={{ padding: '20px' }}>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch (addTask(input.value) )
                input.value = ''
            }}>
                <input ref={node => input = node} 
                    placeholder="Nueva tarea"
                    className="form-control" style={{"display": "inline-block","width":"auto"}}
                />
                <button 
                    className="btn btn-secondary"
                    type="submit">
                    Agregar
                </button>
            </form>
        </div>
    )
}

export default connect()(AddTask)