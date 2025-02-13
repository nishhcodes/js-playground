let count = 0;

const getContainer = document.getElementById('root');
const countButton = document.getElementById('counter');
const getCounting = document.getElementById('para');
const modal = document.getElementById('modal');

function handleClick() {
    count++;
    getCounting.textContent = `${count}`;

    if(count>=10) {
        countButton.removeEventListener('click', handleClick)
        showModal();
    }
}

countButton.addEventListener('click', handleClick);

function showModal() {
    modal.classList.add('show');

    setTimeout(() => {
        modal.classList.remove('show');
    }, 3000);
}