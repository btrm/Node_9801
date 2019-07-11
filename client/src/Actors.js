import React, { Component } from "react";
import axios from 'axios';



class Actors extends Component {
  constructor(props) {
    super(props);
    
        this.state = {
            data: [],
            value:""
        };
      this.apiUrl = 'http://localhost:3001/actors';

    }
    
    handleChange = (e) => {
        this.setState({value: e.target.value});
      }
    
      handleSubmit = (e) => {
          e.preventDefault();
          axios.get(this.apiUrl+"/"+ this.state.value)
      .then((response) => {
        // Set state with result
          this.setState({ data: response.data });
      });
      }
    
  
    
    
    

  render() {
    return (
      
        <div className="col-md-8 col-md-offset-2">
           
           <div><button type="button" className="btn btn-primary">
               Result: <span className="badge badge-light">{this.state.data.length}</span>
           </button><br /></div>
         <br />
         <form onSubmit={this.handleSubmit}>
        <label>
          Search by Alphabet:
          <input type="text" className="form-control"value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" className="btn btn-primary" value="Search" />
      </form>
            <h1>actors_info</h1>  
            {this.state.data.map((items, i) => (
          <div className="card" key={i}>
           <div className="card-body">
               <h5 className="card-title">{items.first_name}    {items.last_name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              {items.last_name}             
                        </h6>
                        <p className="card-text">{items.film_info}</p>
            </div>
          </div>
        ))}
      </div>
          
       
    );
  }
}

export default Actors;
