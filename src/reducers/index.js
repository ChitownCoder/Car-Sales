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
		{ id: 1, name: 'V-8 Engine', price: 3995 },
		{ id: 2, name: 'Racing Package', price: 3250 },
		{ id: 3, name: 'Luxury Upgraded Package', price: 1995 },
		{ id: 4, name: 'Tinted Windows', price: 399 },
		{ id: 5, name: 'Alloy Rims', price: 1295 },
		{ id: 6, name: 'Premium Racing Rubber', price: 399 },
	],
};

export const carReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'BUY_ITEM':
			return {
				...state,
				additionalPrice: state.additionalPrice + action.payload.price,
				car: {
					...state.car,
					features: [...state.car.features, { ...action.payload }],
				},
				additionalFeatures: state.additionalFeatures.filter(
					(feature) => feature.id !== action.payload.id
				),
			};
		case 'REMOVE_FEATURE':
			return {
				...state,
				additionalPrice: state.additionalPrice - action.payload.price,
				car: {
					...state.car,
					features: state.car.features.filter(
						// (word, index) => index !== action.payload
						(feature) => feature.id !== action.payload.id
					),
				},
				additionalFeatures: [...state.additionalFeatures, action.payload],
			};

		default:
			return state;
	}
};
export const BUY_ITEM = 'BUY_ITEM';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const UPDATE_PRICE = 'UPDATE_PRICE';

export const removeFeature = (item) => {
	return {
		type: REMOVE_FEATURE,
		payload: item,
	};
};

export const buyItem = (item) => {
	return {
		type: BUY_ITEM,
		payload: item,
	};
};

export const updatePrice = () => {
	return {
		type: UPDATE_PRICE,
	};
};
