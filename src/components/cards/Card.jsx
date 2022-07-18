import React from "react";
import "./card.css";

function Card({ first_name, last_name, email, avatar }) {
	return (
		<>
			<div className="card">
				<img
					className="userProfile"
					src={avatar}
					alt={getFullName(first_name, last_name)}
				/>
				<span className="userName">{getFullName(first_name, last_name)}</span>
				<span className="userEmail">{email}</span>
			</div>
		</>
	);
}

export default Card;

const getFullName = (first_name, last_name) => `${first_name} ${last_name}`;
