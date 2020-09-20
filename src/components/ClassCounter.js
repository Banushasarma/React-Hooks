import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: ''
        }
    }

    clickCount = e => {
        this.setState({
            count: this.state.count + 1
        })
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count != this.state.count) {
            console.log('Updateing the title')
            document.title = `Clicked ${this.state.count} times`
        }
    }


    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e => { this.setState({ name: e.target.value }) }}></input>
                <button onClick={this.clickCount}>Click : {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter
