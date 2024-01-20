import { useState } from 'react';
import PropTypes from "prop-types";


const PopupModal = (props) => {
    const [shownModal, setShowModal] = useState(false);

    function showModal() {
        setShowModal(true);
    }
    
    function closeModal() {
        setShowModal(false);
    }    

    return (
        <div>
            <button className="popup-modal-button" onClick={e => {showModal()}}>Open Popup Modal</button>
            {shownModal ? 
                <div className={props.darkMode ? "popup-modal dark-mode" : "popup-modal"}>
                    <button className="close-button" onClick={e => {closeModal()}}>X</button>
                    <div className="popup-modal-content">
                        <h1>{props.header}</h1>
                        <div>{props.content}</div>
                    </div>
                </div> 
                : <div />
            }
        </div>
    )
}

PopupModal.propTypes = {
    header: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    darkMode: PropTypes.string
}

export default PopupModal;