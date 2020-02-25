firebase.initializeApp({
  	// REMOVED API INFO.
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});



document.getElementById("submit").onclick = function formSubmit(event){
 	
	event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

	// console.log("click");

    if(firstName == "" || lastName == "" || email == "") {
        alert("Plese make sure all fields are filled out before submiting. Thank You!")
    }

    else {
        db.collection("userEmails").add({
        first: firstName,
        last: lastName,
        email: email
        })
        .then(function(docRef) {
            // console.log("Document written with ID: ", docRef.id);
            document.getElementById("emailForm").reset();
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

};
