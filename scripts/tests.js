let testHref = document.querySelectorAll('.tests-block-left_item');
testHref.forEach(btn => {
    btn.onclick = () => {
        if (btn.classList.contains('tests-block-left_item-open')) {
            btn.classList.remove('tests-block-left_item-open')
        } else if (!btn.classList.contains('tests-block-left_item-open')) {
            btn.classList.add('tests-block-left_item-open');
        }
    }
})