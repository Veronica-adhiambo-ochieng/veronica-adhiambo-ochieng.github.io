// Your name, email and profile links, in one place.
// The homepage sidebar and the footer on every page read from here.
// A link with an empty url ('') is hidden, so add yours when you have them.
const SITE = {
  name: 'Veronica Adhiambo Ochieng',
  email: 'veronica.adhiambo.ochieng@gmail.com',
  links: [
    { label: 'GitHub', url: 'https://github.com/Veronica-adhiambo-ochieng', icon: 'fa-brands fa-github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/veronica-adhiambo-ochieng/', icon: 'fa-brands fa-linkedin' },
    { label: 'Instagram', url: '', icon: 'fa-brands fa-instagram' },
  ],
};

// <social-links></social-links> shows one icon per link that has a url.
class SocialLinks extends HTMLElement {
  connectedCallback() {
    const items = SITE.links
      .filter((link) => link.url)
      .map((link) => `<a href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="${link.label}" title="${link.label}"><i class="${link.icon}" aria-hidden="true"></i></a>`);
    if (SITE.email) {
      items.push(`<a href="mailto:${SITE.email}" aria-label="Email" title="Email"><i class="fa-regular fa-envelope" aria-hidden="true"></i></a>`);
    }
    this.innerHTML = items.join('');
  }
}

customElements.define('social-links', SocialLinks);
