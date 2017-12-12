import React from 'react';

export default class AddToList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: ''};
		this.onChange = this.handleChange.bind(this);
		this.onSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		
		alert(this.state.value);
		event.preventDefault();
	}
    
    render() {
    	return (
        	<form className="add-to-list" onSubmit={this.handleSubmit}>
                <input 
                	type="text" 
                	value={this.state.value} 
                	onChange={this.handleChange} />
                <input type="submit" value="Add" />
            </form>
    	);
    }
    
};