import React, { useState, useEffect } from 'react';
import Pin from './Pin';
import Modal from './Modal';
import "../styles/final_board_styles.css"

function FinalBoard() {
    const [pins, setPins] = useState([]);
    const [showModal, setShowModal] = useState(false);

    // Load pins when the component mounts
    useEffect(() => {
        const loadedPins = localStorage.getItem('pins');
        if (loadedPins) {
            setPins(JSON.parse(loadedPins));
        }
    }, []);

    // Save pins to local storage on change
    useEffect(() => {
        localStorage.setItem('pins', JSON.stringify(pins));
    }, [pins]);

    const addPin = pinDetails => {
        const newPins = [...pins, pinDetails];
        setPins(newPins);
        setShowModal(false);
    };

    return (
        <div>
            <div className="navigation_bar">
                <div onClick={() => setShowModal(true)} className="pint_mock_icon_container add_pin">
                    <img src="./images/add.png" alt="add_pin" className="pint_mock_icon" />
                </div>
            </div>
    
            <div className="pin_container">
                {pins.map((pin, index) => (
                    <Pin key={index} pinDetails={pin} />
                ))}
            </div>
    
            <div onClick={event => event.target.className.includes('add_pin_modal') ? setShowModal(false) : null}
                 className="add_pin_modal_container"
            >
                {showModal && <Modal addPin={addPin} />}
            </div>
        </div>
    );    
}

export default FinalBoard;
