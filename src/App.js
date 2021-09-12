import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationForm from './component/LocationForm';
import axios
 from 'axios';
import Result from './component/Result';
import Header from './component/Header';

export class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      city_name:"",
      lon:"",
      lan:"",
      isSubmit : false
    }
  }
  getName=(e)=>{
    this.setState({
      isSubmit : false,
      city_name: `${e.target.value}`
    })
  }

  submitHandeler = (e)=>{
    e.preventDefault();
    let config={
      method:"GET",
      baseURL:`https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city_name}`
    }
    axios(config).then(res=>{
      let responseData=res.data[0]
      this.setState({
        city_name:responseData.display_name,
        lon:responseData.lon,
        lat:responseData.lat,
        isSubmit:true
      })
    })
  }

  render() {
    return (
      <>
        <Header/>  
        <LocationForm getName={this.getName} submitHandeler={this.submitHandeler}/>
        {this.state.isSubmit &&
        <> 
        
        <Result city_name={this.state.city_name} lon={this.state.lon} lat ={this.state.lat}/>
          
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=1-5`} style ={{width:1215} } alt="map"/>
          
        </>
        }
      </>
    )
  }
}

export default App

