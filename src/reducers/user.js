const initState = {
	username: 'anonym'
}

const reducer = (state = initState, action) => {
	switch (action.type) {
		case 'CHANGE_NAME':
			return { ...state, username: action.payload }
		default:
			return { ...state }
	}
}

export default reducer