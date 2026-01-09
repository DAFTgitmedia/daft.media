
  document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form[data-netlify='true']");
  if (!form) return;

  const success = document.querySelector(".w-form-done");
  const error = document.querySelector(".w-form-fail");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => {
        form.style.display = "none";
        if (success) success.style.display = "block";
      })
      .catch(() => {
        if (error) error.style.display = "block";
      });
  });
});

