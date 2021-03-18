import React from 'react';
import PropTypes from 'prop-types';

function StatusItem({ classInfo, type, name, unit }) {
    return (
        <>
            {
                classInfo ?
                    <span className={`status__${classInfo}`}>{name || ''} {type || ''} {unit || ''} </span>
                    : null
            }
        </>
    )
}

StatusItem.propTypes = {
    classInfo: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.number,
    unit: PropTypes.string,
}

export default StatusItem;
