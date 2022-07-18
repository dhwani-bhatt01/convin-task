import React, { useEffect } from "react";

function Homepage() {
	useEffect(() => {
		fetch("https://reqres.in/api/users?page=2")
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
			});
	});
	return <div>homepage</div>;
}

export default Homepage;
