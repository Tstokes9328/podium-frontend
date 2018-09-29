import React, { Component } from 'react';

//Imported Packages
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

//Routes
import router from './router';

//Components
import Navbar from './components/navbar/Navbar';

//Reset CSS & Style Sheets
import 'reset-css';
import './app.css';


class App extends Component {
  constructor(){
    super()

    this.state = {
      loading: true
    }
  }

  //Lifecycle Hooks
  componentDidMount(){
    this.cancelLoading();
  };

  //Methods
  cancelLoading = () => {
    setTimeout(() => {this.setState({
      loading: false
    })}, 3000);
  };

  render() {
    //Font Awesome library method
    library.add(faChevronDown, faChevronUp, faArrowLeft);

    return (
      <div>
        {this.state.loading ?
           <div className="loading-screen">
            <div className="loading-screen-logo">
              {/* Loading Screen Logo Image */}
            </div>
            <div className="loading-screen-dots">
              <span>{/* Loading Dot*/}</span>
              <span>{/* Loading Dot*/}</span>
              <span>{/* Loading Dot*/}</span>
            </div>
           </div> 
           : 
           <div className="app">
            <Navbar/>
            {router}
           </div>}
      </div>
    );
  }
}

export default App;
