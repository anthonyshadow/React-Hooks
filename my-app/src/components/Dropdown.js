import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {

    const [open, setOpen] = useState(false);


    // used to reference a specific area of the DOM
    const ref = useRef();

    useEffect(() => {
        // event listener added on to the body in accordance with ref, allows the dropdown to list to close auto after choosing option
        document.body.addEventListener('click', (event) => {
            if(ref.current.contains(event.target)) {
                return;
            };

            setOpen(false);
        }, {capture: true});
    }, []);

    const renderedOptions = options.map((option) => {
        if ( option.value === selected.value) {
            return null
        };

        return (
            <div key={option.value} onClick={() => onSelectedChange(option)} className="item">
                {option.label}
            </div>
        );
    });


    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">
                    Select A Color
                </label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;