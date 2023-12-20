import React, { useState } from 'react'
import './Style.css'

const api = {
    base: 'https://api.openweathermap.org/data/2.5/',
    key: '8fd8aa9159ea075af145a327fc790427'
}


function Weather() {
    const [weather, setWeather] = useState({})
    const [city, setCity] = useState('')
    function search() {
        fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((data) => setWeather(data))
    }
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }
    return (
        <>
            <center className='inputFiled'>

                <input type='text' placeholder='Enter City' onChange={(e) => setCity(e.target.value)} /><br /><br />
                <button type='button' onClick={search}><i class="fa-solid fa-magnifying-glass"></i>Submit</button>

                <br></br><br></br>

            </center>
            {

                (typeof weather.main != "undefined") ? (


                    <div class="widget">
<center>
                        <div class="left-panel panel">  
                        <div class="date">
                                <div className="date">{dateBuilder(new Date())}</div>
                                </div>
                            <div class="city">
                                <p> <b>{weather.name}</b> </p>
                            </div>
                            <div class="temp">
                                <p>Temp:<b>{weather.main.temp}°c</b></p>
                                
                            </div>
                        </div>
                        </center>
                        <center>
                        <div class="right-panel panel">
                            <p>Clouds:<br></br> <b>{weather.weather[0].description}</b></p>
                            <p style={{marginTop:'4rem'}}>Country:<b>{weather.sys.country}</b></p>
                        </div>
                        </center>
                    </div>


                ) : ("😛")

            }


        </>
    )
}

export default Weather

