// getter for full name
var user = {
	firstname: "Abhi",
	lastname : "Kr",
	get fullName() {
	return this.firstname + " " + this.lastname;
	}
};

function create_post(id, post){
	var username = user.fullName;

	var post = '<div class="active-post-block post-'+id+'" postID="'+id+'"><div class="active-post-header"><i class="fa fa-user-circle-o active-user-image" aria-hidden="true"></i><span class="posted-user">'+username+'</span></div><div class="active-post-content"><div class="image-block" id="post-image"></div><div class="text-block"><div id="post-texts">'+post+'</div></div></div><div class="active-post-footer"><div id="post-comment-btn" class="comment-call-'+id+'" postID="'+id+'" onclick="open_comments(this)"><i class="fa fa-comments" aria-hidden="true"></i>Comment</div></div><div class="active-post-comment-block slider slider-comment-'+id+'" style="display: none" id="show-comments-'+id+'"><input type="text" name="comments" placeholder="Enter your comment..." id="user-comment-'+id+'" class="user-comment-input"><button class="submit_comment" onclick="submit_comment('+id+')">submit</button></div></div>'
	return post ;
}

function create_comment(id, comment, postID){
	var username = user.fullName;

	var post = '<div class="feed-comments" id="feed-comment-'+id+'" commentID="'+id+'"><div class="feed-comments-header"><i class="fa fa-user-circle-o active-user-image" aria-hidden="true"></i><span class="feed-comments-user">'+username+'</span></div><div class="feed-comments-text"><span class="feed-comments-text">'+comment+'</span></div><div class="footer-comments"><button class="submit_comment_reply" id="submit_comment_reply-'+id+'" onclick="submit_comment_reply('+id+')"><i class="fa fa-reply-all" aria-hidden="true"></i>Reply</button><input type="text" name="reply" placeholder="Enter your reply..." id="user-reply-'+id+'" class="user-reply-input" style="display:none"><button style="display:none" class="submit_reply" id="submit_reply-'+id+'" onclick="submit_reply('+id+')">Reply Now</button></div></div>'
	return post ;
}

function create_reply(id, reply, postID){
	var username = user.fullName;

	var post = '<div class="feed-comments" id="feed-comment-'+id+'" commentID="'+id+'"><div class="feed-comments-header"><i class="fa fa-user-circle-o active-user-image" aria-hidden="true"></i><span class="feed-comments-user">'+username+'</span></div><div class="feed-comments-text"><span class="feed-comments-text">'+comment+'</span></div><div class="footer-comments"><button class="submit_comment_reply" onclick="submit_comment_reply('+id+')"><i class="fa fa-reply-all" aria-hidden="true"></i>Reply</button></div></div>'
	return post ;
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
			alert("Please Enter both First and Last name !! ");
			return;
		}

		user.firstname = fname;
		user.lastname = lname;
		username = user.fullName;
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
		username = user.fullName;

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
		var comment_text = create_comment(id, comments, postID);
		var target = document.querySelector(".slider-comment-"+postID);

		target.innerHTML += comment_text;

}

function submit_comment_reply(id){

document.getElementById("submit_comment_reply-"+id).style.display = "none";
document.getElementById("user-reply-"+id).style.display = "inline-block";
document.getElementById("submit_reply-"+id).style.display = "inline-block";
}
