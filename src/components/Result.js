import React, { Component } from 'react';

class Result extends Component {


    setStyle() {
        return {
            color: this.props.color,
            borderColor: this.props.color
        }
    }

    render() {
        return(
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p> color: red - fontzie: 15 </p>
                <div id='content' style={ this.setStyle() }>
                    nội dung setting
                </div>
            </div>
        );
    }
}

export default Result;
