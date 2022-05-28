import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import IMg from 'https://hirenlalani872375518.files.wordpress.com/2018/10/my-bio5288665370412588001.jpg';

const Team = () => {
    return(  
          
        <React.Fragment>
            <div className="card">
  <img src={IMg} className="card-img-top" alt="hi" />
    <img/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  
</div>
        </React.Fragment>
               
            );
        
};
    
    export default Team;