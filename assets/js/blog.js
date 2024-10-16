// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const myMain = document.querySelector("main");
const backButton = document.getElementById("backButton");
const placeholder = false

// TODO: Create a function that builds an element and appends it to the DOM
function buildPost(x) {
    //build an element for each part of the blog entry
    const post = document.createElement('ul');
    const newEntry = x;

    const username = newEntry.username;
    const postUsername = document.createElement('li');
    postUsername.textContent = username

    const title = newEntry.title;
    const postTitle = document.createElement('li');
    postTitle.textContent = title;

    const content = newEntry.content;
    const postContent = document.createElement('li');
    postContent.textContent = content;
    //structure the elements with appendChild

    post.appendChild(postUsername);
    post.appendChild(postTitle);
    post.appendChild(postContent);

    //place the structured element on the page
    myMain.appendChild(post);

};
// TODO: Create a function that handles the case where there are no blog posts to display
function noBlog() {
    const noBlog = document.createElement('div')
    noBlog.className = 'noBlog'
    const noBlogContent = document.createElement('p')
    noBlogContent.textContent = "Nothing to display, check again soon!"
    noBlog.appendChild(noBlogContent);
    myMain.appendChild(noBlog);
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    if (posts > 0) {
        /*display the blog posts*/
        for (let i = 0; i < posts.length; i++) {
            let x = posts[i];
            buildPost(x);
        }
    } else {
        noBlog();
    }
}
// TODO: Call the `renderBlogList` function
renderBlogList();
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', function () {
    redirectPage('./index.html');
});