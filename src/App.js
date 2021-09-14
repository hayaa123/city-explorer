import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationForm from './component/LocationForm';
import axios
 from 'axios';
import Result from './component/Result';
import Header from './component/Header';
import AlertError from './component/AlertError';
import WeatherCard from './component/WeatherCard';
import MovieCard from './component/MovieCard';
import { Row } from 'react-bootstrap';

export class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      city_name:"",
      lon:"",
      lat:"",
      movie:[],
      country_code :"",
      isSubmit : false,
      error: "",
      showAlert:false,
      weatherData :[],
    }
  }
  getName=(e)=>{
    this.setState({
      showAlert:false,
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
      // console.log(responseData.error)
      this.setState({
        city_name:responseData.address.name,
        lon:responseData.lon,
        lat:responseData.lat,
        isSubmit:true,
        country_code : responseData.address.country_code
      })
     
    }).catch(error=>{
      this.setState({
        showAlert:true,
        error : `${error}`
      })
      
    }) 
    .then(() => {
      axios
        .get(
          `${process.env.REACT_APP_LOCAL_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`
        )
        .then((res) => {
          // console.log(res.data)
          this.setState({
            weatherData : res.data
          })
        })
        .catch((err) => {
          this.setState({
            showAlert: true,
            error : `${err}`,
          })
        })
    }).then(() => {
      axios
        .get(
          `${process.env.REACT_APP_LOCAL_URL}/movie?country_code=${this.state.country_code}`
        )
        .then((res) => {
          // console.log(res.data)
          this.setState({
            movie : res.data
          })
        })
        .catch((err) => {
          this.setState({
            showAlert: true,
            error : `${err}`,
          })
        })
    });
    console.log(this.state.weatherData)
  }
  render() {
    return (
      <>
        <Header/>  
        <LocationForm getName={this.getName} submitHandeler={this.submitHandeler}/>
        {this.state.isSubmit &&
        <> 
        <div style ={{position:"relative", marginBottom:100}}>
        <Result city_name={this.state.city_name} lon={this.state.lon} lat ={this.state.lat} />
        <WeatherCard weatherData={this.state.weatherData}/>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=1-5`} style ={{width:1500,display:'block',margin:"auto"} } alt="map"/> 
        </div>
        <div>
          <Row><MovieCard movie={this.state.movie}/></Row>
        </div>
        </>
        }
        {
          this.state.showAlert && <AlertError error ={this.state.error}/>
        }
      </>
    )
  }
}

export default App

