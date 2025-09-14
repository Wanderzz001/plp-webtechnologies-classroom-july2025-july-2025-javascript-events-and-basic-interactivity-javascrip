document.getElementById("toggleTheme").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});


const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabPanes.forEach((pane) => pane.classList.remove("active"));

    this.classList.add("active");
    document.getElementById(this.dataset.target).classList.add("active");
  });
});

const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((q) => {
  q.addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("hidden");
  });
});

document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  let feedback = "";

  if (name.length < 2) {
    feedback += "❌ Name must be at least 2 characters long.<br>";
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    feedback += "❌ Please enter a valid email.<br>";
  }

  if (password.length < 6 || !/\d/.test(password)) {
    feedback += "❌ Password must be at least 6 characters and include a number.<br>";
  }

  const feedbackEl = document.getElementById("formFeedback");
  if (feedback === "") {
    feedbackEl.innerHTML = "✅ Successfully subscribed!";
    feedbackEl.style.color = "green";
  } else {
    feedbackEl.innerHTML = feedback;
    feedbackEl.style.color = "red";
  }
});
