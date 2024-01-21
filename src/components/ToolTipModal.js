
import PropTypes from "prop-types";
import { useHover } from "@uidotdev/usehooks";

const ToolTipModal = (props) => {
    const [ref, showTooltipModal] = useHover();

    return (
        <div>
            <div className="tooltip-label" ref={ref}><p>Tooltip Modal</p></div>
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
    darkMode: PropTypes.bool
}

export default ToolTipModal;