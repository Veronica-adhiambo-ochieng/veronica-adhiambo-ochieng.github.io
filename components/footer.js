// Site footer, shown on every page.
// Your name, email and links come from components/site.js.
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const email = SITE.email
      ? `<p class="my-0 pt-0"><a href="mailto:${SITE.email}">${SITE.email}</a></p>`
      : '';
    this.innerHTML = `
    <div class="footer-lemos mt-5">

        <div class="py-3 px-md-5 container-fluid">
            <div class="row">
                <div class="col-auto col-md-5 align-middle">
                    <p class="mb-0" style="color: var(--light-gray);">© ${new Date().getFullYear()} ${SITE.name}</p>
                    ${email}
                </div>

                <div class="col col-md-7 text-right">
                    <p class="mb-0" style="color: var(--light-gray);">Quick Links</p>
                    <p class="my-0 pt-0 footer-links">
                        <a href="/" aria-label="Home" title="Home"><i class="fa-solid fa-house" aria-hidden="true"></i></a>
                        <social-links></social-links>
                    </p>
                </div>
            </div>
        </div>

    </div>
    `;
  }
}

customElements.define('footer-component', Footer);
