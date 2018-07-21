// Initialize Firebase
var config = {
    apiKey: "AIzaSyAfGUzsQnpnlOiCksdE2DGYcxD7ei61NKk",
    authDomain: "stocksmaven.firebaseapp.com",
    databaseURL: "https://stocksmaven.firebaseio.com",
    projectId: "stocksmaven",
    storageBucket: "stocksmaven.appspot.com",
    messagingSenderId: "856602339240"
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {
    timestampsInSnapshots: true
};
firestore.settings(settings);

//firestore ref
var db = firebase.firestore();
var auth = firebase.auth();

/****************
Buttons
****************/


var submitButton = document.getElementById('submit_modal');
var submit_Contact_Button = document.getElementById('contact_submit');
var submit_performance_button = document.getElementById('performance_admin_form');
var end_form_display_button = document.getElementById('end_form_display_button');

var Auth_form_button = document.getElementById('auth_form');
console.log(Auth_form_button);


var date;


/****************
Eventlistners
****************/
if (submitButton) {
    submitButton.addEventListener('click', submitmodalform);
}

if (submit_Contact_Button) {
    submit_Contact_Button.addEventListener('click', submitcontactform);
}

if (submit_performance_button) {
    submit_performance_button.addEventListener('submit', performance_submit);
}

if (Auth_form_button) {
    Auth_form_button.addEventListener('submit', Auth_form_submit);
}



/****************
Functions
****************/

// To get the form field value
function getIDValue(id) {
    return document.getElementById(id).value;
}

function resetIDValue(id) {
    return document.getElementById(id).value = '';
}


function submitmodalform() {

    var name = getIDValue('name');
    var email = getIDValue('email');
    var number = getIDValue('number');

    date = new Date().toDateString()
    submitform(date, name, email, number);


}


function submitcontactform(e) {
    e.preventDefault();

    var name = getIDValue('contact_name');
    var email = getIDValue('contact_email');
    var number = getIDValue('contact_phone');
    var sub = getIDValue('contact_subject');
    var text = getIDValue('contact_text');

    console.log(`name is ${name} , ${email} and number is ${number} , subject is ${sub} and text is ${text}`);

    date = new Date().toDateString()
    console.log(date);

    submit_contact_form(date, name, email, number, sub, text);


}

function performance_submit(e) {
    e.preventDefault();

    var serial_No = getIDValue('serial_No');
    var Entry_Date = getIDValue('Entry_Date');
    var script = getIDValue('script');
    var Entry_Price = getIDValue('Entry_Price');
    var Stop_loss = getIDValue('Stop_loss');
    var Target = getIDValue('Target');
    var AbsReturn = getIDValue('AbsReturn');
    var Call_close = getIDValue('Call_close');
    var Call_status = getIDValue('Call_status');

    //   submit_performance_button.style.display = "none";

    Object.assign(submit_performance_button.style, {
        display: "none"
    });
    Object.assign(end_form_display_button.style, {
        display: "block"
    });

    
    setTimeout(function () {
        Object.assign(submit_performance_button.style, {
            display: "block"
        });
        Object.assign(end_form_display_button.style, {display: "none"});
    }, 3000);



    submit_performance_form(serial_No, Entry_Date, script, Entry_Price, Stop_loss, Target, AbsReturn, Call_close, Call_status);
    
    var serial_No = resetIDValue('serial_No');
    var Entry_Date = resetIDValue('Entry_Date');
    var script = resetIDValue('script');
    var Entry_Price = resetIDValue('Entry_Price');
    var Stop_loss = resetIDValue('Stop_loss');
    var Target = resetIDValue('Target');
    var AbsReturn = resetIDValue('AbsReturn');
    var Call_close = resetIDValue('Call_close');
    var Call_status = resetIDValue('Call_status');
}


/****************
Firebase sending data
****************/

//modal data
function submitform(date, name, email, number) {
    db.collection("Lead").add({
            date: date,
            name: name,
            email: email,
            number: number
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

}


//Contact data
function submit_contact_form(date, name, email, number, sub, text) {
    db.collection("Enquiry").add({
            date: date,
            name: name,
            email: email,
            number: number,
            subject: sub,
            text: text
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

}

//performance data

function submit_performance_form(serial_No, Entry_Date, script, Entry_Price, Stop_loss, Target, AbsReturn, Call_close, Call_status) {
    db.collection("Performance").add({
            serial_No: serial_No,
            Entry_Date: Entry_Date,
            script: script,
            Entry_Price: Entry_Price,
            Stop_loss: Stop_loss,
            Target: Target,
            AbsReturn: AbsReturn,
            Call_close: Call_close,
            Call_status: Call_status
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

}



/****************
Modal
****************/

//auto load the modal after 5s
$(window).on('load', function () {
    setTimeout(function () {
        $('#myModal').modal('show');
    }, 5000);
});

//close the modal when clicked the close button
$("#submit_modal").click(function () {
    $('#myModal').modal('hide');
});



/****************
Auth
****************/


function Auth_form_submit(e){
    e.preventDefault();
    
    var email = getIDValue('inputEmail3');
    var password = getIDValue('inputPassword3');
    

  auth.signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorMessage);
});
    
}












