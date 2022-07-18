const userReducer = (state = [], action) => {
	switch (action.type) {
		case "FETCH_USERS":
			// return state.push(action.data); won't work bcz we are mutating/changing the original state
			return [...action.payload];
		default:
			return state;
	}
};
export default userReducer;
