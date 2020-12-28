import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Experience extends Component{
    render(){
        return (
           <Grid style={{padding:20}}>
               <Cell col={4}>
                <p>{this.props.startYear}-{this.props.endYear}</p>
               </Cell>
               <Cell col={8}>
            <h5 style={{marginTop:'0px'}}>{this.props.jobName}</h5>
        <h6 style={{marginTop:'0px'}}>{this.props.companyName}</h6>
            <p>{this.props.jobdescription}</p>
               </Cell>
           </Grid>
        )
    }
}
export default Experience;