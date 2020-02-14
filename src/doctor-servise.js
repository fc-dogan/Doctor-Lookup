export class DoctorServise {
  async searchDoctorByName(name) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=45.512230%2C-122.658722%2C100&sort=distance-asc&limit=25&user_key=${process.env.API_KEY}`);
      console.log(response);

      if(response.ok && response.status === 200) {
       let jsonifiedResponse = await response.json();
       return jsonifiedResponse;
      } else {
        throw Error("There was an error processing your request")
      }  
    }catch (error) {
      return false;
    }
  }
}