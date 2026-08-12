const contactUrl = "https://greenwood-homes.com/contact/";

function Arrow() {
  return <span aria-hidden="true">{"\u2197"}</span>;
}

function ContactLink({ dark = false }: { dark?: boolean }) {
  return (
    <a className={dark ? "cta cta-dark" : "cta"} href={contactUrl}>
      Start a conversation <Arrow />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a href="#top" className="wordmark" aria-label="Greenwood Homes home">
          <span>Greenwood</span>
          <i>Homes</i>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#team">Team</a>
        </div>
        <a className="nav-contact" href={contactUrl}>
          Contact <Arrow />
        </a>
      </nav>

      <header id="top" className="hero">
        <img
          src="/images/006-475lakeshore_phjoystrotz-e74d7e7ed6.jpg"
          alt="Lakeview Serenity custom home interior overlooking Lake Tahoe"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow light">Custom homes &middot; Since 1998</p>
          <h1>Built for the<br />life around it.</h1>
          <div className="hero-bottom">
            <p>
              Award-winning custom home building across Lake Tahoe, Truckee,
              Hawaii, Idaho, and Utah.
            </p>
            <ContactLink dark />
          </div>
        </div>
        <a className="scroll-cue" href="#awards" aria-label="Explore our work">
          Explore <span aria-hidden="true">{"\u2193"}</span>
        </a>
      </header>

      <section id="awards" className="awards section-pad">
        <div className="section-index">01 / Recognition</div>
        <div className="award-main">
          <div className="award-seal">
            <img
              src="/images/tq-logo-med-ivory-c176412731.png"
              alt="Tahoe Quarterly"
            />
          </div>
          <div>
            <p className="eyebrow">Tahoe Quarterly &middot; 2025</p>
            <h2>Bringing Old Tahoe style into the light.</h2>
            <p className="body-copy">
              Recipient of a 2025 Tahoe Quarterly Mountain Homes Award.
            </p>
          </div>
        </div>
        <a
          className="text-link"
          href="https://greenwood-homes.com/testimonials/"
        >
          View recognition <Arrow />
        </a>
      </section>

      <section id="work" className="project-section">
        <div className="project-image-wrap">
          <img
            src="/images/incline-village-cutting-edge-modern-greenwood-homes-featured-86c5cfc249.jpg"
            alt="Cutting Edge Modern custom home in Lake Tahoe"
          />
          <span className="vertical-note">Lake Tahoe</span>
        </div>
        <div className="project-copy section-pad">
          <div className="section-index">02 / Selected home</div>
          <p className="eyebrow">Cutting Edge Modern</p>
          <h2>One home.<br />Every line considered.</h2>
          <p className="body-copy">
            A Lake Tahoe residence from a portfolio of more than 50 completed
            custom homes spanning mountain, lake, and island settings.
          </p>
          <a
            className="text-link"
            href="https://greenwood-homes.com/portfolio/cutting-edge-modern/"
          >
            View this home <Arrow />
          </a>
        </div>
      </section>

      <section className="testimonial section-pad">
        <div className="section-index">03 / Client perspective</div>
        <div className="quote-mark">&ldquo;</div>
        <blockquote>
          The project was completed under time and under budget. We continue to
          be impressed by the quality and craftsmanship.
        </blockquote>
        <p className="quote-context">
          From the owners of a 5,000-square-foot custom home in Incline Village
        </p>
        <a
          className="text-link light-link"
          href="https://greenwood-homes.com/testimonials/"
        >
          Read client letters <Arrow />
        </a>
      </section>

      <section id="team" className="team-section section-pad">
        <div className="section-index">04 / Experienced team</div>
        <div className="team-grid">
          <div className="team-copy">
            <p className="eyebrow">Leadership in the details</p>
            <h2>A builder&apos;s standard, carried by a team.</h2>
            <p className="body-copy">
              President and CEO Kevin Hanna built Greenwood around quality
              craftsmanship, unsurpassed customer service, and honest, upfront
              client relationships.
            </p>
            <a className="text-link" href="https://greenwood-homes.com/team/">
              Meet the team <Arrow />
            </a>
          </div>
          <figure>
            <div className="portrait-frame">
              <img
                src="/images/kevin-hanna_4x4_2025-04_2-47053f6700.jpg"
                alt="Kevin Hanna, President and CEO of Greenwood Homes"
              />
            </div>
            <figcaption>
              <strong>Kevin Hanna</strong>
              <span>President, CEO</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="approach" className="capabilities">
        <div className="capabilities-image">
          <img
            src="/images/kahalawai_04-b3ab15fa86.jpeg"
            alt="Kahalawai custom home living room"
          />
        </div>
        <div className="capabilities-copy section-pad">
          <div className="section-index">05 / Full service</div>
          <p className="eyebrow">From first study to final detail</p>
          <h2>Plan deeply.<br />Build clearly.</h2>
          <p className="body-copy">
            Greenwood can join at project inception or after plans are complete,
            staying with clients through the entire custom home building
            process.
          </p>
          <a className="text-link" href="https://greenwood-homes.com/about/">
            Explore the approach <Arrow />
          </a>
        </div>
      </section>

      <section className="presence section-pad">
        <div className="section-index">06 / Licensed presence</div>
        <div className="presence-heading">
          <p className="eyebrow">Five states &middot; One standard</p>
          <h2>Grounded in place.</h2>
        </div>
        <div className="locations" aria-label="Licensed states">
          <span><b>CA</b>California</span>
          <span><b>NV</b>Nevada</span>
          <span><b>HI</b>Hawaii</span>
          <span><b>ID</b>Idaho</span>
          <span><b>UT</b>Utah</span>
        </div>
        <p className="presence-note">
          Licensed general contractor with offices in Incline Village,
          Coeur d&apos;Alene, and Kauai.
        </p>
      </section>

      <section className="philosophy">
        <img
          src="/images/19-observation-260-high-res-13-ig-post-crop-819x1024-6d27faff8d.jpg"
          alt="Lakeview Chalet living space crafted in stone and timber"
        />
        <div className="philosophy-overlay" />
        <div className="philosophy-copy">
          <div className="section-index light">07 / Company philosophy</div>
          <p className="eyebrow light">A home that will inspire for generations</p>
          <h2>Building a home<br />is a work of art.</h2>
          <p>
            Greenwood&apos;s goal is to create a home that will serve and inspire
            for generations while growing an honest, competitive,
            client-based business.
          </p>
        </div>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="faq-heading">
          <div className="section-index">Questions / Answers</div>
          <h2>Before the first line is drawn.</h2>
        </div>
        <div className="faq-list">
          <details open>
            <summary>When should Greenwood join a project?<span>+</span></summary>
            <p>
              At inception or after plans are complete. Pre-construction support
              includes estimating, feasibility, scheduling, and constructability review.
            </p>
          </details>
          <details>
            <summary>Does Greenwood take on renovations?<span>+</span></summary>
            <p>
              Yes. The team accommodates renovations, additions, tenant
              improvements, and energy-efficient upgrades.
            </p>
          </details>
          <details>
            <summary>What happens after construction?<span>+</span></summary>
            <p>
              Greenwood&apos;s post-construction philosophy centers on an ironclad
              warranty and ongoing open communication.
            </p>
          </details>
        </div>
      </section>

      <section className="final-cta section-pad">
        <p className="eyebrow light">A home begins with a conversation</p>
        <h2>Let&apos;s build something<br />that belongs here.</h2>
        <ContactLink dark />
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <span>Greenwood</span> Homes
        </div>
        <div>
          <p>940 Southwood Blvd. Suite 101</p>
          <p>Incline Village, Nevada 89451</p>
          <a href="tel:+17758310188">775.831.0188</a>
        </div>
        <div>
          <a href="https://greenwood-homes.com/portfolio/">Portfolio</a>
          <a href="https://greenwood-homes.com/about/">About</a>
          <a href="https://greenwood-homes.com/team/">Team</a>
          <a href={contactUrl}>Contact</a>
        </div>
        <p className="licenses">
          CA 844360 &middot; NV 75871 &middot; HI 30129 &middot; ID 59886 &middot; UT 14013486-5501
        </p>
      </footer>
    </main>
  );
}
