import React,{Component} from 'react';

class PlaceOrder extends Component{
    constructor(props){
        super(props)

        this.state={
            id: Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.hotel_name,
            name:'',
            phone:'',
            cost:sessionStorage.getItem('cost')
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit=()=>{
        console.log(this.state)
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        Place Booking
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Order Id</label>
                            <input name="id" value={this.state.id}
                            className="form-control"
                            readOnly/>
                        </div>
                        <div className="form-group">
                            <label>Hotel Name</label>
                            <input name="hotel_name" value={this.state.hotel_name}
                            readOnly className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input name="name" value={this.state.name} className="form-control"
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input name="phone" value={this.state.phone} className="form-control"
                            onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Cost</label>
                            <input name="cost" value={this.state.cost}
                            readOnly className="form-control"/>
                        </div>
                        <button className="btn btn-success"
                        onClick={this.handleSubmit}>
                            Place Booking
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default PlaceOrder