import React from 'react';
import Clock from './Clock';
import CountdownForm from './CountdownForm';

class Countdown extends React.Component {
  
    constructor(props) {
        super(props)
        this.state = {
            isStarted: false,
            count: 0,
        };
        this.setCountdownTime = this.setCountdownTime.bind(this)
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevState.isStarted && this.state.isStarted) {
            let intervalId = setInterval(() => {
                if (this.state.count === 0) {
                    clearInterval(intervalId)
                }
                else {
                    this.setCountdownTime(this.state.count-1)
                }
            }, 1000)
        }
    }

    setCountdownTime(currTime) {
        if (!this.state.isStarted) {
            this.setState({isStarted: true, count: currTime})
        }
        else {
            this.setState({count: currTime})
        }
    }

    render() {

        return (
            <div>
                <Clock timeInSeconds={this.state.count}/>
                <CountdownForm onSetCountdownTime={this.setCountdownTime}/>
            </div>
        );
    }
}

export default Countdown;