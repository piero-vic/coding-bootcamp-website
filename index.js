function toggleNavMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('mobile-menu-toggle');
}

function addSpeaker(speaker, container) {
  const speakerCard = document.createElement('div');
  speakerCard.classList = 'd-grid speaker';
  speakerCard.innerHTML = `
  <div class="d-flex">
    <img src="${speaker.photo}" alt="${speaker.name.toLowerCase().replace(' ', '-')}-photo">
  </div>
  <div class="d-flex speaker-text">
    <h3>${speaker.name}</h3>
    <p class="position">${speaker.position}</p>
    <p class="summary">${speaker.summary}</p>
  </div>
  `;
  container.appendChild(speakerCard);
}

const toggleButtons = Array.from(document.getElementsByClassName('toggle-btn'));
toggleButtons.forEach((element) => element.addEventListener('click', toggleNavMenu));

const speakers = [
  {
    name: 'Stanley Washington',
    position: 'Full Stack Software Developer',
    summary: 'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt magna aliqua.',
    photo: 'https://randomuser.me/api/portraits/men/47.jpg',
  },
  {
    name: 'Ruby Henry',
    position: 'Font End Developer / Graphic Designer',
    summary: 'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt magna aliqua.',
    photo: 'https://randomuser.me/api/portraits/women/30.jpg',
  },
  {
    name: 'Gina Fisher',
    position: 'Blockchain Developer',
    summary: 'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt magna aliqua.',
    photo: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
  {
    name: 'Kelly Ward',
    position: 'Cyber Security Expert',
    summary: 'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt magna aliqua.',
    photo: 'https://randomuser.me/api/portraits/men/30.jpg',
  },
  {
    name: 'Abigail Ramirez',
    position: 'Financial Analyst',
    summary: 'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt magna aliqua.',
    photo: 'https://randomuser.me/api/portraits/women/23.jpg',
  },
  {
    name: 'Walter Owens',
    position: 'Data Scientist',
    summary: 'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt magna aliqua.',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
];

const speakersContainer = document.querySelector('#speakers-section .speakers-cards');

if (speakersContainer !== null) {
  speakers.forEach((item) => addSpeaker(item, speakersContainer));
}
