import { displayCatName } from './cat_generator';

(() => {
    const button = document.getElementById('cat-button');
    const displayBlock = document.getElementById('cat-display');

    button.addEventListener('click', () => displayCatName(displayBlock));
})();
