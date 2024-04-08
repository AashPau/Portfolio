import React from "react";
import React_logo from "../Images/react-logo.png";
import CSS_logo from "../Images/CSS3_logo.png";
import JS_logo from "../Images/JavaScript-logo.png";
import Bootstrap_logo from "../Images/Bootstrap_logo.png";
import HTML_logo from "../Images/HTML5_logo.png";
import "./Styles.css";

export const Skills = () => {
	return (
		<div className="card " style={{ width: "15.5rem" }}>
			<div className="row-md-6">
				<div className="col-md-6 p-2">
					<img src={HTML_logo} className="rounded" alt="..." />
				</div>
				<div className="col-md-6 p-2">
					<img src={CSS_logo} className="rounded" alt="..." />
				</div>
			</div>
			<div className="row-md-6">
				<div className="col-md-6 p-2">
					<img src={JS_logo} className="rounded" alt="..." />
				</div>
				<div className="col-md-6 p-2">
					<img src={React_logo} className="rounded" alt="..." />
				</div>
			</div>
		</div>
	);
};
