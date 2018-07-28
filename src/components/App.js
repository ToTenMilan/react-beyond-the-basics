import React, { Component } from 'react';
class App extends Component {
    state = {
        time: new Date(),
    };
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date(),
            });
        }, 1000)
    }
    render() {
        return (
            <div className="demo">
                Hello World (App)
                <input />
                <p>{this.state.time.toString()}</p>
            </div>
        );s
    }
}
export default App;