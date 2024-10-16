const darkMode = document.getElementById("slider")
const bodyEL = document.querySelector('body')

// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
darkMode.addEventListener('change', function () {
    const isLight = localStorage.getItem('mode') == 'light'
    console.log(isLight);
    if (isLight) {
        bodyEL.classList.add('dark');
        localStorage.setItem('mode', 'dark');
    } else {
        bodyEL.classList.remove('dark');
        localStorage.setItem('mode', 'light');
    };
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
    if (posts.length === 0) {
        const noData = {
            username: 'NODATA',
            title: '',
            content: '',
        };
        console.log(noData)
    } else {
        console.log(localStorage.getItem('Posts'));

    }
};
readLocalStorage();
// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(a) {
    const array = localStorage.getItem('Posts');
    if (!array) {
        localStorage.setItem('Posts', JSON.stringify([a]));
        return;
    }
    const parsed = JSON.parse(array);
    parsed.push(a);
    localStorage.setItem('Posts', JSON.stringify(parsed));
};
// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
};
