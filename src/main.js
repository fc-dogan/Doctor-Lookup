import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './../img/stet.jpg'
import { DoctorServise } from './../src/doctor-servise.js';



$(document).ready(function() {  
  $('#dr-form').submit(function(event){
    event.preventDefault();

    let inputtedIssue = $('#health-issue').val();
    let inputtedDoctor = $('#doctor-name').val();
    $('#doctor-name').val("");
    $("#first-screen").hide();
    $("#doctor-list").show();

    let doctorServise = new DoctorServise();
    (async () => {
      
      const response = await doctorServise.searchDoctorByName(inputtedDoctor, inputtedIssue);
      getElements(response);
      console.log(response);
    })();

     function getElements(response) { 
       if ( !inputtedIssue && !inputtedDoctor) {
          $("#dr-list").append(`<tr><td>Please enter a search value. <br><a href='index.html'> Click here</a> to try again</td></tr>`)
        } else if(response){
            response.data.forEach(function(data) {
              if ( response.meta.count > 0) {
                $("#dr-list").append(`<tr>
                <td><img src='${data.profile.image_url}'></td>
                <td>${data.profile.first_name} ${data.profile.last_name}</td>
                <td>${data.profile.title}</td>
                <td>${data.practices[0].visit_address.street +". "+ data.practices[0].visit_address.city +", " + data.practices[0].visit_address.state}</td>
                <td>${data.practices[0].phones[0].number}</td></tr>`)
              } else {
                $("#dr-list").append(`<tr><td>Sorry, there is no doctor meet your search criteria. <br><a href='index.html'> Click here</a> to try again</td></tr>`)
              }      
            })
      } else {
        $("#dr-list").append(`<tr><td>There was an error processing your request. <br><a href='index.html'> Click here</a> to try again</td></tr>`)
      }
    }
    

    // (async () => {
    //   let doctorServise = new DoctorServise();
    //   const responseIssue = await doctorServise.searchDoctorByIssue(inputtedIssue);
    //   getElementsByIssue(responseIssue);
    //   console.log(responseIssue);
    // })();

    // function getElementsByIssue(responseIssue) {
    //   if(responseIssue){  
    //     if(responseIssue.meta.count > 0 ){
    //       responseIssue.data.forEach(function(data) {
    //         $("#dr-list").html(`<tr><td>${data.profile.first_name} ${data.profile.last_name}</td><td>${data.profile.title}</td></tr>`)
    //       })
    //     }
    //   }else {
    //       $("#dr-list").text(`Sorry, there is no doctor meet your search criteria. 
    //       <a href='index.html'>Click here</a> to try again.`)
    //     }  
    // }

  });

});