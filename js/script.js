

document.addEventListener('click', function (event) {

	// open model for user change
	if (event.target.matches('#userswap-call')) {
		document.getElementById("userswap-modal").style.display = "block";
	}

	// close model for user change
	if (event.target.matches('.modal .close')){
		document.getElementById("userswap-modal").style.display = "none";
	}

	// Sumit user and change
	if (event.target.matches('#user_select')){
		var username = document.getElementById("user-input").value;

		// Store data
		sessionStorage.setItem('username', username);
		document.getElementById("header-username").innerHTML= username;

		document.getElementById("userswap-modal").style.display = "none";
	}

	// post
	if (event.target.matches('#create-post-btn')) {
		var post = document.getElementById("create-input-field").value;
		console.log(post);
		if(post == "" || post == null){
			alert("Please Enter Something to post");
			return;
		}
		username = sessionStorage.getItem('username');

		if( username == "" || username == null){
			username = document.getElementById("header-username").value;
		}

		var is_class_exist = document.getElementsByClassName('active-post-block');
		console.log(is_class_exist);
		if (is_class_exist.length > 0) {
			var id = parseInt(document.getElementById('post-add-anchor').lastChild.getAttribute("postID")); 
  			console.log(id);
  			id++;
  		// 		document.getElementById("demo").innerHTML = x;
		}else{
			var id = 0;
		}

		var target = document.querySelector("#post-add-anchor");
		target.innerHTML +=   '<div class="active-post-block post-'+id+'" postID="'+id+'"><div class="active-post-header"><i class="fa fa-user-circle-o active-user-image" aria-hidden="true"></i><span class="posted-user">'+username+'</span></div><div class="active-post-content"><div class="image-block" id="post-image"></div><div class="text-block"><div id="post-texts">'+post+'</div></div></div><div class="active-post-footer"><div id="post-comment-btn" class="comment-call-'+id+'" postID="'+id+'" onclick="open_comments(this)"><i class="fa fa-comments" aria-hidden="true"></i>Comment</div></div><div class="active-post-comment-block slider slider-comment-'+id+'" style="display: none" id="show-comments-'+id+'"><input type="text" name="comments" placeholder="Enter your comment..." id="user-comment-'+id+'" class="user-comment-input"><button class="submit_comment" onclick="submit_comment('+id+')">submit</button></div></div>';


		document.getElementById("create-input-field").value = "";

	}

	
	

}, false);


// When page loads, modal is called
document.addEventListener('DOMContentLoaded', (event) => {
	//the event occurred
	username = sessionStorage.getItem('username');


	if( username == "" || username == null){
		document.getElementById("userswap-modal").style.display = "block";
	}else{
		document.getElementById("header-username").innerHTML= username;
	}
	
});

// open comments
function open_comments(element) {
	var id = element.getAttribute("postID");
	document.getElementById('show-comments-'+id).classList.toggle('open');

}

//submit comments
function submit_comment(id) {
	postID = id;
	var comments = document.getElementById("user-comment-"+id).value;
		console.log(comments);
		if(comments == "" || comments == null){
			alert("Please Enter some comment");
			return;
		}
		username = sessionStorage.getItem('username');

		if( username == "" || username == null){
			username = document.getElementById("header-username").value;
		}

		var is_class_exist = document.getElementsByClassName('slider-comment-'+id+' .feed-comments');
		console.log("is_class_exist" +is_class_exist);
		console.log("id "+is_class_exist.length);
		if (is_class_exist.length > 0) {
			var cid = parseInt(document.getElementsByClassName('slider-comment-'+id+' .feed-comments').lastChild.getAttribute("commentID")); 
  			console.log("cid "+cid);
  			console.log("id "+id);
  			cid++;


  			id=cid.toString()+id.toString();
  		// 		document.getElementById("demo").innerHTML = x;
		}else{
			var cid = 1;
		}

		var target = document.querySelector(".slider-comment-"+postID);
		target.innerHTML += '<div class="feed-comments" id="feed-comment-'+id+'" commentID="'+id+'"><div class="feed-comments-header"><i class="fa fa-user-circle-o active-user-image" aria-hidden="true"></i><span class="feed-comments-user">abhi</span></div><div class="feed-comments-text"><span class="feed-comments-text">afafasf</span></div><div class="footer-comments"><button class="submit_comment_reply" onclick="submit_comment_reply('+id+')"><i class="fa fa-paper-plane" aria-hidden="true"></i>Reply</button></div></div>';

}
