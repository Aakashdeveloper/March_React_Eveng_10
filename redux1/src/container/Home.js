import React,{Component} from 'react';
import {connect} from 'react-redux';
import {movieList} from '../actions/actionfile';
import Display from '../component/DisplayComponent'

class Home extends Component{
    //call action
    componentDidMount(){
        this.props.dispatch(movieList())
    }

    render(){
        return(
            <Display datalist={this.props.mydata}/>
        )
    }

}

//we will recieve the state from store
function mapStateToProps(state){
    return{
        mydata:state.films
    }
}

export default connect(mapStateToProps)(Home)