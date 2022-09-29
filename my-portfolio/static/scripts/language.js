const header = document.querySelector('header');
const languages = header.getElementsByClassName('languages')[0];
const languagesLink = languages.querySelectorAll('a');

const data = {
    'english': {
        'header': {
            'logo': 'Portfolio',
            'me': 'Me',
            'projects': 'Projects',
            'skills': 'Skills',
            'recognition': 'Recognition',
            'english': 'En',
            'russian': 'Ru'
        }
    },
    'russian': {
        'header': {
            'logo': 'Портфолио',
            'me': 'Обо мне',
            'projects': 'Проекты',
            'skills': 'Навыки',
            'recognition': 'Признание',
            'english': 'Англ',
            'russian': 'Рус'
        }
    }
}

function changeCurrentLanguage(newLanguage) {
    const currentClassName = 'current';
    const oldLanguage = languages.getElementsByClassName(currentClassName)[0];

    oldLanguage.classList.remove(currentClassName);
    newLanguage.classList.add(currentClassName);
}

function changeNavbarLanguage(currentLanguage) {
    const logo = header.getElementsByClassName('logo')[0];
    
    const burger = header.getElementsByClassName('burger-menu')[0];
    const me = burger.querySelector('#me');
    const projects = burger.querySelector('#projects');
    const skills = burger.querySelector('#skills');
    const recognition = burger.querySelector('#recognition');

    const english = header.querySelector("a[language='english']");
    const russian = header.querySelector("a[language='russian']");

    logo.textContent = data[currentLanguage]['header']['logo'];

    me.textContent = data[currentLanguage]['header']['me'];
    projects.textContent = data[currentLanguage]['header']['projects'];
    skills.textContent = data[currentLanguage]['header']['skills'];
    recognition.textContent = data[currentLanguage]['header']['recognition'];

    english.textContent = data[currentLanguage]['header']['english'];
    russian.textContent = data[currentLanguage]['header']['russian'];
}

languagesLink.forEach(newCurrentLanaguge => {
    newCurrentLanaguge.addEventListener('click', () => {
        changeCurrentLanguage(newCurrentLanaguge);
        const currentLanguage = newCurrentLanaguge.getAttribute('language');
        changeNavbarLanguage(currentLanguage);
    });
});
