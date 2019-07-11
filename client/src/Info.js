import React, { Component } from "react";
import axios from 'axios';



class Info extends Component {
  constructor(props) {
    super(props);
    
        this.state = {
            data: [],
            value:""
        };
      this.apiUrl = 'http://localhost:3001/info';

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
         <form onSubmit={this.handleSubmit}>
        <label>
         search by id:
          <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
            <h1>film_info</h1>  
            {this.state.data.map((items, i) => (
          <div className="card" key={i}>
           <div className="card-body">
               <h5 className="card-title">{items.first_name}    {items.last_name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              Actor id:<span className="badge badge-success">{this.state.value}</span></h6>            
            <p className="card-text">{items.film_info}</p>
            </div>
          </div>
        ))}
      </div>
          
       
    );
  }
}

export default Info;
