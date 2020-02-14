import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorSevise } from './../src/doctor-servise.js';



$(document).ready(function() {
    
  $('form').submit(function(event){
    event.preventDefault();

    inputtedHealthIssue = $('#health-issue').val();
    inputtedDoctor = $('#doctor-name').val();

    (async () => {
      let doctorServise = new DoctorSevise();
      const response = await doctorServise.searchDoctor(name,medicalIssue);
      getElements(response);
      
    })();

    function getElements(response) {
      
    }

  });

});