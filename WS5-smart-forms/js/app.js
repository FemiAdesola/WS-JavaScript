/**
 * Smart Form Demo Script
 * -----------------------
 * Handles validation, live feedback, localStorage draft saving,
 * conditional company registration, and submission with simulated API.
 */

// Cached element references
const form = document.getElementById("signupForm");
const companySection = document.getElementById("companyFields");
const clearBtn = document.getElementById("clearBtn");
const summary = document.getElementById("error-summary");

// Input field references
const fields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
  phone: document.getElementById("phone"),
  companyToggle: document.getElementById("companyToggle"),
  company: document.getElementById("company"),
  hp: document.getElementById("hp"), // honeypot
};

// Error message containers
const errors = {
  name: document.getElementById("nameError"),
  email: document.getElementById("emailError"),
  password: document.getElementById("passwordError"),
  phone: document.getElementById("phoneError"),
  company: document.getElementById("companyError"),
};

/* ============================
   Dynamic Field Visibility
   ============================ */

// Toggle visibility of company fields based on checkbox
fields.companyToggle.addEventListener("change", () => {
  companySection.hidden = !fields.companyToggle.checked;
  if (fields.companyToggle.checked) {
    fields.company.setAttribute("required", "");
  } else {
    fields.company.removeAttribute("required");
    errors.company.textContent = "";
  }
});

/* ============================
   Debounce Utility Function
   ============================ */

// Prevents excessive function calls (e.g., during typing)
function debounce(fn, wait = 250) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

/* ============================
   Validation Logic
   ============================ */

// Generic field validator
function validateField(field, messageFn) {
  field.setCustomValidity("");
  const message = messageFn(field);
  if (message) field.setCustomValidity(message);
  field.setAttribute("aria-invalid", String(!field.checkValidity()));
  return message || "";
}

// Name field validations
function validateName() {
  return validateField(fields.name, (el) => {
    if (el.validity.valueMissing) return "Name is required.";
    if (el.value.trim().length < 2)
      return "Name must be at least 2 characters.";
  });
}

// Email field validations
function validateEmail() {
  return validateField(fields.email, (el) => {
    if (el.validity.valueMissing) return "Email is required.";
    if (el.validity.typeMismatch) return "Enter a valid email address.";
  });
}

// Password field validations
function validatePassword() {
  return validateField(fields.password, (el) => {
    if (el.validity.valueMissing) return "Password is required.";
    if (el.validity.tooShort) return "Password must be at least 8 characters.";
    if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/.test(el.value))
      return "Add upper, lower, and a number.";
  });
}

// Phone field validations
function validatePhone() {
  return validateField(fields.phone, (el) => {
    if (el.value && !el.checkValidity())
      return "Phone format example: +358 40 123 4567";
  });
}

// Companyfield validations
function validateCompany() {
  if (companySection.hidden) return "";
  return validateField(fields.company, (el) => {
    if (el.validity.valueMissing)
      return "Company name is required when registering as a company.";
  });
}

/* ============================
   Live Validation Feedback
   ============================ */

fields.name.addEventListener(
  "input",
  debounce(() => (errors.name.textContent = validateName()), 150)
);
fields.email.addEventListener(
  "input",
  debounce(() => (errors.email.textContent = validateEmail()), 150)
);
fields.password.addEventListener(
  "input",
  debounce(() => (errors.password.textContent = validatePassword()), 150)
);
fields.phone.addEventListener(
  "input",
  debounce(() => (errors.phone.textContent = validatePhone()), 150)
);
fields.company.addEventListener(
  "input",
  debounce(() => (errors.company.textContent = validateCompany()), 150)
);

/* ============================
   Error Summary Builder
   ============================ */

// Displays all validation messages at the top of the form
function buildSummary() {
  const problems = [];
  if (!fields.name.checkValidity())
    problems.push(`Name: ${fields.name.validationMessage}`);
  if (!fields.email.checkValidity())
    problems.push(`Email: ${fields.email.validationMessage}`);
  if (!fields.password.checkValidity())
    problems.push(`Password: ${fields.password.validationMessage}`);
  if (!fields.phone.checkValidity())
    problems.push(`Phone: ${fields.phone.validationMessage}`);
  if (!companySection.hidden && !fields.company.checkValidity())
    problems.push(`Company: ${fields.company.validationMessage}`);

  if (problems.length) {
    summary.classList.remove("visually-hidden");
    summary.innerHTML = `<ul>${problems
      .map((p) => `<li>${p}</li>`)
      .join("")}</ul>`;
  } else {
    summary.classList.add("visually-hidden");
    summary.innerHTML = "";
  }
}

/* ============================
   Local Storage (Auto-Save)
   ============================ */

const STORAGE_KEY = "signup-draft";

// Save form data locally
function saveDraft() {
  const data = {
    name: fields.name.value,
    email: fields.email.value,
    password: fields.password.value,
    phone: fields.phone.value,
    companyToggle: fields.companyToggle.checked,
    company: fields.company.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Restore previously saved form data
function restoreDraft() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!data) return;
    fields.name.value = data.name || "";
    fields.email.value = data.email || "";
    fields.password.value = data.password || "";
    fields.phone.value = data.phone || "";
    fields.companyToggle.checked = data.companyToggle || false;
    fields.company.value = data.company || "";
    companySection.hidden = !data.companyToggle;
  } catch {}
}

// Auto-save on user input
["input", "change"].forEach((evt) =>
  form.addEventListener(evt, debounce(saveDraft, 300))
);
restoreDraft();

/* ============================
   Clear Button Logic
   ============================ */

// Clears form fields and removes saved draft AND all submissions from localStorage
clearBtn.addEventListener("click", () => {
  form.reset();
  localStorage.removeItem(STORAGE_KEY); // Remove draft
  localStorage.removeItem("signup-submissions"); // Remove all stored submissions
  Object.values(errors).forEach((e) => (e.textContent = "")); // Clear error messages
  companySection.hidden = true; // Hide company section
  buildSummary();  // Update error summary
});

/* ============================
   Form Submission
   ============================ */

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Validate all fields before submission
  errors.name.textContent = validateName();
  errors.email.textContent = validateEmail();
  errors.password.textContent = validatePassword();
  errors.phone.textContent = validatePhone();
  errors.company.textContent = validateCompany();
  buildSummary();

  // Focus on first invalid field if validation fails
  if (!form.checkValidity()) {
    const firstInvalid = form.querySelector('[aria-invalid="true"]');
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  // Honeypot spam prevention
  if (fields.hp.value) {
    alert("Submission blocked.");
    return;
  }

  // Build submission payload
  const payload = {
    name: fields.name.value,
    email: fields.email.value,
    phone: fields.phone.value,
    company: fields.companyToggle.checked ? fields.company.value : "",
    time: new Date().toISOString(),
  };

//   try {
//     // Simulated API request (demo endpoint)
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });
//     const data = await res.json();
//     alert("✅ Submitted successfully! Demo ID: " + data.id);

//     // Clear form fields but retain localStorage draft
//     form.reset();
//     companySection.hidden = true;
//     Object.values(errors).forEach((e) => (e.textContent = ""));
//     buildSummary();
//   } catch {
//     alert("Network error. Please try again.");
//   }

try {
    // Persist submission to localStorage
    const submissionsKey = "signup-submissions";
    const existing = JSON.parse(localStorage.getItem(submissionsKey)) || [];
    existing.push(payload);
    localStorage.setItem(submissionsKey, JSON.stringify(existing));

    alert("✅ Submitted successfully and saved locally!");

    // Clear form fields after submission
    form.reset();
    companySection.hidden = true;
    Object.values(errors).forEach((e) => (e.textContent = ""));
    buildSummary();

    // Optional: remove draft after submission
    localStorage.removeItem(STORAGE_KEY);

  } catch (err) {
    console.error("Error saving submission to localStorage:", err);
    alert("Failed to save data locally. Please try again.");
  }

});
