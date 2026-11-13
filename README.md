# Veronica Adhiambo Ochieng

The code behind my personal website. I'm a mathematical epidemiologist and ML builder, and I build models and tools that help health systems act early, from malaria to maternal mental health.

🌐 **Visit the site: [veronica-adhiambo-ochieng.github.io](https://veronica-adhiambo-ochieng.github.io)**

## On the site

- **[MalReBay](https://veronica-adhiambo-ochieng.github.io/pages/projects/malrebay.html)**: a Bayesian R package for malaria drug efficacy studies
- **[MESO+](https://veronica-adhiambo-ochieng.github.io/pages/projects/meso-plus.html)**: an AI-powered maternal mental health platform
- **[All projects](https://veronica-adhiambo-ochieng.github.io/pages/archive.html)**: everything I've built, with links to the code
- **[Skills](https://veronica-adhiambo-ochieng.github.io/pages/skills.html)** and **[Résumé](https://veronica-adhiambo-ochieng.github.io/pages/resume.html)**

## How it's built

Plain HTML and CSS with Bootstrap 4, hosted on GitHub Pages. There's no build step: what's in the files is what gets served. To make a change:

- **Homepage:** edit `index.html`.
- **Project and role pages:** see `pages/projects/` and `pages/experience/`. To add one, copy `example-project.html` or `example-role.html`.
- **Menu, footer, name and links:** see `components/`.
- **Colours and layout:** see `assets/css/`. The plum and gold palette is at the top of `main.css`.

To preview it on your computer, run this in the folder, then open http://localhost:8000:

```bash
python3 -m http.server 8000
```

## Credits

Built on the [academic-portfolio-template-lemos](https://github.com/rochanaro/academic-portfolio-template-lemos) template by RochanaRO (MIT licence, see `LICENSE`). Inspired by [Brittany Chiang](https://brittanychiang.com), [Maggie Appleton](https://maggieappleton.com) and [Nadieh Bremer](https://www.visualcinnamon.com). The illustrations were drawn for this site.
