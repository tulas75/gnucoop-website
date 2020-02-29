import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import staff from '../assets/images/smwo.jpg'
import pic01 from '../assets/images/pic01.jpg'
import Nav from '../components/Nav'

class Generic extends React.Component {
  
  render() {

    return (
      <Layout>
        <Nav sticky={true} />
        <Helmet title="Blog & Articles" />
        <div id="main">
          <section id="content" className="main">
          <span className="main image "><img src={staff} alt="" /></span>
          <h1>Smart-Coop</h1>
         <h2>Lo Smart-Working al servizio delle Cooperative</h2> 
<p>Non tutti i mali vengono per nuocere. In questi ultimi giorni le aziende sono necessariamente dovute ricorrere al lavoro da remoto e chissà che finalmente non decidano di utilizzarlo più spesso. Sarebbe un beneficio per i lavoratori, per l’ambiente e per l’azienda stessa. 
</p>
<p>Ti sei mai chiesto come poter migliorare i flussi di comunicazione ed il lavoro tra uffici remoti o anche tra colleghi, all’interno dello stesso ufficio? La tua organizzazione ha collaboratori che lavorano da remoto, magari con una sede centrale in una città ed altre sedi delocalizzate in altre regioni? Oppure stai pensando come sarebbe bello poter lavorare da remoto senza perdere efficienza e produttività. Questo articolo forse potrebbe aiutarti!</p>
<h3>Ma perchè proprio Gnucoop dovrebbe parlarci di remote working?</h3>

Gnucoop è società cooperativa dislocata su tutto il territorio italiano e fin dalla sua nascita si è avvalsa principalmente di smart-working. Ha dovuto fin da subito, immaginare un luogo virtuale per tutti i suoi lavoratori, che potesse farli sentire a proprio agio. In due parole: un ufficio virtuale.
<br/>
Servizi come  DROPBOX, Google Drive, Onedrive, Owncloud ed altri, sono fondamentali per condividere informazioni e file, ma non sono sufficienti a rispondere a tutte le esigenze di un’azienda che intende avvalersi dello smart working dei suoi dipendenti.
<br/>
Tanto più alta deve essere l’integrazione e l’interazione tra le persone, tanto più è necessario andare oltre lo scambio di un file e creare un ambiente digitale che permetta al lavoratore da remoto di non avvertire la necessità di essere fisicamente presente in ufficio.
<br/>
Bisogna prima di tutto definire il nuovo flusso di lavoro, che si basi su strumenti di collaborazione più avanzati e che integri i classici strumenti di ufficio come Microsoft Office (365) oppure le alternative Google (gSuite), all’interno della nuova struttura virtuale.
<br/>
Questi strumenti vengono chiamati strumenti di messaggistica aziendale. 
<br/>
Tra questi  non possiamo non citare: Slack, Facebook Workgroup, Microsoft Team, Google Hangout Chat.
<br/>
Sarebbe ancor più fondamentale una formazione adeguata per tutti gli utenti della cooperativa su tutti questi strumenti, che pur mantenendo, di base, una semplicità di utilizzo, hanno bisogno di tempo per entrare a far parte degli strumenti aziendali e essere compresi appieno da tutti.
<br/>
Ricordiamo inoltre che alcuni di questi strumenti sono disponibili gratuitamente per gli enti no profit e le cooperative sociali.
<br/>
In questi giorni difficili, dove l’organizzazione alla quale eravamo abituati, sul lavoro e nella vita privata, si scontra con le esigenze dettate dall’emergenza sanitaria, Gnucoop ha deciso di impegnarsi direttamente e dare il proprio contributo allo sforzo collettivo. Abbiamo deciso di raccogliere l’appello delle istituzioni all’unità e alla solidarietà, convinti che solo con l’impegno di tutti possiamo uscire da questo periodo difficile. 
<br/>
Offriamo quindi un ciclo di webinar formativi gratuiti sui nuovi strumenti collaborativi per il lavoro agile, rivolti alle Cooperative. Questi webinar sono seminari on-line rivolti ai lavoratori che in questo periodo si trovano ad affrontare un rallentamento della propria attività e hanno quindi spazio e tempo da riempire, ma anche alle aziende che hanno sempre voluto avvicinarsi alle meraviglie dello smart-working ma non hanno mai avuto l’occasione di iniziare. 
<br/>
Per uscire dalle difficoltà c’è una sola strada da percorrere: tirarsi su le maniche e darsi da fare! Noi facciamo il primo passo, voi fate il vostro e partecipate!
<br/>
<p>
Per iscriversi clicca <a href="https://docs.google.com/forms/d/e/1FAIpQLScWjohuc_Sz0sRz7qfKKe4-wgpQgjoVuPWUAtKEDv-92K4zug/viewform">qui</a><br/>
</p>
<ul>
<li>
Giovedi 5 Marzo ore 16:00 – Gmail, calendario e Keep
</li>
<li>
Martedì 10 Marzo ore 16 – Collaborazione con Google Drive – Base Base
</li>
<li>
Venerdì 13 Marzo ore 16 – Collaborazione con Google Drive – Base Avanzato
</li>
<li>
Martedì 17 Marzo ore 16 – Slack: L’ufficio virtuale 
</li>
</ul>

<a class="button">TAG1</a>  <a class="button">TAG2</a> <a class="button">TAG3</a> 
          </section>
          <section id="content" className="main">
            <h2>Related posts</h2>
            <ul class="features">
            <li>
            <span className="main image "><img src={pic01} alt="" /></span>
                <h3>Smart-Coop</h3>
                <ul class="actions">
                    <li>
                        <a class="button" href="/post">Read more</a>
                    </li>
                </ul>
            </li>
            <li>
            <span className="main image "><img src={pic01} alt="" /></span>
                <h3>Ipsum consequat</h3>
                <ul class="actions">
                    <li>
                        <a class="button" href="/post">Read more</a>
                    </li>
                </ul>
            </li>
            <li>
            <span className="main image "><img src={pic01} alt="" /></span>
                <h3>Ipsum consequat</h3>
                <ul class="actions">
                    <li>
                        <a class="button" href="/post">Read more</a>
                    </li>
                </ul>
            </li>
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic