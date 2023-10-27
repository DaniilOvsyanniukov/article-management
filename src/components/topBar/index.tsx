import React from 'react';
import SearchBlock from './searchBlock';
import AddTodoBlock from './addTodoBlock';
import './index.css';


const TopBar: React.FC = () => {
	return (
		<div className="topBar-container">
			<AddTodoBlock />
			<SearchBlock />
		</div>
	);
};

export default TopBar;
