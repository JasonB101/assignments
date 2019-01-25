import React, { Component } from 'react'


const { Consumer, Provider } = React.createContext()


export default class SideNavProvider extends Component {
    constructor() {
        super()
        this.state = {
            sidenav: false
        }
        this.sideNavToggle = this.sideNavToggle.bind(this)
    }

    sideNavToggle(target) {
        if (target !== "sideNavInner") {
            this.setState(ps => {
                return { sidenav: !ps.sidenav }
            })
        }
    }
    render() {
        return (
            <Provider value={{ state: this.state, toggle: this.sideNavToggle }}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withSideToggle = Co => props => (
    <Consumer>
        {data => <Co {...props}{...data} />}
    </Consumer>
)
