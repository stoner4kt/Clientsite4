function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("navLinks").classList.remove("show");
  });
});


/* BOOKING FORM */
document.getElementById("bookingForm")?.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  const text = `Hello, I would like to book:%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0ANotes: ${message}`;

  window.open(`https://wa.me/27712345678?text=${text}`, "_blank");

  // 🔥 Firebase save placeholder
  // addDoc(collection(db,"bookings"),{name,phone,service,message})
});
