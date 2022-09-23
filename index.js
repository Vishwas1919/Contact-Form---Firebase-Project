//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCpm4W07KgsmhiOjx-DCIkw9rHm__kc-lI",
    authDomain: "contact-form-fcf07.firebaseapp.com",
    databaseURL: "https://contact-form-fcf07-default-rtdb.firebaseio.com",
    projectId: "contact-form-fcf07",
    storageBucket: "contact-form-fcf07.appspot.com",
    messagingSenderId: "438096460897",
    appId: "1:438096460897:web:488e042ab76922bfe6be20"
  };
 //firebase.initializeApp(firebaseConfig)
firebase.initializeApp(firebaseConfig);
  //firebase.initializeApp(firebaseConfig)

  var contactFormDB= firebase.database().ref("contactform")
 document.getElementById('contactForm').addEventListener('submit',submitForm)
 
 
 function submitForm(e){
    e.preventDefault(e)
       // e.preventDefault()
        var name=document.getElementVal('name')
        var emailid=document.getElementVal('emailid')
        var msgcontact=document.getElementVal('msgContent') 

        console.log(name,emailid,msgcontact)
 

            savemsg(name,emailid,msgcontact);


    }  
    const savemsg=(name,emailid,msgcontact)=>{

        var newcontactform = contactFormDB.push();

        newcontactform.set({
            name:name,
            emailid:emailid,
            msgcontact:msgcontact,
        })
    }


const getElementVal=(id)=>{
    return  document.getElementById(id).value
}




// const firebaseConfig = {
//     //   copy your firebase config informations
//   };
  
//   // initialize firebase
//   firebase.initializeApp(firebaseConfig);
  
//   // reference your database
//   var contactFormDB = firebase.database().ref("contactForm");
  
//   document.getElementById("contactForm").addEventListener("submit", submitForm);
  
//   function submitForm(e) {
//     e.preventDefault();
  
//     var name = getElementVal("name");
//     var emailid = getElementVal("emailid");
//     var msgContent = getElementVal("msgContent");
  
//     saveMessages(name, emailid, msgContent);
  
//     //   enable alert
//     document.querySelector(".alert").style.display = "block";
  
//     //   remove the alert
//     setTimeout(() => {
//       document.querySelector(".alert").style.display = "none";
//     }, 3000);
  
//     //   reset the form
//     document.getElementById("contactForm").reset();
//   }
  
//   const saveMessages = (name, emailid, msgContent) => {
//     var newContactForm = contactFormDB.push();
  
//     newContactForm.set({
//       name: name,
//       emailid: emailid,
//       msgContent: msgContent,
//     });
//   };
  
//   const getElementVal = (id) => {
//     return document.getElementById(id).value;
//   };

