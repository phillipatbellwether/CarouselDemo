import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Carousel } from 'react-responsive-carousel';

function log(){
    console.log("works");
}


function DemoCarousel(){
      return (
          <Carousel showIndicators={false} showArrows={false} showThumbs ={false} autoPlay={true}>
              <div>
                  <img src="assets/1.jpeg" />
              </div>
              <div>
                  <img src="assets/2.jpeg" /> 
              </div>
              <div>
                  <img src="assets/3.jpeg" /> 
              </div>
              <div>
                  <img src="assets/4.jpeg" /> 
              </div>
              <div>
                  <img src="assets/5.jpeg" /> 
              </div>
              <div>
                  <img src="assets/6.jpeg" /> 
              </div>
          </Carousel>
      );
}

ReactDOM.render(<DemoCarousel />, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
