import React from "react";
import React_logo from "../Images/react-logo.png";
import CSS_logo from "../Images/CSS3_logo.png";
import JS_logo from "../Images/JavaScript-logo.png";
import Bootstrap_logo from "../Images/Bootstrap_logo.png";
import HTML_logo from "../Images/HTML5_logo.png";

export const SkillsBox = () => {
	return (
		<div className="mt-3">
			<div
				className="p-2 border border-primary rounded"
				style={{ width: "18rem" }}
			>
				<h5 className="text-center">Card title</h5>
				<hr />

				<div>
					<div className="row p-2">
						<div className="col p-2">
							<img src={HTML_logo} className="rounded" alt="..." />
						</div>
						<div className="col p-2">
							<img src={CSS_logo} className="rounded" alt="..." />
						</div>
					</div>
					<div className="row p-2">
						<div className="col p-2">
							<img src={JS_logo} className="rounded" alt="..." />
						</div>
						<div className="col p-2">
							<img src={React_logo} className="rounded" alt="..." />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
