document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('email-form');
  if (!form) return;

  const success = document.querySelector('.w-form-done');
  const error = document.querySelector('.w-form-fail');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        if (success) success.style.display = 'block';
        if (error) error.style.display = 'none';
        // hide the form grid
        const grid = form.querySelector('.grid-10');
        if (grid) grid.style.display = 'none';
        form.reset();
      } else {
        if (success) success.style.display = 'none';
        if (error) error.style.display = 'block';
      }
    } catch (err) {
      if (success) success.style.display = 'none';
      if (error) error.style.display = 'block';
      console.error('Form submission error:', err);
    }
  });
});
