import React from 'react';

import AddedFeature from './AddedFeature';
import { connect } from 'react-redux';

import { removeFeature, updatePrice } from '../actions';

const AddedFeatures = (props) => {
	const handleRemoveFeature = (index) => {
		props.removeFeature(index);
		props.updatePrice();
	};

	return (
		<div className="content">
			<h6>Added features:</h6>
			{props.car.features.length ? (
				<ol type="1">
					{props.car.features.map((item, index) => (
						<AddedFeature
							key={item.id}
							feature={item}
							// index={index}
							handleRemoveFeature={handleRemoveFeature}
						/>
					))}
				</ol>
			) : (
				<p>You can purchase items from the store.</p>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		car: state.car,
	};
};

export default connect(mapStateToProps, { removeFeature, updatePrice })(
	AddedFeatures
);
