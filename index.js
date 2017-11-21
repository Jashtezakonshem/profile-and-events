import profile from './data/hub_profile.json';

document.addEventListener("DOMContentLoaded",function(){
    fetch(profile, { mode: 'no-cors' })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
        })
});