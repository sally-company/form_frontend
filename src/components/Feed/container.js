import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Feed from "./presenter"

class Container extends Component {

    state = {
        loading: true
    }
    static propTypes = {
        getSalon: PropTypes.func.isRequired
    }

    componentDidMount() {
        const {getSalon} = this.props
        if (!this.props.salon){
            getSalon()
        }else {
            this.setState({
                loading: false
            });
        }
    }
    componentWillReceiveProps(nextProps, nextContext) {

        if (nextProps.salon){
            this.setState({
                loading : false
            })
        }
    }

    render() {
        const {salon} = this.props
        return <Feed {...this.state} salon={salon}/>
    }
}

export default Container