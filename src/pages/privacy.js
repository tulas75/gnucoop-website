import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import privacy from '../assets/images/privacy.png'

const PrivacyPage = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <header id="header">
      <h1>Privacy and cookie policy</h1>
      <p>Transparency for your privacy</p>
    </header>
    <Helmet title="Gnucoop - Privacy and cookies policy" />
    <div id="main">
      <section id="content" className="main">
	    <div className="spotlight">
              <div className="content">
        <h3>What are Cookies?</h3>
<p>A cookie is a very small piece of information that a website stores to save and collect basic information. Many cookies are essential to the operation of our website, for example to allow you to make a purchase or create an account with us. Cookies on our site are also used to customise certain areas of content just for you, and to make your browsing experience more efficient and faster.</p>
<h3>How we use Cookies</h3>
Cookies on our website are used for the following purposes:
<ul>
	<li>To analyse the use of our website through Analytics software such as Google Analytics.</li>
	</ul>

<h3>Information Collected</h3>
<p>The cookies our website uses do not collect any sensitive information such as your name, address, email address, or any other contact details. The cookies this website uses are:</p>
              </div>
              <span className="image">
                <img src={privacy} alt="" />
              </span>
            </div>
        <h3>Cookies used in this website</h3>
	<table>
	<tr><th>COOKIE</th><th>TYPE</th><th>DURATION</th><th>DESCRIPTION</th></tr>
	<tr><td>__ga</td><td>Third part cookies</td><td>2 years</td><td>Used to distinguish users.</td></tr>
	<tr><td>__gid</td><td>Third part cookies</td><td>24 hours</td><td>Used to distinguish users.</td></tr>
	<tr><td>gatsby-plugin-google-analytics-gdpr_cookies-enabled, cookies-accepted</td><td>Essential</td><td>1 year</td><td>This cookies help us remember that you have seen the cookie message required by law.
</td></tr>
	</table>
	<h3>How do I Disable Cookies</h3>
<p>To fully disable cookies on our website, you will need to change the settings in your website browser.
</p>
<h3>Links to Other Websites</h3>
<p>This cookie policy does not cover the links within this site linking to other websites. We encourage you to read the privacy statements on the other websites you visit.</p>
	</section>
    </div>
  </Layout>
)
export default PrivacyPage
