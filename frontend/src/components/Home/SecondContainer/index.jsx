import React, { useState } from 'react';
import FlashContainer from './FlashContainer';
import FlashProducts from './FlashProducts';
import ShowAllButton from './ShowAllButton';

function index() {

	// handling the second swiper #offers
	const [swiper, setSwiper] = useState(null);

	const TargetDate = '2025-09-31T23:59:59';

	const datenow = new Date();
	const target = new Date(TargetDate);

	return (
		target - datenow >= 0 &&
		<>
			<FlashContainer targetDate={TargetDate} setSwiper={setSwiper} swiper={swiper} />
			<FlashProducts setSwiper={setSwiper} swiper={swiper} />
			<ShowAllButton />
		</>
	);
}

export default index;