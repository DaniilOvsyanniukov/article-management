import React from 'react';
import TextBox from './textBox';
import TextBoxButtons from '../buttons/textBoxButtons'
import "./index.css";

const ListBar: React.FC = () => {
	return (
		<div className="listBar-container">
			<TextBox isCompleted={false} />
			<TextBoxButtons />
			<TextBox isCompleted={true} />
		</div>
	);
};

export default ListBar;
