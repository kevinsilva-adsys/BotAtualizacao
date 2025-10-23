// Lista inicial de municípios e suas URLs
const municipios = [
    {"id": "abaete-mg", "name": "Abaeté - MG", "url": "https://abaete-mg.vivver.com/login"},
    {"id": "alfenas-mg", "name": "Alfenas - MG", "url": "https://www.alfenas-mg.vivver.com/login"},
    {"id": "alfenas-mg-tst", "name": "Alfenas - MG[TST]", "url": "https://www.alfenas-mg-tst.vivver.com/login"},
    {"id": "arcos-mg", "name": "Arcos - MG", "url": "https://www.arcos-mg.vivver.com/login"},
    {"id": "belavistademinas-mg", "name": "Bela Vista de Minas - MG", "url": "https://belavistademinas-mg.vivver.com/login"},
    {"id": "berizal-mg", "name": "Berizal - MG", "url": "https://www.berizal-mg.vivver.com/login"},
    {"id": "bicas-mg", "name": "Bicas - MG", "url": "https://bicas-mg.vivver.com/login"},
    {"id": "boaesperanca-mg", "name": "Boa Esperança - MG", "url": "https://boaesperanca-mg.vivver.com/login"},
    {"id": "bocaiuva-mg", "name": "Bocaiúva - MG", "url": "https://www.bocaiuva-mg.vivver.com/login"},
    {"id": "botucatu-sp", "name": "Botucatu - SP", "url": "https://www.botucatu-sp.vivver.com/login"},
    {"id": "buritizeiro-mg", "name": "Buritizeiro - MG", "url": "https://www.buritizeiro-mg.vivver.com/login"},
    {"id": "campanha-mg", "name": "Campanha - MG", "url": "https://www.campanha-mg.vivver.com/login"},
    {"id": "cantagalo-mg", "name": "Cantagalo - MG", "url": "https://cantagalo-mg.vivver.com/login"},
    {"id": "carai-mg", "name": "Caraí - MG", "url": "https://www.carai-mg.vivver.com/login"},
    {"id": "carmodocajuru-mg", "name": "Carmo do Cajuru - MG", "url": "https://www.carmodocajuru-mg.vivver.com/login"},
    {"id": "carmodoparanaiba-mg", "name": "Carmo do Paranaíba - MG", "url": "http://www.carmodoparanaiba-mg.vivver.com/login"},
    {"id": "cassia-mg", "name": "Cássia - MG", "url": "http://www.cassia-mg.vivver.com/login"},
    {"id": "cataguases-mg", "name": "Cataguases - MG", "url": "http://www.cataguases-mg.vivver.com/login"},
    {"id": "cislap-mg", "name": "CISLAP - MG", "url": "https://cislap-mg.vivver.com/login"},
    {"id": "cisleste-mg", "name": "CISLESTE - MG", "url": "https://www.cisleste-mg.vmx.io/login"},
    {"id": "cisrec-mg", "name": "CISREC - MG", "url": "https://cisrec-mg.vivver.com/login"},
    {"id": "claraval-mg", "name": "Claraval - MG", "url": "https://www.claraval-mg.vivver.com/login"},
    {"id": "congonhas-mg", "name": "Congonhas - MG", "url": "https://congonhas-mg.vivver.com/login"},
    {"id": "contagem-mg", "name": "Contagem - MG", "url": "http://www.contagem-mg.vivver.com/login"},
    {"id": "contagem-mg-tst", "name": "Contagem - MG[TST]", "url": "https://www.contagem-mg-tst.vivver.com/login"},
    {"id": "convales-mg", "name": "Convales - MG", "url": "https://convales-mg.vivver.com/login"},
    {"id": "coracaodejesus-mg", "name": "Coração de Jesus - MG", "url": "http://www.coracaodejesus-mg.vivver.com/login"},
    {"id": "corinto-mg", "name": "Corinto - MG", "url": "https://corinto-mg.vivver.com/login"},
    {"id": "corrente-pi", "name": "Corrente - PI[BIG DATA]", "url": "https://corrente.cuidarpi.net/login"},
    {"id": "tv-corrente-pi", "name": "TV-Corrente - PI[BIG DATA]", "url": "https://c-tv.bigdatasys.net/login"},
    {"id": "curvelo-mg", "name": "Curvelo - MG", "url": "https://curvelo-mg.vivver.com/login"},
    {"id": "diamantina-mg", "name": "Diamantina - MG", "url": "https://www.diamantina-mg.vivver.com/login"},
    {"id": "divinopolis-mg", "name": "Divinópolis - MG", "url": "https://divinopolis-mg.vivver.com/login"},
    {"id": "tv-3-divinolis-mg", "name": "TV-Divinópolis - MG", "url": "https://tv-divinopolis-mg.vivver.com"},
    {"id": "divinopolis-mg-tst", "name": "Divinópolis - MG[TST]", "url": "https://divinopolis-mg-tst.vivver.com/login"},
    {"id": "dombosco-mg", "name": "Dom Bosco - MG", "url": "https://dombosco-mg.vivver.com/login"},
    {"id": "fama-mg", "name": "Fama - MG", "url": "http://www.fama-mg.vivver.com/login"},
    {"id": "franciscosa-mg", "name": "Francisco Sá - MG", "url": "http://www.franciscosa-mg.vivver.com/login"},
    {"id": "governadorvaladares-mg", "name": "Governador Valadares - MG", "url": "https://www.governadorvaladares-mg.vivver.com/login"},
    {"id": "governadorvaladares-mg-dst", "name": "Governador Valadares - MG[DST]", "url": "https://www.app.dst.sms.pref.governadorvaladares-mg.vmx.io/login"},
    {"id": "guape-mg", "name": "Guapé - MG", "url": "https://www.guape-mg.vivver.com/login"},
    {"id": "guaraciaba-mg", "name": "Guaraciaba - MG", "url": "https://guaraciaba-mg.vivver.com/login"},
    {"id": "ibdsocial-mg", "name": "IBDSocial - MG", "url": "https://ibdsocial-mg.vivver.com/login"},
    {"id": "igarape-mg", "name": "Igarapé - MG", "url": "https://igarape-mg.vivver.com/login"},
    {"id": "igaratinga-mg", "name": "Igaratinga - MG", "url": "https://www.igaratinga-mg.vivver.com/login"},
    {"id": "itabira-mg", "name": "Itabira - MG", "url": "https://itabira-mg.vivver.com/login"},
    {"id": "itabira-mg-tst", "name": "Itabira - MG[TST]", "url": "https://itabira-mg-tst.vivver.com/login"},
    {"id": "itacarambi-mg", "name": "Itacarambi - MG", "url": "http://www.itacarambi-mg.vivver.com/login"},
    {"id": "itamarandiba-mg", "name": "Itamarandiba - MG", "url": "https://itamarandiba-mg.vivver.com/login"},
    {"id": "itaudeminas-mg", "name": "Itaú de Minas - MG", "url": "http://www.itaudeminas-mg.vivver.com/login"},
    {"id": "itauna-mg", "name": "Itaúna - MG", "url": "http://www.itauna-mg.vivver.com/login"},
    {"id": "ituiutaba-mg", "name": "Ituiutaba - MG", "url": "https://www.ituiutaba-mg.vivver.com/login"},
    {"id": "jaboticabal-sp", "name": "Jaboticabal - SP", "url": "https://www.jaboticabal-sp.vivver.com/login"},
    {"id": "jacutinga-mg", "name": "Jacutinga - MG", "url": "http://www.jacutinga-mg.vivver.com/login"},
    {"id": "januaria-mg", "name": "Januária - MG", "url": "http://www.januaria-mg.vivver.com/login"},
    {"id": "jeceaba-mg", "name": "Jeceaba - MG", "url": "http://www.jeceaba-mg.vivver.com/login"},
    {"id": "jequie-ba", "name": "Jequié - BA", "url": "https://jequie-ba.vivver.com/login"},
    {"id": "joaomonlevade-mg", "name": "João Monlevade - MG", "url": "https://joaomonlevade-mg.vivver.com/login"},
    {"id": "joaopinheiro-mg", "name": "João Pinheiro - MG", "url": "http://www.joaopinheiro-mg.vivver.com/login"},
    {"id": "juizdefora-mg", "name": "Juiz de Fora - MG", "url": "https://juizdefora-mg.vivver.com/login"},
    {"id": "juizdefora-mg-tst", "name": "Juiz de Fora - MG[TST]", "url": "https://juizdefora-mg-tst.vivver.com/login"},
    {"id": "lagoadaprata-mg", "name": "Lagoa da Prata - MG", "url": "http://www.lagoadaprata-mg.vivver.com/login"},
    {"id": "limaduarte-mg", "name": "Lima Duarte - MG", "url": "http://www.limaduarte-mg.vivver.com/login"},
    {"id": "luz-mg", "name": "Luz - MG", "url": "http://www.luz-mg.vivver.com/login"},
    {"id": "macae-rj", "name": "Macaé - RJ", "url": "https://macae-rj.vivver.com/login"},
    {"id": "tv-3-macae-rj", "name": "TV-Macaé - RJ", "url": "https://tv-macae-rj.vivver.com"},
    {"id": "macae-rj-tst", "name": "Macaé - RJ[TST]", "url": "https://macae-rj-tst.vivver.com/login"},
    {"id": "machado-mg", "name": "Machado - MG", "url": "https://machado-mg.vivver.com/login"},
    {"id": "manhuacu-mg", "name": "Manhuaçu - MG", "url": "https://manhuacu-mg.vivver.com/login"},
    {"id": "mantena-mg", "name": "Mantena - MG", "url": "http://www.mantena-mg.vivver.com/login"},
    {"id": "mantena-mg-apae", "name": "Mantena - MG[APAE]", "url": "https://www.mantena-mg-apae.vivver.com/login"},
    {"id": "mariana-mg", "name": "Mariana - MG", "url": "https://mariana-mg.vivver.com/login"},
    {"id": "mariocampos-mg", "name": "Mário Campos - MG", "url": "http://mariocampos-mg.vivver.com/login"},
    {"id": "mateusleme-mg", "name": "Mateus Leme - MG", "url": "https://mateusleme-mg.vivver.com/login"},
    {"id": "matozinhos-mg", "name": "Matozinhos - MG", "url": "https://www.matozinhos-mg.vivver.com/login"},
    {"id": "mirabela-mg", "name": "Mirabela - MG", "url": "https://mirabela-mg.vivver.com/login"},
    {"id": "moema-mg", "name": "Moema - MG[CRESCER]", "url": "https://moema-mg.crescer.net/login"},
    {"id": "mogimirim-sp", "name": "Mogi Mirim - SP", "url": "http://www.mogimirim-sp.vivver.com/login"},
    {"id": "mogimirim-sp-tst", "name": "Mogi Mirim - SP[TST]", "url": "https://www.mogimirim-sp-tst.vivver.com/login"},
    {"id": "montesantodeminas-mg", "name": "Monte Santo de Minas - MG", "url": "http://www.montesantodeminas-mg.vivver.com/login"},
    {"id": "montesiao-mg", "name": "Monte Sião - MG", "url": "http://www.montesiao-mg.vivver.com/login"},
    {"id": "montesclaros-mg", "name": "Montes Claros - MG", "url": "https://www.montesclaros-mg.vivver.com/login"},
    {"id": "montesclaros-mg-tst", "name": "Montes Claros - MG[TST]", "url": "https://montesclaros-mg-tst.vivver.com/login"},
    {"id": "munhoz-mg", "name": "Munhoz - MG", "url": "http://www.munhoz-mg.vivver.com/login"},
    {"id": "muriae-mg", "name": "Muriaé - MG", "url": "https://www.muriae-mg.vivver.com/login"},
    {"id": "novalima-mg", "name": "Nova Lima - MG", "url": "https://www.novalima-mg.vivver.com/login"},
    {"id": "novalima-mg-tst", "name": "Nova Lima - MG[TST]", "url": "https://novalima-mg-tst.vivver.com/login"},
    {"id": "novaporteirinha-mg", "name": "Nova Porteirinha - MG", "url": "https://novaporteirinha-mg.vivver.com/login"},
    {"id": "novaserrana-mg", "name": "Nova Serrana - MG[CRESCER]", "url": "https://www.novaserrana-mg.crescer.net/login"},
    {"id": "novaserrana-mg-tst", "name": "Nova Serrana - MG[CRESCER][TST]", "url": "https://novaserrana-mg-tst.crescer.net/login"},
    {"id": "novocruzeiro-mg", "name": "Novo Cruzeiro - MG", "url": "http://www.novocruzeiro-mg.vivver.com/login"},
    {"id": "olaria-mg", "name": "Olaria - MG", "url": "https://olaria-mg.vivver.com/login"},
    {"id": "olhosdagua-mg", "name": "Olhos D'Água - MG", "url": "https://www.olhosdagua-mg.vivver.com/login"},
    {"id": "ourobranco-mg", "name": "Ouro Branco - MG", "url": "http://www.ourobranco-mg.vivver.com/login"},
    {"id": "ourobranco-mg-tst", "name": "Ouro Branco - MG[TST]", "url": "https://ourobranco-mg-tst.vivver.com/login"},
    {"id": "paraguacu-mg", "name": "Paraguaçu - MG", "url": "http://www.paraguacu-mg.vivver.com/login"},
    {"id": "passos-mg", "name": "Passos - MG", "url": "https://www.passos-mg.vivver.com/login"},
    {"id": "passos-mg-tst", "name": "Passos - MG[TST]", "url": "https://www.passos-mg-tst.vivver.com/login"},
    {"id": "patosdeminas-mg", "name": "Patos de Minas - MG", "url": "http://www.patosdeminas-mg.vivver.com/login"},
    {"id": "patosdeminas-mg-tst", "name": "Patos de Minas - MG[TST]", "url": "https://patosdeminas-mg-tst.vivver.com/login"},
    {"id": "pecanha-mg", "name": "Peçanha - MG", "url": "http://www.pecanha-mg.vivver.com/login"},
    {"id": "pirapora-mg", "name": "Pirapora - MG", "url": "https://www.pirapora-mg.vivver.com/login"},
    {"id": "piripiri-pi", "name": "Piripiri - PI[BIG DATA]", "url": "https://cuidarpi-piripiri.bigdatasys.net/login"},
    {"id": "pitangueiras-sp", "name": "Pitangueiras - SP", "url": "http://www.pitangueiras-sp.vivver.com/login"},
    {"id": "piumhi-mg", "name": "Piumhi - MG", "url": "http://www.piumhi-mg.vivver.com/login"},
    {"id": "pocofundo-mg", "name": "Poço Fundo - MG", "url": "http://www.pocofundo-mg.vivver.com/login"},
    {"id": "pompeu-mg", "name": "Pompéu - MG", "url": "http://www.pompeu-mg.vivver.com/login"},
    {"id": "pontodosvolantes-mg", "name": "Ponto dos Volantes - MG", "url": "http://www.pontodosvolantes-mg.vivver.com/login"},
    {"id": "pousoalegre-mg", "name": "Pouso Alegre - MG", "url": "http://www.pousoalegre-mg.vivver.com/login"},
    {"id": "projetocuidar", "name": "Projeto Cuidar[BIG DATA]", "url": "https://projetocuidar.vivver.com/login"},
    {"id": "riodoce-mg", "name": "Rio Doce - MG", "url": "http://www.riodoce-mg.vivver.com/login"},
    {"id": "riopardodeminas-mg", "name": "Rio Pardo de Minas - MG", "url": "http://www.riopardodeminas-mg.vivver.com/login"},
    {"id": "salinas-mg", "name": "Salinas - MG", "url": "https://www.salinas-mg.vivver.com/login"},
    {"id": "santabarbara-mg", "name": "Santa Bárbara - MG", "url": "https://www.santabarbara-mg.vivver.com/login"},
    {"id": "santoantoniodomonte-mg", "name": "Santo Antônio do Monte - MG", "url": "http://www.santoantoniodomonte-mg.vivver.com/login"},
    {"id": "saodomingosdoprata-mg", "name": "São Domingos do Prata - MG", "url": "https://saodomingosdoprata-mg.vivver.com/login"},
    {"id": "saogotardo-mg", "name": "São Gotardo - MG", "url": "https://saogotardo-mg.vivver.com/login"},
    {"id": "saojoaonepomuceno-mg", "name": "São João Nepomuceno - MG", "url": "http://www.saojoaonepomuceno-mg.vivver.com/login"},
    {"id": "saoluis-ma", "name": "São Luís - MA", "url": "https://saoluis-ma.vivver.com/login"},
    {"id": "tv-3-saoluis-ma", "name": "TV-São Luís - MA", "url": "https://tv-saoluis-ma.vivver.com"},
    {"id": "saoluis-ma-tst", "name": "São Luís - MA[TST]", "url": "https://saoluis-ma-tst.vivver.com/login"},
    {"id": "saomigueldoguama-pa", "name": "São Miguel do Guamá - PA[CRESCER]", "url": "https://saomigueldoguama-pa.crescer.net/login"},
    {"id": "saomigueldoguama-pa-tst", "name": "São Miguel do Guamá - PA[CRESCER][TST]", "url": "https://saomigueldoguama-pa-tst.crescer.net/login"},
    {"id": "saosebastiaodooeste-mg", "name": "São Sebastião do Oeste - MG", "url": "http://www.saosebastiaodooeste-mg.vivver.com/login"},
    {"id": "sarzedo-mg", "name": "Sarzedo - MG", "url": "http://www.sarzedo-mg.vivver.com/login"},
    {"id": "serrania-mg", "name": "Serrania - MG", "url": "http://www.serrania-mg.vivver.com/login"},
    {"id": "simaopereira-mg", "name": "Simão Pereira - MG", "url": "https://www.simaopereira-mg.vivver.com/login"},
    {"id": "sorocaba-sp", "name": "Sorocaba - SP", "url": "https://sorocaba-sp.vivver.com/login"},
    {"id": "sorocaba-sp-sisweb", "name": "Sorocaba - SP[SISWEB]", "url": "https://sisweb.sorocaba.sp.gov.br/login"},
    {"id": "tv-3-sorocaba-sp", "name": "TV-Sorocaba - SP", "url": "https://tv-sorocaba-sp.vivver.com"},
    {"id": "sorocaba-sp-tst", "name": "Sorocaba - SP[TST]", "url": "https://sorocaba-sp-tst.vivver.com/login"},
    {"id": "taiobeiras-mg", "name": "Taiobeiras - MG", "url": "https://www.taiobeiras-mg.vivver.com/login"},
    {"id": "trespontas-mg", "name": "Três Pontas - MG[CRESCER]", "url": "https://www.trespontas-mg.crescer.net/login"},
    {"id": "trespontas-mg-tst", "name": "Três Pontas - MG[TST]", "url": "https://trespontas-mg-tst.crescer.net/login"},
    {"id": "univale-mg", "name": "UNIVALE - MG", "url": "https://univale-mg.vivver.com/login"},
    {"id": "voltaredonda-rj", "name": "Volta Redonda - RJ", "url": "https://voltaredonda-rj.vivver.com/login"},
    {"id": "tv-3-voltaredonda-rj", "name": "TV-Volta Redonda - RJ", "url": "https://tv-voltaredonda-rj.vivver.com"},
    {"id": "voltaredonda-rj-tst", "name": "Volta Redonda - RJ[TST]", "url": "https://voltaredonda-rj-tst.vivver.com/login"},
    {"id": "apresentacao", "name": "Banco de Apresentação", "url": "https://www.apresentacao.vivver.com/login"},
    {"id": "apresentacao2", "name": "Banco de Apresentação [2]", "url": "https://apresentacao2.vivver.com/login"},
    {"id": "homologacao", "name": "Homologação", "url": "https://homologacao.vivver.com/login"},
    {"id": "tv-2", "name": "TV-2", "url": "https://tv2-fila.vivver.com"},
    {"id": "tv-3", "name": "TV-3", "url": "https://tv3-fila.vivver.com"},
    {"id": "tv-4", "name": "TV-4", "url": "https://tv4-fila.vivver.com"}
];

// Container da página
const container = document.getElementById("municipios");
const updateInfo = document.getElementById("update-info");
let resultados = [];
let todosMunicipios = [];

// Função para criar botão com link
function criarBotaoMunicipio(municipio, status, versao = null) {
  const button = document.createElement("button");
  button.className = `municipio-btn ${status ? 'ok' : 'erro'}`;
  
  let versaoHtml = '';
  if (versao) {
    versaoHtml = `<span class="municipio-version">${versao}</span>`;
  }
  
  button.innerHTML = `
    <span class="municipio-name">${municipio.name}</span>
    ${versaoHtml}
    <span class="municipio-status">${status ? 'Online' : 'Offline'}</span>
  `;
  
  button.onclick = () => {
    window.open(municipio.url, '_blank');
  };
  
  button.title = `${municipio.url} - ${status ? 'Acessível' : 'Inacessível'}${versao ? ` - Versão: ${versao}` : ''}`;
  
  return button;
}

// Função para extrair a versão do HTML
function extrairVersao(html) {
  try {
    // Criar um parser de HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Procurar o elemento que contém a versão
    const versaoElement = doc.querySelector('.vmx-login-versao');
    if (versaoElement) {
      // Extrair o texto e limpar
      const texto = versaoElement.textContent || '';
      const match = texto.match(/Versão:\s*(v[\d.]+)/i);
      if (match && match[1]) {
        return match[1];
      }
      
      // Tentativa alternativa se o padrão for diferente
      const versaoMatch = texto.match(/v[\d.]+/);
      if (versaoMatch) {
        return versaoMatch[0];
      }
    }
    
    // Tentar encontrar por outros padrões comuns
    const metaVersao = doc.querySelector('meta[name="version"], meta[name="versao"]');
    if (metaVersao) {
      return metaVersao.getAttribute('content');
    }
    
    return null;
  } catch (error) {
    console.error('Erro ao extrair versão:', error);
    return null;
  }
}

// Nova função de verificação mais robusta com busca de versão
async function verificarStatus(municipio) {
  let versao = null;
  
  try {
    // Tentativa 1: Usando fetch com modo 'cors' para obter HTML completo
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    
    try {
      const response = await fetch(municipio.url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-store',
        signal: controller.signal,
        headers: {
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      clearTimeout(timeoutId);
      
      // Verifica se a resposta é válida (status entre 200-399)
      if (response.status >= 200 && response.status < 400) {
        const html = await response.text();
        versao = extrairVersao(html);
        return { status: true, versao };
      }
      return { status: false, versao: null };
    } catch (fetchError) {
      clearTimeout(timeoutId);
      // Se falhar com CORS, tentar método alternativo
    }
    
    // Tentativa 2: Usando fetch com modo 'no-cors' mas verificando tipo de erro
    try {
      const controller2 = new AbortController();
      const timeoutId2 = setTimeout(() => controller2.abort(), 8000);
      
      const response = await fetch(municipio.url, {
        method: 'GET',
        mode: 'no-cors',
        cache: 'no-store',
        signal: controller2.signal
      });
      
      clearTimeout(timeoutId2);
      
      // No modo 'no-cors', não podemos ler a resposta, mas podemos tentar uma requisição separada para a versão
      // Tentar buscar apenas a versão com uma requisição específica
      try {
        const versaoResponse = await fetch(`${municipio.url}/api/version`, {
          method: 'GET',
          mode: 'no-cors',
          signal: AbortSignal.timeout(3000)
        }).catch(() => null);
        
        // Se não conseguir a versão por API, pelo menos sabemos que o site está online
        return { status: true, versao: null };
      } catch {
        return { status: true, versao: null };
      }
    } catch (noCorsError) {
      // Se falhar também com no-cors, provavelmente está offline
    }
    
    // Tentativa 3: Usando XMLHttpRequest (mais compatível)
    try {
      const resultado = await new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.timeout = 8000;
        
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 400) {
            const versao = extrairVersao(xhr.responseText);
            resolve({ status: true, versao });
          } else {
            resolve({ status: false, versao: null });
          }
        };
        
        xhr.onerror = () => resolve({ status: false, versao: null });
        xhr.ontimeout = () => resolve({ status: false, versao: null });
        
        xhr.open('GET', municipio.url);
        xhr.send();
      });
      
      return resultado;
    } catch (xhrError) {
      return { status: false, versao: null };
    }
    
  } catch (error) {
    console.error(`Erro ao verificar ${municipio.name}:`, error);
    return { status: false, versao: null };
  }
}

// Função para verificar status com múltiplas tentativas
async function verificarStatusComTentativas(municipio, tentativas = 2) {
  for (let i = 0; i < tentativas; i++) {
    const resultado = await verificarStatus(municipio);
    if (resultado.status) return resultado;
    
    // Aguardar um pouco antes de tentar novamente
    if (i < tentativas - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  return { status: false, versao: null };
}

// Atualizar painel
async function atualizarPainel() {
  console.log('Atualizando painel...');
  
  container.innerHTML = '<div class="loading">Carregando...</div>';
  
  // Verificar status de todos os municípios em paralelo, mas com limitação de concorrência
  const statusPromises = [];
  const concorrenciaMaxima = 5;
  
  for (let i = 0; i < municipios.length; i += concorrenciaMaxima) {
    const lote = municipios.slice(i, i + concorrenciaMaxima);
    const promisesLote = lote.map(async (municipio) => {
      const resultado = await verificarStatusComTentativas(municipio);
      return { municipio, status: resultado.status, versao: resultado.versao };
    });
    
    const resultadosLote = await Promise.allSettled(promisesLote);
    
    resultadosLote.forEach(resultado => {
      if (resultado.status === 'fulfilled') {
        statusPromises.push(resultado.value);
      } else {
        console.error('Erro ao verificar município:', resultado.reason);
        statusPromises.push({ 
          municipio: resultado.reason.municipio || {name: 'Desconhecido'}, 
          status: false,
          versao: null
        });
      }
    });
    
    // Atualizar interface parcialmente a cada lote
    resultados = [...statusPromises];
    todosMunicipios = [...resultados];
    resultados.sort((a, b) => a.status === b.status ? 0 : a.status ? 1 : -1);
    renderizarMunicipios();
    
    // Pequena pausa entre lotes para não sobrecarregar
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  atualizarInfoTempo();
}

// Renderizar municípios na tela
function renderizarMunicipios() {
  container.innerHTML = '';
  
  resultados.forEach(({ municipio, status, versao }) => {
    const botao = criarBotaoMunicipio(municipio, status, versao);
    container.appendChild(botao);
  });
}

// Filtrar municípios pela barra de pesquisa
function filtrarMunicipios() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  
  if (!searchTerm) {
    resultados = [...todosMunicipios];
  } else {
    resultados = todosMunicipios.filter(({ municipio }) => 
      municipio.name.toLowerCase().includes(searchTerm)
    );
  }
  
  // Reordenar após filtrar
  resultados.sort((a, b) => {
    if (a.status === b.status) return 0;
    return a.status ? 1 : -1;
  });
  
  renderizarMunicipios();
}

// Função para compartilhar link do painel
function compartilharPainel() {
  const link = window.location.href;
  navigator.clipboard.writeText(link)
    .then(() => {
      const feedback = document.getElementById('shareFeedback');
      feedback.textContent = '✓ Link copiado!';
      feedback.style.color = 'green';
      
      setTimeout(() => {
        feedback.textContent = '';
      }, 2000);
    })
    .catch(err => {
      console.error('Erro ao copiar link:', err);
      alert('Erro ao copiar link. Tente manualmente: ' + window.location.href);
    });
}

// Informação de atualização
function atualizarInfoTempo() {
  const agora = new Date();
  const proxima = new Date(agora.getTime() + 5 * 60 * 1000);
  
  updateInfo.innerHTML = `
    <div>Última atualização: <strong>${agora.toLocaleTimeString()}</strong></div>
    <div>Próxima atualização: <strong>${proxima.toLocaleTimeString()}</strong></div>
    <div>Atualização automática a cada 5 minutos</div>
  `;
}

// Inicializar e configurar intervalo
function iniciarPainel() {
  atualizarPainel();
  setInterval(atualizarPainel, 5 * 60 * 1000); // 5 minutos
  
  // Atualizar contador a cada minuto
  setInterval(atualizarInfoTempo, 60000);
}

// Iniciar quando carregar
document.addEventListener('DOMContentLoaded', iniciarPainel);

// Também iniciar se já estiver carregado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', iniciarPainel);
} else {
  iniciarPainel();
}

// Função para exportar lista de municípios e versões em TXT
function exportarMunicipios() {
  if (!todosMunicipios.length) {
    alert("Aguarde o carregamento do painel.");
    return;
  }

  let conteudo = "Lista de Municípios - " + new Date().toLocaleString() + "\n\n";
  todosMunicipios.forEach(({ municipio, versao }) => {
    conteudo += `${municipio.name}\n`;
    conteudo += `Versão: ${versao ? versao : "Não localizada"}\n\n`;
  });

  const blob = new Blob([conteudo], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "municipios.txt";
  link.click();
}
