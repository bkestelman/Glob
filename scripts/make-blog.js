console.log("Hello world")

var blog = document.getElementsByTagName("Blog")[0]

fetch("index.blog")
	.then(response => response.text())
	.then(html => {
		console.log(html)
		buildPage(html)
	})

function buildPage(html) {
	blog.innerHTML = html 
	buildTitle(html)
	buildAbout(html)
	buildNav(html)
	console.log(document.documentElement.innerHTML)
}	

function buildTitle(html) {
	var title = document.getElementsByTagName("Title")[0]
	blog.innerHTML += "<h1>" + title.innerHTML + "</h1>"
}
function buildAbout(html) {
	var about = document.getElementsByTagName("About")[0]
	blog.innerHTML += "<p>" + about.innerHTML + "</p>"
}
function buildNav(html) {
	var nav = document.getElementsByTagName("Nav")[0]
	blog.innerHTML += "<ul>"
	for (let it of nav.children) {
		blog.innerHTML += "<li>" + it.innerHTML + "</li>"
	}
	blog.innerHTML += "</ul>" 
}
