import React,{Component} from 'react';
import './Header.css'

class Header extends Component{
    constructor(){
        super()

        this.state={
            title:'React App',
            keyword:'User Text Here'
        }
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({keyword:event.target.value?event.target.value:'User Text Here'})
        this.props.userData(event.target.value)
    }

    render(){
        console.log("inside render")
        return(
            <header>
                <div className="logo">{this.state.title}</div>
                <center>
                    <input onChange={this.handleChange}/>
                    <div style={{color:'white'}}>{this.state.keyword}</div>
                </center>
                <hr/>
            </header>
        )
    }
    
}

export default Header;

/*
const Header = () => {
    return(
            <header>
                <div>React App</div>
                <center>
                    <input/>
                    <div>User Text Here</div>
                </center>
                <hr/>
            </header>
    )
}
*/