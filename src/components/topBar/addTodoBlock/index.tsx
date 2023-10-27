import React, { useState } from 'react';
import AddButton from '../../buttons/addButton';
import './index.css';

const SearchBlock: React.FC = () => {
	const [saddText, setAddText] = useState('');

	return (
		<div className='addBox-container'>
			<input
				className="addBox"
				type="text"
				placeholder="Search"
				value={saddText}
				onChange={(e) => setAddText(e.target.value)}
			/>
			<AddButton todoTitle={saddText} />
		</div>
	);
};

export default SearchBlock;
