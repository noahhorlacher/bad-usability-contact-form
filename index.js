// import BIG data
import 𝖓𝖆𝖒𝖊𝖘 from "./names.js"
import 𝖜𝖔𝖗𝖉𝖘 from "./words.js"

// HTML elements
const ᑘᓰ = {
    d̾i̾s̾p̾l̾a̾y̾_̾n̾a̾m̾e̾: document.querySelector('#display_name'),
    m̾i̾n̾u̾s̾_̾n̾a̾m̾e̾: document.querySelector('#minus_name'),
    p̾l̾u̾s̾_̾n̾a̾m̾e̾: document.querySelector('#plus_name'),
    d̾i̾s̾p̾l̾a̾y̾_̾p̾h̾o̾n̾e̾: document.querySelector('#display_phone'),
    p̾l̾u̾s̾_̾p̾h̾o̾n̾e̾: document.querySelector('#plus_phone'),
    r̾e̾s̾e̾t̾_̾p̾h̾o̾n̾e̾: document.querySelector('#reset_phone'),
    c̾a̾n̾v̾a̾s̾_̾l̾e̾t̾t̾e̾r̾: document.querySelector('#canvas_letter'),
    d̾e̾t̾e̾c̾t̾e̾d̾_̾l̾e̾t̾t̾e̾r̾: document.querySelector('#detected_letter'),
    a̾c̾c̾e̾p̾t̾_̾l̾e̾t̾t̾e̾r̾: document.querySelector('#accept_letter'),
    r̾e̾s̾e̾t̾_̾l̾e̾t̾t̾e̾r̾: document.querySelector('#reset_letter'),
    d̾i̾s̾p̾l̾a̾y̾_̾e̾m̾a̾i̾l̾: document.querySelector('#display_email'),
    l̾i̾s̾t̾_̾w̾o̾r̾d̾s̾: document.querySelector('#list_words'),
    a̾d̾d̾_̾m̾e̾s̾s̾a̾g̾e̾: document.querySelector('#add_message'),
    r̾e̾s̾e̾t̾_̾m̾e̾s̾s̾a̾g̾e̾: document.querySelector('#reset_message'),
    t̾e̾x̾t̾_̾m̾e̾s̾s̾a̾g̾e̾: document.querySelector('#text_message'),
    w̾o̾r̾d̾_̾b̾t̾n̾_̾c̾o̾n̾t̾a̾i̾n̾e̾r̾: document.querySelector('#word_btn_container'),
    b̾u̾t̾t̾o̾n̾_̾s̾e̾n̾d̾: document.querySelector('#button_send'),
    r̾o̾b̾o̾t̾: document.querySelector('#robot')
}

// email characters for guessing
const ᘿᘻᗩᓰᒪ_ᑢᕼᗩᖇS = 'abcdefghijklmnopqrstuvwxyz0123456789-_.@'

// append word options to word list
for (let ᓰ = 0; ᓰ < 𝖜𝖔𝖗𝖉𝖘.length; ᓰ++) {
    let 𝔦𝔡𝔵 = Math.floor(Math.random() * 𝖜𝖔𝖗𝖉𝖘.length)
    let 𝔴𝔬𝔯𝔡 = 𝖜𝖔𝖗𝖉𝖘.splice(𝔦𝔡𝔵, 1)
    let 𝔢𝔩_𝔬𝔭𝔱 = document.createElement('option')
    𝔢𝔩_𝔬𝔭𝔱.value = 𝔴𝔬𝔯𝔡
    𝔢𝔩_𝔬𝔭𝔱.innerText = 𝔴𝔬𝔯𝔡
    ᑘᓰ.l̾i̾s̾t̾_̾w̾o̾r̾d̾s̾.append(𝔢𝔩_𝔬𝔭𝔱)
}

// set word list default value
ᑘᓰ.l̾i̾s̾t̾_̾w̾o̾r̾d̾s̾.value = ᑘᓰ.l̾i̾s̾t̾_̾w̾o̾r̾d̾s̾.querySelector('option:first-of-type').value

// create buttons for adding punctuation to textarea
for (let 𝔠𝔥𝔞𝔯 of '.?!,: -') {
    let 𝔢𝔩 = document.createElement('button')
    𝔢𝔩.innerText = `Add "${𝔠𝔥𝔞𝔯}" to message`
    𝔢𝔩.addEventListener('click', () => {
        alert(`"${𝔠𝔥𝔞𝔯}" has been added to message.`)
        ᑘᓰ.t̾e̾x̾t̾_̾m̾e̾s̾s̾a̾g̾e̾.value += 𝔠𝔥𝔞𝔯
    })
    ᑘᓰ.w̾o̾r̾d̾_̾b̾t̾n̾_̾c̾o̾n̾t̾a̾i̾n̾e̾r̾.append(𝔢𝔩)
}

// name
let 𝔦𝔫𝔡𝔢𝔵_𝔫𝔞𝔪𝔢 = 0
ᑘᓰ.d̾i̾s̾p̾l̾a̾y̾_̾n̾a̾m̾e̾.innerText = 𝖓𝖆𝖒𝖊𝖘[0]
ᑘᓰ.m̾i̾n̾u̾s̾_̾n̾a̾m̾e̾.addEventListener('click', () => {
    𝔦𝔫𝔡𝔢𝔵_𝔫𝔞𝔪𝔢 = Math.max(0, 𝔦𝔫𝔡𝔢𝔵_𝔫𝔞𝔪𝔢 - 1)
    ᑘᓰ.d̾i̾s̾p̾l̾a̾y̾_̾n̾a̾m̾e̾.innerText = 𝖓𝖆𝖒𝖊𝖘[𝔦𝔫𝔡𝔢𝔵_𝔫𝔞𝔪𝔢]
})
ᑘᓰ.p̾l̾u̾s̾_̾n̾a̾m̾e̾.addEventListener('click', () => {
    𝔦𝔫𝔡𝔢𝔵_𝔫𝔞𝔪𝔢 = Math.min(𝖓𝖆𝖒𝖊𝖘.length - 1, 𝔦𝔫𝔡𝔢𝔵_𝔫𝔞𝔪𝔢 + 1)
    ᑘᓰ.d̾i̾s̾p̾l̾a̾y̾_̾n̾a̾m̾e̾.innerText = 𝖓𝖆𝖒𝖊𝖘[𝔦𝔫𝔡𝔢𝔵_𝔫𝔞𝔪𝔢]
})

// phone
let 𝔭𝔥𝔬𝔫𝔢 = 1
ᑘᓰ.d̾i̾s̾p̾l̾a̾y̾_̾p̾h̾o̾n̾e̾.innerText = `(0) 1`
ᑘᓰ.p̾l̾u̾s̾_̾p̾h̾o̾n̾e̾.addEventListener('click', () => {
    𝔭𝔥𝔬𝔫𝔢++
    ᑘᓰ.d̾i̾s̾p̾l̾a̾y̾_̾p̾h̾o̾n̾e̾.innerText = `(0) ${𝔭𝔥𝔬𝔫𝔢}`
})
ᑘᓰ.r̾e̾s̾e̾t̾_̾p̾h̾o̾n̾e̾.addEventListener('click', 𝕣𝕖𝕤𝕖𝕥𝔽𝕠𝕣𝕞)

// message
ᑘᓰ.a̾d̾d̾_̾m̾e̾s̾s̾a̾g̾e̾.addEventListener('click', () =>
    ᑘᓰ.t̾e̾x̾t̾_̾m̾e̾s̾s̾a̾g̾e̾.value += ᑘᓰ.t̾e̾x̾t̾_̾m̾e̾s̾s̾a̾g̾e̾.value.length == 0 ? ᑘᓰ.l̾i̾s̾t̾_̾w̾o̾r̾d̾s̾.value : ` ${ᑘᓰ.l̾i̾s̾t̾_̾w̾o̾r̾d̾s̾.value}`
)
ᑘᓰ.r̾e̾s̾e̾t̾_̾m̾e̾s̾s̾a̾g̾e̾.addEventListener('click', 𝕣𝕖𝕤𝕖𝕥𝔽𝕠𝕣𝕞)

// email address
let 𝔩𝔢𝔱𝔱𝔢𝔯𝔊𝔲𝔢𝔰𝔰 = ''
let 𝔢𝔪𝔞𝔦𝔩 = ''

let 𝔰𝔱𝔞𝔯𝔱𝔛 = 0, 𝔰𝔱𝔞𝔯𝔱𝔜 = 0
let 𝔦𝔰𝔇𝔯𝔞𝔴𝔦𝔫𝔤 = false
const ᏕᏖᏒᎧᏦᏋᏇᎥᎴᏖᏂ = 8
const ᏕᎥፚᏋ_ᏝᏋᏖᏖᏋᏒ = 256, ፈᏖጀ_ᏝᏋᏖᏖᏋᏒ = ᑘᓰ.c̾a̾n̾v̾a̾s̾_̾l̾e̾t̾t̾e̾r̾.getContext('2d')
ᑘᓰ.c̾a̾n̾v̾a̾s̾_̾l̾e̾t̾t̾e̾r̾.width = ᑘᓰ.c̾a̾n̾v̾a̾s̾_̾l̾e̾t̾t̾e̾r̾.height = ᏕᎥፚᏋ_ᏝᏋᏖᏖᏋᏒ
ፈᏖጀ_ᏝᏋᏖᏖᏋᏒ.fillStyle = '#f0f0f0'
ፈᏖጀ_ᏝᏋᏖᏖᏋᏒ.fillRect(0, 0, ᏕᎥፚᏋ_ᏝᏋᏖᏖᏋᏒ, ᏕᎥፚᏋ_ᏝᏋᏖᏖᏋᏒ)

ᑘᓰ.c̾a̾n̾v̾a̾s̾_̾l̾e̾t̾t̾e̾r̾.addEventListener('mousedown', 𝔢 => {
    𝔦𝔰𝔇𝔯𝔞𝔴𝔦𝔫𝔤 = true
    𝔰𝔱𝔞𝔯𝔱𝔛 = 𝔢.clientX
    𝔰𝔱𝔞𝔯𝔱𝔜 = 𝔢.clientY

    let 𝔠𝔞𝔫𝔳𝔞𝔰_𝔩𝔢𝔱𝔱𝔢𝔯_𝔵 = 𝔢.clientX - ᑘᓰ.c̾a̾n̾v̾a̾s̾_̾l̾e̾t̾t̾e̾r̾.getBoundingClientRect().left,
        𝔠𝔞𝔫𝔳𝔞𝔰_𝔩𝔢𝔱𝔱𝔢𝔯_𝔶 = 𝔢.clientY - ᑘᓰ.c̾a̾n̾v̾a̾s̾_̾l̾e̾t̾t̾e̾r̾.getBoundingClientRect().top

    ፈᏖጀ_ᏝᏋᏖᏖᏋᏒ.lineWidth = ᏕᏖᏒᎧᏦᏋᏇᎥᎴᏖᏂ
    ፈᏖጀ_ᏝᏋᏖᏖᏋᏒ.lineCap = 'round'
    ፈᏖጀ_ᏝᏋᏖᏖᏋᏒ.lineTo(𝔠𝔞𝔫𝔳𝔞𝔰_𝔩𝔢𝔱𝔱𝔢𝔯_𝔵, 𝔠𝔞𝔫𝔳𝔞𝔰_𝔩𝔢𝔱𝔱𝔢𝔯_𝔶)
    ፈᏖጀ_ᏝᏋᏖᏖᏋᏒ.stroke()
})
ᑘᓰ.c̾a̾n̾v̾a̾s̾_̾l̾e̾t̾t̾e̾r̾.addEventListener('mouseup', () => {
    𝔦𝔰𝔇𝔯𝔞𝔴𝔦𝔫𝔤 = false
    ፈᏖጀ_ᏝᏋᏖᏖᏋᏒ.stroke()
    ፈᏖጀ_ᏝᏋᏖᏖᏋᏒ.beginPath()

    ᑘᓰ.a̾c̾c̾e̾p̾t̾_̾l̾e̾t̾t̾e̾r̾.classList.remove('hidden')
    ᑘᓰ.r̾e̾s̾e̾t̾_̾l̾e̾t̾t̾e̾r̾.classList.remove('hidden')

    // guess the letter
    let 𝔠𝔥𝔞𝔯 = ᘿᘻᗩᓰᒪ_ᑢᕼᗩᖇS[Math.floor(Math.random() * ᘿᘻᗩᓰᒪ_ᑢᕼᗩᖇS.length)]
    ᑘᓰ.d̾e̾t̾e̾c̾t̾e̾d̾_̾l̾e̾t̾t̾e̾r̾.innerText = `Is your letter "${𝔠𝔥𝔞𝔯}"?`
    𝔩𝔢𝔱𝔱𝔢𝔯𝔊𝔲𝔢𝔰𝔰 = 𝔠𝔥𝔞𝔯
})

ᑘᓰ.a̾c̾c̾e̾p̾t̾_̾l̾e̾t̾t̾e̾r̾.addEventListener('click', () => {
    ፈᏖጀ_ᏝᏋᏖᏖᏋᏒ.fillRect(0, 0, ᏕᎥፚᏋ_ᏝᏋᏖᏖᏋᏒ, ᏕᎥፚᏋ_ᏝᏋᏖᏖᏋᏒ)
    𝔢𝔪𝔞𝔦𝔩 += 𝔩𝔢𝔱𝔱𝔢𝔯𝔊𝔲𝔢𝔰𝔰
    ᑘᓰ.d̾e̾t̾e̾c̾t̾e̾d̾_̾l̾e̾t̾t̾e̾r̾.innerText = ''
    ᑘᓰ.d̾i̾s̾p̾l̾a̾y̾_̾e̾m̾a̾i̾l̾.innerText = 𝔢𝔪𝔞𝔦𝔩
    ᑘᓰ.a̾c̾c̾e̾p̾t̾_̾l̾e̾t̾t̾e̾r̾.classList.add('hidden')
    ᑘᓰ.r̾e̾s̾e̾t̾_̾l̾e̾t̾t̾e̾r̾.classList.add('hidden')
})
ᑘᓰ.r̾e̾s̾e̾t̾_̾l̾e̾t̾t̾e̾r̾.addEventListener('click', 𝕣𝕖𝕤𝕖𝕥𝔽𝕠𝕣𝕞)

ᑘᓰ.c̾a̾n̾v̾a̾s̾_̾l̾e̾t̾t̾e̾r̾.addEventListener('mousemove', 𝔢 => {
    if (𝔦𝔰𝔇𝔯𝔞𝔴𝔦𝔫𝔤) {
        let 𝔠𝔞𝔫𝔳𝔞𝔰_𝔩𝔢𝔱𝔱𝔢𝔯_𝔵 = 𝔢.clientX - ᑘᓰ.c̾a̾n̾v̾a̾s̾_̾l̾e̾t̾t̾e̾r̾.getBoundingClientRect().left,
            𝔠𝔞𝔫𝔳𝔞𝔰_𝔩𝔢𝔱𝔱𝔢𝔯_𝔶 = 𝔢.clientY - ᑘᓰ.c̾a̾n̾v̾a̾s̾_̾l̾e̾t̾t̾e̾r̾.getBoundingClientRect().top

        ፈᏖጀ_ᏝᏋᏖᏖᏋᏒ.lineWidth = ᏕᏖᏒᎧᏦᏋᏇᎥᎴᏖᏂ
        ፈᏖጀ_ᏝᏋᏖᏖᏋᏒ.lineCap = 'round'
        ፈᏖጀ_ᏝᏋᏖᏖᏋᏒ.lineTo(𝔠𝔞𝔫𝔳𝔞𝔰_𝔩𝔢𝔱𝔱𝔢𝔯_𝔵, 𝔠𝔞𝔫𝔳𝔞𝔰_𝔩𝔢𝔱𝔱𝔢𝔯_𝔶)
        ፈᏖጀ_ᏝᏋᏖᏖᏋᏒ.stroke()
    }
})

// reset the form
function 𝕣𝕖𝕤𝕖𝕥𝔽𝕠𝕣𝕞(𝔪𝔰𝔤 = true) {
    ፈᏖጀ_ᏝᏋᏖᏖᏋᏒ.fillRect(0, 0, ᏕᎥፚᏋ_ᏝᏋᏖᏖᏋᏒ, ᏕᎥፚᏋ_ᏝᏋᏖᏖᏋᏒ)
    𝔢𝔪𝔞𝔦𝔩 = ''
    ᑘᓰ.d̾e̾t̾e̾c̾t̾e̾d̾_̾l̾e̾t̾t̾e̾r̾.innerText = ''
    ᑘᓰ.d̾i̾s̾p̾l̾a̾y̾_̾e̾m̾a̾i̾l̾.innerText = ''
    ᑘᓰ.a̾c̾c̾e̾p̾t̾_̾l̾e̾t̾t̾e̾r̾.classList.add('hidden')
    ᑘᓰ.r̾e̾s̾e̾t̾_̾l̾e̾t̾t̾e̾r̾.classList.add('hidden')

    𝔦𝔫𝔡𝔢𝔵_𝔫𝔞𝔪𝔢 = 0
    ᑘᓰ.d̾i̾s̾p̾l̾a̾y̾_̾n̾a̾m̾e̾.innerText = 𝖓𝖆𝖒𝖊𝖘[0]

    𝔭𝔥𝔬𝔫𝔢 = 1
    ᑘᓰ.d̾i̾s̾p̾l̾a̾y̾_̾p̾h̾o̾n̾e̾.innerText = `(0) 1`

    ᑘᓰ.t̾e̾x̾t̾_̾m̾e̾s̾s̾a̾g̾e̾.value = ''

    if (𝔪𝔰𝔤) alert('The form has successfully been reset!')
}

// invalid form
function 𝕖𝕣𝕣𝕠𝕣(𝔪𝔰𝔤) {
    𝕣𝕖𝕤𝕖𝕥𝔽𝕠𝕣𝕞(false)
    alert(`${𝔪𝔰𝔤}\nForm has been reset.`)
}

// validate email address
function 𝕖𝕞𝕒𝕚𝕝𝕀𝕤𝕍𝕒𝕝𝕚𝕕() {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(𝔢𝔪𝔞𝔦𝔩)
}

// validate and send the form
ᑘᓰ.b̾u̾t̾t̾o̾n̾_̾s̾e̾n̾d̾.addEventListener('click', () => {
    let 𝔪𝔢𝔰𝔰𝔞𝔤𝔢_𝔴𝔬𝔯𝔡𝔰 = ᑘᓰ.t̾e̾x̾t̾_̾m̾e̾s̾s̾a̾g̾e̾.value.split(/[\s\.,:-\?\!]/).filter(w => w.length > 0)

    // validate name
    if (𝔦𝔫𝔡𝔢𝔵_𝔫𝔞𝔪𝔢 < 0 || 𝔦𝔫𝔡𝔢𝔵_𝔫𝔞𝔪𝔢 >= 𝖓𝖆𝖒𝖊𝖘.length) 𝕖𝕣𝕣𝕠𝕣("Invalid name.")
    // validate phone number
    else if (𝔭𝔥𝔬𝔫𝔢 < 1) 𝕖𝕣𝕣𝕠𝕣("Invalid phone number.")
    // validate email
    else if (!𝕖𝕞𝕒𝕚𝕝𝕀𝕤𝕍𝕒𝕝𝕚𝕕()) 𝕖𝕣𝕣𝕠𝕣("Invalid email address.")
    // validate message
    else if (𝔪𝔢𝔰𝔰𝔞𝔤𝔢_𝔴𝔬𝔯𝔡𝔰.some(w => !𝖜𝖔𝖗𝖉𝖘.includes(w))) 𝕖𝕣𝕣𝕠𝕣(`Word ${𝔪𝔢𝔰𝔰𝔞𝔤𝔢_𝔴𝔬𝔯𝔡𝔰.find(w => !𝖜𝖔𝖗𝖉𝖘.includes(w))} is not in original word list. HACKER.`)
    // robot
    else if (ᑘᓰ.r̾o̾b̾o̾t̾.value) 𝕖𝕣𝕣𝕠𝕣("YOU ARE A ROBOT.")
    else {
        const ᎦᎧᏒᎷᎴᏗᏖᏗ = {
            n̾a̾m̾e̾: 𝖓𝖆𝖒𝖊𝖘[𝔦𝔫𝔡𝔢𝔵_𝔫𝔞𝔪𝔢],
            p̾h̾o̾n̾e̾: 𝔭𝔥𝔬𝔫𝔢,
            e̾m̾a̾i̾l̾: 𝔢𝔪𝔞𝔦𝔩,
            m̾e̾s̾s̾a̾g̾e̾: ᑘᓰ.t̾e̾x̾t̾_̾m̾e̾s̾s̾a̾g̾e̾.value
        }

        alert("Form has been sent, with following data:" + JSON.stringify(ᎦᎧᏒᎷᎴᏗᏖᏗ))
    }
})