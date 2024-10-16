// TODO: Create a variable that selects the form element
const myDoc = document;
const myForm = myDoc.getElementById("form");
const submit = myDoc.querySelector("#submit");
const user = myDoc.querySelector('#username');
const title = myDoc.querySelector("#blogTitle");
const entry = myDoc.querySelector("#blogContent");
const noForm = myDoc.getElementById("noForm");
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function submitForm() {
    const newUser = user.value;
    const newTitle = title.value;
    const newContent = entry.value;

    if (newUser.trim() === "") {
        noForm.style.display = "inline";
    } else if (newTitle.trim() === "") {
        noForm.style.display = "inline";
    } else if (newContent.trim() === "") {
        noForm.style.display = "inline";
    } else {
        const newEntry = {
            username: newUser,
            title: newTitle,
            content: newContent,
        };
        storeLocalStorage(newEntry);
        redirectPage('./blog.html');
    }
};
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
function submitCheck() {
    if (submit) {
        submit.addEventListener('click', function (event) {
            event.preventDefault();
            submitForm();
        });
    };
};
submitCheck();
