import { connect } from 'react-redux'
import { toggleDone,toggleEdit,editTask } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTasks = (tasks, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return tasks
        case VisibilityFilters.SHOW_ACTIVE:
            return tasks.filter(t => !t.done)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleDone: id => dispatch(toggleDone(id)),
    toggleEdit: id => dispatch(toggleEdit(id)),
    editTask: (id,name) => dispatch(editTask(id,name))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)