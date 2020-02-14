export class DoctorServise {
  async searchDoctor(name, medicalIssue) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${medicalIssue}&location=45.512794%2C%20-122.679565%2C100&user_location=45.512794%2C%20-122.679565&skip=0&limit=10&user_key=${process.env.API_KEY}
      `);
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