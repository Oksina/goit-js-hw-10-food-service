import './styles.css';
import menu from './menu.json';
import templates from './templates/templates.hbs';
import './theme';


const menuList = document.querySelector('.js-menu');

const makeMenu = templates(menu);
menuList.insertAdjacentHTML('beforeend', makeMenu);