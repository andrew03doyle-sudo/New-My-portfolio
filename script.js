
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
    demo: "https://YOUR_DEMO_PORTFOLIO",
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
