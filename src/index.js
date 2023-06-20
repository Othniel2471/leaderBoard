import './styles/main.scss';
import Display from './modules/display.js';

const display = new Display();

display.form.addEventListener('submit', (e) => {
  e.preventDefault();
  display.addName();
  display.displayOnLoad();
  display.form.reset();
});