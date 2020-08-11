import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

class Footer extends React.Component {

  submitMailchimp = e => {
    e.preventDefault();
    const email = document.getElementById('subEmail').value;
    const name = document.getElementById('subName').value;
    addToMailchimp(email, {MERGE1: name, MERGE4: 'English'})
    .then(data => {
      document.getElementById('subMessage').innerHTML = data.msg;
    });
  }

  render() {
    return (
      <footer id="footer">
        <section>
          <h2>Subscribe to our newsletter!</h2>
            <form>
              <label>
                Name <input type="text" name="name" id="subName" />
              </label>
              <label>
                Email <input type="email" name="email" id="subEmail" />
              </label>
              <button onClick={this.submitMailchimp}>Send</button>
              <p id="subMessage" style={{marginTop: '10px'}}></p>
            </form>
        </section>
        <section>
          <h2>Contacts</h2>
          <dl className="alt">
            <dt>Address</dt>
            <dd>via Stefanardo da Vimercate 28 &bull; <br />Milano, 20128 &bull; ITALY</dd>
            <dt>Phone</dt>
            <dd>(+39) 370-3309574</dd>
            <dt>Address</dt>
            <dd>Lungarno Mediceo 56 &bull; Pisa, 56127 &bull; ITALY</dd>
            <dt>Phone</dt>
            <dd>(+39) 370-3173931</dd>
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
          &copy; Gnucoop Soc. Coop. Definetely inspired by <a href="https://html5up.net">HTML5 UP</a>.
        </p>
      </footer>
    )
  }
}

export default Footer
