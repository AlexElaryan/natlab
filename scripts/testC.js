const calendarElement = document.querySelector('.calendar-tectC');
const testCRightElement = document.querySelector('.testC-right');

calendarElement.addEventListener('mouseenter', () => {
    testCRightElement.style.background = 'rgba(226, 223, 223, 1)';
});

calendarElement.addEventListener('mouseleave', () => {
    testCRightElement.style.background = 'rgba(226, 223, 223, 0.7)';
});
