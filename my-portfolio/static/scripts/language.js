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
        },
        'about-me': {
            'name': 'Anton Morozov',
            'p1': 'Beginner passionate Russian full-stack developer who ' +
                'can help you realize the project which will show the ' +
                'World your values.',
            'p2': 'My target is to deliver to society your idea which ' +
                'will promote your business and make your work recognizable.',
            'img': 'My Photo'
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
        },
        'about-me': {
            'name': 'Антон Морозов',
            'p1': 'Начинающий увлеченный российский full-stack ' +
                'разработчик, готовый помочь вам реализовать проект, ' +
                'который покажет всему миру ваши настоящие ценности.',
            'p2': 'Моя цель - это продвижение в общество вашей идеи, ' +
                'которая продвинет ваше дело и сделает его узнаваемым.',
            'img': 'Моя Фотография'
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

function changeAboutMeLanguage(currentLanguage) {
    const aboutMe = document.getElementsByClassName('about-me')[0];
    
    const img = aboutMe.querySelector('img');
    
    const description = aboutMe.getElementsByClassName('description')[0];
    const name = description.querySelector('h1');
    const p1 = description.querySelectorAll('p')[0];
    const p2 = description.querySelectorAll('p')[1];

    img.alt = data[currentLanguage]['about-me']['img'];
    
    name.textContent = data[currentLanguage]['about-me']['name'];
    p1.textContent = data[currentLanguage]['about-me']['p1'];
    p2.textContent = data[currentLanguage]['about-me']['p2'];
}

languagesLink.forEach(newCurrentLanaguge => {
    newCurrentLanaguge.addEventListener('click', () => {
        changeCurrentLanguage(newCurrentLanaguge);
        const currentLanguage = newCurrentLanaguge.getAttribute('language');
        changeNavbarLanguage(currentLanguage);
        changeAboutMeLanguage(currentLanguage);
    });
});
