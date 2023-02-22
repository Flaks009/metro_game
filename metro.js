const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
var mode = params.mode;
var stations = {
    "aacd_servidor": [
        "aacd servidor"
    ],
    "adolfo_pinheiro": [
        "adolfo pinheiro"
    ],
    "aeroporto_guarulhos": [
        "aeroporto guarulhos"
    ],
    "agua_branca": [
        "agua branca"
    ],
    "alto_da_boa_vista": [
        "alto da boa vista"
    ],
    "alto_do_ipiranga": [
        "alto do ipiranga"
    ],
    "amador_bueno": [
        "amador bueno"
    ],
    "ana_rosa": [
        "ana rosa"
    ],
    "anhangabau": [
        "anhangabau"
    ],
    "antonio_gianetti_neto": [
        "antonio gianetti neto"
    ],
    "antonio_joao": [
        "antonio joao"
    ],
    "aracare": [
        "aracare"
    ],
    "armenia": [
        "armenia"
    ],
    "artur_alvim": [
        "artur alvim"
    ],
    "autodromo": [
        "autodromo"
    ],
    "baltazar_fidelis": [
        "baltazar fidelis"
    ],
    "barueri": [
        "barueri"
    ],
    "belem": [
        "belem"
    ],
    "berrini": [
        "berrini"
    ],
    "borba_gato": [
        "borba gato"
    ],
    "botujuru": [
        "botujuru"
    ],
    "bras": [
        "bras"
    ],
    "braz_cubas": [
        "braz cubas"
    ],
    "bresser_mooca": [
        "bresser mooca",
        "bresser"
    ],
    "brigadeiro": [
        "brigadeiro"
    ],
    "brooklin": [
        "brooklin"
    ],
    "butanta": [
        "butanta"
    ],
    "caieiras": [
        "caieiras"
    ],
    "calmon_viana": [
        "calmon viana"
    ],
    "camilo_haddad": [
        "camilo haddad"
    ],
    "campo_belo": [
        "campo belo"
    ],
    "campo_limpo": [
        "campo limpo"
    ],
    "campo_limpo_paulista": [
        "campo limpo paulista"
    ],
    "capao_redondo": [
        "capao redondo"
    ],
    "capuava": [
        "capuava"
    ],
    "carandiru": [
        "carandiru"
    ],
    "carapicuiba": [
        "carapicuiba"
    ],
    "carrao": [
        "carrao"
    ],
    "ceasa": [
        "ceasa"
    ],
    "chacara_klabin": [
        "chacara klabin"
    ],
    "cidade_jardim": [
        "cidade jardim"
    ],
    "cidade_universitaria": [
        "cidade universitaria"
    ],
    "clinicas": [
        "clinicas"
    ],
    "comandante_sampaio": [
        "comandante sampaio",
        "com sampaio"
    ],
    "comendador_ermelino": [
        "comendador ermelino",
        "com ermelino"
    ],
    "conceicao": [
        "conceicao"
    ],
    "consolacao": [
        "consolacao"
    ],
    "corinthians_itaquera": [
        "corinthians itaquera"
    ],
    "dom_bosco": [
        "dom bosco"
    ],
    "domingos_de_moraes": [
        "domingos de moraes"
    ],
    "engenheiro_cardoso": [
        "engenheiro cardoso",
        "eng cardoso"
    ],
    "engenheiro_goulart": [
        "engenheiro goulart",
        "eng goulart"
    ],
    "engenheiro_manoel_feio": [
        "engenheiro manoel feio",
        "eng manoel feio"
    ],
    "estudantes": [
        "estudantes"
    ],
    "eucaliptos": [
        "eucaliptos"
    ],
    "faria_lima": [
        "faria lima"
    ],
    "fazenda_da_juta": [
        "fazenda da juta"
    ],
    "ferraz_de_vasconcelos": [
        "ferraz de vasconcelos"
    ],
    "fradique_coutinho": [
        "fradique coutinho"
    ],
    "francisco_morato": [
        "francisco morato"
    ],
    "franco_da_rocha": [
        "franco da rocha"
    ],
    "general_miguel_costa": [
        "general miguel costa",
        "gen miguel costa"
    ],
    "giovanni_gronchi": [
        "giovanni gronchi"
    ],
    "grajau": [
        "grajau"
    ],
    "granja_julieta": [
        "granja julieta"
    ],
    "guaianases": [
        "guaianases"
    ],
    "guapituba": [
        "guapituba"
    ],
    "guarulhos_cecap": [
        "guarulhos cecap"
    ],
    "guilhermina_esperanca": [
        "guilhermina esperanca"
    ],
    "hebraica_reboucas": [
        "hebraica reboucas"
    ],
    "higienopolis_mackenzie": [
        "higienopolis mackenzie"
    ],
    "hospital_sao_paulo": [
        "hospital sao paulo"
    ],
    "imperatriza_leopoldina": [
        "imperatriza leopoldina"
    ],
    "ipiranga": [
        "ipiranga"
    ],
    "itaim_paulista": [
        "itaim paulista"
    ],
    "itapevi": [
        "itapevi"
    ],
    "itaquaquecetuba": [
        "itaquaquecetuba"
    ],
    "jabaquara": [
        "jabaquara"
    ],
    "jandira": [
        "jandira"
    ],
    "japao_liberdade": [
        "japao liberdade",
        "liberdade"
    ],
    "jaragua": [
        "jaragua"
    ],
    "jardim_belval": [
        "jardim belval",
        "jd belval"
    ],
    "jardim_colonial": [
        "jardim colonial",
        "jd colonial"
    ],
    "jardim_helena_vila_mara": [
        "jardim helena vila mara",
        "jd helena vila mara",
        "jd helena",
        "jardim helena"
    ],
    "jardim_planalto": [
        "jardim planalto",
        "jd planalto"
    ],
    "jardim_romano": [
        "jardim romano",
        "jd romano"
    ],
    "jardim_sao_paulo_ayrton_senna": [
        "jardim sao paulo ayrton senna",
        "jd sao paulo ayrton senna",
        "jd sao paulo"
    ],
    "jardim_silveira": [
        "jardim silveira",
        "jd silveira"
    ],
    "joao_dias": [
        "joao dias"
    ],
    "jose_bonifacio": [
        "jose bonifacio"
    ],
    "julio_prestes": [
        "julio prestes"
    ],
    "jundiai": [
        "jundiai"
    ],
    "jundiapeba": [
        "jundiapeba"
    ],
    "jurubatuba": [
        "jurubatuba"
    ],
    "juventus": [
        "juventus"
    ],
    "juventus_mooca": [
        "juventus mooca"
    ],
    "lapa": [
        "lapa"
    ],
    "lapa_2": [
        "lapa"
    ],
    "largo_treze": [
        "largo treze",
        "lgo treze"
    ],
    "luz": [
        "luz"
    ],
    "marechal_deodoro": [
        "marechal deodoro",
        "mal deodoro"
    ],
    "maua": [
        "maua"
    ],
    "moema": [
        "moema"
    ],
    "mogi_das_cruzes": [
        "mogi das cruzes"
    ],
    "morumbi": [
        "morumbi"
    ],
    "oratorio": [
        "oratorio"
    ],
    "osasco": [
        "osasco"
    ],
    "oscar_freire": [
        "oscar freire"
    ],
    "palmeiras_barra_funda": [
        "palmeiras barra funda",
        "barra funda"
    ],
    "parada_inglesa": [
        "parada inglesa"
    ],
    "paraiso": [
        "paraiso"
    ],
    "patriarca_vila_re": [
        "patriarca vila re",
        "patriarca"
    ],
    "paulista": [
        "paulista"
    ],
    "pedro_ii": [
        "pedro ii"
    ],
    "penha": [
        "penha"
    ],
    "perus": [
        "perus"
    ],
    "pinheiros": [
        "pinheiros"
    ],
    "piqueri": [
        "piqueri"
    ],
    "pirituba": [
        "pirituba"
    ],
    "poa": [
        "poa"
    ],
    "portuguesa_tiete": [
        "portuguesa tiete",
        "tiete"
    ],
    "praca_da_arvore": [
        "praca da arvore"
    ],
    "prefeito_saladino": [
        "prefeito saladino",
        "pref saladino"
    ],
    "presidente_altino": [
        "presidente altino",
        "pres altino"
    ],
    "primavera_interlagos": [
        "primavera interlagos"
    ],
    "quitauna": [
        "quitauna"
    ],
    "republica": [
        "republica"
    ],
    "ribeirao_pires": [
        "ribeirao pires"
    ],
    "rio_grande_da_serra": [
        "rio grande da serra"
    ],
    "sacoma": [
        "sacoma"
    ],
    "sagrado_coracao": [
        "sagrado coracao"
    ],
    "santa_cecilia": [
        "santa cecilia"
    ],
    "santa_cruz": [
        "santa cruz"
    ],
    "santa_rita": [
        "santa rita",
        "sta rita"
    ],
    "santa_terezinha": [
        "santa terezinha",
        "sta terezinha"
    ],
    "santana": [
        "santana"
    ],
    "santo_amaro": [
        "santo amaro"
    ],
    "santo_andre": [
        "santo andre"
    ],
    "santos_imigrantes": [
        "santos imigrantes",
        "imigrantes"
    ],
    "sao_bento": [
        "sao bento"
    ],
    "sao_caetano_do_sul": [
        "sao caetano do sul",
        "sao caetano"
    ],
    "sao_joaquim": [
        "sao joaquim"
    ],
    "sao_judas": [
        "sao judas"
    ],
    "sao_lucas": [
        "sao lucas"
    ],
    "sao_mateus": [
        "sao mateus"
    ],
    "sao_miguel_paulista": [
        "sao miguel paulista"
    ],
    "sao_paulo_morumbi": [
        "sao paulo morumbi"
    ],
    "sapopemba": [
        "sapopemba"
    ],
    "saude": [
        "saude"
    ],
    "se": [
        "se"
    ],
    "socorro": [
        "socorro"
    ],
    "sumare": [
        "sumare"
    ],
    "suzano": [
        "suzano"
    ],
    "tamanduatei": [
        "tamanduatei"
    ],
    "tatuape": [
        "tatuape"
    ],
    "tiradentes": [
        "tiradentes"
    ],
    "trianon_masp": [
        "trianon masp"
    ],
    "tucuruvi": [
        "tucuruvi"
    ],
    "usp_leste": [
        "usp leste"
    ],
    "utinga": [
        "utinga"
    ],
    "varzea_paulista": [
        "varzea paulista"
    ],
    "vergueiro": [
        "vergueiro"
    ],
    "vila_aurora": [
        "vila aurora"
    ],
    "vila_clarice": [
        "vila clarice"
    ],
    "vila_das_belezas": [
        "vila das belezas"
    ],
    "vila_madalena": [
        "vila madalena"
    ],
    "vila_mariana": [
        "vila mariana"
    ],
    "vila_matilde": [
        "vila matilde"
    ],
    "mendes_vila_natal": [
        "mendes vila natal"
    ],
    "vila_olimpia": [
        "vila olimpia"
    ],
    "vila_prudente": [
        "vila prudente"
    ],
    "vila_sonia": [
        "vila sonia"
    ],
    "vila_tolstoi": [
        "vila tolstoi"
    ],
    "vila_uniao": [
        "vila uniao"
    ],
    "villa_lobos_jaguare": [
        "villa lobos jaguare"
    ]
};
var stations_category = {
    "cptm": [
      "aeroporto_guarulhos",
      "agua_branca",
      "amador_bueno",
      "antonio_gianetti_neto",
      "antonio_joao",
      "aracare",
      "autodromo",
      "baltazar_fidelis",
      "barueri",
      "berrini",
      "botujuru",
      "braz_cubas",
      "caieiras",
      "calmon_viana",
      "campo_limpo_paulista",
      "capuava",
      "carapicuiba",
      "ceasa",
      "cidade_jardim",
      "cidade_universitaria",
      "comandante_sampaio",
      "comendador_ermelino",
      "corinthians_itaquera",
      "dom_bosco",
      "domingos_de_moraes",
      "engenheiro_cardoso",
      "engenheiro_goulart",
      "engenheiro_manoel_feio",
      "estudantes",
      "ferraz_de_vasconcelos",
      "francisco_morato",
      "franco_da_rocha",
      "general_miguel_costa",
      "grajau",
      "granja_julieta",
      "guaianases",
      "guapituba",
      "guarulhos_cecap",
      "hebraica_reboucas",
      "imperatriza_leopoldina",
      "ipiranga",
      "itaim_paulista",
      "itapevi",
      "itaquaquecetuba",
      "jandira",
      "jaragua",
      "jardim_belval",
      "jardim_helena_vila_mara",
      "jardim_romano",
      "jardim_silveira",
      "joao_dias",
      "jose_bonifacio",
      "julio_prestes",
      "jundiai",
      "jundiapeba",
      "jurubatuba",
      "juventus",
      "juventus_mooca",
      "lapa",
      "lapa_2",
      "maua",
      "mogi_das_cruzes",
      "morumbi",
      "osasco",
      "paraiso",
      "perus",
      "piqueri",
      "pirituba",
      "poa",
      "prefeito_saladino",
      "presidente_altino",
      "primavera_interlagos",
      "quitauna",
      "ribeirao_pires",
      "rio_grande_da_serra",
      "sagrado_coracao",
      "santa_rita",
      "santa_terezinha",
      "santo_andre",
      "sao_caetano_do_sul",
      "sao_miguel_paulista",
      "socorro",
      "suzano",
      "usp_leste",
      "utinga",
      "varzea_paulista",
      "vila_aurora",
      "vila_clarice",
      "mendes_vila_natal",
      "vila_olimpia",
      "villa_lobos_jaguare"
    ],
    "metro": [
        "aacd_servidor",
        "adolfo_pinheiro",
        "alto_da_boa_vista",
        "alto_do_ipiranga",
        "ana_rosa",
        "anhangabau",
        "armenia",
        "artur_alvim",
        "belem",
        "borba_gato",
        "bras",
        "bresser_mooca",
        "brigadeiro",
        "brooklin",
        "butanta",
        "camilo_haddad",
        "campo_belo",
        "campo_limpo",
        "capao_redondo",
        "carandiru",
        "carrao",
        "chacara_klabin",
        "clinicas",
        "conceicao",
        "consolacao",
        "eucaliptos",
        "faria_lima",
        "fazenda_da_juta",
        "fradique_coutinho",
        "giovanni_gronchi",
        "guilhermina_esperanca",
        "higienopolis_mackenzie",
        "hospital_sao_paulo",
        "jabaquara",
        "japao_liberdade",
        "jardim_colonial",
        "jardim_planalto",
        "jardim_sao_paulo_ayrton_senna",
        "largo_treze",
        "luz",
        "marechal_deodoro",
        "moema",
        "oratorio",
        "oscar_freire",
        "palmeiras_barra_funda",
        "parada_inglesa",
        "patriarca_vila_re",
        "paulista",
        "pedro_ii",
        "penha",
        "pinheiros",
        "portuguesa_tiete",
        "praca_da_arvore",
        "republica",
        "sacoma",
        "santa_cecilia",
        "santa_cruz",
        "santana",
        "santo_amaro",
        "santos_imigrantes",
        "sao_bento",
        "sao_joaquim",
        "sao_judas",
        "sao_lucas",
        "sao_mateus",
        "sao_paulo_morumbi",
        "sapopemba",
        "saude",
        "se",
        "sumare",
        "tamanduatei",
        "tatuape",
        "tiradentes",
        "trianon_masp",
        "tucuruvi",
        "vergueiro",
        "vila_das_belezas",
        "vila_madalena",
        "vila_mariana",
        "vila_matilde",
        "vila_prudente",
        "vila_sonia",
        "vila_tolstoi",
        "vila_uniao"
      ]
};
var stations_discovered = [];

active_mode(mode);
timer(300);

var input = document.getElementById('station');
input.addEventListener('input', searchValues);

function timer(seconds){
    
    var countdown = setInterval(function() {
      var timer = document.getElementById("timer");
      if (seconds <= 0) {
        clearInterval(countdown);
        alert(`Tempo Esgotado! Score: ${stations_discovered.length}`);
        input.disabled = true;
      } else {
        var minutes = Math.floor(seconds / 60 % 60);
        var seconds_t= Math.floor(seconds % 60);
        timer.innerHTML = "Tempo restante: " + minutes + " minutos e " + seconds_t + " segundos.";
        seconds--;
      }
    }, 1000); // Atualiza a cada segundo
}

function active_mode(mode){
  
  var cptm_group = document.querySelector("*[id='CPTM']");
  var linha_8 = document.querySelector("*[id='Linha8']");     
  var linha_12 = document.querySelector("*[id='Linha12']");
  var linha_13 = document.querySelector("*[id='Linha13']");
  var linha_10 = document.querySelector("*[id='Linha10']");
  var linha_7 = document.querySelector("*[id='Linha7']");
  var linha_11 = document.querySelector("*[id='Linha11']");
  var linha_9 = document.querySelector("*[id='Linha9']");

  if (mode == "CPTM") {
      cptm_group.style.display="Block";
      linha_8.style.display="Block";
      linha_12.style.display="Block";
      linha_13.style.display="Block";
      linha_10.style.display="Block";
      linha_7.style.display="Block";
      linha_11.style.display="Block";
      linha_9.style.display="Block";
  } else {
      cptm_group.style.display="None";
      linha_8.style.display="None";
      linha_12.style.display="None";
      linha_13.style.display="None";
      linha_10.style.display="None";
      linha_7.style.display="None";
      linha_11.style.display="None";
      linha_9.style.display="None";
  }
}

function searchValues(e) {
  let guess_string = e.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  guess_string = guess_string.replace(regex, "").replace(/\s{2,}/g," ");;
  guess_string = guess_string.trim();

  for (const [key, value] of Object.entries(stations)) {
      if (value.includes(guess_string)) {
          let station = document.getElementById(key);
          station.style.display="Block";
          input.value = "";
          correct_guess(key, stations_discovered, mode);
      }
  }
}

function correct_guess(correct_guess, stations_discovered, mode){

    if (stations_discovered.includes(correct_guess)){
        console.log("Already added.");
    }
    else{
        if (mode == "CPTM"){
            stations_discovered.push(correct_guess);
        }
        else{
            if (stations_category["metro"].includes(correct_guess)){
                stations_discovered.push(correct_guess);
            }
        }
    }
}