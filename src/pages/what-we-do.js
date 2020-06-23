import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Nav from '../components/Nav'

const WatDoPage = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <header id="header">
      <h1>How we can help</h1>
      <p>Sectors of intervention</p>
    </header>
    <Helmet title="Gnucoop - How we can help" />
    <div id="main">
      <section id="content" className="main">
        <h2>Introduction</h2>
          <p>We support NGO and non-profit organisation in their work. We have experience in several fields of development, from education to agriculture.
          We use effective and sustainable technological solutions that are already available or, when necessary, we develop our own. If you have a problem, together we can think to a solution!</p>
        <ul className="statistics">
          <li className="style1">
            <span className="fa fa-graduation cap"></span>
            <strong>5,120</strong> Education
          </li>
          <li className="style2">
            <span className="icon fa-folder-open-o"></span>
            <strong>8,192</strong> Health
          </li>
          <li className="style3">
            <span className="icon fa-signal"></span>
            <strong>2,048</strong> Agricolture
          </li>
          <li className="style4">
            <span className="fa fa-laptop"></span>
            <strong>4,096</strong> MEAL
          </li>
          <li className="style5">
            <span className="icon fa-diamond"></span>
            <strong>1,024</strong> Cash distribution
          </li>
          <li className="style1">
            <span className="icon fa-code-fork"></span>
            <strong>5,120</strong> Disaster response
          </li>
          <li className="style2">
            <span className="icon fa-folder-open-o"></span>
            <strong>8,192</strong> Training
          </li>
        </ul>
        <h2>Education</h2>
          <p>If you run a project on education, most likely you need to track your students’ school attendance, possibly with other data. Our platform DEWCO (link alla pagina) has been used in Ethiopia and Burkina Faso to collect individual students presence at school and allow for real-time reports. Thanks to the mobile and off-line capabilities of DEWCO, teachers or facilitators can collect children attendance on a daily basis, even in remote areas with little or no internet connectivity.
          In Burkina Faso, we develop a mobile app to allow for automatic attendance registration through a <strong>face recognition</strong> algorithm based on neural networks. The algorithm runs on the mobile devices of the teachers and recognises the students in class, with a single photo or a short video.
          Talking of education, we also develop some cool educational tool. In a recent project (link) we develop an interactive platform (video-gamebooks) for building a multimedia version of the well known gamebooks. A multi-branched video story is created on a video sharing platform. The user is presented with options that define different narrative paths and participate to the creative process. It</p>
        <h2>Health</h2>
          <p>According to WHO, Mobile Health (m-Health) is the ‘Provision of health services and information via mobile and wireless technologies.  mHealth includes mobile phones, Personal Digital Assistants (PDAs), tablets, mobile applications and wireless medical devices’.
          mHealth has the potential to address and overcome challenges such as : (1) disparities in access to health services, helping remote communities to also connect and avail of health services; (2) inadequacies of the health infrastructure, supporting in monitoring the quality of health posts and health centers; (3) shortage of human resources for health, by empowering health promoters and spreading educational messages.
          Our platform Dewco, a data collection tool, has been used, among others, for the development of the Integrated Refugees Health Information System (iRHIS) used by UNHCR to monitor health activities in refugee camps at worldwide level.</p>
      </section>
    </div>
  </Layout>
)

export default WatDoPage
