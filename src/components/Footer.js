import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Our Mission</h2>
      <p>
        Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat
        magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras
        aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae
        tincidunt odio.
      </p>
      <p>
        Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat
        magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras
        aliquet.
      </p>
      <ul className="actions">
        <li>
          <Link to="/who-we-are" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Contacts</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>via Stefanardo da Vimercate 28 &bull; <br/>Milano, 20128 &bull; ITALY</dd>
        <dt>Phone</dt>
        <dd>(000) 370-3309574</dd>
        <dt>Address</dt>
        <dd>Lungarno Mediceo &bull; Pisa, 56127 &bull; ITALY</dd>
        <dt>Phone</dt>
        <dd>(000) 370-31309574</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:info@gnucoop.com">info@gnucoop.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/gnucoop"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://facebook.com/gnucoop" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://instagram.com/gnucoopsoccoop" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/gnucoop"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Gnucoop Soc. Coop. Definetely inspired by Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
