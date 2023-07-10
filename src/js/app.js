import { Popover } from './popover';

const messageHeader = 'Popover title';
const messageBody = "And here's some amazing content. It's very engaging. Right?";
const popoverFactory = new Popover();
const btn = document.getElementById('btn-popover');
btn.addEventListener('click', (e) => {
  e.preventDefault;
  if (document.querySelector('.popover')) {
    popoverFactory.removePopover();
  } else {
    popoverFactory.showPopoper(messageHeader, messageBody, e.target);
  }
});
