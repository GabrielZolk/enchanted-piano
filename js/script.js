const keys = document.querySelectorAll('.key')
const checkbox = document.querySelector('.checkbox')
const switcher = document.querySelector('.switcher')
const keysSection = document.querySelector('.keys')

const playNote = (note) => {
    const audio = new Audio(`../notes/${note}.wav`);
    audio.play();
}

const handleMouseDown = (key) => {
    playNote(key.getAttribute('data-note'));
    if(key.className.includes('black')) {
        key.classList.add('black--pressed')
        return
    }
    key.style.background = '#ddd';
}

const handleMouseUp = (key) => {

    if(key.className.includes('black')) {
        key.classList.remove('black--pressed')
        return
    }
    key.style.background = 'white';
}


keys.forEach((key) => {
    key.addEventListener('mousedown', () => handleMouseDown(key))
    key.addEventListener('mouseup', () => handleMouseUp(key))
})

checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        switcher.classList.add('switcher--active')
        keysSection.classList.remove('disabled-keys')
        return
    }

    switcher.classList.remove('switcher--active')
    keysSection.classList.add('disabled-keys')
})

const keyDownMapper = {
    'q': () => handleMouseDown(keys[0]),
    '2': () => handleMouseDown(keys[1]),
    'w': () => handleMouseDown(keys[2]),
    '3': () => handleMouseDown(keys[3]),
    'e': () => handleMouseDown(keys[4]),
    'r': () => handleMouseDown(keys[5]),
    '5': () => handleMouseDown(keys[6]),
    't': () => handleMouseDown(keys[7]),
    '6': () => handleMouseDown(keys[8]),
    'y': () => handleMouseDown(keys[9]),
    '7': () => handleMouseDown(keys[10]),
    'u': () => handleMouseDown(keys[11]),
    'i': () => handleMouseDown(keys[12]),
    '9': () => handleMouseDown(keys[13]),
    'o': () => handleMouseDown(keys[14]),
    '0': () => handleMouseDown(keys[15]),
    'p': () => handleMouseDown(keys[16]),
    '-': () => handleMouseDown(keys[17]),
    '=': () => handleMouseDown(keys[18]),
    '\\': () => handleMouseDown(keys[19]),
    'a': () => handleMouseDown(keys[20]),
    'z': () => handleMouseDown(keys[21]),
    's': () => handleMouseDown(keys[22]),
    'x': () => handleMouseDown(keys[23]),
    'c': () => handleMouseDown(keys[24]),
    'f': () => handleMouseDown(keys[25]),
    'v': () => handleMouseDown(keys[26]),
    'g': () => handleMouseDown(keys[27]),
    'b': () => handleMouseDown(keys[28]),
    'n': () => handleMouseDown(keys[29]),
    'j': () => handleMouseDown(keys[30]),
    'm': () => handleMouseDown(keys[31]),
    'k': () => handleMouseDown(keys[32]),
    ',': () => handleMouseDown(keys[33]),
    'l': () => handleMouseDown(keys[34]),
    '.': () => handleMouseDown(keys[35]),
}

const keyUpMapper = {
    'q': () => handleMouseUp(keys[0]),
    '2': () => handleMouseUp(keys[1]),
    'w': () => handleMouseUp(keys[2]),
    '3': () => handleMouseUp(keys[3]),
    'e': () => handleMouseUp(keys[4]),
    'r': () => handleMouseUp(keys[5]),
    '5': () => handleMouseUp(keys[6]),
    't': () => handleMouseUp(keys[7]),
    '6': () => handleMouseUp(keys[8]),
    'y': () => handleMouseUp(keys[9]),
    '7': () => handleMouseUp(keys[10]),
    'u': () => handleMouseUp(keys[11]),
    'i': () => handleMouseUp(keys[12]),
    '9': () => handleMouseUp(keys[13]),
    'o': () => handleMouseUp(keys[14]),
    '0': () => handleMouseUp(keys[15]),
    'p': () => handleMouseUp(keys[16]),
    '-': () => handleMouseUp(keys[17]),
    '=': () => handleMouseUp(keys[18]),
    '\\': () => handleMouseUp(keys[19]),
    'a': () => handleMouseUp(keys[20]),
    'z': () => handleMouseUp(keys[21]),
    's': () => handleMouseUp(keys[22]),
    'x': () => handleMouseUp(keys[23]),
    'c': () => handleMouseUp(keys[24]),
    'f': () => handleMouseUp(keys[25]),
    'v': () => handleMouseUp(keys[26]),
    'g': () => handleMouseUp(keys[27]),
    'b': () => handleMouseUp(keys[28]),
    'n': () => handleMouseUp(keys[29]),
    'j': () => handleMouseUp(keys[30]),
    'm': () => handleMouseUp(keys[31]),
    'k': () => handleMouseUp(keys[32]),
    ',': () => handleMouseUp(keys[33]),
    'l': () => handleMouseUp(keys[34]),
    '.': () => handleMouseUp(keys[35]),
}

document.addEventListener('keydown', (event) => {
    event.preventDefault()
    keyDownMapper[event.key]()
})

document.addEventListener('keyup', (event) => {
    event.preventDefault()
    keyUpMapper[event.key]()
})