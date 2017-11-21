import profile from './data/hub_profile.json';
import events from './data/hub_events.json';
import profileTemplate from './templates/profile.handlebars';

document.addEventListener("DOMContentLoaded",function() {
    let div = document.createElement('div');
    div.innerHTML = profileTemplate(profile);
    document.querySelector('#profile').appendChild(div);
});