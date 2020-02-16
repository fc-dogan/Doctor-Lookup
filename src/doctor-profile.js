export function doctorProfile(data) {
   let doctor = {
    first: `${data.profile.first_name}`,
    last: `${data.profile.last_name}`,
    title: `${data.profile.title}`,
    address: `${data.practices[0].visit_address.street +". "+ data.practices[0].visit_address.city +", " + data.practices[0].visit_address.state}`,
    phone: `${data.practices[0].phones[0].number}`,
  };
   let acceptsPatient = `${data.practices[0].accepts_new_patients}`;
   let newPatient;
    if ( acceptsPatient !== "true"){
      newPatient = "no"
    } else{
      newPatient = "yes"
    }

   let image = `${data.profile.image_url}`;

   let doctorInfo = `<tr>
   <td><img src='${image}'></td>
   <td>${doctor.first} ${doctor.last}</td>
   <td>${doctor.title}</td>
   <td>${doctor.address}</td>
   <td>${doctor.phone}</td>
   <td>${newPatient}</td>
   </tr>`;

   return doctorInfo;
}


