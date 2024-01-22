import { Link } from 'react-router-dom';
import PropTypes from "prop-types";


const ButtonLink = (props) => {
    return (
        <Link to={props.link} target="_blank" rel="noopener noreferrer">
            <button className={props.class ? props.class : "button"}>{props.label}</button>
        </Link>
    )
}

ButtonLink.propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    class: PropTypes.string
}

export default ButtonLink;