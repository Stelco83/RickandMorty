import React, { Component } from 'react';
import SingleChar from './Char'

class Bio extends Component {


    render() {
        return (
            <div>
           
            <fieldset>
            <SingleChar params={({url : this.props.urlD })}/>

            <p>{this.props.fullData.bio}</p>

            </fieldset>
        </div>
        )
    }

   
}

export default Bio