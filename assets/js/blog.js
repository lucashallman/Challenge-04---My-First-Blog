// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const myMain = document.querySelector("main");
const backButton = document.getElementById("backButton");
const placeholder = false

// TODO: Create a function that builds an element and appends it to the DOM
function buildPost(x) {
    //build an element for each part of the blog entry
    const post = document.createElement('article');
    post.classList.add('card');
    const newEntry = x;

    const username = newEntry.username;
    const postUsername = document.createElement('p');
    postUsername.textContent = username;
    postUsername.classList.add('renderUser');

    const title = newEntry.title;
    const postTitle = document.createElement('h2');
    postTitle.textContent = title;
    postTitle.classList.add('renderTitle');

    const content = newEntry.content;
    const postContent = document.createElement('blockquote');
    postContent.textContent = content;
    postContent.classList.add('renderContent');
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
};
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const array = JSON.parse(localStorage.getItem('Posts'));
    if (!array) {
        noBlog();
    } else {
        for (let x = 0; x < array.length; x++) {
            buildPost(array[x])
        };
    };
};
// TODO: Call the `renderBlogList` function
renderBlogList();
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', function () {
    redirectPage('./index.html');
});