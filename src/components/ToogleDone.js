import React from 'react'
import { VisibilityFilters } from '../actions'
import FilterButton from '../containers/FilterButton'

const ToogleDone = () => (

    <div style={{ padding: '20px' }}>
        <FilterButton filter={VisibilityFilters.SHOW_ALL}>
            Mostras Completadas
        </FilterButton>
        <FilterButton filter={VisibilityFilters.SHOW_ACTIVE}>
            Ocultar Completadas
        </FilterButton>
    </div>
)

export default ToogleDone