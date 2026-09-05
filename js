// ===== Portfolio interactivity =====

// Show a temporary confirmation popup.
// This is only ever called after a NEW recommendation is successfully submitted.
function showPopup(message) {
  const popup = document.getElementById('popup');
  if (message) {
    popup.querySelector('p').textContent = message;
  }
  popup.classList.remove('hidden');

  // Auto-hide after 3 seconds
  clearTimeout(showPopup._timer);
  showPopup._timer = setTimeout(() => {
    popup.classList.add('hidden');
  }, 3000);
}

// Build a new recommendation card element from form input
function createRecommendationCard(name, role, message) {
  const li = document.createElement('li');
  li.className = 'rec-card';

  const text = document.createElement('p');
  text.className = 'rec-text';
  text.textContent = `"${message}"`;

  const author = document.createElement('p');
  author.className = 'rec-author';
  author.textContent = `— ${name}, ${role}`;

  li.appendChild(text);
  li.appendChild(author);
  return li;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('recForm');
  const recList = document.getElementById('recList');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('recName');
    const roleInput = document.getElementById('recRole');
    const messageInput = document.getElementById('recMessage');

    const name = nameInput.value.trim();
    const role = roleInput.value.trim();
    const message = messageInput.value.trim();

    // Basic validation guard — only proceed (and only show the popup)
    // when a genuinely new recommendation is being submitted.
    if (!name || !role || !message) {
      return;
    }

    const newCard = createRecommendationCard(name, role, message);
    recList.appendChild(newCard);

    // Trigger the popup ONLY on successful submission of a new recommendation
    showPopup('Thanks! Your recommendation has been added below.');

    // Reset the form and scroll the new card into view
    form.reset();
    newCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

// Home icon / brand link already uses href="#top" with CSS smooth scrolling,
// so no extra JS is required for that navigation — but we reinforce it here
// in case scroll-behavior is unsupported in a browser.
document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});