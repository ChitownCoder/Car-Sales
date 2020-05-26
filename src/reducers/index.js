export const initialState = {
	additionalPrice: 0,
	car: {
		price: 26395,
		name: '2019 Ford Mustang',
		image:
			'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
		features: [],
	},

	additionalFeatures: [
		{ id: 1, name: 'V-6 Engine', price: 2500 },
		{ id: 2, name: 'Racing Package', price: 1795 },
		{ id: 3, name: 'Premium Sound System', price: 1500 },
		{ id: 4, name: 'Rear Spoiler', price: 750 },
	],
};
export const carReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'BUY_ITEM':
			return {
				...state,
				car: {
					...state.car,
					features: [...state.car.features, { ...action.payload }],
				},
			};
		case 'REMOVE_FEATURE':
			return {
				...state,
				car: {
					features: state.car.features.filter(
						(word, index) => index !== action.payload
					),
				},
			};
		default:
			return state;
	}
};
