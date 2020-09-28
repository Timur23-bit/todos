import React, {Component} from 'react';

export default class Timer extends Component {
  state = {
    interval: false,
    min: this.props.min,
    sec: this.props.sec,
  };

  componentDidUpdate (prPr, prSt) {
    if (!this.state.interval) {
      clearInterval(this.timerID)
    }
    if (prSt.interval !== this.state.interval) {
      if (this.state.min == 0 && this.state.sec == 0) {

      } else if (!prSt.interval) {
        this.timerID = setInterval(
          () => this.update(),
          1000
        );
        console.log('+');
      }
    }
  }

  componentWillUnmount() {

  }

  update = () => {
    console.log(this.state.min+':'+this.state.sec);
      if (this.state.sec >= 0) {
        this.setState((st) => {
          return {
            sec: st.sec - 1
          }
        });
        console.log('sec');
      }
      if (this.state.sec < 0) {
        this.setState((st) => {
          return {
            min: st.min - 1,
            sec: 59
          }
        });
        console.log('min');
      }
      if (this.state.min == 0 && this.state.sec == 0) {
        clearInterval(this.timerID);
        console.log('stop');
      }
  };

  render() {
    return (
      <span className="description">
        <button
          className="icon icon-play"
          onClick={() => {
            this.setState({
              interval: true
            })
          }
          }
        />
        <button
          className="icon icon-pause"
          onClick = { () => {
            clearInterval(this.timerID);
            this.setState({
              interval: false
            });
            this.timerID = false;
            }
          }
        />
        {this.state.min}:{this.state.sec}
      </span>
    )
  }
}



