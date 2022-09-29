const navButtons = document.getElementsByClassName('burger-menu')[0];

navButtons.addEventListener('click', function(event) {
    const scrollDestination = getScrollDestination(event);

    scrollDestination.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
    });
});

function getScrollDestination(event) {
    const clickedButtonElement = event.target;
    const clickedButtonName = clickedButtonElement.getAttribute('id');

    let scrollDestination = null;

    switch (clickedButtonName) {
        case 'me':
            scrollDestination = document.getElementsByClassName('about-me')[0];
            break;
        case 'projects':
            scrollDestination = document.getElementsByClassName('projects')[0];
            break;
        case 'skills':
            scrollDestination = document.getElementsByClassName('skills')[0];
            break;
        case 'recognition':
            scrollDestination = document.getElementsByClassName('recognition')[0];
            break;
    }

    return scrollDestination;
}