import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component {
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    // we need what user is typing from header
    // header => home 
    /*
        var a= [2,3,6,8,9,1,4,7]
        a.filter((data) => {return data>3})
    */
    filterNews = (userInput) => {
        const out = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1
        })

        this.setState({filtered:out})
    }


    render(){
        // console.log(this.state.news)
        return(
            <div>
                <Header userData={(data) => {this.filterNews(data)}}/>
                <NewsDisplay newsdata={this.state.filtered}/>
                <Footer year="2021" month="march"/>
            </div>
        )
    }
    
}

export default Home