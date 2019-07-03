import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';
import Reset from './components/Reset';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            fontSize: 14
        }
    }

    onSetColor = (value) => {
        this.setState({
            color: value
        })
    }

    onChangeSize = (value) => {
        this.setState({
            fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ?
                         this.state.fontSize + value : this.state.fontSize
        })  
    }

    onSettingDeafult = (value) => {
        if(value) {
            this.setState({
                color: 'red',
                fontSize: 14
            })
        }
    }

    render() {
        return(
            <div className="container mt-50">
                <div className="row">
                    <ColorPicker 
                        color={ this.state.color } 
                        onReceiveColor={ this.onSetColor } 
                    />

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting 
                            fontSize={ this.state.fontSize}
                            onChangeSize={ this.onChangeSize }
                        />
                        <Reset onSettingDeafult = {this.onSettingDeafult}/>
                    </div>
                    
                    <Result 
                        color={ this.state.color }  
                        fontSize={ this.state.fontSize}
                    />

                </div>
            </div>
        );
    }
}

export default App;
