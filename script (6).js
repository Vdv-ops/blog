function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        alert("Login Successful!");
    } else {
        alert("Invalid Username or Password!");
    }
}

function publishPost() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if (title.trim() === "" || content.trim() === "") {
        alert("Please enter both title and content.");
        return;
    }

    let posts = document.getElementById("posts");

    let post = document.createElement("div");
    post.className = "post";
    post.innerHTML = "<h3>" + title + "</h3><p>" + content + "</p>";

    posts.appendChild(post);

    alert("Blog published successfully!");

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}