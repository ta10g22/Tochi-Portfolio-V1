const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fields = new FormData(contactForm);
    const subject = fields.get('subject').trim();
    const body = `${fields.get('message').trim()}\n\nFrom: ${fields.get('name').trim()}\nEmail: ${fields.get('email').trim()}`;
    const draft = `mailto:tochipartnerships@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = draft;
});
