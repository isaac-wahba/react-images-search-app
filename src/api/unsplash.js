import axios from 'axios';


export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID nJSQRfIqfmL5bEHo4sguZknjXZS-lx24noLSGlXI2JI",
      }

});