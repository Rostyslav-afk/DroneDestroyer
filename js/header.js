const translations = {
    en: {
        gameStatus: "The game is created at 13,62%",
        title: "DroneDestroy! Protect the Ukrainians!",
        startButton: "Start The Game",
        modes: "Modes:",
        comingSoon: "Coming Soon!",
        loading: "Loading...",
        supportDev: "Support The Developers!",
        supportUkraine: "Support Ukraine!",
        telegramChannel: "Telegram channel",
    },
    ua: {
        gameStatus: "Гра створена на 13,62%",
        title: "DroneDestroy! Захисти українців!",
        startButton: "Почати гру",
        modes: "Режими:",
        comingSoon: "Скоро буде!",
        loading: "Завантаження...",
        supportDev: "Підтримати розробників!",
        supportUkraine: "Підтримати Україну!",
        telegramChannel: "Телеграм канал",
    }
};

const languageCheckbox = document.getElementById('header__checkbox-laungage');

function setLanguage(lang) {
    document.getElementById('gameStatus').textContent = translations[lang].gameStatus;
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('startButton').textContent = translations[lang].startButton;
    document.getElementById('modes').textContent = translations[lang].modes;
    document.getElementById('mode1').textContent = translations[lang].comingSoon;
    document.getElementById('mode2').textContent = translations[lang].comingSoon;
    document.getElementById('mode3').textContent = translations[lang].comingSoon;
    document.getElementById('loading').textContent = translations[lang].loading;
    document.getElementById('supportDev').querySelector('a').textContent = translations[lang].supportDev;
    document.getElementById('supportUkraine').querySelector('a').textContent = translations[lang].supportUkraine;
    document.getElementById('telegramChannel').childNodes[0].textContent = translations[lang].telegramChannel + " ";
    if (lang === "ua") {
        document.body.style.fontFamily = "Geologica, sans-serif";
    } else {
        document.body.style.fontFamily = "Funnel Display";
    };
}
setLanguage('en');

languageCheckbox.addEventListener('change', () => {
    if (languageCheckbox.checked) {
        setLanguage('ua');
    } else {
        setLanguage('en');
    }
});