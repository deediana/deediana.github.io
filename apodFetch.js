'use strict';
window.onload = function(){
document.getElementById('view_button').onclick =  function() {

const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = 'DEMO_KEY'
var date = document.getElementById('date').value

const fetchNASAData = async () => {
    try {
      const response = await fetch(`${url}${api_key}&date=${date}`)
      const data = await response.json()
      console.log('NASA APOD data', data)
      displayData(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const displayData = data => {
    document.getElementById('title').innerHTML = data.title
    document.getElementById('date').innerHTML = data.date
    document.getElementById('pic').src = data.hdurl
  }

  fetchNASAData()

}
}