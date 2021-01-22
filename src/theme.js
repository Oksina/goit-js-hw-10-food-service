const ref = {
  body: document.querySelector('body'),
  switch: document.querySelector('.theme-switch__toggle'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeLocalStorage = localStorage.getItem('theme');

if (themeLocalStorage === Theme.DARK) {
  ref.switch.checked = true;
  ref.body.classList.add(Theme.DARK);
} else {
  ref.body.classList.add(Theme.LIGHT);
}

function changeTheme(e) {
  if (e.target.checked) {
    repleaceThemeDark();
    localStorage.setItem('theme', Theme.DARK);
  } else {
    repleaceThemeLight();
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const repleaceThemeDark = () => {
  ref.body.classList.toggle(Theme.DARK);
};
const repleaceThemeLight = () => {
  ref.body.classList.toggle(Theme.LIGHT);
};
ref.switch.addEventListener('change', changeTheme);
