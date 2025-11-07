
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
    desc: "Static site using HTML/CSS/JS.",
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
  },
   {
    title: "Future project",
    desc: "Description.",
    demo: "https://YOUR_DEMO_LINUX",
    code: "https://github.com/YOUR_HANDLE/linux-notes",
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

function renderFlipProjects(list) {
  const grid = document.getElementById("project-grid");
  if (!grid) return;
  grid.innerHTML = "";

  list.forEach((p, idx) => {
    const id = `proj-${idx}`;
    const tech = Array.isArray(p.tags) ? p.tags.map(t => `<span class="pill">${t}</span>`).join(" ") : "";

    const links = `
      <div class="flip-actions">
        ${p.demo ? `<a class="flip-btn secondary" href="${p.demo}" target="_blank" rel="noopener">Demo</a>` : ""}
        ${p.code ? `<a class="flip-btn secondary" href="${p.code}" target="_blank" rel="noopener">Code</a>` : ""}
      </div>
    `;

    const card = document.createElement("article");
    card.className = "flip-card";
    card.innerHTML = `
      <div class="flip-card-inner card">
        <div class="flip-face flip-front">
          <h3>${p.title ?? "Untitled Project"}</h3>
          <div class="flip-actions">
            <button class="flip-btn see-more" type="button" aria-expanded="false" aria-controls="${id}-back">See more</button>
          </div>
        </div>
        <div id="${id}-back" class="flip-face flip-back" tabindex="-1">
          ${p.desc ? `<p>${p.desc}</p>` : `<p>No description yet.</p>`}
          ${tech ? `<div class="tech">${tech}</div>` : ""}
          ${links}
          <div class="flip-actions">
            <button class="flip-btn close-back" type="button">Back</button>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function wireFlipHandlers() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  grid.addEventListener("click", (e) => {
    const seeMoreBtn = e.target.closest(".see-more");
    const backBtn = e.target.closest(".close-back");

    if (seeMoreBtn) {
      const card = seeMoreBtn.closest(".flip-card");
      if (!card) return;
      card.classList.add("flipped");
      seeMoreBtn.setAttribute("aria-expanded", "true");
      const back = card.querySelector(".flip-back");
      back && back.focus();
    }

    if (backBtn) {
      const card = backBtn.closest(".flip-card");
      if (!card) return;
      card.classList.remove("flipped");
      const btn = card.querySelector(".see-more");
      btn && btn.setAttribute("aria-expanded", "false");
      btn && btn.focus();
    }
  });

  grid.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const back = e.target.closest(".flip-back");
    if (!back) return;
    const card = back.closest(".flip-card");
    if (!card) return;
    card.classList.remove("flipped");
    const btn = card.querySelector(".see-more");
    btn && setTimeout(() => btn.focus(), 0);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFlipProjects(projects);
  wireFlipHandlers();
});

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
