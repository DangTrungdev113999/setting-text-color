import React, { Component } from 'react';

class Reset extends Component {
	onResetDeafult = () => {
		this.props.onSettingDeafult(true);
	}

    render() {
        return(
            <button 
            	type="button" 
            	className="btn btn-primary"
            	onClick={ this.onResetDeafult }>reset</button>
        );
    }
}

export default Reset;
