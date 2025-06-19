import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from '../../utils/Title';
import List from './List';
import axiosInstance from '../../../features/AxiosInstance'

function index() {

	const [Categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const GetCategories = async () => {
			try {
				const res = await axiosInstance.get("/GetCat");
				setCategories(res?.data?.categories)
			}
			catch (err) {
				console.log(err);
			}
			finally {
				setLoading(false);
			}
		}
		GetCategories();
	}, [])
	console.log(Categories);
	return (
		!loading && (
			<div className="mx-auto container">
				<Title title={'Categories'} />
				<h1 className='text-[18px] lg:text-[24px] md:text-[21px] font-poppins font-semibold mt-2'>Browse By Category</h1>
				<List data={Categories} />
			</div>
		)
	);
}

export default index;