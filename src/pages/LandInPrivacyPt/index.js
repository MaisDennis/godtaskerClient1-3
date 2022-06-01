import React from 'react'
import i18n from "i18next";
import { useTranslation } from "react-i18next";
// -----------------------------------------------------------------------------
import history from '~/services/history';
import { Container } from './styles'
import detective from '~/assets/LandIn/logos/detective02.svg'
import banner from '~/assets/LandIn/logos/banner.png'
// -----------------------------------------------------------------------------
export default function LandInPrivacyPt() {
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

          <h1>
          Política de Privacidade
          </h1>


          <p>
          No Godtasker, privacidade e segurança são prioridades e nos comprometemos com a transparência do tratamento de dados pessoais dos nossos usuários/clientes. Por isso, esta presente Política de Privacidade estabelece como é feita a coleta, uso e transferência de informações de clientes ou outras pessoas que acessam ou usam nosso site.

          Ao utilizar nossos serviços, você entende que coletaremos e usaremos suas informações pessoais nas formas descritas nesta Política, sob as normas de Proteção de Dados (LGPD, Lei Federal 13.709/2018), das disposições consumeristas da Lei Federal 8078/1990 e as demais normas do ordenamento jurídico brasileiro aplicáveis.

          Dessa forma, o Dennis Lee, doravante denominada simplesmente como “Cardemon”, inscrita no CPF sob o nº (228.433.868-29), no papel de Controladora de Dados, obriga-se ao disposto na presente Política de Privacidade.

          </p>
          <h2>
          1. Quais dados coletamos sobre você e para qual finalidade?
          </h2>
          <p>
          Nosso site coleta e utiliza alguns dados pessoais seus, de forma a viabilizar a prestação de serviços e aprimorar a experiência de uso.
          </p>
          <h3>
          1.1. Dados pessoais fornecidos pelo titular
          </h3>
          <p>
          Nome comercial da empresa para fins de contato.

          Nome pessoal para fins de contato.

          E-mail para fins de contato.
          </p>
          <h3>
          1.2. Dados pessoais coletados automaticamente
          </h3>
          <p>
          Geolocalização para o cadastro de dados.

          Dispositivo para o cadastro de dados.

          Cumprir determinação legal de armazenamento de registros de acesso a aplicações.
          </p>
          <h2>
          2. Como coletamos os seus dados?
          </h2>
          <p>
          Nesse sentido, a coleta dos seus dados pessoais ocorre da seguinte forma:

          Quando o usuário utiliza o formulário de contato.

          Quando o usuário se conecta ao site.
          </p>
          <h3>
          2.1. Consentimento
          </h3>
          <p>
          É a partir do seu consentimento que tratamos os seus dados pessoais. O consentimento é a manifestação livre, informada e inequívoca pela qual você autoriza o Godtasker a tratar seus dados.

          Assim, em consonância com a Lei Geral de Proteção de Dados, seus dados só serão coletados, tratados e armazenados mediante prévio e expresso consentimento.

          O seu consentimento será obtido de forma específica para cada finalidade acima descrita, evidenciando o compromisso de transparência e boa-fé do Godtasker para com seus usuários/clientes, seguindo as regulações legislativas pertinentes.

          Ao utilizar os serviços do Godtasker e fornecer seus dados pessoais, você está ciente e consentindo com as disposições desta Política de Privacidade, além de conhecer seus direitos e como exercê-los.

          A qualquer tempo e sem nenhum custo, você poderá revogar seu consentimento.

          É importante destacar que a revogação do consentimento para o tratamento dos dados pode implicar a impossibilidade da performance adequada de alguma funcionalidade do site que dependa da operação. Tais consequências serão informadas previamente.
          </p>
          <h2>
          3. Quais são os seus direitos?
          </h2>
          <p>
          O Godtasker assegura a seus usuários/clientes seus direitos de titular previstos no artigo 18 da Lei Geral de Proteção de Dados. Dessa forma, você pode, de maneira gratuita e a qualquer tempo:

          Confirmar a existência de tratamento de dados, de maneira simplificada ou em formato claro e completo.

          Acessar seus dados, podendo solicitá-los em uma cópia legível sob forma impressa ou por meio eletrônico, seguro e idôneo.

          Corrigir seus dados, ao solicitar a edição, correção ou atualização destes.

          Limitar seus dados quando desnecessários, excessivos ou tratados em desconformidade com a legislação através da anonimização, bloqueio ou eliminação.

          Solicitar a portabilidade de seus dados, através de um relatório de dados cadastrais que o Godtasker trata a seu respeito.

          Eliminar seus dados tratados a partir de seu consentimento, exceto nos casos previstos em lei.

          Revogar seu consentimento, desautorizando o tratamento de seus dados.

          Informar-se sobre a possibilidade de não fornecer seu consentimento e sobre as consequências da negativa.
          </p>
          <h2>
          4. Como você pode exercer seus direitos de titular?
          </h2>
          <p>
          Para exercer seus direitos de titular, você deve entrar em contato com o Godtasker através dos seguintes meios disponíveis:

          Telefone

          E-mail

          De forma a garantir a sua correta identificação como titular dos dados pessoais objeto da solicitação, é possível que solicitemos documentos ou demais comprovações que possam comprovar sua identidade. Nessa hipótese, você será informado previamente.
          </p>
          <h2>
          5. Como e por quanto tempo seus dados serão armazenados?
          </h2>
          <p>
          Seus dados pessoais coletados pelo Godtasker serão utilizados e armazenados durante o tempo necessário para a prestação do serviço ou para que as finalidades elencadas na presente Política de Privacidade sejam atingidas, considerando os direitos dos titulares dos dados e dos controladores.

          De modo geral, seus dados serão mantidos enquanto a relação contratual entre você e o Godtasker perdurar. Findado o período de armazenamento dos dados pessoais, estes serão excluídos de nossas bases de dados ou anonimizados, ressalvadas as hipóteses legalmente previstas no artigo 16 lei geral de proteção de dados, a saber:

          I – cumprimento de obrigação legal ou regulatória pelo controlador;

          II – estudo por órgão de pesquisa, garantida, sempre que possível, a anonimização dos dados pessoais;

          III – transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos nesta Lei; ou

          IV – uso exclusivo do controlador, vedado seu acesso por terceiro, e desde que anonimizados os dados.

          Isto é, informações pessoais sobre você que sejam imprescindíveis para o cumprimento de determinações legais, judiciais e administrativas e/ou para o exercício do direito de defesa em processos judiciais e administrativos serão mantidas, a despeito da exclusão dos demais dados.

          O armazenamento de dados coletados pelo Godtasker reflete o nosso compromisso com a segurança e privacidade dos seus dados. Empregamos medidas e soluções técnicas de proteção aptas a garantir a confidencialidade, integridade e inviolabilidade dos seus dados. Além disso, também contamos com medidas de segurança apropriadas aos riscos e com controle de acesso às informações armazenadas.
          </p>
          <h2>
          6. O que fazemos para manter seus dados seguros?
          </h2>
          <p>
          Para mantermos suas informações pessoais seguras, usamos ferramentas físicas, eletrônicas e gerenciais orientadas para a proteção da sua privacidade.

          Aplicamos essas ferramentas levando em consideração a natureza dos dados pessoais coletados, o contexto e a finalidade do tratamento e os riscos que eventuais violações gerariam para os direitos e liberdades do titular dos dados coletados e tratados.

          Entre as medidas que adotamos, destacamos as seguintes:

          Apenas pessoas autorizadas têm acesso a seus dados pessoais

          O acesso a seus dados pessoais é feito somente após o compromisso de confidencialidade

          Seus dados pessoais são armazenados em ambiente seguro e idôneo.

          O Godtasker se compromete a adotar as melhores posturas para evitar incidentes de segurança. Contudo, é necessário destacar que nenhuma página virtual é inteiramente segura e livre de riscos. É possível que, apesar de todos os nossos protocolos de segurança, problemas de culpa exclusivamente de terceiros ocorram, como ataques cibernéticos de hackers, ou também em decorrência da negligência ou imprudência do próprio usuário/cliente.

          Em caso de incidentes de segurança que possa gerar risco ou dano relevante para você ou qualquer um de nossos usuários/clientes, comunicaremos aos afetados e a Autoridade Nacional de Proteção de Dados sobre o ocorrido, em consonância com as disposições da Lei Geral de Proteção de Dados.
          </p>
          <h2>
          7. Com quem seus dados podem ser compartilhados?
          </h2>
          <p>
          Tendo em vista a preservação de sua privacidade, o Godtasker não compartilhará seus dados pessoais com nenhum terceiro não autorizado.

          Além disso, também existem outras hipóteses em que seus dados poderão ser compartilhados, que são:

          I – Determinação legal, requerimento, requisição ou ordem judicial, com autoridades judiciais, administrativas ou governamentais competentes.

          II – Caso de movimentações societárias, como fusão, aquisição e incorporação, de forma automática

          III – Proteção dos direitos do Godtasker em qualquer tipo de conflito, inclusive os de teor judicial.
          </p>
          <h3>
          7.1. Transferência internacional de dados
          </h3>
          <p>
          Alguns dos terceiros com quem compartilhamos seus dados podem ser localizados ou ou possuir instalações localizadas em países estrangeiros. Nessas condições, de toda forma, seus dados pessoais estarão sujeitos à Lei Geral de Proteção de Dados e às demais legislações brasileiras de proteção de dados

          Nesse sentido, o Godtasker se compromete a sempre adotar eficientes padrões de segurança cibernética e de proteção de dados, nos melhores esforços de garantir e cumprir as exigências legislativas.

          Ao concordar com essa Política de Privacidade, você concorda com esse compartilhamento, que se dará conforme as finalidades descritas no presente instrumento.
          </p>
          <h2>
          8. Cookies ou dados de navegação
          </h2>
          <p>
          O Godtasker faz uso de Cookies, que são arquivos de texto enviados pela plataforma ao seu computador e que nele se armazenam, que contém informações relacionadas à navegação do site. Em suma, os Cookies são utilizados para aprimorar a experiência de uso.

          Ao acessar nosso site e consentir com o uso de Cookies, você manifesta conhecer e aceitar a utilização de um sistema de coleta de dados de navegação com o uso de Cookies em seu dispositivo.

          O Godtasker utiliza os seguintes Cookies: (descrição dos tipos de Cookies utilizados pelo site).

          Você pode, a qualquer tempo e sem nenhum custo, alterar as permissões, bloquear ou recusar os Cookies. Todavia, a revogação do consentimento de determinados Cookies pode inviabilizar o funcionamento correto de alguns recursos da plataforma.

          Para gerenciar os cookies do seu navegador, basta fazê-lo diretamente nas configurações do navegador, na área de gestão de Cookies. Você pode acessar tutoriais sobre o tema diretamente nos links abaixo:

          Se você usa o Internet Explorer.

          Se você usa o Firefox.

          Se você usa o Safari.

          Se você usa o Google Chrome.

          Se você usa o Microsoft Edge.

          Se você usa o Opera.

          Você pode ter maiores informações sobre os Cookies que utilizamos e como eles funcionam na nossa Política de Cookies, disponível neste link (link para a Política de Cookies).
          </p>
          <h2>
          9. Alteração desta Política de Privacidade
          </h2>
          <p>
          A atual versão da Política de Privacidade foi formulada e atualizada pela última vez em: 19 de Julho, 2021.

          Reservamos o direito de modificar essa Política de Privacidade a qualquer tempo, principalmente em função da adequação a eventuais alterações feitas em nosso site ou em âmbito legislativo. Recomendamos que você a revise com frequência.

          Eventuais alterações entrarão em vigor a partir de sua publicação em nosso site e sempre lhe notificaremos acerca das mudanças ocorridas.

          Ao utilizar nossos serviços e fornecer seus dados pessoais após tais modificações, você as consente.
          </p>
          <h2>
          10. Responsabilidade
          </h2>
          <p>
          O Godtasker prevê a responsabilidade dos agentes que atuam nos processos de tratamento de dados, em conformidade com os artigos 42 ao 45 da Lei Geral de Proteção de Dados.

          Nos comprometemos em manter esta Política de Privacidade atualizada, observando suas disposições e zelando por seu cumprimento.

          Além disso, também assumimos o compromisso de buscar condições técnicas e organizativas seguramente aptas a proteger todo o processo de tratamento de dados.

          Caso a Autoridade Nacional de Proteção de Dados exija a adoção de providências em relação ao tratamento de dados realizado pelo Godtasker, comprometemo-nos a segui-las.
          </p>
          <h3>
          10.1 Isenção de responsabilidade
          </h3>
          <p>
          Conforme mencionado no Tópico 6, embora adotemos elevados padrões de segurança a fim de evitar incidentes, não há nenhuma página virtual inteiramente livre de riscos. Nesse sentido, o Godtasker não se responsabiliza por:

          I – Quaisquer consequências decorrentes da negligência, imprudência ou imperícia dos usuários em relação a seus dados individuais. Garantimos e nos responsabilizamos apenas pela segurança dos processos de tratamento de dados e do cumprimento das finalidades descritas no presente instrumento.

          Destacamos que a responsabilidade em relação à confidencialidade dos dados de acesso é do usuário.

          II – Ações maliciosas de terceiros, como ataques de hackers, exceto se comprovada conduta culposa ou deliberada do Godtasker.

          Destacamos que em caso de incidentes de segurança que possam gerar risco ou dano relevante para você ou qualquer um de nossos usuários/clientes, comunicaremos aos afetados e a Autoridade Nacional de Proteção de Dados sobre o ocorrido e cumpriremos as providências necessárias.

          III – Inveracidade das informações inseridas pelo usuário/cliente nos registros necessários para a utilização dos serviços do Godtasker; quaisquer consequências decorrentes de informações falsas ou inseridas de má-fé são de inteiramente responsabilidade do usuário/cliente.
          </p>
          <h2>
          11. Encarregado de Proteção de Dados
          </h2>
          <p>
          O Godtasker disponibiliza os seguintes meios para que você possa entrar em contato conosco para exercer seus direitos de titular: e-mail.

          Caso tenha dúvidas sobre esta Política de Privacidade ou sobre os dados pessoais que tratamos, você pode entrar em contato com o nosso Encarregado de Proteção de Dados Pessoais, através dos seguintes canais:

          Dennis Lee (CPF: 228.433.868-29)

          dennisdjlee@yahoo.com
          </p>

          </div>
          <button className="hero-button" onClick={handleMainPage}>
            {t('MainPage')}
          </button>
        </div>
      </div>
    </Container>
  )
}
