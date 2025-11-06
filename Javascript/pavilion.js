  const cards = document.querySelectorAll('.card-slider .card');
  let current = 0;

  setInterval(() => {
    cards[current].classList.remove('active');
    current = (current + 1) % cards.length;
    cards[current].classList.add('active');
  }, 10000); // 10초 간격

// ROOM 가로 드래그 (부드럽게)
const roomGrid = document.getElementById('roomGrid');

let isDown = false;
let startX;
let scrollLeft;
let isDragging = false;

roomGrid.addEventListener('mousedown', (e) => {
  isDown = true;
  roomGrid.classList.add('active');
  startX = e.pageX - roomGrid.offsetLeft;
  scrollLeft = roomGrid.scrollLeft;
});

roomGrid.addEventListener('mouseleave', () => {
  isDown = false;
  roomGrid.classList.remove('active');
});

roomGrid.addEventListener('mouseup', () => {
  isDown = false;
  roomGrid.classList.remove('active');
  setTimeout(() => (isDragging = false), 50);
});

roomGrid.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - roomGrid.offsetLeft;
  const walk = (x - startX) * 1.3; // 스크롤 속도
  roomGrid.scrollLeft = scrollLeft - walk;
  isDragging = true;
});

// 터치(모바일) 지원
let touchStartX = 0;
let touchScrollLeft = 0;

roomGrid.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].pageX;
  touchScrollLeft = roomGrid.scrollLeft;
});

roomGrid.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = (x - touchStartX) * 1.3;
  roomGrid.scrollLeft = touchScrollLeft - walk;
});
