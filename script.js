
document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".nav-toggle");
const root = document.documentElement;
const header = document.querySelector(".site-header");

if (toggle) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    header.classList.toggle("nav-open");
  });
}

const projects = [
  {
    title: "Portfolio Site",
    desc: "Static site using HTML/CSS/JS. Clean layout and pine color palette.",
    demo: "https://andrew03doyle-sudo.github.io/New-My-portfolio/",
    code: "https://github.com/YOUR_HANDLE/portfolio",
    tags: ["HTML", "CSS", "JS"]
  },
  {
    title: "Future project",
    desc: "Description",
    demo: "https://YOUR_DEMO_MUSIC",
    code: "https://github.com/YOUR_HANDLE/music-lab",
    tags: ["TAG", "TAG"]
  },
  {
    title: "Future project",
    desc: "Description.",
    demo: "https://YOUR_DEMO_FOOD",
    code: "https://github.com/YOUR_HANDLE/food-analyzer",
    tags: ["TAG", "TAG"]
  },
  {
    title: "Future project",
    desc: "Description.",
    demo: "https://YOUR_DEMO_LINUX",
    code: "https://github.com/YOUR_HANDLE/linux-notes",
    tags: ["TAG", "TAG"]
  }
];

const grid = document.getElementById("project-grid");

function projectCard(p) {
  const el = document.createElement("article");
  el.className = "card project";
  el.innerHTML = `
    <h3 class="project__title">${p.title}</h3>
    <p class="muted">${p.desc}</p>
    <div class="project__tags">
      ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
    </div>
    <p class="project__links">
      <a href="${p.demo}" target="_blank" rel="noopener">Live</a>
      <a href="${p.code}" target="_blank" rel="noopener">Code</a>
    </p>
  `;
  return el;
}

if (grid) {
  projects.forEach(p => grid.appendChild(projectCard(p)));
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const name = (data.get("name") || "").trim();
    const email = (data.get("email") || "").trim();
    const msg = (data.get("message") || "").trim();

    const subject = `Portfolio contact from ${name || "Visitor"}`;
    const body =
      `Name: ${name || "N/A"}\n` +
      `Email: ${email || "N/A"}\n\n` +
      `${msg}`;

    const mailto = `mailto:andrew03doyle@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
}
