/* =====================================================================
   SIOW ELETRO · script.js
   Tudo o que "se mexe" no site: matérias, agenda, playlist, menu e animações.

   PARTE 1 (logo abaixo): as LISTAS que você edita para atualizar o site.
   PARTE 2 (mais para baixo): o funcionamento. Não precisa mexer lá.

   Regras para editar as listas sem quebrar nada:
   - Cada item fica entre { e }, e os itens são separados por vírgula.
   - Textos ficam entre aspas simples: 'assim'. Se o texto tiver apóstrofo,
     escreva \' (ex.: 'Pingo d\'Água').
   - O último item da lista NÃO leva vírgula depois do }.
   ===================================================================== */


/* =====================================================================
   PARTE 1 · LISTAS PARA EDITAR
   ===================================================================== */

/* E-mail usado no botão "Copiar e-mail" (o e-mail que aparece na tela fica no index.html) */
var EMAIL='sioweletroslz@gmail.com';


/* ---------------------------------------------------------------------
   MATÉRIAS (seção "Em destaque")
   - A 1ª da lista vira o card GRANDE; da 2ª à 5ª, cards normais;
     6ª e 7ª, cards largos. Só as 7 primeiras aparecem.
   - Matéria nova: copie um bloco { ... }, cole NO TOPO da lista e preencha.
   - Para tirar uma matéria do site, basta apagar o bloco dela.

   Campos de cada matéria:
     id       -> nome curto, sem espaço nem acento (vira o link: site.com/#id)
     foto     -> arquivo da foto dentro da pasta img/
     etiqueta -> palavrinha da etiqueta (News, Line-up, Evento, Cena local...)
     data     -> data do post, ex.: '20 nov 2026'
     titulo   -> título da matéria
     resumo   -> (opcional) frase curta que aparece no card grande ou largo
     lineup   -> (opcional) lista de atrações, ex.: ['DJ 1','DJ 2']
     texto    -> parágrafos da matéria completa, um por aspas, separados por vírgula.
                 Escreva @perfil que vira link para o Instagram automaticamente.
     post     -> link do post original no Instagram
   --------------------------------------------------------------------- */
var MATERIAS=[
  {id:'sounds-slz-2k26',foto:'img/materia-sounds-slz.jpg',etiqueta:'News',data:'07 nov 2026',
   titulo:'Segunda edição da Sounds SLZ vem aí',
   resumo:'A 4Mãos anunciou a Sounds SLZ 2K26 para 7 de dezembro, no CH Eventos (antigo Terraço 77). A primeira edição, em 2025, levou Vintage Culture ao Valparaíso Adventure Park.',
   lineup:['Dubdogz','Syon Trio','Volkoder'],
   texto:['A @4maos anunciou a segunda edição da festa @soundslz, com data marcada para o dia 7 de dezembro.',
          'A primeira edição da Sounds SLZ aconteceu em 2025, no Valparaíso Adventure Park, trazendo grandes nomes como Vintage Culture, Vinter, Doozie e JØRD, além de Blemmes e Amanda Tavares.',
          'Atualização: o local foi confirmado — o CH Eventos (antigo Terraço 77). O line-up já conta com Dubdogz, Syon Trio e Volkoder.',
          'Vai ser babado, siooow. Partiu?'],
   post:'https://www.instagram.com/sioweletroslz/p/DfdQiqokS0r/'},
  {id:'black-box-9-anos',foto:'img/materia-black-box.jpg',etiqueta:'Evento',data:'17 nov 2026',
   titulo:'Black Box comemora 9 anos em Imperatriz',
   texto:['A @blackboxmsc anunciou a data da comemoração dos seus 9 anos: a celebração acontece no dia 12 de dezembro, em Imperatriz, com local ainda não divulgado.',
          'A Black Box também deixou pistas sobre o line-up, que vai contar com uma atração internacional da Colômbia, dois artistas inéditos, duas estreias e uma curadoria que promete ser imperdível.',
          'Bora descer pra baixada, siow?'],
   post:'https://www.instagram.com/sioweletroslz/p/Df3P_Q-GKcp/'},
  {id:'anna-sands-of-kismet',foto:'img/materia-anna-sands-of-kismet.jpg',etiqueta:'Line-up',data:'10 nov 2026',
   titulo:'Anna vem para a Sands of Kismet, em Tutóia',
   texto:['O @reveillon.duna, em parceria com a festa @sandsofkismet, confirmou a @djannaofficial como uma das atrações da programação.',
          'A DJ Anna se apresenta no dia 28 de dezembro, durante a Sands of Kismet, na Villa Cocar, em Tutóia (MA), na região dos Lençóis Maranhenses.',
          'Atração do ano, siow? Bora descer pros Lençóis, mermã!'],
   post:'https://www.instagram.com/sioweletroslz/p/DfkItPZkcnU/'},
  {id:'syon-trio-sounds-slz',foto:'img/materia-syon-trio.jpg',etiqueta:'Line-up',data:'09 nov 2026',
   titulo:'Syon Trio confirmado na Sounds SLZ',
   texto:['A @4maos confirmou o @syontrio como a segunda atração da Sounds SLZ 2K26, marcada para o dia 7 de dezembro.',
          'O trio é natural de Caxias do Sul (RS) e é formado por Henrique, Gabriel e Liruan. Eles ganharam projeção entre 2020 e 2021 com vídeos no TikTok.',
          'Hoje o trio comanda o Baile da Syon, sua festa autoral, e recentemente integrou a programação do GP de São Paulo de F1.',
          'Funk e eletrônica? Tô dentro, siooow!'],
   post:'https://www.instagram.com/sioweletroslz/p/DfhottSEflA/'},
  {id:'yokai-5-anos',foto:'img/materia-yokai-5-anos.jpg',etiqueta:'Cena local',data:'25 out 2026',
   titulo:'Yokai comemora 5 anos com a Momentum Sakura',
   texto:['A @yokaislzcrew comemorou cinco anos no dia 31 de outubro, com uma edição especial batizada de “Momentum Sakura”, no Sítio da Raposa.',
          'O line-up trouxe três atrações inéditas: Overtoni, Overleads e Neurosynthesis. Completaram a programação os DJs Critical Nitio, Yudi, Maoru, Luctroon, Iuri Lobão (Lycantropia) e Midriase Dark.',
          'Som noturno cantando alto na ilha, siow!'],
   post:'https://www.instagram.com/sioweletroslz/p/De6-3JxkeAu/'},
  {id:'giu-eternity-2k26',foto:'img/materia-giu-eternity.jpg',etiqueta:'Line-up',data:'27 out 2026',
   titulo:'GIU está de volta: confirmada na E.T.E.R.N.I.T.Y 2K26',
   resumo:'A Braba Prod confirmou o retorno de GIU para 5 de dezembro, no Palazzo Eventos, ao lado de Bruno Be.',
   texto:['Ela voltou, siow! A @brabaprod_ confirmou o grande retorno de GIU à festa E.T.E.R.N.I.T.Y. O evento está marcado para o dia 5 de dezembro, no Palazzo Eventos.',
          'Em 2026, GIU teve lançamentos pela prestigiada HUB Records, além de fazer um B2B ao lado de Carola no Rock in Rio 2026, reforçando sua força e seu legado para a cena feminina eletrônica no Brasil.',
          'Vem te embora, GIU, a gente tava com saudade!'],
   post:'https://www.instagram.com/sioweletroslz/p/DfBDxeNEY6S/'},
  {id:'reveillon-duna',foto:'img/materia-reveillon-duna.jpg',etiqueta:'Réveillon',data:'12 out 2026',
   titulo:'Réveillon Duna vai agitar Tutóia',
   resumo:'De 27 de dezembro a 1º de janeiro, na Villa Cocar, nos Lençóis Maranhenses, com Curol e Mose.',
   texto:['O @reveillon.duna acontece entre os dias 27 de dezembro de 2026 e 1º de janeiro de 2027, na Villa Cocar, no Arpoador, em Tutóia, na região dos Lençóis Maranhenses.',
          'A curadoria fica por conta da @aldeiazencamp e da @f3entretenimento, trazendo duas grandes atrações: a incrível Curol e o americano Mose.',
          'Eletrônica e Lençóis: combinação dos sonhos, siow. Bora?'],
   post:'https://www.instagram.com/sioweletroslz/p/DeaXnx7EcNb/'}
];

/* ---------------------------------------------------------------------
   AGENDA (calendário + lista de eventos)
   - A ordem não importa: o site organiza por data sozinho.
   - Eventos que já passaram somem sozinhos do site.

   Campos de cada evento:
     data   -> 'ANO-MÊS-DIA', ex.: '2026-12-05'
     tipo   -> 'festa' (bolinha verde) ou 'after' (bolinha branca)
     nome   -> nome do evento
     local  -> local · cidade
     prod   -> produtora
     lineup -> atrações, ex.: ['DJ 1','DJ 2'] (use ['A anunciar'] se não tiver)
     extra  -> (opcional) informação curta ao lado da etiqueta, ex.: '27/12 a 01/01'
     link   -> perfil da festa no Instagram (abre no botão "Detalhes")
   --------------------------------------------------------------------- */
var EVENTOS=[
  {data:'2026-11-22',tipo:'festa',nome:'Esquenta Luau',local:'Sunset Sport Club, Jardim São Cristóvão · São Luís',prod:'O Jordan Salva · JE Prods',lineup:['A anunciar'],extra:'4 copões = Luau Sunrise free',link:'https://www.instagram.com/ojordansalva/'},
  {data:'2026-11-28',tipo:'festa',nome:'Luau Sunrise',local:'Guarapiranguinha',prod:'JE Prods · O Jordan Salva',lineup:['Igor Coelho'],extra:'Ingresso + translado',link:'https://www.instagram.com/ojordansalva/'},
  {data:'2026-11-28',tipo:'festa',nome:'Low Profile',local:'O Tucano · São Luís',prod:'Saint Louis',lineup:['A anunciar'],link:'https://www.instagram.com/saintlouislz/'},
  {data:'2026-12-12',tipo:'festa',nome:'Olympus',local:'Red Club · São Luís',prod:'RD Produções · YN Produções',lineup:['A anunciar'],link:'https://www.instagram.com/redclub_hall/'},
  {data:'2026-12-04',tipo:'festa',nome:'Prévia Eternity',local:'Tucano Gastrobar · São Luís',prod:'Braba Prod · Detroit Vibes',lineup:['Pittelli','Mais nomes em breve'],extra:'Só convidados',link:'https://www.instagram.com/brabaprod_/'},
  {data:'2026-12-05',tipo:'festa',nome:'E.T.E.R.N.I.T.Y 2K26',local:'Palazzo Eventos · São Luís',prod:'Braba Prod',lineup:['GIU','Bruno Be'],link:'https://www.instagram.com/brabaprod_/'},
  {data:'2026-12-06',tipo:'after',nome:'After Eternity',local:'Área externa do Palazzo Eventos · São Luís',prod:'Braba Prod',lineup:['A anunciar'],extra:'A partir das 7h',link:'https://www.instagram.com/brabaprod_/'},
  {data:'2026-12-07',tipo:'festa',nome:'Sounds SLZ 2K26',local:'CH Eventos (antigo Terraço 77) · São Luís',prod:'4Mãos',lineup:['Dubdogz','Syon Trio','Volkoder'],link:'https://www.instagram.com/soundslz/'},
  {data:'2026-12-12',tipo:'festa',nome:'Black Box 9 anos',local:'Local a divulgar · Imperatriz',prod:'Black Box',lineup:['Atração internacional (Colômbia)','A anunciar'],link:'https://www.instagram.com/blackboxmsc/'},
  {data:'2026-12-27',tipo:'festa',nome:'Réveillon Duna',local:'Villa Cocar, Arpoador · Tutóia',prod:'Aldeia Zen Camp · F3',lineup:['Curol','Mose'],extra:'27/12 a 01/01',link:'https://www.instagram.com/reveillon.duna/'},
  {data:'2026-12-28',tipo:'festa',nome:'Sands of Kismet',local:'Villa Cocar · Tutóia',prod:'Réveillon Duna',lineup:['Anna'],link:'https://www.instagram.com/sandsofkismet/'}
];

/* ---------------------------------------------------------------------
   PLAYLIST (DJs de São Luís)
   - A primeira da lista é a que aparece em "Tocando agora".

   Campos de cada faixa:
     dj     -> nome do DJ
     titulo -> nome do set/faixa
     genero -> estilo (House, Techno, Psytrance...)
     dur    -> duração, ex.: '1:17:25'
     capa   -> capa do set dentro da pasta img/
     link   -> endereço da faixa no SoundCloud (sem o "?si=..." do final)
     embed  -> só coloque embed:false se o DJ não liberou o player fora
               do SoundCloud (aí o play abre o SoundCloud em vez de tocar aqui)
   --------------------------------------------------------------------- */
var FAIXAS=[
  {dj:'VIKKO',titulo:'Together Festival · Closing Set',genero:'House · Tech House',dur:'1:17:25',capa:'img/dj-vikko.jpg',
   link:'https://soundcloud.com/vikkomusic/vikko-together-festival'},
  {dj:'Pittelli',titulo:'Vai Toma (c/ MC Pikachu e MC Fioti)',genero:'Tech House · Funk',dur:'4:32',capa:'img/dj-pittelli.jpg',
   link:'https://soundcloud.com/pittelli-459345863/mc-pikachu-mc-fioti-pittelli',embed:false},
  {dj:'DJMX',titulo:'Ignition · Techno Set',genero:'Techno',dur:'1:00:19',capa:'img/dj-djmx.jpg',
   link:'https://soundcloud.com/djmx-769156247/djmx-ignition-techno-set'},
  {dj:'Blémmes',titulo:'D-Edge São Paulo · Warm Up Set',genero:'House · Deep House',dur:'1:44:35',capa:'img/dj-blemmes.jpg',
   link:'https://soundcloud.com/blemmes1/ble-mmes-d-edge-sa-o-paulo'},
  {dj:'Ytan',titulo:'Live at Crema Club · São Paulo',genero:'Live Set',dur:'1:54:46',capa:'img/dj-ytan.jpg',
   link:'https://soundcloud.com/ytanmusic/ytan-live-at-crema-club-sao'},
  {dj:'SouL Rider',titulo:'Set After Continuum',genero:'Psytrance',dur:'1:08:15',capa:'img/dj-soul-rider.jpg',
   link:'https://soundcloud.com/clinton-0601/set-after-continuum'}
];


/* =====================================================================
   PARTE 2 · FUNCIONAMENTO (não precisa mexer aqui para atualizar o site)
   ===================================================================== */


/* ---------------------------------------------------------------------
   TELA DE CARREGAMENTO: some depois que a página carrega
   --------------------------------------------------------------------- */
window.addEventListener('load', function(){                        // espera a página carregar por completo
  setTimeout(function(){                                           // dá um tempo para a animação da logo
    document.getElementById('loader').classList.add('out');        // a "cortina" preta sobe
    document.body.classList.remove('loading');                     // libera a rolagem da página
    setTimeout(function(){ document.body.classList.add('ready'); }, 450); // dispara a animação da frase gigante
  }, 2400);                                                        // 2400 = 2,4 segundos de tela de carregamento
});


/* ---------------------------------------------------------------------
   MENU: abre e fecha a tela cheia do MENU
   --------------------------------------------------------------------- */
(function(){
  var m=document.getElementById('menu'),                           // a tela do menu
      b=document.getElementById('menuBtn'),                        // botão MENU do topo
      c=document.getElementById('menuClose');                      // botão X dentro do menu
  function set(o){                                                 // o = true abre, false fecha
    m.classList.toggle('open',o);                                  // mostra/esconde o menu (animação no CSS)
    m.setAttribute('aria-hidden',!o);                              // avisa leitores de tela se está visível
    b.setAttribute('aria-expanded',o);                             // avisa se o menu está aberto
  }
  b.addEventListener('click',function(){set(true)});               // clicou em MENU: abre
  c.addEventListener('click',function(){set(false)});              // clicou no X: fecha
  m.querySelectorAll('a').forEach(function(a){                     // em cada link do menu...
    a.addEventListener('click',function(){set(false)});            // ...fecha o menu ao clicar
  });
})();


/* ---------------------------------------------------------------------
   MATÉRIAS: monta os cards e abre a matéria completa na própria página
   --------------------------------------------------------------------- */
(function(){
  var bento=document.getElementById('bento'),                      // área da grade de matérias
      modal=document.getElementById('mat'),                        // janela da matéria completa
      ultimoFoco=null;                                             // guarda onde a pessoa estava para voltar ao fechar

  /* protege o texto para não quebrar o HTML (troca < > & " por códigos seguros) */
  function esc(t){return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  /* transforma cada @perfil do texto em link para o Instagram */
  function perfis(t){return esc(t).replace(/@([A-Za-z0-9_.]*[A-Za-z0-9_])/g,'<a href="https://www.instagram.com/$1/" target="_blank" rel="noopener">@$1</a>');}
  /* tira o ano da data nos cards pequenos ("07 nov 2026" vira "07 nov") */
  function dataCurta(d){return d.replace(/\s\d{4}$/,'');}

  /* monta o HTML de um card. i = posição na lista */
  function card(m,i){
    var tipo=i===0?'big':(i>=5?'wide':'');                         // 1ª = grande, 6ª e 7ª = largas, resto = normal
    var foto='<div class="thumb"><img src="'+m.foto+'" alt="'+esc(m.titulo)+'" loading="lazy" width="560" height="700"></div>'; // foto do card
    var top='<div class="top"><span class="chip'+(i===0?' lime':'')+'">'+esc(m.etiqueta)+'</span>'+   // etiqueta (verde no destaque)
            '<span class="mono">'+esc(i===0?m.data:dataCurta(m.data))+'</span></div>';               // data
    var ler='<span class="go">LER MATÉRIA &rarr;</span>';          // chamada no pé do card
    var abre='<a class="card news '+tipo+' reveal-up" href="#'+m.id+'" data-id="'+m.id+'">';          // o card inteiro é clicável

    if(i===0) return abre+foto+top+                                // CARD GRANDE: foto, etiqueta, título, resumo e line-up
      '<div class="txt-pad"><div><h3>'+esc(m.titulo)+'</h3>'+
      (m.resumo?'<p style="margin-top:16px">'+esc(m.resumo)+'</p>':'')+'</div>'+
      (m.lineup?'<div><span class="mono" style="display:block;margin-bottom:10px">Line-up confirmado</span><div class="lineup">'+
        m.lineup.map(function(n){return '<span class="chip">'+esc(n)+'</span>'}).join('')+'</div></div>':'')+
      ler+'</div></a>';

    if(tipo==='wide') return abre+foto+                            // CARD LARGO: foto à esquerda, textos à direita
      '<div class="txt">'+top+'<div><h3>'+esc(m.titulo)+'</h3>'+
      (m.resumo?'<p style="margin-top:10px">'+esc(m.resumo)+'</p>':'')+'</div>'+ler+'</div></a>';

    return abre+foto+top+'<h3>'+esc(m.titulo)+'</h3>'+ler+'</a>';  // CARD NORMAL: foto, etiqueta e título
  }

  bento.innerHTML=MATERIAS.slice(0,7).map(card).join('');          // coloca as 7 primeiras matérias da lista na grade

  /* abre a janela com a matéria completa */
  function abrir(id){
    var m=MATERIAS.filter(function(x){return x.id===id})[0];       // procura a matéria pelo id
    if(!m) return;                                                 // se não achou, não faz nada
    ultimoFoco=document.activeElement;                             // lembra o card clicado
    document.getElementById('matFoto').src=m.foto;                 // foto
    document.getElementById('matFoto').alt=m.titulo;               // descrição da foto
    document.getElementById('matTag').textContent=m.etiqueta;      // etiqueta
    document.getElementById('matData').textContent=m.data;         // data
    document.getElementById('matTit').textContent=m.titulo;        // título
    document.getElementById('matTexto').innerHTML=                 // parágrafos do texto (com @ virando link)...
      m.texto.map(function(p){return '<p>'+perfis(p)+'</p>'}).join('')+
      (m.lineup?'<div class="lineup">'+m.lineup.map(function(n){return '<span class="chip">'+esc(n)+'</span>'}).join('')+'</div>':''); // ...e o line-up, se tiver
    document.getElementById('matPost').href=m.post;                // botão "Ver post no Instagram"
    modal.classList.add('open');                                   // mostra a janela
    modal.setAttribute('aria-hidden','false');                     // avisa leitores de tela
    document.body.style.overflow='hidden';                         // trava a rolagem da página por trás
    document.getElementById('matFechar').focus({preventScroll:true}); // coloca o foco no X (acessibilidade)
    modal.querySelector('.mat-scroll').scrollTop=0;                // começa o texto do topo
    modal.querySelector('.mat-box').scrollTop=0;                   // (no celular) começa da foto
  }

  /* fecha a janela */
  function fechar(){
    if(!modal.classList.contains('open')) return;                  // já está fechada? não faz nada
    modal.classList.remove('open');                                // esconde a janela
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow='';                               // libera a rolagem de novo
    if(location.hash){                                             // limpa o #endereco-da-materia da barra
      try{history.replaceState(null,'',location.pathname+location.search)}catch(e){location.hash=''}
    }
    if(ultimoFoco) ultimoFoco.focus();                             // volta o foco para o card
  }

  bento.addEventListener('click',function(e){                      // clique em qualquer card da grade
    var a=e.target.closest('a[data-id]'); if(!a) return;           // descobre qual card foi
    e.preventDefault();                                            // não pula a página
    try{history.replaceState(null,'','#'+a.dataset.id)}catch(err){} // põe o endereço da matéria na barra (para compartilhar)
    abrir(a.dataset.id);                                           // abre a matéria
  });
  document.getElementById('matFechar').addEventListener('click',fechar);          // clique no X fecha
  modal.addEventListener('click',function(e){if(e.target===modal)fechar();});    // clique fora da janela fecha
  document.addEventListener('keydown',function(e){if(e.key==='Escape')fechar();}); // tecla Esc fecha

  /* se alguém abrir o site com o link de uma matéria (ex.: site.com/#black-box-9-anos), ela já abre */
  function pelaUrl(){
    var id=location.hash.slice(1);                                 // pega o que vem depois do #
    if(id&&MATERIAS.some(function(x){return x.id===id})) abrir(id); // se for uma matéria, abre
  }
  window.addEventListener('hashchange',pelaUrl);                   // vale também se o # mudar depois
  pelaUrl();                                                       // confere ao carregar a página
})();


/* ---------------------------------------------------------------------
   AGENDA: monta o calendário e a lista de eventos
   --------------------------------------------------------------------- */
(function(){
  var MESES=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']; // nomes dos meses
  var CURTO=['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];                                       // meses abreviados
  var hoje=new Date(); hoje.setHours(0,0,0,0);                     // data de hoje (sem horas)
  var filtro='todos', sel=null;                                    // filtro ativo e dia clicado no calendário

  function d(s){var p=s.split('-');return new Date(+p[0],p[1]-1,+p[2]);}  // transforma '2026-12-05' em data
  function key(dt){return dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0')+'-'+String(dt.getDate()).padStart(2,'0');} // e o contrário

  /* eventos que aparecem: só de hoje em diante, do filtro escolhido, em ordem de data */
  function visiveis(){
    return EVENTOS
      .filter(function(e){return d(e.data)>=hoje&&(filtro==='todos'||e.tipo===filtro)}) // eventos passados somem sozinhos
      .sort(function(a,b){return a.data<b.data?-1:1});             // mais próximo primeiro
  }

  var prox=visiveis()[0];                                          // próximo evento
  var mes=prox?d(prox.data):new Date(hoje);                        // o calendário abre no mês do próximo evento
  mes=new Date(mes.getFullYear(),mes.getMonth(),1);                // (sempre no dia 1 do mês)
  var grid=document.getElementById('calGrid'),                     // grade de dias
      lbl=document.getElementById('monthLabel'),                   // nome do mês
      list=document.getElementById('evList');                      // lista de eventos

  /* desenha o calendário do mês */
  function renderCal(){
    lbl.textContent=MESES[mes.getMonth()]+' '+mes.getFullYear();   // ex.: "dezembro 2026"
    var porDia={};                                                 // agrupa os eventos por dia
    visiveis().forEach(function(e){(porDia[e.data]=porDia[e.data]||[]).push(e)});
    var html=['D','S','T','Q','Q','S','S'].map(function(x){return '<div class="dow">'+x+'</div>'}).join(''); // cabeçalho dos dias da semana
    var ini=new Date(mes); ini.setDate(1-mes.getDay());            // começa no domingo da 1ª semana
    for(var i=0;i<42;i++){                                         // 6 semanas x 7 dias = 42 quadradinhos
      var dt=new Date(ini); dt.setDate(ini.getDate()+i);           // data deste quadradinho
      var k=key(dt), evs=porDia[k];                                // eventos neste dia (se houver)
      var cls='day'+(dt.getMonth()!==mes.getMonth()?' muted':'')   // dia de outro mês: apagado
                   +(dt.getTime()===hoje.getTime()?' today':'')    // hoje: contorno
                   +(evs?' has':'')                                // tem evento: destacado
                   +(sel===k?' sel':'');                           // selecionado: verde
      var dots=evs?'<span class="dots">'+evs.map(function(e){return '<i class="'+(e.tipo==='after'?'after':'')+'"></i>'}).join('')+'</span>':''; // bolinhas (verde festa / branca after)
      var lab=evs?' aria-label="'+dt.getDate()+' de '+MESES[dt.getMonth()]+': '+evs.map(function(e){return e.nome}).join(', ')+'"':''; // texto para leitores de tela
      html+= evs?'<button type="button" class="'+cls+'" data-k="'+k+'"'+lab+(sel===k?' aria-pressed="true"':'')+'>'+dt.getDate()+dots+'</button>' // dia com evento = botão
                :'<div class="'+cls+'">'+dt.getDate()+'</div>';    // dia sem evento = só número
    }
    grid.innerHTML=html;                                           // coloca tudo na tela
    grid.querySelectorAll('button.day').forEach(function(b){       // clique num dia com evento...
      b.addEventListener('click',function(){sel=(sel===b.dataset.k?null:b.dataset.k);render();}); // ...filtra a lista (clicar de novo desfaz)
    });
  }

  /* monta a lista de eventos ao lado */
  function renderList(){
    var evs=visiveis();                                            // eventos do filtro
    if(sel) evs=evs.filter(function(e){return e.data===sel});      // se clicou num dia, só os daquele dia
    if(!evs.length){                                               // nenhum evento? mostra aviso
      list.innerHTML='<div class="card empty"><b>'+(filtro==='after'?'Nenhum after anunciado ainda.':'Nenhum evento neste filtro.')+'</b><br>Assim que sair data nova, ela aparece aqui. Fica de olho no @sioweletroslz.</div>';
      return;
    }
    list.innerHTML=evs.map(function(e){                            // um card por evento:
      var dt=d(e.data);
      return '<article class="card ev">'+
        '<div class="date"><b>'+String(dt.getDate()).padStart(2,'0')+'</b><span>'+CURTO[dt.getMonth()]+'</span></div>'+          // dia e mês
        '<div><span class="chip'+(e.tipo==='after'?'':' lime')+'">'+(e.tipo==='after'?'After':'Festa')+'</span>'+                 // etiqueta Festa/After
        (e.extra?' <span class="mono">'+e.extra+'</span>':'')+                                                                      // informação extra
        '<h4>'+e.nome+'</h4><div class="meta">'+e.local+' · '+e.prod+'</div>'+                                                     // nome, local e produtora
        '<div class="who">'+e.lineup.map(function(n){return '<span class="chip">'+n+'</span>'}).join('')+'</div></div>'+            // line-up
        '<a class="btn icon cta" href="'+e.link+'" target="_blank" rel="noopener" title="Abrir o perfil da festa no Instagram">Detalhes &#8599;</a>'+ // botão para o perfil da festa
        '</article>';
    }).join('');
  }

  function render(){renderCal();renderList();}                     // redesenha calendário + lista
  document.getElementById('prevM').addEventListener('click',function(){mes.setMonth(mes.getMonth()-1);render();}); // seta ‹ volta um mês
  document.getElementById('nextM').addEventListener('click',function(){mes.setMonth(mes.getMonth()+1);render();}); // seta › avança um mês
  document.querySelectorAll('.filters button').forEach(function(b){ // botões Todos / Festas / Afters
    b.addEventListener('click',function(){
      filtro=b.dataset.f; sel=null;                                // troca o filtro e limpa o dia selecionado
      document.querySelectorAll('.filters button').forEach(function(x){x.setAttribute('aria-pressed',x===b)}); // pinta o botão ativo
      render();
    });
  });
  render();                                                        // desenha pela primeira vez
})();


/* ---------------------------------------------------------------------
   PLAYLIST: lista de faixas + player do SoundCloud
   --------------------------------------------------------------------- */
(function(){
  var box=document.getElementById('tracks'),                       // lista de faixas (direita)
      card=document.getElementById('nowCard'),                     // card "Tocando agora"
      btn=document.getElementById('playBtn'),                      // botão redondo de play
      ic=document.getElementById('playIcon'),                      // ícone ▶ / ❚❚
      ext=document.getElementById('nowLink'),                      // link "Ouvir no SoundCloud"
      capa=document.getElementById('nowCapa');                     // capa do set atual
  var atual=0, tocando=false, widget=null, carregada=-1;           // faixa atual, se está tocando, player e faixa já carregada

  function esc(t){return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;');} // protege o texto

  /* desenha a lista de faixas */
  function draw(){
    box.innerHTML=FAIXAS.map(function(f,i){
      return '<button type="button" class="track'+(i===atual?' on':'')+'" data-i="'+i+'"'+(i===atual?' aria-current="true"':'')+'>'+ // destaca a faixa atual
        '<span class="n">'+String(i+1).padStart(2,'0')+'</span>'+                               // número 01, 02...
        '<img class="tcapa" src="'+f.capa+'" alt="" width="44" height="44" loading="lazy">'+    // capinha
        '<span><b>'+esc(f.titulo)+'</b><small>'+esc(f.dj)+' · '+esc(f.genero)+'</small></span>'+ // nome do set, DJ e gênero
        '<span class="mono">'+f.dur+'</span></button>';                                          // duração
    }).join('');
    box.querySelectorAll('.track').forEach(function(t){            // clique numa faixa: toca ela
      t.addEventListener('click',function(){escolher(+t.dataset.i,true);});
    });
  }

  /* atualiza o card "Tocando agora" */
  function update(){
    var f=FAIXAS[atual];
    document.getElementById('nowTitle').textContent=f.titulo;      // nome do set
    document.getElementById('nowWho').textContent=f.dj+' · '+f.genero; // DJ · gênero
    capa.src=f.capa; capa.alt='Capa: '+f.titulo;                   // capa
    ext.href=f.link;                                               // link do SoundCloud
    card.classList.toggle('playing',tocando);                      // liga/desliga o equalizador animado
    btn.setAttribute('aria-label',tocando?'Pausar':'Tocar');
    ic.innerHTML=tocando?'<path d="M6 4h4v16H6zM14 4h4v16h-4z" fill="currentColor"/>'  // ícone de pause
                        :'<path d="M7 4l13 8-13 8z" fill="currentColor"/>';            // ícone de play
    draw();                                                        // redesenha a lista
  }

  /* dá para tocar dentro do site? (player carregou e o DJ liberou) */
  function podeTocar(f){return widget && f.embed!==false;}

  /* escolhe uma faixa (e toca, se play=true) */
  function escolher(i,play){
    atual=i; var f=FAIXAS[i];
    if(!play){update();return;}                                    // só seleciona
    if(!podeTocar(f)){                                             // não dá para tocar aqui:
      if(widget) widget.pause();                                   //   pausa o que estiver tocando
      tocando=false; update();
      ext.click();                                                 //   e abre a faixa no SoundCloud
      return;
    }
    if(carregada!==i){                                             // faixa nova: carrega no player
      carregada=i;
      widget.load(f.link,{auto_play:true,color:'#c8e62e',show_artwork:false});
    } else widget.play();                                          // mesma faixa: só continua
    tocando=true; update();
  }

  btn.addEventListener('click',function(){                         // botão redondo:
    if(tocando&&widget){widget.pause();tocando=false;update();return;} // se está tocando, pausa
    escolher(atual,true);                                          // se não, toca a faixa atual
  });

  /* carrega o player oficial do SoundCloud em segundo plano */
  var sc=document.createElement('script');
  sc.src='https://w.soundcloud.com/player/api.js';                 // API do SoundCloud
  sc.onload=function(){                                            // quando carregar:
    try{
      var fr=document.createElement('iframe');                     // cria o player invisível
      fr.id='scFrame'; fr.allow='autoplay'; fr.title='Player SoundCloud'; fr.setAttribute('aria-hidden','true');
      fr.style.cssText='position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;border:0'; // fica escondido; o visual é o nosso
      var primeira=FAIXAS.filter(function(f){return f.embed!==false})[0]||FAIXAS[0]; // primeira faixa liberada
      fr.src='https://w.soundcloud.com/player/?url='+encodeURIComponent(primeira.link)+'&auto_play=false';
      card.appendChild(fr); carregada=FAIXAS.indexOf(primeira);
      widget=SC.Widget(fr);                                        // controle do player
      widget.bind(SC.Widget.Events.PLAY,function(){tocando=true;update();});    // começou a tocar
      widget.bind(SC.Widget.Events.PAUSE,function(){tocando=false;update();});  // pausou
      widget.bind(SC.Widget.Events.FINISH,function(){              // acabou a faixa: passa para a próxima
        var p=(atual+1)%FAIXAS.length;
        if(FAIXAS[p].embed===false){tocando=false;atual=p;update();} // próxima não é liberada: só seleciona
        else escolher(p,true);                                     // próxima liberada: toca
      });
    }catch(e){widget=null;}                                        // se der erro, o play abre o SoundCloud
  };
  document.head.appendChild(sc);                                   // começa a carregar a API
  update();                                                        // mostra a primeira faixa
})();


/* ---------------------------------------------------------------------
   CONTATO: botão "Copiar e-mail"
   --------------------------------------------------------------------- */
(function(){
  var b=document.getElementById('copiarEmail'); if(!b) return;     // botão "Copiar e-mail"
  b.addEventListener('click',function(){
    function ok(){                                                 // deu certo:
      b.textContent='E-mail copiado!';                             //   avisa no botão
      setTimeout(function(){b.textContent='Copiar e-mail'},2000);  //   e volta ao texto normal em 2 s
    }
    try{
      navigator.clipboard.writeText(EMAIL).then(ok,function(){b.textContent=EMAIL}); // copia; se o navegador não deixar, mostra o e-mail
    }catch(e){b.textContent=EMAIL;}
  });
})();


/* ---------------------------------------------------------------------
   ANIMAÇÃO AO ROLAR: blocos surgem subindo quando aparecem na tela
   --------------------------------------------------------------------- */
(function(){
  var els=document.querySelectorAll('.reveal-up');                 // todos os blocos animados
  if(!('IntersectionObserver' in window)){                         // navegador antigo:
    els.forEach(function(e){e.classList.add('in')}); return;       //   mostra tudo direto
  }
  var io=new IntersectionObserver(function(en){                    // observa quando entram na tela
    en.forEach(function(x){
      if(x.isIntersecting){x.target.classList.add('in'); io.unobserve(x.target);} // apareceu: anima uma vez só
    });
  },{threshold:.12});                                              // dispara com 12% do bloco visível
  els.forEach(function(e){io.observe(e)});
})();


/* ---------------------------------------------------------------------
   FUNDO ANIMADO DA ABERTURA: festa open air à noite
   (palco, lasers verde-limão, estrelas, coqueiros e público dançando no ritmo)
   --------------------------------------------------------------------- */
(function(){
  var cv=document.getElementById('party'), ctx=cv.getContext('2d'); // área de desenho
  var W=0,H=0,DPR=Math.min(window.devicePixelRatio||1,1.5);        // largura, altura e nitidez da tela
  var LIME='200,230,46', WHITE='255,255,255';                      // cores em RGB (verde da marca e branco)
  var BPM=126;                                                     // batidas por minuto: ritmo das luzes e do público
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches; // pessoa pediu menos animação?
  var crowd=[], stars=[], palms=[];                                // público, estrelas e coqueiros
  function rnd(a,b){return a+Math.random()*(b-a)}                  // número aleatório entre a e b

  /* monta a cena (roda de novo quando a janela muda de tamanho) */
  function build(){
    W=cv.clientWidth; H=cv.clientHeight;                           // tamanho atual da tela
    cv.width=W*DPR; cv.height=H*DPR; ctx.setTransform(DPR,0,0,DPR,0,0); // ajusta a nitidez
    stars=[]; for(var i=0;i<90;i++) stars.push({x:rnd(0,W),y:rnd(0,H*.45),r:rnd(.4,1.3),p:rnd(0,6)}); // 90 estrelas no céu
    var ph=Math.min(H*.42,W*.5);                                   // altura base dos coqueiros
    palms=[{x:W*.05,h:ph,lean:-.12},{x:W*.12,h:ph*.8,lean:.08},    // 2 coqueiros à esquerda
           {x:W*.91,h:ph*.95,lean:.12},{x:W*.98,h:ph*.72,lean:-.06}]; // 2 à direita
    crowd=[];
    var rows=[{y:.84,s:.7,gap:24},{y:.91,s:.95,gap:32},{y:.99,s:1.25,gap:46}]; // 3 fileiras de público (do fundo para a frente)
    rows.forEach(function(r,ri){
      for(var x=-20;x<W+40;x+=r.gap*rnd(.7,1.25)){                 // espalha pessoas pela largura
        crowd.push({x:x,y:H*r.y+rnd(-6,6),
          s:r.s*Math.max(.7,Math.min(1.4,W/1200))*rnd(.85,1.15),   // tamanho da pessoa
          arms:Math.random()<.45?(Math.random()<.5?2:1):0,         // 0, 1 ou 2 braços para cima
          ph:rnd(0,1),                                             // cada um dança num tempo levemente diferente
          row:ri,
          phone:ri===2&&Math.random()<.12});                       // alguns na frente filmando com o celular
      }
    });
  }

  /* desenha um coqueiro balançando */
  function palm(p,t){
    var sway=Math.sin(t*.6+p.x)*.03;                               // balanço do vento
    ctx.save(); ctx.translate(p.x,H); ctx.strokeStyle='#020203'; ctx.fillStyle='#020203';
    ctx.lineWidth=Math.max(5,W*.006); ctx.lineCap='round';
    var tx=p.h*(p.lean+sway), ty=-p.h;                             // ponta do tronco
    ctx.beginPath(); ctx.moveTo(0,0); ctx.quadraticCurveTo(tx*.2,ty*.5,tx,ty); ctx.stroke(); // tronco curvado
    for(var k=0;k<7;k++){                                          // 7 folhas
      var a=-Math.PI/2+(k-3)*.5+sway*3, L=p.h*.32;
      ctx.lineWidth=Math.max(2,W*.0025);
      ctx.beginPath(); ctx.moveTo(tx,ty);
      ctx.quadraticCurveTo(tx+Math.cos(a)*L*.6,ty+Math.sin(a)*L*.6-L*.15,tx+Math.cos(a)*L,ty+Math.sin(a)*L+L*.35); // folha caída
      ctx.stroke();
    }
    ctx.restore();
  }

  /* desenha uma pessoa do público (silhueta) */
  function person(c,t,pulse){
    var bob=Math.sin((t*BPM/60+c.ph)*Math.PI*2)*3*c.s;             // sobe e desce no ritmo
    var x=c.x, y=c.y+bob, s=c.s;
    ctx.fillStyle='#000'; ctx.strokeStyle='#000';
    ctx.beginPath(); ctx.arc(x,y-40*s,9*s,0,Math.PI*2); ctx.fill(); // cabeça
    ctx.beginPath(); ctx.moveTo(x-17*s,y-22*s); ctx.quadraticCurveTo(x,y-34*s,x+17*s,y-22*s); // ombros
    ctx.lineTo(x+20*s,H); ctx.lineTo(x-20*s,H); ctx.closePath(); ctx.fill(); // corpo até o chão
    if(c.arms){                                                    // braços levantados
      ctx.lineWidth=5.5*s; ctx.lineCap='round';
      var wave=Math.sin((t*BPM/60+c.ph)*Math.PI*2)*6*s;            // braço balança no ritmo
      ctx.beginPath(); ctx.moveTo(x+14*s,y-26*s); ctx.lineTo(x+22*s+wave,y-62*s); ctx.lineTo(x+20*s+wave,y-84*s); ctx.stroke(); // braço direito
      if(c.arms===2){ctx.beginPath(); ctx.moveTo(x-14*s,y-26*s); ctx.lineTo(x-22*s-wave,y-62*s); ctx.lineTo(x-20*s-wave,y-84*s); ctx.stroke();} // braço esquerdo
      if(c.phone){ctx.fillStyle='rgba('+WHITE+','+(.55+.4*pulse)+')'; ctx.fillRect(x+16*s+wave,y-96*s,8*s,12*s);} // tela do celular acesa
    }
  }

  /* desenha um quadro da animação (repete ~60 vezes por segundo) */
  function frame(ms){
    var t=ms/1000,                                                 // tempo em segundos
        beat=(t*BPM/60)%1,                                         // posição dentro da batida (0 a 1)
        pulse=Math.exp(-beat*7),                                   // "pancada" forte no começo de cada batida
        bar=Math.floor(t*BPM/60/4)%4;                              // compasso atual (muda o desenho dos lasers)

    ctx.globalCompositeOperation='source-over';
    var sky=ctx.createLinearGradient(0,0,0,H);                     // céu noturno em degradê
    sky.addColorStop(0,'#03040a'); sky.addColorStop(.7,'#0a0d12'); sky.addColorStop(1,'#11140c');
    ctx.fillStyle=sky; ctx.fillRect(0,0,W,H);
    stars.forEach(function(s){                                     // estrelas piscando
      ctx.fillStyle='rgba(255,255,255,'+(.25+.25*Math.sin(t*1.5+s.p))+')';
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,7); ctx.fill();
    });

    var sx=W/2, sy=H*.76;                                          // centro do palco
    ctx.globalCompositeOperation='lighter';                        // luzes somam brilho

    // névoa verde do palco, mais forte a cada batida
    var haze=ctx.createRadialGradient(sx,sy,10,sx,sy,Math.max(W,H)*.6);
    haze.addColorStop(0,'rgba('+LIME+','+(.18+.22*pulse)+')'); haze.addColorStop(.35,'rgba('+LIME+','+(.05+.05*pulse)+')'); haze.addColorStop(1,'rgba(0,0,0,0)');
    ctx.fillStyle=haze; ctx.fillRect(0,0,W,H);

    // 4 canhões de luz branca varrendo o céu
    for(var i=0;i<4;i++){
      var ox=sx+(i-1.5)*W*.12, a=-Math.PI/2+Math.sin(t*.7+i*1.7)*.55, len=H*1.1, wd=.09;
      var g=ctx.createLinearGradient(ox,sy,ox+Math.cos(a)*len,sy+Math.sin(a)*len);
      g.addColorStop(0,'rgba('+WHITE+','+(.16+.1*pulse)+')'); g.addColorStop(1,'rgba(255,255,255,0)');
      ctx.fillStyle=g; ctx.beginPath(); ctx.moveTo(ox,sy);
      ctx.lineTo(ox+Math.cos(a-wd)*len,sy+Math.sin(a-wd)*len); ctx.lineTo(ox+Math.cos(a+wd)*len,sy+Math.sin(a+wd)*len); ctx.fill();
    }

    // lasers verdes em leque (quantidade e abertura mudam a cada compasso)
    var n=bar%2?14:9, spread=bar>1?1.5:1.05, sweep=Math.sin(t*.9)*.5;
    ctx.lineWidth=1.6; ctx.shadowColor='rgba('+LIME+',1)'; ctx.shadowBlur=12; // brilho em volta do laser
    for(var j=0;j<n;j++){
      var aa=-Math.PI/2+sweep+(j/(n-1)-.5)*spread, L=Math.max(W,H)*1.3;
      ctx.strokeStyle='rgba('+LIME+','+(.35+.55*pulse)+')';
      ctx.beginPath(); ctx.moveTo(sx,sy-H*.04); ctx.lineTo(sx+Math.cos(aa)*L,sy-H*.04+Math.sin(aa)*L); ctx.stroke();
    }
    ctx.shadowBlur=0;

    // flash de strobo no primeiro tempo de cada compasso
    if(beat<.06 && Math.floor(t*BPM/60)%4===0){ctx.fillStyle='rgba(255,255,255,.12)'; ctx.fillRect(0,0,W,H);}

    ctx.globalCompositeOperation='source-over';
    // estrutura do palco (treliça)
    var sw=Math.min(W*.5,620), th=H*.2;                            // largura e altura do palco
    ctx.strokeStyle='#050506'; ctx.lineWidth=4;
    ctx.beginPath(); ctx.moveTo(sx-sw/2,sy); ctx.lineTo(sx-sw/2,sy-th); ctx.lineTo(sx+sw/2,sy-th); ctx.lineTo(sx+sw/2,sy); ctx.stroke(); // pórtico
    ctx.lineWidth=1.5; for(var q=0;q<10;q++){var qx=sx-sw/2+sw*q/10; ctx.beginPath(); ctx.moveTo(qx,sy-th); ctx.lineTo(qx+sw/20,sy-th+8); ctx.lineTo(qx+sw/10,sy-th); ctx.stroke();} // zigue-zague da treliça
    ctx.fillStyle='rgba('+LIME+','+(.45+.55*pulse)+')'; for(var q2=0;q2<6;q2++){ctx.beginPath(); ctx.arc(sx-sw/2+sw*(q2+.5)/6,sy-th+12,3,0,7); ctx.fill();} // 6 refletores piscando
    ctx.fillStyle='#030304'; ctx.fillRect(sx-sw*.16,sy-H*.045,sw*.32,H*.1);          // mesa do DJ
    ctx.fillStyle='rgba('+LIME+','+(.5+.5*pulse)+')'; ctx.fillRect(sx-sw*.16,sy-H*.045,sw*.32,2); // luz verde da mesa
    palms.forEach(function(p){palm(p,t)});                         // coqueiros
    crowd.forEach(function(c){person(c,t,pulse)});                 // público por cima de tudo

    if(!reduce) requestAnimationFrame(frame);                      // pede o próximo quadro (se a animação estiver liberada)
  }

  build();                                                         // monta a cena
  window.addEventListener('resize',build);                         // remonta ao girar o celular / redimensionar
  requestAnimationFrame(frame);                                    // começa a animação
})();
