
// open model for user change
document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('#userswap-call')) return;

	document.getElementById("userswap-modal").style.display = "block";

}, false);

// close model for user change
document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.modal .close')) return;

	document.getElementById("userswap-modal").style.display = "none";

}, false);

// Sumit user and change
document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('#user_select')) return;

	var username = document.getElementById("user-input").value;

	// Store data
	sessionStorage.setItem('username', username);
	document.getElementById("header-username").innerHTML= username;

	document.getElementById("userswap-modal").style.display = "none";

}, false);

document.addEventListener('DOMContentLoaded', (event) => {
	//the event occurred
	username = sessionStorage.getItem('username');


	if( username == "" || username == null){
		document.getElementById("userswap-modal").style.display = "block";
	}else{
		document.getElementById("header-username").innerHTML= username;
	}
	
});

// Post 
document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('#create-post-btn')) return;

	var post = document.getElementById("create-input-field").value;

}, false);


// Sumit user and change
document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('#post-comment-btn')) return;
	console.log("yes");

	document.getElementById('show-comments').classList.toggle('open');

}, false);

