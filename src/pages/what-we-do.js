import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Nav from '../components/Nav'

const WatDoPage = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <header id="header">
      <h1>What we do</h1>
      <p>Sectors of intervention</p>
    </header>
    <Helmet title="Gnucoop - What we do" />
    <div id="main">
      <section id="content" className="main">
        <header className="major">
          <h2>Our Solutions</h2>
        </header>
        <p>
          We support NGO and non-profit organisations in their work. We have experience in several fields of development, from education to agriculture.
          We use effective and sustainable technological solutions that are already available or, when necessary, we develop our own.
          If you have a problem, together we can think of a solution!
        </p>
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
        <p>
          If you run a project on education, most likely you need to track your students' school attendance, possibly with other data.
          Our platform DEWCO has been used in Ethiopia and Burkina Faso to collect individual students presence at school and allow for real-time reports.
          Thanks to the mobile and off-line capabilities of DEWCO, teachers or facilitators can collect children attendance on a daily basis, even in remote areas with little or no internet connectivity.
        </p><p>
          In Burkina Faso, we develop a mobile app to allow for automatic attendance registration through a <strong>face recognition</strong> algorithm based on neural networks.
          The algorithm runs on the mobile devices of the teachers and recognises the students in class, with a single photo or a short video.
        </p><p>
          We also develop some cool educational tools.
          In our recent project <a href="https://www.cinegame.eu/" target="blank">Cinegame</a> we developed an interactive platform implementing a multimedia version of the well known gamebooks.
          A multi-branched video story is created on the video sharing platform.
          The user is presented with options that define different narrative paths and participate to the creative process.
          It's a lot of fun, <a href="https://www.cinegame.eu/" target="blank">give it a try!</a>
        </p>
        <h2>Health</h2>
        <p>
          According to WHO, Mobile Health (m-Health) is the "Provision of health services and information via mobile and wireless technologies".
          mHealth includes mobile phones, Personal Digital Assistants (PDAs), tablets, mobile applications and wireless medical devices.
          mHealth has the potential to address and overcome challenges such as:
          <ol>
            <li>disparities in access to health services, helping remote communities to also connect and avail of health services;</li>
            <li>inadequacies of the health infrastructure, supporting in monitoring the quality of health posts and health centers;</li>
            <li>shortage of human resources for health, by empowering health promoters and spreading educational messages.</li>
          </ol>
          Our platform Dewco, a data collection tool, has been used, among others, for the development of the Integrated Refugees Health Information System (iRHIS) used by UNHCR to monitor health activities in refugee camps at worldwide level.
        </p>
        <h2>Agriculture</h2>
        <p>
          Agriculture is the mainstay of national economies and household incomes in many African, Caribbean and Pacific countries.
          The role of information and communication technologies (ICTs) in agriculture is truly significant in everything, from conserving water use to helping secure the livelihoods of rural women.
          The huge potential of ICT for agriculture (ICT4Ag), from increasing agricultural yields to helping farmers to get a fairer price for their produce, is well documented.
          Technologies such as SMS applications, mobile banking and satellite data have been used successfully in order to give agricultural stakeholders access to farm mapping, weather data, marketing tools, financial credit, advice from extension workers, and social networks, among other things.
          We propose different solution in the ICT4Ag sector:
          <ul>
            <li>SMS-based service</li>
            <li>Data Collection and Monitoring Web and Mobile Platform</li>
            <li>GIS Platform</li>
          </ul>
        </p>
        <h2>MEAL: Impact Measurement</h2>
        <p>
          Monitoring, Evaluation and Learning (MEAL) is an activity that typically involves the collection and processing of lots of data.
          Hundreds or thousands of long surveys filled with information about beneficiaries, detailed activity records, follow-up forms.
          Data are produced from a diversity of sources and elaborated.
          Our platform DEWCO supports the collection and management of huge quantities of data, collected through a web interface or a mobile application.
          All indicators can be created from scratch but it is also possible to choose from a repository of standards.
          With DEWCO it is relatively easy to create baselines and targets and monitor how the project progresses.
          Custom reports can be created as well as a dynamic dashboard to measure indicators from the data collected.
          This allows to build actual knowledge on the measurement of outcomes and impacts, transforming a measurement exercise in a learning experience.
        </p>
        <h2>Cash Distribution</h2>
        <p>
          <b>Cash and voucher system</b> refers to a restricted number of tools, where the cash or voucher is given to individuals, households or communities, but not to governments or other state actors.
          In certain humanitarian disasters, the <b>supply of food</b> to markets and shops is sustained, yet, the affected population loses the means to buy it.
          In such cases, the cash and voucher aid approach ensures humanitarian aid reaches directly those with the greatest need in a timely manner.
        </p><p>
          At the beginning of 2018, Gnucoop and <a href="http://merkur.io/" target="blank">Merkur.io</a> started a collaboration for providing a cash and voucher platform to NGOs and Humanitarian Agencies.
          Merkur.io is a secure digital payment platform capable of turning humanitarian voucher fairs into a fraud free, rapid and effective experience to NGOs, merchants and humanitarian assistance right holders (beneficiaries).
        </p>
        <h2>Disaster Response</h2>
        <p>
          <b>Disaster risk reduction (DRR)</b> is a systematic approach to identifying, assessing and reducing the risks of disaster.
          It aims to reduce socio-economic vulnerabilities to disaster as well as dealing with the environmental and other hazards that trigger them.
          The most commonly cited definition of DRR is one used by UN agencies such as UNISDR, also known as the UN Office for Disaster Risk Reduction, and UNDP:
          "The conceptual framework of elements considered with the possibilities to minimize vulnerabilities and disaster risks throughout a society, to avoid (prevention) or to limit (mitigation and preparedness) the adverse impacts of hazards, within the broad context of sustainable development."
        </p>
        <p>
          Gnucoop developed a GIS platform, <b>YAGO (Yet Another GIS Online)</b> which enables visualizing the main threats and vulnerabilities, as well as resources available in the surrounding areas to foster crisis management by turning this information into actions. 
          This tool contributed to provide information and knowledge of the territory for decision making, strengthen participatory planning and minimizing disaster risks and vulnerabilities.
        </p>
        <h2>Training</h2>
        <p>
          We offer training and capacity building on a number of topics related to ICT and development.
          These include, among others:
          <ul>
            <li>Data Collection</li>
            <li>Data Analysis</li>
            <li>Blockchain</li>
            <li>mHealth</li>
            <li>Design Thinking</li>
            <li>ICT4D</li>
          </ul>
          We always try to adapt to our clients specific needs.
          Our approach is based on a rigorous background of theory, but we like to always refer to practice in order to show how different technologies can bring actual benefit to the work of development practitioners. 
          If you want to know more about upcoming courses, visit our <a href="/training">academy page</a>!
        </p>
      </section>

      <section class="main">
        <header className="major">
          <h2>Our Knowledge</h2>
        </header>
        <p>
          The world of technology evolves at an incredible pace.
          That's why we keep studying and learning new stuff so that we can always use the most effective solutions.
          We don't like the hype, but we believe that innovation starts when you ask yourself “what's next?”.
          We know there are still many things we don’t know but hey, let’s be honest, we master some key technologies that could make a huge difference to your projects!
          Here are some of them!
        </p>
        <h2>AI&amp;ML</h2>
        <p>
          With Artificial Intelligence and Machine Learning we refer to software systems that can perform complex tasks typically associated with “human intelligence”.
          For example recognizing a face within a picture, understanding a question in natural language or taking decisions.
          These tasks require the ability to process big amount of data, generally going through a phase of training during which the system gains experience and learns from an externally established knowledge.
        </p>
        <p>
          AI&amp;ML system can be of great help in many development contexts.
          For example, through a face recognition algorithm we created a mobile app that can be used by teachers to register school attendance in Burkina Faso.
          Moreover, in our data collection system DEWCO, data validation is performed not only though standard logic but also by learning from the natural correlation within existing data.
        </p>
        <h2>Data Management</h2>
        <p>
          If it is true that data is the new gold in the era of information, then the ability to manage data is a key factor for most profit and non-profit actors that operate in these times.
          How to collect data efficiently?
          How not to miss the data that are being produced in our projects?
          How to store data and finally how to use this data to convert it into valuable knowledge that can support us taking decisions and delivering better services to our target populations?
          These are the questions that most organisations are (or should be) asking themselves.
          We’ve got some ideas about it, and would be glad to share them.
        </p>
        <h2>Blockchain</h2>
        <p>
          Blockchain is a technology introduced in 2008 to manage a database of transactions (or a ledger) across a distributed network, assuring a robust and secure synchronization mechanism across nodes that allows to make digital resources impossible to duplicate.
          There are several kinds of blockchains, also called DLT - Distributed Ledger Technologies, and their applications in development range from the certification of a supply chain, to the management of financial resource distribution (like cash or vouchers) in emergency and post-emergency contexts.
          We have used blockchain in Haiti and Libia for supporting the distribution of cash to the people affected by the disaster.
        </p>
        <h2>Mobile Apps</h2>
        <p>
          Gnucoop usually provides a native mobile application for all the major mobile operating systems (iOS, Android, Windows Phone) assuring a fast performance and a high degree of reliability.
          Our mobile applications are realised using a cross-platform framework (i.e. Ionic), thus allowing the provision of the same features for every operating system and therefore reducing development and maintenance time and costs.
          The development is modular so that the system applications and modules can be extended through the use of plugins.
        </p>
        <h2>Gamification</h2>
        <p>
          It is now recognised that any experience is going to be more effective if it is associated with some sort of “game”.
          If the pleasure we receive from a gaming experience is associated with, for example, a learning process, we will be more likely to remember what we have learned and will be more motivated to keep learning.
          For this reason in many on-line applications we now see more often than not many elements taken from the world of games.
          We got rewards for filling a form, we got competitive incentives to perform better than our peers.
          Transforming an online activity into a game is anything but simple, but if it is done well, the gamification can amplify the potential of any online experience.
          Some of us have more than twenty years experience in creating computer games.
          If you have a good idea in mind, we know how to make it fun.
        </p>
      </section>

      <section class="main">
        <header className="major">
          <h2>Our Products</h2>
        </header>
        <ul class="features">
          {data.allStrapiProducts.edges.map(product => (
            <li key={product.node.id}>
              <a href={'/product/'+product.node.Slug}>
                <h2>{product.node.Product}</h2>
                <span className="main image">
                  {/*<Img fixed={product.node.FeatureImage.childImageSharp.fixed}/>*/}
                  {product.node.Excerpt}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </Layout>
)

export default WatDoPage

export const pageQuery = graphql`
  query WatDoQuery {
    allStrapiProducts {
      edges {
        node {
          id
          Product
          Slug
          Excerpt
        }
      }
    }
  }
`
