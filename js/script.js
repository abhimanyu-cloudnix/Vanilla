// getter for full name
var user = {
	firstname: "",
	lastname : "",
	get fullName() {
		if(this.firstname == "" || this.lastname == ""){
			return;
		}else{
			return this.firstname + " " + this.lastname;
		}
	}
};


// creating post
function create_post(id, post){
	var username = user.fullName;

	var post = '<div class="active-post-block post-'+id+'" postID="'+id+'"><div class="active-post-header"><i class="fa fa-user-circle-o active-user-image" aria-hidden="true"></i><span class="posted-user">'+username+'</span></div><div class="active-post-content"><div class="text-block"><div id="post-texts">'+post+'</div></div></div><div class="active-post-footer"><button id="post-comment-btn" class="comment-call-'+id+'" postID="'+id+'" onclick="open_comments(this)"><i class="fa fa-comments" aria-hidden="true"></i>Comment</button></div><div class="active-post-comment-block slider slider-comment-'+id+'" style="display: none" id="show-comments-'+id+'"><input type="text" name="comments" placeholder="Enter your comment..." id="user-comment-'+id+'" class="user-comment-input" onkeyup="call_submit_comment('+id+')"><button class="submit_comment" onclick="submit_comment('+id+')">submit</button></div></div>'
	return post ;
}

// creating comments
function create_comment(id, comment, postID){
	var username = user.fullName;

	var post = '<div class="feed-comments" id="feed-comment-'+id+'" commentID="'+id+'"><div class="feed-comments-header"><i class="fa fa-user-circle-o active-user-image" aria-hidden="true"></i><span class="feed-comments-user">'+username+'</span></div><div class="feed-comments-text"><span class="feed-comments-text">'+comment+'</span></div><div class="footer-comments"><button class="submit_comment_reply" id="submit_comment_reply-'+id+'" onclick="submit_comment_reply('+id+')"><i class="fa fa-reply-all" aria-hidden="true"></i>Reply</button><div class="reply-section" id="reply-section-'+id+'" style="display:none"><input type="text" name="reply" placeholder="Enter your reply..." id="user-reply-'+id+'" class="user-reply-input" onkeyup="call_submit_reply('+id+')" ><button class="submit_reply" id="submit_reply-'+id+'" onclick="submit_reply('+id+')">Reply Now</button></div></div></div>'
	return post ;
}

// creating reply
function create_reply(id, reply, postID){
	var username = user.fullName;

	var reply = '<div class="feed-reply" id="feed-reply-'+id+'" commentID="'+id+'"><div class="feed-reply-block"><i class="fa fa-user-circle-o active-user-image" aria-hidden="true"></i><span class="feed-reply-user">'+username+'</span><span class="feed-reply-text">'+reply+'</span></div><div class="footer-reply"><button class="submit_replied_reply" id="submit_replied_reply-'+id+'" onclick="submit_replied_reply('+id+')"><i class="fa fa-reply-all" aria-hidden="true"></i>Reply</button><div class="reply-section" id="reply-section-'+id+'" style="display:none"><input type="text" name="reply" placeholder="Enter your reply..." id="user-reply-'+id+'" class="user-reply-input" onkeyup="call_submit_reply('+id+')"><button class="submit_reply" id="submit_reply-'+id+'" onclick="submit_reply('+id+')">Reply Now</button></div></div></div>'
	return reply ;
}



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
		var fname = document.getElementById("user-fname").value;
		var lname = document.getElementById("user-lname").value;
		if(fname == "" || lname == ""){
			alert("Please enter both First and Last name !! ");
			return;
		}

		// setting Username
		user.firstname = fname;
		user.lastname = lname;
		username = user.fullName;

		document.getElementById("header-username").innerHTML= username;

		document.getElementById("userswap-modal").style.display = "none";
	}

	// Craeting a new post
	if (event.target.matches('#create-post-btn')) {
		var post = document.getElementById("create-input-field").value;
		console.log(post);
		if(post == "" || post == null){
			alert("Please Enter Something to post");
			return;
		}
		username = user.fullName;

		// getting last id
		var is_class_exist = document.getElementsByClassName('active-post-block');
		console.log(is_class_exist);
		if (is_class_exist.length > 0) {
			var id = parseInt(document.getElementById('post-add-anchor').lastChild.getAttribute("postID")); 
  			// console.log(id);
  			id++;
		}else{
			var id = 0;
		}

		var target = document.querySelector("#post-add-anchor");
		// creating post with id
		post_content = create_post(id, post);
		target.innerHTML += post_content;

		document.getElementById("create-input-field").value = "";

	}
	

}, false);


// When page loads, modal is called 
document.addEventListener('DOMContentLoaded', (event) => {
	//the event occurred
	username = user.fullName;

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
		username = user.fullName;

		// getting last id
		var is_class_exist = document.getElementById('show-comments-'+id);
		var eleChild = is_class_exist.getElementsByClassName('feed-comments');
		console.log(eleChild.length);
		if (eleChild.length > 0) {
			cid=eleChild.length+1;
		}else{
			var cid = 1;
		}
		id = cid+""+id;
		console.log("id "+id);

		console.log("postID - "+postID);
		// creating comment with new id
		var comment_text = create_comment(id, comments, postID);
		var target = document.querySelector(".slider-comment-"+postID);

		target.innerHTML += comment_text;

}

// open reply input box
function submit_comment_reply(id){
	document.getElementById("submit_comment_reply-"+id).style.display = "none";
	document.getElementById("reply-section-"+id).style.display = "block";
}
// 
function submit_replied_reply(id){
	document.getElementById("submit_replied_reply-"+id).style.display = "none";
	document.getElementById("reply-section-"+id).style.display = "block";
}


//submit reply
function submit_reply(id) {
	postID = id;
	var reply = document.getElementById("user-reply-"+id).value;
		if(reply == "" || reply == null){
			alert("Please Enter some comment");
			return;
		}
		username = user.fullName;

		// getting last id
		var is_class_exist = document.getElementById('reply-section-'+id);
		var eleChild = is_class_exist.getElementsByClassName('feed-reply');
		console.log(eleChild.length);
		if (eleChild.length > 0) {
			cid=eleChild.length+1;
		}else{
			var cid = 1;
		}
		id = cid+""+id;
		console.log("id "+id);

		console.log("postID - "+postID);
		// creating reply with new id
		var reply_text = create_reply(id, reply, postID);
		var target = document.querySelector("#reply-section-"+postID);

		target.innerHTML += reply_text;


}


// On enter click from Keyboard call submit comment
function call_submit_comment(id){
	if (event.keyCode === 13) {
        submit_comment(id);
    }
}

// On enter click from Keyboard call submit reply
function call_submit_reply(id){
	if (event.keyCode === 13) {
        submit_reply(id);
    }
}
