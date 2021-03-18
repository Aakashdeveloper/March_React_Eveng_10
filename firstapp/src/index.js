import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Footer from './component/Footer';

const App = () => {
    return(
        <div>
            <Header/>
            <h1>Say Hi To React</h1>
            <h2>Hi From Nareshit</h2>
            <h3>Today is last free class</h3>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))