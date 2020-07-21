import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Nav from '../components/Nav'

const KnowledgePage = ({ data }) => (
  <Layout>
    <Nav sticky={true} />
    <header id="header">
      <h1>Our Knowledge</h1>
      <p></p>
    </header>
    <Helmet title="Gnucoop - Our knowledge" />
    <div id="main">
      <section class="main">
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
        <p>
          <a href="/product/c2s">#c2s</a>&nbsp;&nbsp;
          #Picaps
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
        <p>
          <a href="/product/dewco">#DEWCO</a>&nbsp;&nbsp;
          <a href="/partner/UNHCR">#iRHIS</a>&nbsp;&nbsp;
          #Test &amp; Treat &nbsp;
          #LIS &amp; EIS &nbsp;
          #Change &nbsp;
          #Quelimane &nbsp;
          #Mah &nbsp;
          #Para todas as criancas &nbsp;
          #ForeSeeing Inclusion
        </p>
        <h2>Blockchain</h2>
        <p>
          Blockchain is a technology introduced in 2008 to manage a database of transactions (or a ledger) across a distributed network, assuring a robust and secure synchronization mechanism across nodes that allows to make digital resources impossible to duplicate.
          There are several kinds of blockchains, also called DLT - Distributed Ledger Technologies, and their applications in development range from the certification of a supply chain, to the management of financial resource distribution (like cash or vouchers) in emergency and post-emergency contexts.
          We have used blockchain in Haiti and Libia for supporting the distribution of cash to the people affected by the disaster.
        </p>
        <p>
          <a href="/product/merkur">#Merkur</a>&nbsp;&nbsp;
          #Libya
        </p>
        <h2>Mobile Apps</h2>
        <p>
          Gnucoop usually provides a native mobile application for all the major mobile operating systems (iOS, Android, Windows Phone) assuring a fast performance and a high degree of reliability.
          Our mobile applications are realised using a cross-platform framework (i.e. Ionic), thus allowing the provision of the same features for every operating system and therefore reducing development and maintenance time and costs.
          The development is modular so that the system applications and modules can be extended through the use of plugins.
        </p>
        <p>
          <a href="/product/dewco">#DEWCO</a>&nbsp;&nbsp;
          <a href="/partner/UNHCR">#iRHIS</a>&nbsp;&nbsp;
          <a href="/product/c2s">#c2s</a>&nbsp;&nbsp;
          #Change &nbsp;
          #Quelimane &nbsp;
          #Mah &nbsp;
          #Para todas as criancas &nbsp;
          #ForeSeeing Inclusion &nbsp;
          #Water trucking Software
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
        <p>
          <a href="https://www.cinegame.eu/" target="blank">#Cinegame</a>
        </p>
      </section>
    </div>
  </Layout>
)

export default KnowledgePage
