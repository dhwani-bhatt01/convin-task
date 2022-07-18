import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import Card from "../../components/cards/Card";
import Placeholder from "../../components/placeholder/Placeholder";
import { fetchUsers } from "../../redux/action/action";
import "./homepage.css";

function Homepage() {
	const dispatch = useDispatch();
	//useSelector is used to access the state in our redux store
	const users = useSelector((state) => state.user);

	const [userData, setUserData] = useState();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch("https://reqres.in/api/users")
			.then((res) => res.json())
			.then((json) => {
				console.log(json.data);
				//we will dispatch the fetchUsers action to store the api call's data to our redux state
				dispatch(fetchUsers(json.data));
				setIsLoading(false);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleClick = (id) => {
		fetch(`https://reqres.in/api/users/${id}`)
			.then((res) => res.json())
			.then((json) => {
				setUserData(json.data);
			});
	};

	if (isLoading) {
		return (
			<div className="container">
				<h1>Loading...</h1>
			</div>
		);
	}

	return (
		<div className="container">
			{userData ? (
				<Card
					avatar={userData.avatar}
					email={userData.email}
					first_name={userData.first_name}
					last_name={userData.last_name}
				/>
			) : (
				<Placeholder />
			)}
			<div>
				{users.map((user, idx) => {
					console.log(user);
					return (
						<Button key={idx} onClick={() => handleClick(user.id)}>
							{idx + 1}
						</Button>
					);
				})}
			</div>
		</div>
	);
}

export default Homepage;
