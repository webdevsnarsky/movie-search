const ARRAY_ONE = [
  {
    keyCode: 192, upperEng: '~', upperRu: 'Ё', lowEng: '`', lowRu: 'ё', eventCode: 'Backquote',
  },
  {
    keyCode: 49, upperEng: '!', upperRu: '!', lowEng: '1', lowRu: '1', eventCode: 'Digit1',
  },
  {
    keyCode: 50, upperEng: '@', upperRu: '"', lowEng: '2', lowRu: '2', eventCode: 'Digit2',
  },
  {
    keyCode: 51, upperEng: '#', upperRu: '№', lowEng: '3', lowRu: '3', eventCode: 'Digit3',
  },
  {
    keyCode: 52, upperEng: '$', upperRu: ';', lowEng: '4', lowRu: '4', eventCode: 'Digit4',
  },
  {
    keyCode: 53, upperEng: '%', upperRu: '%', lowEng: '5', lowRu: '5', eventCode: 'Digit5',
  },
  {
    keyCode: 54, upperEng: '^', upperRu: ':', lowEng: '6', lowRu: '6', eventCode: 'Digit6',
  },
  {
    keyCode: 55, upperEng: '?', upperRu: '?', lowEng: '7', lowRu: '7', eventCode: 'Digit7',
  },
  {
    keyCode: 56, upperEng: '*', upperRu: '*', lowEng: '8', lowRu: '8', eventCode: 'Digit8',
  },
  {
    keyCode: 57, upperEng: '(', upperRu: '(', lowEng: '9', lowRu: '9', eventCode: 'Digit9',
  },
  {
    keyCode: 48, upperEng: ')', upperRu: ')', lowEng: '0', lowRu: '0', eventCode: 'Digit0',
  },
  {
    keyCode: 189, upperEng: '_', upperRu: '_', lowEng: '-', lowRu: '-', eventCode: 'Minus',
  },
  {
    keyCode: 187, upperEng: '+', upperRu: '+', lowEng: '=', lowRu: '=', eventCode: 'Equal',
  },
  {
    keyCode: 8, upperEng: 'Backspace', upperRu: 'Backspace', lowEng: 'Backspace', lowRu: 'Backspace', eventCode: 'Backspace',
  },
  {
    keyCode: 9, upperEng: 'Tab', upperRu: 'Tab', lowEng: 'Tab', lowRu: 'Tab', eventCode: 'Tab',
  },
  {
    keyCode: 81, upperEng: 'Q', upperRu: 'Й', lowEng: 'q', lowRu: 'й', eventCode: 'KeyQ',
  },
  {
    keyCode: 87, upperEng: 'W', upperRu: 'Ц', lowEng: 'w', lowRu: 'ц', eventCode: 'KeyW',
  },
  {
    keyCode: 69, upperEng: 'E', upperRu: 'У', lowEng: 'e', lowRu: 'у', eventCode: 'KeyE',
  },
  {
    keyCode: 82, upperEng: 'R', upperRu: 'К', lowEng: 'r', lowRu: 'к', eventCode: 'KeyR',
  },
  {
    keyCode: 84, upperEng: 'T', upperRu: 'Е', lowEng: 't', lowRu: 'е', eventCode: 'KeyT',
  },
  {
    keyCode: 89, upperEng: 'Y', upperRu: 'Н', lowEng: 'y', lowRu: 'н', eventCode: 'KeyY',
  },
  {
    keyCode: 85, upperEng: 'U', upperRu: 'Г', lowEng: 'u', lowRu: 'г', eventCode: 'KeyU',
  },
  {
    keyCode: 73, upperEng: 'I', upperRu: 'Ш', lowEng: 'i', lowRu: 'ш', eventCode: 'KeyI',
  },
  {
    keyCode: 79, upperEng: 'O', upperRu: 'Щ', lowEng: 'o', lowRu: 'o', eventCode: 'KeyO',
  },
  {
    keyCode: 80, upperEng: 'P', upperRu: 'З', lowEng: 'p', lowRu: 'з', eventCode: 'KeyP',
  },
  {
    keyCode: 219, upperEng: '{', upperRu: 'Х', lowEng: '[', lowRu: 'х', eventCode: 'BracketLeft',
  },
  {
    keyCode: 221, upperEng: '}', upperRu: 'Ъ', lowEng: ']', lowRu: 'ъ', eventCode: 'BracketRight',
  },
  {
    keyCode: 220, upperEng: '|', upperRu: '&frasl;', lowEng: '&#92;', lowRu: '&#92;', eventCode: 'Backslash',
  },
  {
    keyCode: 46, upperEng: 'Del', upperRu: 'Del', lowEng: 'Del', lowRu: 'Del', eventCode: 'Delete',
  },
  {
    keyCode: 9, upperEng: 'CapsLock', upperRu: 'CapsLock', lowEng: 'CapsLock', lowRu: 'CapsLock', eventCode: 'CapsLock',
  },
  {
    keyCode: 65, upperEng: 'A', upperRu: 'Ф', lowEng: 'a', lowRu: 'ф', eventCode: 'KeyA',
  },
  {
    keyCode: 83, upperEng: 'S', upperRu: 'Ы', lowEng: 's', lowRu: 'ы', eventCode: 'KeyS',
  },
  {
    keyCode: 68, upperEng: 'D', upperRu: 'В', lowEng: 'd', lowRu: 'в', eventCode: 'KeyD',
  },
  {
    keyCode: 70, upperEng: 'F', upperRu: 'А', lowEng: 'f', lowRu: 'а', eventCode: 'KeyF',
  },
  {
    keyCode: 71, upperEng: 'G', upperRu: 'П', lowEng: 'g', lowRu: 'п', eventCode: 'KeyG',
  },
  {
    keyCode: 72, upperEng: 'H', upperRu: 'Р', lowEng: 'h', lowRu: 'р', eventCode: 'KeyH',
  },
  {
    keyCode: 74, upperEng: 'J', upperRu: 'О', lowEng: 'j', lowRu: 'о', eventCode: 'KeyJ',
  },
  {
    keyCode: 75, upperEng: 'K', upperRu: 'Л', lowEng: 'k', lowRu: 'л', eventCode: 'KeyK',
  },
  {
    keyCode: 76, upperEng: 'L', upperRu: 'Д', lowEng: 'l', lowRu: 'д', eventCode: 'KeyL',
  },
  {
    keyCode: 186, upperEng: ':', upperRu: 'Ж', lowEng: ';', lowRu: 'ж', eventCode: 'Semicolon',
  },
  {
    keyCode: 222, upperEng: '"', upperRu: 'Э', lowEng: "'", lowRu: 'э', eventCode: 'Quote',
  },
  {
    keyCode: 13, upperEng: 'Enter', upperRu: 'Enter', lowEng: 'Enter', lowRu: 'Enter', value: '\n', eventCode: 'Enter',
  },
  {
    keyCode: 16, upperEng: 'Shift', upperRu: 'Shift', lowEng: 'Shift', lowRu: 'Shift', eventCode: 'ShiftLeft',
  },
  {
    keyCode: 90, upperEng: 'Z', upperRu: 'Я', lowEng: 'z', lowRu: 'я', eventCode: 'KeyZ',
  },
  {
    keyCode: 88, upperEng: 'X', upperRu: 'Ч', lowEng: 'x', lowRu: 'ч', eventCode: 'KeyX',
  },
  {
    keyCode: 67, upperEng: 'C', upperRu: 'С', lowEng: 'c', lowRu: 'с', eventCode: 'KeyC',
  },
  {
    keyCode: 86, upperEng: 'V', upperRu: 'М', lowEng: 'v', lowRu: 'м', eventCode: 'KeyV',
  },
  {
    keyCode: 66, upperEng: 'B', upperRu: 'И', lowEng: 'b', lowRu: 'и', eventCode: 'KeyB',
  },
  {
    keyCode: 78, upperEng: 'N', upperRu: 'Т', lowEng: 'n', lowRu: 'т', eventCode: 'KeyN',
  },
  {
    keyCode: 77, upperEng: 'M', upperRu: 'Ь', lowEng: 'm', lowRu: 'ь', eventCode: 'KeyM',
  },
  {
    keyCode: 188, upperEng: '<', upperRu: 'Б', lowEng: ',', lowRu: 'б', eventCode: 'Comma',
  },
  {
    keyCode: 190, upperEng: '>', upperRu: 'Ю', lowEng: '.', lowRu: 'ю', eventCode: 'Period',
  },
  {
    keyCode: 191, upperEng: '?', upperRu: ',', lowEng: '/', lowRu: '.', eventCode: 'Slash',
  },
  {
    keyCode: 38, upperEng: '&#9650;', upperRu: '&#9650;', lowEng: '&#9650;', lowRu: '&#9650;', eventCode: 'ArrowUp',
  },
  {
    keyCode: 16, upperEng: 'Shift', upperRu: 'Shift', lowEng: 'Shift', lowRu: 'Shift', eventCode: 'ShiftRight',
  },
  {
    keyCode: 17, upperEng: 'Ctrl', upperRu: 'Ctrl', lowEng: 'Ctrl', lowRu: 'Ctrl', eventCode: 'ControlLeft',
  },
  {
    keyCode: 91, upperEng: 'Win', upperRu: 'Win', lowEng: 'Win', lowRu: 'Win', eventCode: 'MetaLeft',
  },
  {
    keyCode: 18, upperEng: 'ru', upperRu: 'eng', lowEng: 'ru', lowRu: 'eng', eventCode: 'AltLeft',
  },
  {
    keyCode: 32, upperEng: '&nbsp;', upperRu: '&nbsp;', lowEng: '&nbsp;', lowRu: '&nbsp;', eventCode: 'Space',
  },
  {
    keyCode: 18, upperEng: 'Alt', upperRu: 'Alt', lowEng: 'Alt', lowRu: 'Alt', eventCode: 'AltRight',
  },
  {
    keyCode: 37, upperEng: '&#9668;', upperRu: '&#9668;', lowEng: '&#9668;', lowRu: '&#9668;', eventCode: 'ArrowLeft',
  },
  {
    keyCode: 40, upperEng: '&#9660;', upperRu: '&#9660;', lowEng: '&#9660;', lowRu: '&#9660;', eventCode: 'ArrowDown',
  },
  {
    keyCode: 39, upperEng: '&#9658;', upperRu: '&#9658;', lowEng: '&#9658;', lowRu: '&#9658;', eventCode: 'ArrowRight',
  },
  {
    keyCode: 17, upperEng: 'Ctrl', upperRu: 'Ctrl', lowEng: 'Ctrl', lowRu: 'Ctrl', eventCode: 'ControlRight',
  },
];

export default ARRAY_ONE;