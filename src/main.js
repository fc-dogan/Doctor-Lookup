import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorServise } from './../src/doctor-servise.js';



$(document).ready(function() {  
  $('#dr-form').submit(function(event){
    event.preventDefault();

    let inputtedIssue = $('#health-issue').val();
    let  inputtedDoctor = $('#doctor-name').val();
    // $('#doctor-name').val("");

    (async () => {
      let doctorServise = new DoctorServise();
      const response = await doctorServise.searchDoctorByName(inputtedDoctor);
      getElements(response);
      console.log(response);
    })();

     function getElements(response) { 
       response.data.forEach(function(data) {
         $("#dr-list").append(`<tr><td>${data.profile.first_name} ${data.profile.last_name}</td><td>${data.profile.title}</td><td>${data.practices[0].visit_address.street}</td></tr>`)
       })
      
    }

    (async () => {
      let doctorServise = new DoctorServise();
      const responseIssue = await doctorServise.searchDoctorByIssue(inputtedIssue);
      getElementsByIssue(responseIssue);
      console.log(responseIssue);
    })();

    function getElementsByIssue(responseIssue) { 
      responseIssue.data.forEach(function(data) {
        $("#dr-list").append(`<tr><td>${data.profile.first_name} ${data.profile.last_name}</td><td>${data.profile.title}</td></tr>`)
      })
    }

  });

});