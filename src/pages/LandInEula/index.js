import React from 'react'
import i18n from "i18next";
import { useTranslation } from "react-i18next";
// -----------------------------------------------------------------------------
import history from '~/services/history';
import { Container } from './styles'
import detective from '~/assets/LandIn/logos/detective02.svg'
import banner from '~/assets/LandIn/logos/banner.png'
// -----------------------------------------------------------------------------
export default function LandInEula() {
  const { t, i18n } = useTranslation();

  function handleMainPage() {
    history.push('/');
  }

  // ---------------------------------------------------------------------------
  return (
    <Container>
      <div className="hero-div">
        <div className="card-div">
          <div className="logo-div">
            <img className="logo-img" src={detective} alt="godtaskerFont"/>
            <img className="banner-img" src={banner} alt="godtaskerFont"/>
          </div>

          <div className="text-div">
            <p><h3>End-User License Agreement ("Agreement")</h3></p>
            <p>Last updated: April 24, 2022</p>

            <p>Please read this End-User License Agreement carefully before clicking the "I Agree" button, downloading or using The Godtasker.</p>

            <p><strong>Interpretation and Definitions</strong></p>
            <p><strong>Interpretation</strong></p>
            <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

            <p><strong>Definitions</strong></p>
            <p>For the purposes of this End-User License Agreement:</p>

            <p><li>Agreement means this End-User License Agreement that forms the entire agreement between You and the Company regarding the use of the Application. This Agreement has been created with the help of the EULA Generator.</li></p>

            <p><li>Application means the software program provided by the Company downloaded by You to a Device, named The Godtasker</li></p>

            <p><li>Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to The Godtasker.</li></p>

            <p><li>Content refers to content such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available by You, regardless of the form of that content.</li></p>

            <p><li>Country refers to: California, United States</li></p>

            <p><li>Device means any device that can access the Application such as a computer, a cellphone or a digital tablet.</li></p>

            <p><li>Third-Party Services means any services or content (including data, information, applications and other products services) provided by a third-party that may be displayed, included or made available by the Application.</li></p>

            <p><li>You means the individual accessing or using the Application or the company, or other legal entity on behalf of which such individual is accessing or using the Application, as applicable.</li></p>

            <p><strong>Acknowledgment</strong></p>
            <p>By clicking the "I Agree" button, downloading or using the Application, You are agreeing to be bound by the terms and conditions of this Agreement. If You do not agree to the terms of this Agreement, do not click on the "I Agree" button, do not download or do not use the Application.</p>

            <p>This Agreement is a legal document between You and the Company and it governs your use of the Application made available to You by the Company.</p>

            <p>The Application is licensed, not sold, to You by the Company for use strictly in accordance with the terms of this Agreement.</p>

            <p><strong>License</strong></p>
            <p><strong>Scope of License</strong></p>
            <p>The Company grants You a revocable, non-exclusive, non-transferable, limited license to download, install and use the Application strictly in accordance with the terms of this Agreement.</p>

            <p>The license that is granted to You by the Company is solely for your personal, non-commercial purposes strictly in accordance with the terms of this Agreement.</p>

            <p><strong>Third-Party Services</strong></p>
            <p>The Application may display, include or make available third-party content (including data, information, applications and other products services) or provide links to third-party websites or services.</p>

            <p>You acknowledge and agree that the Company shall not be responsible for any Third-party Services, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect thereof. The Company does not assume and shall not have any liability or responsibility to You or any other person or entity for any Third-party Services.</p>

            <p>You must comply with applicable Third parties' Terms of agreement when using the Application. Third-party Services and links thereto are provided solely as a convenience to You and You access and use them entirely at your own risk and subject to such third parties' Terms and conditions.</p>

            <p><strong>Objectionable Content Policy.</strong></p>
            <p>The Godtasker maintains a zero tolerance policy regarding objectionable content. Objectionable content may not be uploaded or displayed in the extent such content includes, is in conjunction with, or alongside any, Objectionable Content.</p>

            <p>Objectionable content includes, but is not limited to:</p>

              <p><li>(i) sexually explicit materials;</li></p>

              <p><li>(ii) obscene, defamatory, libelous, slanderous, violent and/or unlawful content or profanity;</li></p>

              <p><li>(iii) content that infringes upon the rights of any third party, including copyright, trademark, privacy, publicity or other personal or proprietary right, or that is deceptive or fraudulent;</li></p>

              <p><li>(iv) content that promotes the use or sale of illegal or regulated substances, tobacco products, ammunition and/or firearms; and</li></p>

              <p><li>(v) gambling, including without limitation, any online casino, sports books, bingo or poker. Any user can flag content they deem objectionable for review.</li></p>

              <p>Content will be moderated by The Godtasker to ensure the removal of any and all objectionable content within 24 hours of the report. User accounts which have been confirmed responsible for posting objectionable content will be restricted from access to The Godtasker app.</p>

            <p><strong>Term and Termination</strong></p>
            <p>This Agreement shall remain in effect until terminated by You or the Company. The Company may, in its sole discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior notice.</p>

            <p>This Agreement will terminate immediately, without prior notice from the Company, in the event that you fail to comply with any provision of this Agreement. You may also terminate this Agreement by deleting the Application and all copies thereof from your Device or from your computer.</p>

            <p>Upon termination of this Agreement, You shall cease all use of the Application and delete all copies of the Application from your Device.</p>

            <p>Termination of this Agreement will not limit any of the Company's rights or remedies at law or in equity in case of breach by You (during the term of this Agreement) of any of your obligations under the present Agreement.</p>

            <p><strong>Indemnification</strong></p>
            <p>You agree to indemnify and hold the Company and its parents, subsidiaries, affiliates, officers, employees, agents, partners and licensors (if any) harmless from any claim or demand, including reasonable attorneys' fees, due to or arising out of your: (a) use of the Application; (b) violation of this Agreement or any law or regulation; or (c) violation of any right of a third party.</p>

            <p><strong>No Warranties</strong></p>
            <p>The Application is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Application, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Application will meet your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>

            <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Application, or the information, content, and materials or products included thereon; (ii) that the Application will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Application; or (iv) that the Application, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>

            <p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law. To the extent any warranty exists under law that cannot be disclaimed, the Company shall be solely responsible for such warranty.</p>

            <p><strong>Limitation of Liability</strong></p>
            <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Agreement and your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You for the Application or through the Application or 100 USD if You haven't purchased anything through the Application.</p>

            <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Application, third-party software and/or third-party hardware used with the Application, or otherwise in connection with any provision of this Agreement), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>

            <p>Some states/jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to You.</p>

            <p><strong>Severability and Waiver</strong></p>
            <p><strong>Severability</strong></p>
            <p>If any provision of this Agreement is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>

            <p><strong>Waiver</strong></p>
            <p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Agreement shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>

            <p><strong>Product Claims</strong></p>
            <p>The Company does not make any warranties concerning the Application.</p>

            <p><strong>United States Legal Compliance</strong></p>
            <p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>

            <p><strong>Changes to this Agreement</strong></p>
            <p>The Company reserves the right, at its sole discretion, to modify or replace this Agreement at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at the sole discretion of the Company.</p>

            <p>By continuing to access or use the Application after any revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, You are no longer authorized to use the Application.</p>

            <p><strong>Governing Law</strong></p>
            <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Agreement and your use of the Application. Your use of the Application may also be subject to other local, state, national, or international laws.</p>

            <p><strong>Entire Agreement</strong></p>
            <p>The Agreement constitutes the entire agreement between You and the Company regarding your use of the Application and supersedes all prior and contemporaneous written or oral agreements between You and the Company.</p>

            <p>You may be subject to additional terms and conditions that apply when You use or purchase other Company's services, which the Company will provide to You at the time of such use or purchase.</p>

            <p><strong>Contact Us</strong></p>
            <p>If you have any questions about this Agreement, You can contact Us:</p>

            <p>By email: godtaskerteam@gmail.com</p>

            <p>By visiting this page on our website: https://godtasker.com/</p>
          </div>
          <button className="hero-button" onClick={handleMainPage}>
            {t('MainPage')}
          </button>
        </div>
      </div>
    </Container>
  )
}
