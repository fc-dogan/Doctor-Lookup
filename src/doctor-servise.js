export class DoctorServise {
  async searchDoctorByName(name, issue) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${issue}&location=45.512230%2C-122.658722%2C100&sort=distance-asc&limit=25&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse;
      if(response.ok && response.status === 200) {
        jsonifiedResponse = await response.json();
      } else {
         jsonifiedResponse = false;
      }  
      return jsonifiedResponse;
    }catch (error) {
      return false;
    }
  }
} 