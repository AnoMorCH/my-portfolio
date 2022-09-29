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
        },
        'projects': {
            'header': 'Projects',
            'subHeader': 'These are the open projects I am proud about.',
            'simetraP1': 'Rating of Cities',
            'simetraP2': 'The rating helps to collect statistics about ' +
                'quality of public transport in Russian cities.',
            'votingSystemP1': 'Voting System',
            'votingSystemP2': 'The system is desgned to give community ' +
                'a tool to create a democratic election.',
            'subPSHeader': "Hey... Pss... There are even more projects " +
                "created by me. However, they are closed due NDA. But " +
                "I haven't told it you, bro ;)."
        },
        'popup1': {
            'header': 'Rating of Cities',
            'descriptionP1': 'A target of the project is collecting data ' +
                'of the scientific research representing a quality of ' +
                'public transport of Russian cities except Moscow and ' +
                'Saint Petersburg.',
            'descriptionP2': 'The project was a part of my summer practice ' +
                'at SPBSTU - the university I studied in. I had a role of ' +
                'a project manager and a fullstack developer.',
            'footerP1': 'Customer: <span>OOO "A+S Transproekt" ' +
                '(Simetra)</span>',
            'footerP2': 'Date: <span>2022</span>',
            'button': 'CHECK IT'
        },
        'popup2': {
            'header': 'Voting System',
            'descriptionP1': 'The project was created to help a community ' +
                'to choose their leader using a demorcratic poll system. ' +
                'All users are divided by groups, and they can vote for ' +
                'people and participate in an election.',
            'descriptionP2': 'Also there are moderators who can control ' +
                'the whole process. The project was written only by ' +
                'me on Django Web Framework.',
            'footerP1': 'Customer: <span>Myself</span>',
            'footerP2': 'Date: <span>2022</span>',
            'button': 'CHECK IT'
        },
        'skills': {
            'header': 'Навыки',
            'backPython': 'I have a back-end background. I have worked ' +
                'with Django and Flask. I am pretty confident with all ' +
                'simple components of back-end development like creating ' +
                'an authorization system, changing the content of a ' + 
                'database by frontend activity, payments system etc. Also ' + 
                'I am ready to learn any new framework which you believe ' + 
                'is suitable for your project.',
            'backFrontend': 'I am good with these guys too. However, ' + 
                'for me, the front-end is just like a hobby which helps ' + 
                'me relax after hard back-end work. In spite of that, I ' + 
                'can do a lot of tasks which many front-end programmers ' + 
                'do like building a layout, creating vanilla animations, ' + 
                'writing styles for a project and a lot of other things. ' +
                'Also, I am nice with adaptice layout.',
            'frontTesting': 'TESTING',
            'backTesting': 'I believe today everything which is written ' +
                'in the back-end should be tested thoroughly. So, I cover ' +
                'every project with tests by 100 percent. Sometimes I ' +
                'write them too much but I think being a testing freak is ' + 
                'better than not writing tests at all.',
            'frontOther': 'OTHER',
            'backOther': 'I have a lot of other qualities which are helpful ' +
                'in IT. I have a nice experience with Docker, AWS, ' +
                'Robocassa, Heroku, git system, Linux and a lot of other ' +
                'stuff. Also I am a confident English speaker and prefer ' + 
                'writing all which is connected with code only in the ' + 
                'language. As a person, I am friendly, hardworking and ' +
                'dedicated. So, a good cooperation awaits us!'
        },
        'recognition': {
            'header': 'Recognition',
            'subHeader': "In spite of being young, I have some feedback " +
                "from people I've worked with!",
            'descriptionHeader': 'Anton has shown himself as an intiative, ' +
                'reliable and diligent worker',
            'descriptionP': '"In a process of work Anton has showed ' +
                'himself as an initiative, reliable and diligent worker ' +
                'who is ready to do anything to finish successfully all ' +
                'required tasks. He is open-minded, creative, hardworking ' +
                'and commucative."',
            'descriptionSignature': '- Andrey Prokhorov, <br />technical ' +
                'director of LLC "A+S Transproject"',
            'button': 'Testimonial' 
        },
        'footer': {
            'dateAndName': '@2022 Anton Morozov',
            'address': 'Saint Petersburg, the Russian Federation'
        }
    },
    'russian': {
        'header': {
            'logo': 'Портфолио',
            'me': 'Обо мне',
            'projects': 'Проекты',
            'skills': 'Навыки',
            'recognition': 'Отзывы',
            'english': 'Англ',
            'russian': 'Рус'
        },
        'about-me': {
            'name': 'Антон Морозов',
            'p1': 'Начинающий увлеченный российский full-stack ' +
                'разработчик, готовый помочь вам реализовать ваш проект, ' +
                'который покажет всему миру ваши настоящие ценности.',
            'p2': 'Моя цель - это продвижение в общество вашей идеи, ' +
                'которая продвинет ваше дело и сделает его узнаваемым.',
            'img': 'Моя Фотография'
        },
        'projects': {
            'header': 'Проекты',
            'subHeader': 'Это открытые проекты, которыми я горжусь.',
            'simetraP1': 'Рейтинг Городов',
            'simetraP2': 'Данный рейтинг помогает собрать статистику о ' +
                'качестве общественного транспорта российских городов.',
            'votingSystemP1': 'Избирательная Система',
            'votingSystemP2': 'Данная система разработана, чтобы дать ' +
                'сообществу инструмент для проведения демократических ' +
                'выборов.',
            'subPSHeader': 'Хей... Псс... У меня есть еще больше проектов, ' +
                'разработанных мной. Однако, они закрыты по NDA. Но я тебе ' +
                'этого не говорил, приятель ;).'
        },
        'popup1': {
            'header': 'Рейтинг Городов',
            'descriptionP1': 'Цель данного проекта - это сбор информации ' +
                'о научном исследовании по качеству общественного ' +
                'транспорта в российских городов за исключением Москвы ' +
                'и Санкт-Петербурга.',
            'descriptionP2': 'Данный проект был частью моей летней ' +
                'практики в СПбПУ - университета, где я учился. Я имел ' +
                'роль проект менеджера и full-stack разработка.',
            'footerP1': 'Заказчик: <span>ООО "А+С Транспроект" ' +
                '(Simetra)</span>',
            'footerP2': 'Дата: <span>2022</span>',
            'button': 'ПРОВЕРИТЬ'
        },
        'popup2': {
            'header': 'Избирательная Система',
            'descriptionP1': 'Данный проект был создан, чтобы помочь ' +
                'сообществу выбрать их лидера, используя систему ' +
                'демократического голосования. Все пользователи разделены ' +
                'на группы, и они могут голосвать за других людей и ' +
                'принимать участие в выборах.',
            'descriptionP2': 'Также есть администраторы, которые могуг ' +
                'контролировать весь процесс. Данный проект был написан ' +
                'мной полностью при использовании Django Web Framework.',
            'footerP1': 'Заказчик: <span>Я</span>',
            'footerP2': 'Дата: <span>2022</span>',
            'button': 'ПРОВЕРИТЬ'
        },
        'skills': {
            'header': 'Навыки',
            'backPython': 'Я начал свой путь с бекенд и работал с Django ' +
                'и Flask. Я могу веренно работать со всеми простыми ' +
                'компонентами бекенда как система авторизации, изменение ' +
                'контента в базе данных на основе фронтенд активности, ' + 
                'платежные системы и т.д. Также я готов выучить любой ' + 
                'новый фреймворк, который, по вашему мнению, подходит ' +
                'вашему проекту.',
            'backFrontend': 'Я также уверен и с этими технологиями. Однако ' +
                'для меня фронтенд - это просто хобби, которое помогает ' +
                'мне расслабиться после тяжелой бекенд работы. Несмотря на ' +
                'это, я могу выполнить большое количество задач, которые ' +
                'делают фронтенд программисты, как создание верстки, ' +
                'реализация ванильных анимаций, написание CSS стилей и ' +
                'много другое. Также я умею писать адаптивную верстку.',
            'frontTesting': 'ТЕСТИРОВКА',
            'backTesting': 'Я верю: сегодня всё, что написано в бекенде, ' +
                'должно быть полностью протестировано. Поэтому я покрываю ' +
                'каждый проект тестами на 100 процентов. Иногда я пишу их ' +
                'слишком много, но я думаю, что лучше быть ' +
                'маньяком-тестировщиком, чем не писать тесты вообще.',
            'frontOther': 'ДРУГОЕ',
            'backOther': 'Я имею много качеств, полезных для IT индустрии. ' +
                'У меня есть опыт работы с Докером, AWS, Робокассой, ' +
                'Хероку, гит-системой, Линуксом и многим другим. Также я ' +
                'уверенно владею английским и предпочитаю писать всё, что ' +
                'связано с кодом, на этом языке. Как человек, я ' +
                'дружелюбный, трудолюбивый и целеустремленный. Поэтому ' +
                'отличное сотрудничество ждет нас!'
        },
        'recognition': {
            'header': 'Отзывы',
            'subHeader': 'Несмотря на юный возраст, я имею обратную связь ' +
                'от людей, с которыми я работал.',
            'descriptionHeader': 'Антон Александрович проявил себя как ' +
                'инициативный, ответственный и исполнительный сотрудник',
            'descriptionP': 'В процессе работы Антон Александрович проявил ' +
                'себя как инициативный, ответственный и исполнительный ' +
                'сотрудник, который готов сделать всё возможное для ' +
                'успешного завершения задач в срок и в требуемом качестве. ' +
                'В ходе взаимодействия Антон был открыт к новым идеям, ' +
                'проявил такие качества, как креативность, трудолюбие ' +
                'и коммуникабельность.',
            'descriptionSignature': '- Андрей Прохоров, технический <br />' +
                'директор ООО "А+С Транспроект"',
            'button': 'Отзыв'
        },
        'footer': {
            'dateAndName': '@2022 Антон Морозов',
            'address': 'Российская Федерация, г. Санкт-Петербург'
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

function changeProjectsLanguage(currentLanguage) {
    const projects = document.getElementsByClassName('projects')[0];

    const header = projects.querySelector('h1');
    const subHeader = projects.querySelector('h2');

    const simetra = projects.querySelector("div[name='simetra-rating']");
    const simetraP1 = simetra.querySelectorAll('p')[0];
    const simetraP2 = simetra.querySelectorAll('p')[1];

    const votingSystem = projects.querySelector("div[name='voting-system']");
    const votingSystemP1 = votingSystem.querySelectorAll('p')[0];
    const votingSystemP2 = votingSystem.querySelectorAll('p')[1];

    const subPSHeader = projects.getElementsByClassName('ps-note')[0];

    header.textContent = data[currentLanguage]['projects']['header'];
    subHeader.textContent = data[currentLanguage]['projects']['subHeader'];

    simetraP1.textContent = data[currentLanguage]['projects']['simetraP1'];
    simetraP2.textContent = data[currentLanguage]['projects']['simetraP2'];

    votingSystemP1.textContent =
        data[currentLanguage]['projects']['votingSystemP1'];
    votingSystemP2.textContent =
        data[currentLanguage]['projects']['votingSystemP2'];

    subPSHeader.textContent = data[currentLanguage]['projects']['subPSHeader'];
}

function changePopupLanguage(currentLanguage) {
    const popupList = Array.from(document.getElementsByClassName('popup'));

    popupList.forEach((popup) => {
        const popupName = popup.getAttribute('id');

        const header = popup.querySelector('h1');

        const description = popup.getElementsByClassName('description')[0];
        const descriptionP1 = description.querySelectorAll('p')[0];
        const descriptionP2 = description.querySelectorAll('p')[1];

        const footer = popup.getElementsByClassName('footer')[0];
        const footerP1 = footer.querySelectorAll('p')[0];
        const footerP2 = footer.querySelectorAll('p')[1];

        const button = popup.querySelector('button');

        header.textContent = data[currentLanguage][popupName]['header'];

        descriptionP1.textContent =
            data[currentLanguage][popupName]['descriptionP1'];
        descriptionP2.textContent =
            data[currentLanguage][popupName]['descriptionP2'];

        footerP1.innerHTML = data[currentLanguage][popupName]['footerP1'];
        footerP2.innerHTML = data[currentLanguage][popupName]['footerP2'];

        button.textContent = data[currentLanguage][popupName]['button'];
    });
}

function changeSkillsLanguage(currentLanguage) {
    const skills = document.getElementsByClassName('skills')[0];

    const header = skills.querySelector('h1');

    const python = skills.querySelector("div[name='python']");
    const backPython = python.getElementsByClassName('the-back-side')[0];

    const frontend = skills.querySelector("div[name='frontend']");
    const backFrontend = frontend.getElementsByClassName('the-back-side')[0];

    const testing = skills.querySelector("div[name='testing']");
    const frontTesting = testing.getElementsByClassName('the-front-side')[0];
    const backTesting = testing.getElementsByClassName('the-back-side')[0];

    const other = skills.querySelector("div[name='other']");
    const frontOther = other.getElementsByClassName('the-front-side')[0];
    const backOther = other.getElementsByClassName('the-back-side')[0];

    header.textContent = data[currentLanguage]['skills']['header'];

    backPython.textContent = data[currentLanguage]['skills']['backPython'];

    backFrontend.textContent = data[currentLanguage]['skills']['backFrontend'];

    frontTesting.textContent = data[currentLanguage]['skills']['frontTesting'];
    backTesting.textContent = data[currentLanguage]['skills']['backTesting'];

    frontOther.textContent = data[currentLanguage]['skills']['frontOther'];
    backOther.textContent = data[currentLanguage]['skills']['backOther'];
}

function changeRecognitionLanguage(currentLanguage) {
    const recognition = document.getElementsByClassName('recognition')[0];

    const header = recognition.querySelector('h1');
    const subHeader = recognition.querySelector('h2');

    const description = recognition.getElementsByClassName('description')[0];
    const descriptionHeader = description.querySelector('h2');
    const descriptionP = description.querySelector('p');
    const descriptionSignature = 
        description.getElementsByClassName('signature')[0];

    const button = recognition.querySelector('button');

    header.textContent = data[currentLanguage]['recognition']['header'];
    subHeader.textContent = data[currentLanguage]['recognition']['subHeader'];
    
    descriptionHeader.textContent = 
        data[currentLanguage]['recognition']['descriptionHeader'];
    descriptionP.textContent = 
        data[currentLanguage]['recognition']['descriptionP'];
    descriptionSignature.innerHTML = 
        data[currentLanguage]['recognition']['descriptionSignature'];

    button.textContent = data[currentLanguage]['recognition']['button'];
}

function changeFooterLanguage(currentLanguage) {
    const footer = document.querySelector('footer');

    const dateAndName = footer.querySelectorAll('p')[0];
    const address = footer.querySelectorAll('p')[1];

    dateAndName.textContent = data[currentLanguage]['footer']['dateAndName'];
    address.textContent = data[currentLanguage]['footer']['address'];
}

languagesLink.forEach(newCurrentLanaguge => {
    newCurrentLanaguge.addEventListener('click', () => {
        changeCurrentLanguage(newCurrentLanaguge);
        const currentLanguage = newCurrentLanaguge.getAttribute('language');
        changeNavbarLanguage(currentLanguage);
        changeAboutMeLanguage(currentLanguage);
        changeProjectsLanguage(currentLanguage);
        changePopupLanguage(currentLanguage);
        changeSkillsLanguage(currentLanguage);
        changeRecognitionLanguage(currentLanguage);
        changeFooterLanguage(currentLanguage);
    });
});
