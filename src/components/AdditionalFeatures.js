import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';

import { buyItem, updatePrice } from '../actions';

const AdditionalFeatures = (props) => {
	const handleBuyItem = (item) => {
		props.buyItem(item);
		props.updatePrice();

		console.log();
	};
	return (
		<div className="content">
			<h4>Additional Features</h4>
			{props.additionalFeatures.length ? (
				<ol type="1">
					{props.additionalFeatures.map((item, index) => (
						<AdditionalFeature
							key={item.id}
							feature={item}
							handleBuyItem={handleBuyItem}
							// index={index}
						/>
					))}
				</ol>
			) : (
				<p>Nice looking car!</p>
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		additionalFeatures: state.additionalFeatures,
		features: state.car.features,
	};
};

export default connect(mapStateToProps, { buyItem, updatePrice })(
	AdditionalFeatures
);
