import React from "react";
import me from "../Images/me.jpg";

export const Header = () => {
	return (
		<div className="wrapper p-3">
			<div className="container text-center">
				<div className="row g-2">
					<div className="col-md-6">
						<img height="200px" src={me} alt="" />
					</div>
					<div className="col-md-6 p-2">
						<h4>
							Hello, my name is Aashish Paudel. I am a junior software
							developer.
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
};
