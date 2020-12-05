import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { getCookie, setCookie } from '../utils/utils'

const gdprCookie = 'gatsby-plugin-google-analytics-gdpr_cookies-enabled';
const acceptedCookie = 'cookies-accepted';

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { cookiesBar: false }
  }

  componentDidMount() {
    this.setState(() => ({ cookiesBar: getCookie(acceptedCookie) !== 'true' }))
  }

  acceptCookies = e => {
    e.preventDefault();
    setCookie(gdprCookie, 'true');
    setCookie(acceptedCookie, 'true');
    this.setState(() => ({ cookiesBar: false }))
  }

  submitMailchimp = e => {
    e.preventDefault();
    const email = document.getElementById('subEmail').value;
    const name = document.getElementById('subName').value;
    addToMailchimp(email, {MERGE1: name, MERGE4: 'English'}).then(data => {
      document.getElementById('subMessage').innerHTML = data.msg;
    });
  }

  render() {
    return (
      <footer id="footer">
        <section>
          <h2>Get in touch!</h2>
          <form>
            <label>
              Name <input type="text" name="name" id="subName" />
            </label>
            <label>
              Email <input type="email" name="email" id="subEmail" />
            </label>
            <button onClick={this.submitMailchimp}>Subscribe to our Gnusletter</button>
            <p id="subMessage" style={{marginTop: '10px'}}></p>
          </form>
        </section>
        <section>
          <h2>Operational Headquarters</h2>
          <dl className="alt">
            <dt>Milano</dt>
            <dd>via Stefanardo da Vimercate 28 <br />20128 ITALY</dd>
            <dd>(+39) 3703309574</dd>
            <dt>Pisa</dt>
            <dd>Lungarno Mediceo 56 <br/>56127 ITALY</dd>
            <dd>(+39) 3703173931</dd>
            <dt>Email</dt>
            <dd><a href="mailto:info@gnucoop.com">info@gnucoop.com</a></dd>
          </dl>
          <ul className="icons">
            <li>
              <a href="https://twitter.com/gnucoop" className="icon fa-twitter alt">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/gnucoop" className="icon fa-facebook alt">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/gnucoop_soc_coop" className="icon fa-instagram alt">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCtY0iTvoG10nDospIa34qzQ" className="icon fa-youtube alt">
                <span className="label">YouTube</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/gnucoop" className="icon fa-github alt">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
        </section>
        <p className="copyright">
          <i className="fa fa-copyright fa-flip-horizontal"></i> {new Date().getFullYear()} Gnucoop Soc. Coop. - VAT NUMBER: IT07931480961<br/> Built with Love - Definetely inspired by <a href="https://html5up.net">HTML5 UP</a>.
        </p>

        <div id="cookiesBar" className={this.state.cookiesBar ? 'visible' : ''}
        style={{backgroundColor: '#f7f7f7'}}>
          This website uses cookies to improve your experience.
          &nbsp;&nbsp;
          <span style={{whiteSpace: 'nowrap'}}>
            <a href="#" onClick={this.acceptCookies}><b>Accept</b></a>
            &nbsp;&nbsp;-&nbsp;&nbsp;<a href="/privacy">Read More</a>
          </span>
        </div>
      </footer>
    )
  }
}

export default Footer
