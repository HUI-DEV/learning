import React, { Component } from 'react'
class Effect extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0};
    }
    addCount(){
        this.setState({count:this.state.count+1})
    }
    componentDidMount() {
        console.log(`componentDidMount=>You clicked ${this.state.count}times`)
    }
    componentDidUpdate() {
        console.log(`componentDidUpdate=>You clicked ${this.state.count}times`)
    }
    render() {
        return (
            <div>
            <p>
                You clicked {this.state.count}times
            </p>
            <button onClick={this.addCount.bind(this)}>click me</button>
        </div>
        );
    }
}

export default Effect;