# Veronica Adhiambo Ochieng

Personal site of Veronica Adhiambo Ochieng, mathematical epidemiologist and ML builder. I build models and tools that help health systems act early, from malaria to maternal mental health.

**Live site:** https://veronica-adhiambo-ochieng.github.io

## What's on the site

- **Home**: about me, experience, projects, leadership and engagement, writing
- **Projects**: [MalReBay](pages/projects/malrebay.html), a Bayesian R package for malaria drug efficacy studies, and [MESO+](pages/projects/meso-plus.html), an AI-powered maternal mental health platform
- **Experience**: one page per role in `pages/experience/`
- **Education**, **Skills**, **Publications** and **Blog** pages
- **Résumé**: a one-page résumé that prints to PDF ([pages/resume.html](pages/resume.html))

## How it's built

Plain HTML, CSS and Bootstrap 4. There is no build step, so what's in the files is what gets served.

| What | Where |
|---|---|
| Homepage | `index.html` |
| Project and role pages | `pages/projects/`, `pages/experience/` (copy `example-project.html` or `example-role.html` to add one) |
| Menu and footer | `components/header.js`, `components/footer.js` |
| Name, email and profile links | `components/site.js` |
| Colours (plum and gold) | top of `assets/css/main.css` |
| Layout and page styles | `assets/css/portfolio.css`, `assets/css/resume.css` |
| Photo and illustrations | `assets/img/` |

## Preview locally

From this folder, run the command below, then open http://localhost:8000. Opening the HTML files directly won't work, because all links start at the site root.

```bash
python3 -m http.server 8000
```

## Credits

Built on the [academic-portfolio-template-lemos](https://github.com/rochanaro/academic-portfolio-template-lemos) template by RochanaRO (MIT licence, see `LICENSE`). Layout and writing style inspired by [Brittany Chiang](https://brittanychiang.com), [Maggie Appleton](https://maggieappleton.com) and [Nadieh Bremer](https://www.visualcinnamon.com). Illustrations were drawn for this site.
