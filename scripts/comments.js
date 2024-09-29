let commentBlock = document.querySelectorAll('.comments-item');
let seeAll = document.querySelectorAll('.comments-item button');

seeAll.forEach((btn, ind) => {
    btn.onclick = () => {
        commentBlock[ind].classList.toggle('comment-open');
        if (commentBlock[ind].classList.contains('comment-open')) {
            btn.textContent = 'Свернуть';
        } else {
            btn.textContent = 'Читать подробнее';
        }
    }
})

let sendCommentBtn = document.querySelector('.send-comment > button');
let texts = document.querySelectorAll('.send-comment-block input');

texts.forEach(el => {
    el.oninput = () => {
        let allFilled = Array.from(texts).every(inp => inp.value.trim() !== '')
        if (allFilled) {
            sendCommentBtn.style.color = '#fff';
        } else {
            sendCommentBtn.style.color = 'rgba(255, 255, 255, 0.5)';
        }
    };
});
