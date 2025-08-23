const uploadBtn = document.querySelector(".upload-btn");

document.addEventListener("DOMContentLoaded", function () {
  uploadBtn.addEventListener("click", function () {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = function (e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const logoCircle = document.querySelector(".logo-circle");
          logoCircle.style.backgroundImage = `url(${e.target.result})`;
          logoCircle.style.backgroundSize = "cover";
          logoCircle.style.backgroundPosition = "center";
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  });
});

// Handle camera icon click
document.querySelector(".camera-icon").addEventListener("click", function () {
  document.querySelector(".upload-btn").click();
});

// Handle form submissions (demo)
document.querySelectorAll(".form-input").forEach((input) => {
  input.addEventListener("change", function () {
    console.log(
      `${this.previousElementSibling?.textContent || "Field"} updated:`,
      this.value,
    );
  });
});

// Handle toggle switches
document.querySelectorAll(".toggle input").forEach((toggle) => {
  toggle.addEventListener("change", function () {
    const label =
      this.closest(".notification-item").querySelector("h4").textContent;
    console.log(`${label} ${this.checked ? "enabled" : "disabled"}`);
  });
});

// Tab functionality
document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all tabs and content
    document
      .querySelectorAll(".tab-button")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((content) => content.classList.remove("active"));

    // Add active class to clicked tab
    button.classList.add("active");

    // Show corresponding content
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

const btn = document.getElementById("toogle-btn");

// Toggle sidebar collapse
function toggleSidebar() {
  console.log("clicked");
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("collapsed");
}

btn.addEventListener("click", toggleSidebar);
