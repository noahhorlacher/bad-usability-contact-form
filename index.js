import names from "./names.js"

const EMAIL_CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789!#$%&\'*+-/=?^_`.{|}~'
const UI = {
    display_name: document.querySelector('#display_name'),
    minus_name: document.querySelector('#minus_name'),
    plus_name: document.querySelector('#plus_name'),
    display_phone: document.querySelector('#display_phone'),
    plus_phone: document.querySelector('#plus_phone'),
    reset_phone: document.querySelector('#reset_phone'),
    canvas_letter: document.querySelector('#canvas_letter'),
    detected_letter: document.querySelector('#detected_letter'),
    accept_letter: document.querySelector('#accept_letter'),
    reset_letter: document.querySelector('#reset_letter'),
    display_email: document.querySelector('#display_email')
}

let letterGuess = ''
let email = ''

let startX = 0, startY = 0
let isDrawing = false
const STROKEWIDTH = 8
const SIZE_LETTER = 128, CTX_LETTER = canvas_letter.getContext('2d')
UI.canvas_letter.width = UI.canvas_letter.height = SIZE_LETTER
UI.canvas_letter.lineCap = 'round'

UI.canvas_letter.addEventListener('mousedown', e => {
    isDrawing = true
    startX = e.clientX
    startY = e.clientY
})

UI.canvas_letter.addEventListener('mouseup', e => {
    isDrawing = false
    CTX_LETTER.stroke()
    CTX_LETTER.beginPath()

    UI.accept_letter.classList.remove('hidden')
    UI.reset_letter.classList.remove('hidden')

    guessLetter()
})

function guessLetter() {
    let char = EMAIL_CHARS[Math.floor(Math.random() * EMAIL_CHARS.length)]
    UI.detected_letter.innerText = `Is your letter "${char}"?`
    letterGuess = char
}

UI.accept_letter.addEventListener('click', () => {
    CTX_LETTER.fillRect(0, 0, SIZE_LETTER, SIZE_LETTER)
    email += letterGuess
    UI.detected_letter.innerText = ''
    UI.display_email.innerText = email
    UI.accept_letter.classList.add('hidden')
    UI.reset_letter.classList.add('hidden')
})

UI.reset_letter.addEventListener('click', () => {
    CTX_LETTER.fillRect(0, 0, SIZE_LETTER, SIZE_LETTER)
    email = ''
    UI.detected_letter.innerText = ''
    UI.display_email.innerText = ''
    UI.accept_letter.classList.add('hidden')
    UI.reset_letter.classList.add('hidden')
})

UI.canvas_letter.addEventListener('mousemove', e => {
    if (isDrawing) {
        let canvas_letter_x = e.clientX - UI.canvas_letter.getBoundingClientRect().left,
            canvas_letter_y = e.clientY - UI.canvas_letter.getBoundingClientRect().top

        UI.canvas_letter.lineWidth = STROKEWIDTH
        CTX_LETTER.lineTo(canvas_letter_x, canvas_letter_y)
        CTX_LETTER.stroke()
    }
})

function reset_canvas() {
    CTX_LETTER.fillStyle = '#fff'
    CTX_LETTER.fillRect(0, 0, SIZE_LETTER, SIZE_LETTER)
}
reset_canvas()

let index_name = 0
display_name.innerText = names[0]

UI.minus_name.addEventListener('click', () => {
    index_name = Math.max(0, index_name - 1)
    UI.display_name.innerText = names[index_name]
})
UI.plus_name.addEventListener('click', () => {
    index_name = Math.min(names.length - 1, index_name + 1)
    UI.display_name.innerText = names[index_name]
})

let phone = 1
UI.display_phone.innerText = `(0) 1`
UI.plus_phone.addEventListener('click', () => {
    phone++
    UI.display_phone.innerText = `(0) ${phone}`
})

UI.reset_phone.addEventListener('click', () => {
    phone = 1
    UI.display_phone.innerText = `(0) ${phone}`
})