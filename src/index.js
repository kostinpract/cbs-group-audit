import 'normalize.css'
import './index.scss'

if (location.protocol !== "https:") {
  location.protocol = "https:";
}

const backButton = document.querySelector('.footer__button_back');

backButton.addEventListener('click', () => {
  goBack();
});

function goBack() {
  window.history.back();
  // console.log(document.referrer);
  console.log('Going back');
}