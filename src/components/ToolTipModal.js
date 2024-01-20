import { useHover } from '@uidotdev/usehooks';
import PropTypes from "prop-types";

const ToolTipModal = (props) => {
    const [ref, showTooltipModal] = useHover();

    return (
        <div>
        <div ref={ref}><p>Tooltip Modal</p></div>
            {showTooltipModal ? 
                <div className={props.darkMode ? "tooltip-modal dark-mode" : "tooltip-modal"}>
                    <div className="little-square" />
                    <div className="tooltip-modal-content">
                        <h1 className="tooltip-header">{props.header}</h1>
                        {props.content}
                    </div>
                </div> 
                : <div />
            }    
        </div>
    )
}

ToolTipModal.propTypes = {
    header: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    darkMode: PropTypes.string
}

export default ToolTipModal;