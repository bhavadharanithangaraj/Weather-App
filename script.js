let weather = {  
    "apiKey": "043b2f3d7fd5e1902007306affbcb9c2",  
    fetchWeather: function (city) {  
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid="+ this.apiKey)  
      .then((response)=>response.json())  
      .then((data)=>this.displayWeather(data));  
    },  
    displayWeather: function (data) {  
      const {name}=data;  
      const {icon,description}=data.weather[0];  
      const {temp,humidity}=data.main;  
      const {speed}=data.wind;  
      // console.log(name,description,icon,temp,humidity,speed);  
      document.querySelector(".city").innerText="Weather in " + name;  
      document.querySelector(".description").innerText=description;  
      document.querySelector(".temp").innerText=temp + "°C";  
      document.querySelector(".humidity").innerText="Humidity: "+humidity+"%";  
      document.querySelector(".wind").innerText="Wind Speed: "+speed+" km/h";     
      document.querySelector(".weather").classList.remove("loading");  
      document.body.style.backgroundImage="url('https://source.unsplash.com/random/1600x900/?"+ name +")";  
    },  
    search: function () {  
      this.fetchWeather(document.querySelector(".search-bar").value);  
    }  
  };  
 //We create an object named ‘weather’ to store a number of variables and data. First, we store our API Key in a variable. The ‘fetchWeather’ function will return the data in the ‘.json’ file and pass it in the ‘displayWeather’ function. This function gets the desired data from the file and replaces the sample text in our HTML file with the corresponding values. We also edit the Unspalsh URL we were using to get a background image by replacing the ‘landscape’ with the name of the city entered. It will then return a picture associated with the location as the background image of our site. The ‘search’ function will call the ‘fetchWeather’ function which is, again, returning the ‘.json’ file for the location entered from the API.
 
  document.querySelector(".search button").addEventListener("click", function () {  
    weather.search();    
  });  
  document.querySelector(".search-bar").addEventListener("keyup",function(event) {  
    if (event.key=="Enter") {  
      weather.search()  
    }   
  });  
  weather.fetchWeather("Coimbatore");  