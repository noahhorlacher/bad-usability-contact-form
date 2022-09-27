import names from "./names.js"
import words from "./words.js"

const EMAIL_CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789-_.@'
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
    display_email: document.querySelector('#display_email'),
    list_words: document.querySelector('#list_words'),
    add_message: document.querySelector('#add_message'),
    reset_message: document.querySelector('#reset_message'),
    text_message: document.querySelector('#text_message'),
    word_btn_container: document.querySelector('#word_btn_container'),
    button_send: document.querySelector('#button_send'),
    robot: document.querySelector('#robot')
}

for (let i = 0; i < words.length; i++) {
    let idx = Math.floor(Math.random() * words.length)
    let word = words.splice(idx, 1)
    let el_opt = document.createElement('option')
    el_opt.value = word
    el_opt.innerText = word
    UI.list_words.append(el_opt)
}
UI.list_words.value = UI.list_words.querySelector('option:first-of-type').value

let message_chars = ".?!,: -"
for (let char of message_chars.split('')) {
    let el = document.createElement('button')
    el.innerText = `Add "${char}" to message`
    el.addEventListener('click', () => {
        alert(`"${char}" has been added to message.`)
        UI.text_message.value += char
    })
    word_btn_container.append(el)
}

// name
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

// phone
let phone = 1
UI.display_phone.innerText = `(0) 1`
UI.plus_phone.addEventListener('click', () => {
    phone++
    UI.display_phone.innerText = `(0) ${phone}`
})
UI.reset_phone.addEventListener('click', resetForm)

// message
UI.add_message.addEventListener('click', () => {
    UI.text_message.value += UI.text_message.value.length == 0 ? UI.list_words.value : ` ${UI.list_words.value}`
})
UI.reset_message.addEventListener('click', resetForm)

// email address
let letterGuess = ''
let email = ''

let startX = 0, startY = 0
let isDrawing = false
const STROKEWIDTH = 8
const SIZE_LETTER = 256, CTX_LETTER = canvas_letter.getContext('2d')
UI.canvas_letter.width = UI.canvas_letter.height = SIZE_LETTER
CTX_LETTER.fillStyle = '#f0f0f0'
CTX_LETTER.fillRect(0, 0, SIZE_LETTER, SIZE_LETTER)

UI.canvas_letter.addEventListener('mousedown', e => {
    isDrawing = true
    startX = e.clientX
    startY = e.clientY

    let canvas_letter_x = e.clientX - UI.canvas_letter.getBoundingClientRect().left,
        canvas_letter_y = e.clientY - UI.canvas_letter.getBoundingClientRect().top

    CTX_LETTER.lineWidth = STROKEWIDTH
    CTX_LETTER.lineCap = 'round'
    CTX_LETTER.lineTo(canvas_letter_x, canvas_letter_y)
    CTX_LETTER.stroke()
})
UI.canvas_letter.addEventListener('mouseup', e => {
    isDrawing = false
    CTX_LETTER.stroke()
    CTX_LETTER.beginPath()

    UI.accept_letter.classList.remove('hidden')
    UI.reset_letter.classList.remove('hidden')

    // guess the letter
    let char = EMAIL_CHARS[Math.floor(Math.random() * EMAIL_CHARS.length)]
    UI.detected_letter.innerText = `Is your letter "${char}"?`
    letterGuess = char
})

UI.accept_letter.addEventListener('click', () => {
    CTX_LETTER.fillRect(0, 0, SIZE_LETTER, SIZE_LETTER)
    email += letterGuess
    UI.detected_letter.innerText = ''
    UI.display_email.innerText = email
    UI.accept_letter.classList.add('hidden')
    UI.reset_letter.classList.add('hidden')
})
UI.reset_letter.addEventListener('click', resetForm)

UI.canvas_letter.addEventListener('mousemove', e => {
    if (isDrawing) {
        let canvas_letter_x = e.clientX - UI.canvas_letter.getBoundingClientRect().left,
            canvas_letter_y = e.clientY - UI.canvas_letter.getBoundingClientRect().top

        CTX_LETTER.lineWidth = STROKEWIDTH
        CTX_LETTER.lineCap = 'round'
        CTX_LETTER.lineTo(canvas_letter_x, canvas_letter_y)
        CTX_LETTER.stroke()
    }
})

// reset the form
function resetForm(msg = true) {
    CTX_LETTER.fillRect(0, 0, SIZE_LETTER, SIZE_LETTER)
    email = ''
    UI.detected_letter.innerText = ''
    UI.display_email.innerText = ''
    UI.accept_letter.classList.add('hidden')
    UI.reset_letter.classList.add('hidden')

    index_name = 0
    UI.display_name.innerText = names[0]

    phone = 1
    UI.display_phone.innerText = `(0) 1`

    UI.text_message.value = ''

    if (msg) alert('The form has successfully been reset!')
}

// invalid form
function error(message) {
    resetForm(false)
    alert(`${message}\nForm has been reset.`)
}

// validate email address
function emailIsValid() {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)
}

// validate and send the form
UI.button_send.addEventListener('click', () => {
    let message_words = UI.text_message.value.split(/[\s\.,:-\?\!]/).filter(w => w.length > 0)

    // validate name
    if (index_name < 0 || index_name >= names.length) error("Invalid name.")
    // validate phone number
    else if (phone < 1) error("Invalid phone number.")
    // validate email
    else if (!emailIsValid()) error("Invalid email address.")
    // validate message
    else if (message_words.some(w => !words.includes(w))) error(`Word ${message_words.find(w => !words.includes(w))} is not in original word list. HACKER.`)
    // robot
    else if (UI.robot.value) error("YOU ARE A ROBOT.")
    else {
        let formData = {
            name: names[index_name],
            phone: phone,
            email: email,
            message: UI.text_message.value
        }

        alert("Form has been sent, with following data:" + JSON.stringify(formData))
    }
})