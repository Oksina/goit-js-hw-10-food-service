const ref = {
    body: document.querySelector('body'),
    switch: document.querySelector('.theme-switch__toggle')
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeLocalStorage = localStorage.getItem('theme');

if (themeLocalStorage === Theme.DARK) {
   ref.switch.checked = true;
   ref.body.classList.add(Theme.DARK);
}
else {
    ref.body.classList.add(Theme.LIGHT);
}


function changeTheme(e) {
    if (e.target.checked) {
        repleaceTheme();
        localStorage.setItem('theme', Theme.DARK);
    }
    else {
        repleaceTheme();
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

const repleaceTheme = () => {
    ref.body.classList.toggle(Theme);
    }

ref.switch.addEventListener('change', changeTheme);