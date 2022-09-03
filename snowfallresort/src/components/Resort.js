import React, { useState, useEffect } from "react";
import axios from "axios"
import "./Resort.css"
import heart from "../assets/heart.png"
import heartFavourite from "../assets/heartFavourite.png"
import resort1 from "../assets/resort1.jpg"
import resort2 from "../assets/resort2.jpg"
import resort3 from "../assets/resort3.jpg"

const Resort = () => {

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [location, setLocation] = useState([{}]);
  const [isLoading, setLoading] = useState(true);

  const options1 = {
    method: 'GET',
    url: 'https://ski-resort-forecast.p.rapidapi.com/Meribel/forecast',
    params: { units: 'm', el: 'top' },
    headers: {
      'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com',
      'X-RapidAPI-Key': 'e6c04365aemsh9f7d523e5c7078bp102a2cjsn68fd6f9efd33'
    }
  }
  const options2 = {
    method: 'GET',
    url: 'https://ski-resort-forecast.p.rapidapi.com/Courchevel/forecast',
    params: { units: 'm', el: 'top' },
    headers: {
      'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com',
      'X-RapidAPI-Key': 'e6c04365aemsh9f7d523e5c7078bp102a2cjsn68fd6f9efd33'
    }
  }
  const options3 = {
    method: 'GET',
    url: 'https://ski-resort-forecast.p.rapidapi.com/Val Thorens/forecast',
    params: { units: 'm', el: 'top' },
    headers: {
      'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com',
      'X-RapidAPI-Key': 'e6c04365aemsh9f7d523e5c7078bp102a2cjsn68fd6f9efd33'
    }
  }

  const options4 = {
    method: 'GET',
    url: `https://ski-resort-forecast.p.rapidapi.com/${location}/forecast`,
    params: { units: 'm', el: 'top' },
    headers: {
      'X-RapidAPI-Host': 'ski-resort-forecast.p.rapidapi.com',
      'X-RapidAPI-Key': 'e6c04365aemsh9f7d523e5c7078bp102a2cjsn68fd6f9efd33'
    }
  }

  const searchLocation = () => {
    axios.request(options4).then(response => {
      console.log(response.data)
      setLocation(response.data)
    })
  }

  const fetchData = () => {
    axios.request(options1).then(response => {
      console.log(response.data)
      setData1(response.data)
      return axios.request(options2);
    }).then(response => {
      console.log(response.data)
      setData2(response.data)
      return axios.request(options3);
    }).then(response => {
      console.log(response.data)
      setData3(response.data)
      setLoading(false)
    }
    ).catch(error => console.log(error.response))
  }


  useEffect(() => {
    fetchData()
  }, [])


  if (isLoading) {

    return (
      <div className="text-center">...Loading</div>
    )

  } else {

    return (

      <div className="App">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="bg-white shadow-lg p-4 md:w-1/3 flex flex-col text-center items-center ">
            <div className="w-full text-3xl font-bold flex flex-col justify-center px-5 py-2">{data1.basicInfo.name}</div>
            <div className="region px-5">{data1.basicInfo.region}</div>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-1 "><img className="w-[500px] mx-auto my-4" src={resort1} alt=""></img></div>
            <div className="text-center mb-4">Today</div>
            <div className="text-center">Weather: {data1.forecast5Day[0].am.summary}</div>
            <div className="text-left ml-4">Snow size: {data1.forecast5Day[0].am.snow}</div>
            <div className="text-left ml-4">{data1.summary3Day}</div>
            <div className="text-left ml-4">More info:</div>
            <div className="text-left ml-4 mb-10">{data1.basicInfo.url}</div>
            <div className="mb-4 ml-4"><img className="w-[22px]" src={heart} alt=""></img></div>
          </div>
          <div className="bg-white shadow-lg p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="text-3xl font-bold px-5 py-2">{data2.basicInfo.name}</div>
            <div className="region px-5">{data2.basicInfo.region}</div>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-1"><img className="w-[500px] mx-auto my-4" src={resort2} alt=""></img></div>
            <div className="text-center mb-4">Today</div>
            <div className="text-center">Weather: {data2.forecast5Day[0].am.summary}</div>
            <div className="text-left ml-4">Snow size: {data2.forecast5Day[0].am.snow}</div>
            <div className="text-left ml-4">{data2.summary3Day}</div>
            <div className="text-left ml-4">More info:</div>
            <div className="text-left ml-4 mb-10">{data2.basicInfo.url}</div>
            <div className="mb-4 ml-4"><img className="w-[22px]" src={heart} alt=""></img></div>
          </div>
          <div className="bg-white shadow-lg p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-full text-3xl font-bold px-5 py-2">{data3.basicInfo.name}</div>
            <div className="region px-5">{data3.basicInfo.region}</div>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-1"><img className="w-[500px] mx-auto my-4" src={resort3} alt=""></img></div>
            <div className="text-center mb-4">Today</div>
            <div className="text-center">Weather: {data3.forecast5Day[0].am.summary}</div>
            <div className="text-left ml-4">Snow size: {data3.forecast5Day[0].am.snow}</div>
            <div className="text-left ml-4">{data3.summary3Day}</div>
            <div className="text-left ml-4">More info:</div>
            <div className="text-left ml-4 mb-10">{data3.basicInfo.url}</div>
            <div className="mb-4 ml-4"><img className="w-[22px]" src={heartFavourite} alt=""></img></div>
          </div>
          </div>
          <div className="flex justify-center mt-12 mb-9 sm:text-5xl text-2xl font-bold">Search a Ski Resort</div>
          <div className="flex justify-center sm:text-xl">
          <input onChange={(e) => setLocation(e.target.value)} placeholder="Search location..." type="text"></input>
          <button className="ml-5 bg-slate-400 text-white rounded-md px-7 py-2" onClick={searchLocation}>Search</button>
          </div>

          {typeof location.basicInfo === 'undefined' ? (
            <div></div>
          ) : (
            <div className="grid grid-cols1 lg:grid-cols-1 xl:grid-cols-1 lg:px-60 py-10 gap-5 font-body">
         <div className="bg-white shadow-lg rounded-lg ">
            <div className="text-center text-3xl font-bold px-5 py-2 mt-2">{location.basicInfo.name}</div>
            <div className="text-center px-5 mb-4">{location.basicInfo.region}</div>
            <div className="text-center mb-4">Today</div>
            <div className="text-center">Weather: {location.forecast5Day[0].am.summary}</div>
            <div className="text-left ml-4">Snow size: {data3.forecast5Day[0].am.snow}</div>
            <div className="text-left ml-4">{location.summary3Day}</div>
            <div className="text-left ml-4">More info:</div>
            <div className="text-left ml-4 mb-10">{location.basicInfo.url}</div>
            <div className="mb-4 ml-4"><img className="w-[22px]" src={heart} alt=""></img></div>
          </div>
            </div>
          )}

      </div>

    )
  }
}


export default Resort