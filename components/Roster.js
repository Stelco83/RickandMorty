import React, {Component} from 'react'
import Char from './Char'

class Roster extends Component {

    constructor(props) {
        super(props)
        this.state = {
            charArr : []
        }
    }

    componentDidMount() {
        fetch('http://localhost:9999/roster').then(data => {
            return data.json()
        }).then(parsedData => {
            this.setState({charArr : parsedData})
        })
    }

    render() {
        return(
            <div className='par'>
            {this.state.charArr.map((x, index) => {
                return <Char key={index} params={x}/>
            })}
            </div>
        )
    }
}

export default Roster