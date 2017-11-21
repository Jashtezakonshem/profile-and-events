import profile from './data/hub_profile.json';
import events from './data/hub_events.json';
import profileTemplate from './templates/profile.handlebars';
import eventsTemplate from './templates/events.handlebars';

document.addEventListener("DOMContentLoaded",function() {
    let profileContainer = document.createElement('div');
    profileContainer.innerHTML = profileTemplate(profile);
    document.querySelector('#profile').appendChild(profileContainer);

    let eventsContainer = document.createElement('div');
    eventsContainer.innerHTML = eventsTemplate(events);
    document.querySelector('#events').appendChild(eventsContainer);
});