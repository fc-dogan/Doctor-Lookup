# _Doctor Lookup_

#### _Website application that user can receive a list of doctors who can treat their medical issue , 02-14-2020_

#### By _**Fatma Dogan**_

## Description

_Website where users may enter a medical issue(ie:"sore throat", "rash", etc.) into a form, submit it, and receive a list of doctors who can treat their medical issue in Portland, OR_

## Specifications

* User enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
    * __Input:__ sore throat
    * __Output:__ a list of doctors who can treat sore throat
* User enter a doctor name to receive a list of doctors in the Portland area that fit the search query.
    * __Input:__ David
    * __Output:__ a list of doctors who names David.
* If the query response includes any doctors, the following information include about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients.
    * __Input:__ David
    * __Output:__ 
      * name: David Huberty, MD
      * address: 19250 SW 65th, Tualatin,OR
      * phone number: 50365600836
      * accepts new patients: yes
* If the API call results in an error, the application returns a notification of what the error is.               
* If the query response doesn't include any doctors, the application returns a notification that no doctors meet the criteria.

## Setup/Installation Requirements

* Open your terminal and clone this repository with the following command:
  * git clone https://github.com/fc-dogan/Doctor-Lookup.git

* Move into the cloned repository:
  * cd Doctor-Lookup

* In the top level of the project's directory, create a hidden file for your API key:
  * touch .env

* Create an account with BetterDoctor to retrieve your own free API key:
  * https://developer.betterdoctor.com/

* Add the API key to your .env file:
  * API_KEY = YOUR UNIQUE API KEY GOES HEREs

* Add .env to your .gitignore file. 
````
    node_modules/
    dist/
    .DS_Store
    .env
````
* Install npm
  * npm install


## Technologies Used

* HTML
* CSS
* Bootsrap
* JavaScript 
* jQuery
* node.js
* BetterDoctor API


