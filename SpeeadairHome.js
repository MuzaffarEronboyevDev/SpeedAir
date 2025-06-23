const tripRadios = document.querySelectorAll('input[name="trip"]');
const returnDateInput = document.getElementById('return-date');
tripRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    returnDateInput.style.display = document.querySelector('input[name="trip"]:checked').value === 'oneway' ? 'none' : 'inline-block';
  });
});

// ...existing code...
document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('nav .dropdown');
  const menu = document.querySelector('nav .dropdown-menu');
  if (dropdown && menu) {
    dropdown.addEventListener('click', function (e) {
      dropdown.classList.toggle('active');
      // The CSS will show/hide the menu based on .active
      e.stopPropagation();
    });
    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target) && !menu.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
  }
});
// ...existing code ...

document.getElementById('reverse').addEventListener('click', () => {
  const depart = document.getElementById('depart');
  const arrive = document.getElementById('arrive');
  [depart.value, arrive.value] = [arrive.value, depart.value];
});

const travellerToggle = document.getElementById('traveller-toggle');
const travellerBox = document.getElementById('traveller-box');
travellerToggle.addEventListener('click', () => {
  travellerBox.style.display = travellerBox.style.display === 'flex' ? 'none' : 'flex';
});

const updateTraveller = (type, delta) => {
  const input = document.getElementById(type);
  let value = Math.max(0, parseInt(input.value) + delta);
  if (type === 'adult') value = Math.max(1, value);
  input.value = value;
  const adult = document.getElementById('adult').value;
  travellerToggle.innerText = `${adult} Adult${adult > 1 ? 's' : ''}, Economy`;
};

document.querySelectorAll('.plus, .minus').forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.getAttribute('data-type');
    const delta = btn.classList.contains('plus') ? 1 : -1;
    updateTraveller(type, delta);
  });
});