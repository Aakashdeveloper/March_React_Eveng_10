import React,{Component} from 'react';
import './Search.css'

const cityUrl = "https://developerfunnel.herokuapp.com/location";
const hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component{
    constructor(){
        super()
        console.log(">>>>>>>constructor")
        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.city}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.name} | {item.locality}
                    </option>
                )
            })
        }
    }

    handleCity = (event) => {
        console.log(event.target.value)
        fetch(`${hotelUrl}${event.target.value}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({hotels:data})
        })
    }

    render(){
        console.log(">>>>>>>render")
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>------SELECT CITY-----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput">
                        <option>------SELECT HOTEL-----</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }

    // api call on page load
    componentDidMount(){
        console.log(">>>>>>>componentDidMount")
        // we get the data and update the state
        fetch(cityUrl,{method:'GET'})
        // return promise here
        .then((res) => res.json())
        // get data here
        .then((data) => {
            this.setState({location:data})
        })
        .catch((err) => {console.log(err)})
    }
}

export default Search;