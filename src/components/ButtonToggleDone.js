import React from 'react'
import PropTypes from 'prop-types'

const ButtonToggleDone = ({ active, children, onClick }) => (
    <button
        onClick={onClick}
        hidden={active}
        style={{
            marginLeft: '4px',
        }}
        className="btn btn-secondary"
    >
        {children}
    </button>
);

ButtonToggleDone.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ButtonToggleDone