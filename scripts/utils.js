const $ = (arg) => document.querySelector(arg)

const $$ = (args) => document.querySelectorAll(args)

const $text = (arg, text) => $(arg).innerText = text

const $val = (arg) => $(arg).value

const setLS = (key, value) => localStorage.setItem(key, value)

const getLS = (key) => localStorage.getItem(key)
const showErr = (msg) => {
    $text('#error', msg)    
    setTimeout(() => {
        $text('#error', ' ')
    }, 3000)
}