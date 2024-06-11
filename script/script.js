// Скрываем все элементы кроме первого при загрузке страницы
document.querySelectorAll('.item').forEach((item, index) => {
    if (index !== 0) {
        item.style.display = 'none';
    }
});

const totalItems = document.querySelectorAll('.item').length;
let currentIndex = 0;

document.querySelector('.button-next').addEventListener('click', function() {
    showItem((currentIndex - 1 + totalItems) % totalItems);
});

document.querySelector('.button-prev').addEventListener('click', function() {
    showItem((currentIndex + 1) % totalItems);
});

function showItem(index) {
    document.querySelectorAll('.item').forEach(item => {
        item.style.display = 'none';
    });

    document.querySelectorAll('.item')[index].style.display = 'flex';

    document.querySelectorAll('.circle-indicator').forEach(circle => {
        circle.classList.remove('active');
    });

    document.querySelectorAll('.circle-indicator')[index].classList.add('active');

    currentIndex = index;
}

// слайдер 2
const initSlider = () => {
    const imageList = document.querySelector(".image-list");
    const slideButtons = document.querySelectorAll('.icons button');
  
    let currentIndex = 0;

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === 'prev-slide' ? -1 : 1;
            const scrollAmount = 380 * direction; // Adjust the scroll amount as needed
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });

            // Update currentIndex based on the direction
            currentIndex = (currentIndex + direction + 5) % 5; // Assuming 5 is the total number of slides
        });
    });
}

window.addEventListener("load", initSlider);



function toggleContent() {
    const textElement = document.querySelector('.text');
    const hideSection = document.getElementById('hideSection');

    if (textElement.style.display === 'none') {
        textElement.style.display = 'block';
        hideSection.querySelector('p').textContent = 'Свернуть';
    } else {
        textElement.style.display = 'none';
        hideSection.querySelector('p').textContent = 'Развернуть';
    }
}
function toggleContent() {
    const textElement = document.querySelector('.text');
    textElement.classList.toggle('collapsed');
    
    const hideSection = document.getElementById('hideSection');
    const action = textElement.classList.contains('collapsed') ? 'Развернуть' : 'Свернуть';
    hideSection.querySelector('p').textContent = action;
}


const openPopupBtn = document.getElementById('openPopup');
const popup = document.getElementById('popup');

if (openPopupBtn && popup) {
    openPopupBtn.addEventListener('click', function() {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Запретить скролл на заднем фоне
    });

    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto'; // Включить скролл на заднем фоне
        }   
    });
}

const openPopupBtn2 = document.getElementById('openPopup2');
const popup2 = document.getElementById('popup2');

if (openPopupBtn2 && popup2) {
    openPopupBtn2.addEventListener('click', function() {
        popup2.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Запретить скролл на заднем фоне
    });

    popup2.addEventListener('click', function(event) {
        if (event.target === popup2) {
            popup2.style.display = 'none';
            document.body.style.overflow = 'auto'; // Включить скролл на заднем фоне
        }   
    });
}