function toggleNavMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('mobile-menu-toggle');
}

const toggleButtons = Array.from(document.getElementsByClassName('toggle-btn'));
toggleButtons.forEach((element) => element.addEventListener('click', toggleNavMenu));

const speakers = [
  {
    name: 'Stanley Washington',
    position: 'Marketing Coordinator',
    summary: 'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt magna aliqua.',
    photo: 'https://randomuser.me/api/portraits/men/47.jpg',
  },
  {
    name: 'Ruby Henry',
    position: 'Sales Representative',
    summary: 'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt magna aliqua.',
    photo: 'https://randomuser.me/api/portraits/women/30.jpg',
  },
  {
    name: 'Gina Fisher',
    position: 'Financial Analyst',
    summary: 'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt magna aliqua.',
    photo: 'https://randomuser.me/api/portraits/women/47.jpg',
  },
  {
    name: 'Kelly Ward',
    position: 'Marketing Coordinator',
    summary: 'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt magna aliqua.',
    photo: 'https://randomuser.me/api/portraits/men/30.jpg',
  },
  {
    name: 'Abigail Ramirez',
    position: 'Sales Representative',
    summary: 'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt magna aliqua.',
    photo: 'https://randomuser.me/api/portraits/women/23.jpg',
  },
  {
    name: 'Walter Owens',
    position: 'Financial Analyst',
    summary: 'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt magna aliqua.',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
];
