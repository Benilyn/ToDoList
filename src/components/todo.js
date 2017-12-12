import React from 'react';

import AddToList from './add-to-list';

export default class ToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lists: []
		};
	}

	render() {
		const lists = this.state.lists.map((list, index) =>
            <li key={index} {...list} />
        );

		return (
			<div className="todo-list">
				<h2>To Do List</h2>
				<ul>
					{lists}	
					<AddToList type="list" onAdd={this.addList} />
				</ul>	
			</div>
	)	
	}
	
} 