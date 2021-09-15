/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-cycle
import { smthFunc } from '../index';

export default class Keyboard {
  constructor(data) {
    this.upperLet = null;
    this.shiftOn = null;
    this.keysOfData = data;
  }

  addBasicMarkUp() {
    const contentContainer = document.querySelector('.keyboard__wrap'); 
    const keyboard = 
    `<div class="keyboard-wrapper">
        <div class="keyboard keyboard-style"></div>
      </div>
    </div>`;
    contentContainer.insertAdjacentHTML('afterbegin', keyboard);
    this.addBtnKeyboard();
    this.pressMouseHundlerKeyboard();
    this.pressKeyHundlerKeyboard();
  }

  addBtnKeyboard() {
    this.keyboardCont = document.querySelector('.keyboard');
    let res = '';
    if (!this.upperLet) {
      // this.shiftOn = false;
      this.keysOfData.forEach((item) => {
        res += ` <div class=
        "keyboard__key ${item.eventCode}" id="${item.eventCode}">${(localStorage.lang === 'eng') ? item.lowEng : item.lowRu}</div>`;
      });
    } else {
      this.keysOfData.forEach((item, i) => {
        if (i < 14) {
          res += ` <div class=
          "keyboard__key ${item.eventCode}" id="${item.eventCode}">${(localStorage.lang === 'eng') ? item.lowEng : item.lowRu}</div>`;
        } else {
          res += ` <div class=
          "keyboard__key ${item.eventCode}" id="${item.eventCode}">${(localStorage.lang === 'eng') ? item.upperEng : item.upperRu}</div>`;
        }
      });
    }
    
    this.keyboardCont.innerHTML = res;

    if (this.upperLet) {
    this.CapsLock = document.getElementById('CapsLock');
    this.CapsLock.classList.add('keyboard__key-red');
    }
  }

  pressMouseHundlerKeyboard() {
    this.textArea = document.querySelector('.search__input');
    document.addEventListener('mousedown', (event) => {
      event.preventDefault();
      const target = event.target;
      const keyOfKeyboard = document.querySelectorAll('.keyboard__key');
      if (target.classList.contains('keyboard__key')) {
        const letTer = target.textContent;
        keyOfKeyboard.forEach((item) => item.classList.remove('active'));
        target.classList.add('active');
        this.insertLetters(event, letTer);
      }
    });

    document.addEventListener('mouseup', (event) => {
      event.preventDefault();
      const target = event.target;
      if (target.classList.contains('CapsLock')) {
        if (this.upperLet === true) {
          target.classList.add('keyboard__key-red');
        }
        
        this.getUppperLetter();
      }
      const keyOfKeyboard = document.querySelectorAll('.keyboard__key');
      keyOfKeyboard.forEach((item) => item.classList.remove('active'));
    });


    document.addEventListener('click', async (event) => {
      if (!event.target.classList.contains('search__input')) {
        this.textArea = document.querySelector('.search__input');
        this.textArea.blur();
      }

      if (event.target.classList.contains('search__input')
          || event.target.classList.contains('keyboard')
          || event.target.classList.contains('keyboard__key')) {
        this.textArea.focus();
      }
      
      if (event.target.classList.contains('AltLeft')) {
        this.changeLanguage();
      }

      if (event.target.classList.contains('ShiftLeft')) {
        this.getWorkOnShift();
      }

      if (event.target.classList.contains('Enter')) {
        // const loadHead = document.querySelector('.load');
        // const swiperWrapper = document.querySelector('.swiper-wrapper');
        // const InfoResults = document.querySelector('.info');
        // const searchInput = document.querySelector('.search__input');
        // const page = 1;
        // const name = null;
        await smthFunc();
      }
    });

    window.addEventListener('unload', () => {
      if (localStorage.lang === 'eng') {
        localStorage.lang = 'eng';
      } else {
        localStorage.lang = 'rus';
      }
    });
  }

  pressKeyHundlerKeyboard() {
    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      const letTer = document.getElementById(event.code).textContent;
      document.getElementById(event.code).classList.add('active');
      // switch (event.code) {
      //   case 'ShiftLeft':
      //     this.getWorkOnShift();
      //     break;
      //   default:
          this.insertLetters(event, letTer);
      // }
    });
    document.addEventListener('keyup', () => {
      // event.preventDefault();
      // // const MetaLeft = document.getElementById('MetaLeft');
      const AltLeft = document.getElementById('AltLeft');
      // // console.log(event.code);
      
      if (AltLeft.classList.contains('active')) {
        this.changeLanguage();
      }
      // switch (event.code) {
      //   case 'ShiftLeft':
      //     this.getWorkOnShift();
      //     break;
      //   case 'CapsLock':
      //     this.getUppperLetter();
      //     break;
      //   default:
      //     break;
      // }
      const keyOfKeyboard = document.querySelectorAll('.keyboard__key');
      keyOfKeyboard.forEach((item) => item.classList.remove('active'));
    });
  }

  getWorkOnShift() {
    if (!this.shiftOn) {
      this.shiftOn = true;
    } else {
      this.shiftOn = false;
    }

    this.keyboardCont = document.querySelector('.keyboard');
    let res = '';
    if (this.shiftOn) {
      this.keysOfData.forEach((item) => {
        res += ` <div class=
        "keyboard__key ${item.eventCode}" id="${item.eventCode}">${(localStorage.lang === 'eng') ? item.upperEng : item.upperRu}</div>`;
      });
    } else {
      this.keysOfData.forEach((item) => {
        res += ` <div class=
          "keyboard__key ${item.eventCode}" id="${item.eventCode}">${(localStorage.lang === 'eng') ? item.lowEng : item.lowRu}</div>`;
      });
    }
    this.keyboardCont.innerHTML = res;

    if (this.shiftOn) {
      this.ShiftLeft = document.getElementById('ShiftLeft');
      this.ShiftLeft.classList.toggle('keyboard__key-red');
      }
  }

  changeLanguage() {
    if (localStorage.lang === 'eng') {
      localStorage.lang = 'rus';
    } else {
      localStorage.lang = 'eng';
    }
    this.addBtnKeyboard();
  }

  getUppperLetter() {
    if (!this.upperLet) {
      this.upperLet = true;
    } else {
      this.upperLet = false;
    }
    this.addBtnKeyboard();
  }

  insertLetters(event, letTer) {
    this.textArea = document.querySelector('.search__input');
    switch (letTer) {
      case 'Backspace':
        this.textArea.value = this.textArea.value.slice(0, -1);
        break;
      case 'Tab':
        letTer = '   ';
        this.insertLetters(event, letTer);
        break;
      // case 'Enter':
      //   letTer = '\n';
      //   this.insertLetters(event, letTer);
      //   break;
      case 'Enter':
      case 'eng':
      case 'ru':
      case 'CapsLock':
      case 'Shift':
      case 'Del':
      case 'Ctrl':
      case 'Alt':
      case 'Win':
      case '▲':
      case '▼':
      case '►':
      case '◄':
        break;
      default:
        this.textArea.setRangeText(letTer, this.textArea.selectionStart, this.textArea.selectionEnd, 'end');
        this.textArea.focus();
    }
  }
}
