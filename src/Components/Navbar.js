import React, { Component } from 'react' //import react bc react is needed any time that we're going to use jsx
//we import component bc Component is a class that is the parent class for any react custom component

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            ...props.state
        }
        this.counterUp = this.counterUp.bind(this)
        this.counterDown = this.counterDown.bind(this)
        this.counterReset = this.counterReset.bind(this)


    //     counterDown() {
    //         this.state.count = this.state.count - 1

    //     }

    //     this.counterReset() {
    //         this.state.count = 0
    //     }
    }
    counterUp() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    counterDown() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    counterReset() {
        this.setState((prevState) => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.counterDown}>-</button>
                {this.state.count}
                <button onClick={this.counterUp}>+</button>
                <button onClick={this.counterReset}>Reset</button>

            </div>
        )
    }
}
