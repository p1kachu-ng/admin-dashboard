const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//Theme toggler

// Check stored theme preference on load
window.addEventListener("DOMContentLoaded", () => {
  const storedTheme = localStorage.getItem("theme") || "light";

  if (storedTheme === "dark") {
    document.documentElement.classList.add("dark-theme");

    // Ensure correct toggle indicator
    themeToggler.querySelector("span:nth-child(1)").classList.remove("active");
    themeToggler.querySelector("span:nth-child(2)").classList.add("active");
  } else {
    document.documentElement.classList.remove("dark-theme");

    // Ensure correct toggle indicator
    themeToggler.querySelector("span:nth-child(1)").classList.add("active");
    themeToggler.querySelector("span:nth-child(2)").classList.remove("active");
  }
});

// Toggle theme on button click
themeToggler.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");

  const isDark = document.documentElement.classList.contains("dark-theme");
  themeToggler
    .querySelector("span:nth-child(1)")
    .classList.toggle("active", !isDark);
  themeToggler
    .querySelector("span:nth-child(2)")
    .classList.toggle("active", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Fill orders in table
Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const statusColor =
    order.status === "Pending"
      ? "warning"
      : order.status === "Success"
      ? "success"
      : "danger";
  tr.innerHTML = `
        <td>${order.orderId}</td>
        <td>${order.productName}</td>
        <td>${order.customerName}</td>
        <td>${order.amount}</td>
        <td><span class="status ${statusColor}">${order.status}</span></td>
        <td>${order.date}</td>
        <td class="primary"><a href="#">Details</td>
    `;
  document.querySelector("table tbody").appendChild(tr);
});
