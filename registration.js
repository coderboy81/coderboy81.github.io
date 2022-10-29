function formValidate(){
    var studentname = document.forms.registrationDetails.studentname.value;
    var courese = document.forms.registrationDetails.courese.value;
    var contact = document.forms.registrationDetails.contact.value;
    var email = document.forms.registrationDetails.email.value;
    var message = document.forms.registrationDetails.message.value;

    if (studentname =="") {
        alert("Please key in a user name.")
        studentname.focus();
        e.preventdefault()
        return false;
    } else if (courese =="") {
        alert("Please make a selection")
        courese.focus();
        return false;
    } else if (contact == undefined) {
        alert("please key in your phone number")
        contact.focus();
        return false;
    } else if (email =="") {
        alert("Please key in your email address")
        email.focus();
        return false;
    } else {
        var detail = JSON.stringify([courese, contact, email, message ]);
        localStorage.setItem(studentname, detail);
        return true;
    }
}
function addRegistrant() {
	var studentname = document.forms.registrationDetails.student_name.value;
	var courese = document.forms.registrationDetails.courese.value;
    var contact = document.forms.registrationDetails.contact.value;
    var email = document.forms.registrationDetails.email.value;
	var message = document.forms.registrationDetails.message.value;
	const detail = JSON.stringify([courese, contact, email, message]);
	localStorage.setItem(studentname, detail);
	showAll();
}
function editRegistrant() {
	var studentname = document.forms.registrationDetails.student_name.value;
    let data = JSON.parse(localStorage.getItem(studentname));
	document.forms.registrationDetails.courese.value = data[0]
    document.forms.registrationDetails.contact.value = data[1]
    document.forms.registrationDetails.email.value = data[2]
    document.forms.registrationDetails.message.value = data[3];
}
function deleteRegistrant() {
	var studentname = document.forms.registrationDetails.student_name.value;
	localStorage.removeItem(studentname);
	showAll();
	document.forms.registrationDetails.student_name.value = null;
	document.forms.registrationDetails.courese.value = null;
	document.forms.registrationDetails.email.value = null;
	document.forms.registrationDetails.contact.value = null;
	document.forms.registrationDetails.message.value = null;
}
function clearAll() {
	localStorage.clear();
	showAll();
	document.forms.registrationDetails.student_name.value = null;
	document.forms.registrationDetails.courese.value = null;
	document.forms.registrationDetails.email.value = null;
	document.forms.registrationDetails.contact.value = null;
	document.forms.registrationDetails.message.value = null;
}

function showAll() {

		var key = "";
		var list = "<tr><th>Name</th><th>Courese</th><th>Contact</th><th>Email</th><th>Message</th></tr>\n";
		var i = 0;

		if (localStorage.length == 0) {
			list += "<tr><td><i>empty</i></td><td><i>empty</i></td><td><i>empty</i></td><td><i>empty</i></td><td><i>empty</i></td></tr>\n";
		  } else {
			for (i = 0; i < localStorage.length; i++) {

			  key = localStorage.key(i);
			  let data = JSON.parse(localStorage.getItem(key));

			  list += "<tr><td>" + key + "</td>\n<td>" +
				data[0] + "</td>\n<td>" + data[1] + "</td>\n<td>" + data[2] + "</td>\n<td>" + data[3] + "</td></tr>\n";

			}
		}
		document.getElementById('list').innerHTML = list;
}
