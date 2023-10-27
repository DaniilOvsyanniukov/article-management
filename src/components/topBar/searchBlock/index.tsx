import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchCompletedTodo } from '../../../redux/features/todoReducer';
import './index.css';

const SearchBlock: React.FC = () => {
	const dispatch = useDispatch();
	const [searchText, setSearchText] = useState('');


	useEffect(() => {
		if (searchText.length >= 3) {
			dispatch(setSearchCompletedTodo(searchText));
		} else { dispatch(setSearchCompletedTodo('')); }
		// eslint-disable-next-line
	}, [searchText]);


	return (
		<div>
			<input
				className="searchBox"
				type="text"
				placeholder="Search"
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
			/>
		</div>
	);
};

export default SearchBlock;
