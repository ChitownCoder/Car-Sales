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
