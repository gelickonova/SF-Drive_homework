import '../scss/aboutus.scss'
import '../scss/faq.scss'
import '../scss/footer.scss'
import '../scss/header.scss'

function whenReady() {
    let btns = document.getElementsByClassName('collapsible');
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', () => {
            let answer = document.getElementById(`faq${i + 1}_desc`)
            answer.classList.toggle('hidden');
            if (btns[i].getAttribute('aria-expanded')==='true') {btns[i].setAttribute('aria-expanded', "false")}
            else btns[i].setAttribute('aria-expanded', "true")
        });

    }
}
document.addEventListener("DOMContentLoaded", whenReady)