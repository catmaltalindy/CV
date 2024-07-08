const themes = {
    soft: {
        primary: '#c9aaaa',
        secondary: '#f8eaea',
        accent: '#aa8383',
        text: '#4a4a4a',
        background: '#fff'
    },
    girly: {
        primary: '#E08CB0',
        secondary: '#fce4ec',
        accent: '#ff69b4',
        text: '#4a4a4a',
        background: '#fff'
    },
    ocean: {
        primary: '#81d4fa',
        secondary: '#e1f5fe',
        accent: '#0288d1',
        text: '#37474f',
        background: '#fff'
    },
    forest: {
        primary: '#a5d6a7',
        secondary: '#e8f5e9',
        accent: '#388e3c',
        text: '#2e7d32',
        background: '#fff'
    }
};

function changeTheme(theme) {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', themes[theme].primary);
    root.style.setProperty('--secondary-color', themes[theme].secondary);
    root.style.setProperty('--accent-color', themes[theme].accent);
    root.style.setProperty('--text-color', themes[theme].text);
    root.style.setProperty('--background-color', themes[theme].background);
}

document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('theme-choice');
    themeSelector.addEventListener('change', (e) => {
        changeTheme(e.target.value);
    });
});