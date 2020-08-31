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
        this.handleSetCountdownTime = this.handleSetCountdownTime.bind(this)
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevState.isStarted && this.state.isStarted) {
            let intervalId = setInterval(() => {
                if (this.state.count === 0) {
                    clearInterval(intervalId)
                }
                else {
                    this.handleSetCountdownTime(this.state.count-1)
                }
            }, 1000)
        }
    }

    handleSetCountdownTime(currTime) {
        if (currTime >= 0) {
            if (!this.state.isStarted) {
                this.setState({isStarted: true, count: currTime})
            }
            else {
                this.setState({count: currTime})
            }
        }
    }

    render() {

        return (
            <div>
                <Clock timeInSeconds={this.state.count}/>
                <CountdownForm onSetCountdownTime={this.handleSetCountdownTime}/>
            </div>
        );
    }
}

export default Countdown;