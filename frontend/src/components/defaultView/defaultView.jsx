import Navbar from "../navbar/navbar";
import "./defaultView.css";
import PropTypes from "prop-types";

const DefaultView = ({ children }) => {
	return (
		<div className="default-view">
			<Navbar />
			<div className="content-container">{children}</div>
		</div>
	);
};

DefaultView.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DefaultView;
