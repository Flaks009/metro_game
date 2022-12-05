stations = {
    "aacd_servidor":["aacd servidor"],
    "adolfo_pinheiro":["adolfo pinheiro"],
    "alto_da_boa_vista":["alto da boa vista"],
    "alto_do_ipiranga":["alto do ipiranga"],
    "ana_rosa":["ana rosa"],
    "anhangabau":["anhangabau"],
    "armenia":["armenia"],
    "artur_alvim":["artur alvim"],
    "belem":["belem"],
    "borba_gato":["borba gato"],
    "bras":["bras"],
    "bresser_mooca":["bresser mooca"],
    "brigadeiro":["brigadeiro"],
    "brooklin":["brooklin"],
    "butanta":["butanta"],
    "camilo_haddad":["camilo haddad"],
    "campo_belo":["campo belo"],
    "campo_limpo":["campo limpo"],
    "capao_redondo":["capao redondo"],
    "carandiru":["carandiru"],
    "carrao":["carrao"],
    "chacara_klabin":["chacara klabin"],
    "clinicas":["clinicas"],
    "conceicao":["conceicao"],
    "consolacao":["consolacao"],
    "eucaliptos":["eucaliptos"],
    "faria_lima":["faria lima"],
    "fazenda_da_juta":["fazenda da juta"],
    "fradique_coutinho":["fradique coutinho"],
    "giovanni_gronchi":["giovanni gronchi"],
    "guilhermina_esperanca":["guilhermina esperanca"],
    "higienopolis_mackenzie":["higienopolis mackenzie"],
    "hospital_sao_paulo":["hospital sao paulo"],
    "jabaquara":["jabaquara"],
    "japao_liberdade":["japao liberdade"],
    "jardim_colonial":["jardim colonial", "jd colonial"],
    "jardim_planalto":["jardim planalto", "jd planalto"],
    "jardim_sao_paulo_ayrton_senna":["jardim sao paulo ayrton senna", "jd sao paulo ayrton senna", "jd sao paulo"],
    "largo_treze":["largo treze"],
    "luz":["luz"],
    "marechal_deodoro":["marechal deodoro"],
    "moema":["moema"],
    "oratorio":["oratorio"],
    "oscar_freire":["oscar freire"],
    "palmeiras_barra_funda":["palmeiras barra funda"],
    "parada_inglesa":["parada inglesa"],
    "patriarca_vila_re":["patriarca vila re"],
    "paulista":["paulista"],
    "pedro_ii":["pedro ii"],
    "penha":["penha"],
    "pinheiros":["pinheiros"],
    "portuguesa_tiete":["portuguesa tiete"],
    "praca_da_arvore":["praca da arvore"],
    "republica":["republica"],
    "sacoma":["sacoma"],
    "santa_cecilia":["santa cecilia"],
    "santa_cruz":["santa cruz"],
    "santana":["santana"],
    "santo_amaro":["santo amaro"],
    "santos_imigrantes":["santos imigrantes"],
    "sao_bento":["sao bento"],
    "sao_joaquim":["sao joaquim"],
    "sao_judas":["sao judas"],
    "sao_lucas":["sao lucas"],
    "sao_mateus":["sao mateus"],
    "sao_paulo_morumbi":["sao paulo morumbi"],
    "sapopemba":["sapopemba"],
    "saude":["saude"],
    "se":["se"],
    "sumare":["sumare"],
    "tamanduatei":["tamanduatei"],
    "tatuape":["tatuape"],
    "tiradentes":["tiradentes"],
    "trianon_masp":["trianon masp"],
    "tucuruvi":["tucuruvi"],
    "vergueiro":["vergueiro"],
    "vila_das_belezas":["vila das belezas"],
    "vila_madalena":["vila madalena"],
    "vila_mariana":["vila mariana"],
    "vila_matilde":["vila matilde"],
    "vila_prudente":["vila prudente"],
    "vila_sonia":["vila sonia"],
    "vila_tolstoi":["vila tolstoi"],
    "vila_uniao":["vila uniao"]
}

function getAbbreviation(guess_string){

}

var input = document.getElementById('station');
input.addEventListener('input', searchValues);

function searchValues(e) {
    let guess_string = e.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    guess_string = guess_string.replace(regex, "").replace(/\s{2,}/g," ");;
    guess_string = guess_string.trim();
    console.log(guess_string);

    for (const [key, value] of Object.entries(stations)) {
        if (value.includes(guess_string)) {
            let station = document.getElementById(key);
            station.style.display="Block";
            input.value = "";
        }
    }
}

