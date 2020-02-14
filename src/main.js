import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorServise } from './../src/doctor-servise.js';



$(document).ready(function() {
    
  $('form').submit(function(event){
    event.preventDefault();

    let inputtedHealthIssue = $('#health-issue').val();
    let  inputtedDoctor = $('#doctor-name').val();

    (async () => {
      let doctorServise = new DoctorServise();
      const response = await doctorServise.searchDoctor(inputtedDoctor, inputtedHealthIssue);
    //   getElements(response);
      console.log(response);
    })();

    // function getElements(response) {
      
    // }

  });

});