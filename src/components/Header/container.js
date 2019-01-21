import React, {Component} from 'react'
import Header from './presenter'

class Container extends Component{


    render() {
        return (
           <Header {...this.props}
           />
        );
    }

}

export default Container

