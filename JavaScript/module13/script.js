// const str = 'Card Name : Lucas Caamaño Viale\n' +
//     'Card Number : 4906962001841822\n' +
//     'Expiration : 02/2020\n' +
//     'CVV / CVC : 288\n' +
//     '.++===========================++.\n' +
//     'BIN : 490696 - VISA - CREDIT - CLASSIC\n' +
//     'BANK : CITIBANK\n' +
//     '.++===========================++.\n' +
//     '.++=======[ Address & Info ]=======++.\n' +
//     'Full Name : Lucas Caamaño Viale\n' +
//     'Address 1 : Juan Maria Gutierrez 27153 2 piso\n' +
//     'Address 2 :\n' +
//     'Full Addr :\n' +
//     'Phone Number :\n' +
//     'Zip/Postcode : 1425\n' +
//     'Country : Argentina\n' +
//     'City : Buenos Aires\n' +
//     'State/pro/re : Capital Federal\n' +
//     'DOB (d/m/y) : 19/09/1970\n' +
//     '.++=======[ SEC Info ]=======++.\n' +
//     '3D Secure / OTP : 1234\n' +
//     'Mothers name : Lucas Caamaño';

// let string = '12345, www. www h - whwhwh';
// regV = /\w/g;
// regV = /\d/g;
// regV = /\D/ig;
// regV = /\W/g;
// regV = /\b\w/g;

// console.log(string.match(regV));

// let str = '92345 123 243 467 5234 987';
// let regV = /\b[0-9]{3}\b/g;

// console.log(str.match(regV));

// var str = 'The car parked in the garage.';
//
// var regV = /.ar/g;
// console.log(str.match(regV));

let sites = 'upwork.com\n' +
    'codepen.io\n' +
    'fiverr.com\n' +
    'thepiratebay.org\n' +
    'extratorrent.com\n' +
    'getbootstrap.com\n' +
    'jquery.com\n' +
    'laravel.com\n' +
    'laracasts.com\n' +
    'seriouseats.com\n' +
    'bitdefender.com\n' +
    'ziprecruiter.com (no leaked data found in several search engine caches)\n' +
    'glassdoor.com\n' +
    'pastebin.com\n' +
    'fitbit.com\n' +
    'discordapp.com\n' +
    'change.org\n' +
    'feedly.com (affected)\n' +
    'irccloud.com\n' +
    '000webhost.com\n' +
    '1001freefonts.com\n' +
    '101greatgoals.com\n' +
    '10minutemail.com\n' +
    '123telugu.com\n' +
    '1hhhh.net\n' +
    '1jux.net\n' +
    '1news.az\n' +
    '1sale.com\n' +
    '1stwebdesigner.com\n' +
    '24horas.cl\n' +
    '24sata.hr\n' +
    '2ch-c.net\n' +
    '2ch.hk\n' +
    '2ch.net\n' +
    '2ip.ru\n' +
    '3bmeteo.com\n' +
    '4chan.org\n' +
    '4dsply.com\n' +
    '4pda.ru\n' +
    '4tube.com\n' +
    '5giay.vn\n' +
    '800notes.com\n' +
    '96down.com\n' +
    'abidjan.net\n' +
    'abs-cbnnews.com\n' +
    'adafruit.com\n' +
    'add-anime.net\n' +
    'addicted2success.com\n' +
    'addictinginfo.org\n' +
    'addmefast.com\n' +
    'addtoany.com\n' +
    'adf.ly\n' +
    'adfoc.us\n' +
    'ads-id.com\n' +
    'adult-empire.com\n' +
    'advfn.com\n' +
    'adxpansion.com\n' +
    'aflam4you.tv\n' +
    'aflamneek.com\n' +
    'aftabir.com\n' +
    'agilebits.com\n' +
    'ahlamontada.com\n' +
    'ahlynews.com\n' +
    'ahnegao.com.br\n' +
    'aitnews.com\n' +
    'aksam.com.tr\n' +
    'aktifhaber.com\n' +
    'al-akhbar.com\n' +
    'aleqt.com\n' +
    'alexaboostup.com\n' +
    'alfajertv.com\n' +
    'alfavita.gr\n' +
    'alhilal.com\n' +
    'alison.com\n' +
    'alistapart.com\n' +
    'aljaras.com\n' +
    'allanalpass.com\n' +
    'all.biz\n' +
    'allkpop.com\n' +
    'allmyvideos.net\n' +
    'alltop.com\n' +
    'almaany.com\n' +
    'almasryalyoum.com\n' +
    'almesryoon.com\n' +
    'alnaharegypt.com\n' +
    'alphacoders.com\n' +
    'alrakoba.net\n' +
    'alternativeto.net\n' +
    'alternet.org\n' +
    'alwafd.org\n' +
    'alwatanvoice.com\n' +
    'alweeam.com.sa\n' +
    'amadershomoybd.com\n' +
    'amarujala.com\n' +
    'amino.dk\n' +
    'anandabazar.com\n' +
    'androidauthority.com\n' +
    'androidcentral.com\n' +
    'androidpolice.com\n' +
    'angloinfo.com\n' +
    'anime44.com\n' +
    'animeflv.net\n' +
    'animeid.tv\n' +
    'animenewsnetwork.com\n' +
    'anipo.jp\n' +
    'anitube.se\n' +
    'ann.az\n' +
    'annunci69.it\n' +
    'antarvasna.com\n' +
    'antena3.ro\n' +
    'antyweb.pl\n' +
    'any.gs\n' +
    'ap7am.com\n' +
    'apherald.com\n' +
    'apne.tv\n' +
    'aporrea.org\n' +
    'appadvice.com\n' +
    'appbrain.com\n' +
    'appstorm.net\n' +
    'arabsh.com\n' +
    'archive.is\n' +
    'argentinawarez.com\n' +
    'arioo.com\n' +
    'aristeguinoticias.com\n' +
    'armorgames.com\n' +
    'arouraios.gr\n' +
    'articlesnatch.com\n' +
    'ashleymadison.com\n' +
    'ashleyrnadison.com\n' +
    'atlas.sk\n' +
    'attracta.com\n' +
    'atwiki.jp\n' +
    'authorstream.com\n' +
    'avaaz.org\n' +
    'avaz.ba\n' +
    'avazutracking.net\n' +
    'avito.ma\n' +
    'avito.ru (confirmed by @toogle from Avito.ru as not affected)\n' +
    'avn.info.ve\n' +
    'azertag.com\n' +
    'aznews.az\n' +
    'azyya.com\n' +
    'b1.org\n' +
    'bab.la\n' +
    'babyoye.com\n' +
    'backlinks.com\n' +
    'bakufu.jp\n' +
    'bancdebinary.com\n' +
    'banglanews24.com\n' +
    'barstoolsports.com\n' +
    'bbspink.com\n' +
    'bc.vc\n' +
    'bdr130.net\n' +
    'beeg.com\n' +
    'behindwoods.com\n' +
    'belboon.com\n' +
    'bestblackhatforum.com\n' +
    'bezaat.com\n' +
    'bicaps.com\n' +
    'bigrock.in\n' +
    'bikroy.com\n' +
    'billiger.de\n' +
    'billionuploads.com\n' +
    'binaryoptionsnewbies.com\n' +
    'binsearch.info\n' +
    'bitcoincharts.com\n' +
    'bitshare.com\n' +
    'bitsnoop.com\n' +
    'bizsugar.com\n' +
    'blackhatteam.com\n' +
    'blackhatworld.com\n' +
    'blankrefer.com\n' +
    'bleepingcomputer.com\n' +
    'blekko.com\n' +
    'blinklist.com\n' +
    'blip.tv\n' +
    'blockchain.info\n' +
    'blogcatalog.com\n' +
    'blogfa.com\n' +
    'blogs.com\n' +
    'boards.ie\n' +
    'boo-box.com\n' +
    'boxden.com\n' +
    'boxingscene.com\n' +
    'brainpickings.org\n' +
    'brainyquote.com\n' +
    'brandyourself.com\n' +
    'brasil247.com\n' +
    'briian.com\n' +
    'broadwayworld.com\n' +
    'bronto.com\n' +
    'brooonzyah.net\n' +
    'brusheezy.com\n' +
    'btc-e.com\n' +
    'bubblews.com\n' +
    'bufferapp.com\n' +
    'bukkit.org\n' +
    'burbuja.info\n' +
    'burnews.com\n' +
    'business2blogger.com\n' +
    'businessforhome.org\n' +
    'buzztheme.net\n' +
    'camplace.com\n' +
    'cancan.ro\n' +
    'careers360.com\n' +
    'car.gr\n' +
    'catracalivre.com.br\n' +
    'cbox.ws\n' +
    'cda.pl\n' +
    'ce4arab.com\n' +
    'celebuzz.com\n' +
    'charter97.org\n' +
    'chatrandom.com\n' +
    'cheathappens.com\n' +
    'chinavasion.com\n' +
    'chomikuj.pl\n' +
    'christian-dogma.com\n' +
    'cima4u.com\n' +
    'ciudad.com.ar\n' +
    'ck101.com\n' +
    'clasicooo.com\n' +
    'classifiedads.com\n' +
    'cleanfiles.net\n' +
    'clickbank.com\n' +
    'clickbank.net\n' +
    'clip.vn\n' +
    'clixsense.com\n' +
    'cloudflare.com\n' +
    'clubedohardware.com.br\n' +
    'cmse.ru\n' +
    'codepen.io\n' +
    'codeschool.com\n' +
    'coinbase.com\n' +
    'col3negoriginal.lk\n' +
    'colourlovers.com\n' +
    'comicbookmovie.com\n' +
    'compucalitv.com\n' +
    'copacet.com\n' +
    'cpalead.com\n' +
    'cpasbien.com\n' +
    'cpasbien.me\n' +
    'crackberry.com\n' +
    'creativecommons.org\n' +
    'cricfree.tv\n' +
    'crictime.com\n' +
    'crocko.com\n' +
    'crosswalk.com\n' +
    'crunchbase.com\n' +
    'crunchyroll.com\n' +
    'cs-cart.com\n' +
    'cssdeck.com\n' +
    'cucirca.eu\n' +
    'curse.com\n' +
    'cyanogenmod.org\n' +
    'cyberchimps.com\n' +
    'cyberpresse.ca\n' +
    'dailycaller.com\n' +
    'daisycon.com\n' +
    'dangerousminds.net\n' +
    'dardarkom.com\n' +
    'dashnet.org\n' +
    'davidicke.com\n' +
    'davidwalsh.name\n' +
    'dawanda.com\n' +
    'dawn.com\n' +
    'de10.com.mx\n' +
    'deadline.com\n' +
    'defaultsear.ch\n' +
    'defencenet.gr\n' +
    'definebabe.com\n' +
    'demandforce.com\n' +
    'demotywatory.pl\n' +
    'deperu.com\n' +
    'desidime.com\n' +
    'designboom.com\n' +
    'designfloat.com\n' +
    'designtaxi.com\n' +
    'desirulez.net\n' +
    'desi-tashan.com\n' +
    'desitorrents.com\n' +
    'desmotivaciones.es\n' +
    'destructoid.com\n' +
    'deutsche-wirtschafts-nachrichten.de\n' +
    'dev-point.com\n' +
    'dhakatimes24.com\n' +
    'diariocontraste.com\n' +
    'diariodemorelos.com\n' +
    'diario.mx\n' +
    'diary.ru\n' +
    'dicelacancion.com\n' +
    'diffen.com\n' +
    'digikala.com\n' +
    'digitalocean.com\n' +
    'digital-photography-school.com\n' +
    'digitalpoint.com\n' +
    'discuss.com.hk\n' +
    'divxplanet.com\n' +
    'divxstage.eu\n' +
    'dizi-mag.com\n' +
    'djmaza.info\n' +
    'dlink.com\n' +
    'dl-protect.com\n' +
    'dnevnik.hr\n' +
    'doba.com\n' +
    'doisongphapluat.com\n' +
    'doityourself.com\n' +
    'doostiha.ir\n' +
    'dostor.org\n' +
    'dota2lounge.com\n' +
    'downloadatoz.com\n' +
    'downloadming.me\n' +
    'downloads.nl\n' +
    'dpstream.net\n' +
    'drakulastream.eu\n' +
    'dramasonline.com\n' +
    'dreamamateurs.com\n' +
    'dreamincode.net\n' +
    'dreamteammoney.com\n' +
    'dreamtemplate.com\n' +
    'droid-life.com\n' +
    'drudgereport.com\n' +
    'dryicons.com\n' +
    'dsdomination.com\n' +
    'duedil.com\n' +
    'dumpert.nl\n' +
    'dx.com\n' +
    'eatlocalgrown.com\n' +
    'ebs.in\n' +
    'e-cigarette-forum.com\n' +
    'econsultancy.com\n' +
    'edublogs.org\n' +
    'e-estekhdam.com\n' +
    'efukt.com\n' +
    'egaliteetreconciliation.fr\n' +
    'egyup.com\n' +
    'el-ahly.com\n' +
    'elance.com\n' +
    'el-balad.com\n' +
    'elbilad.net\n' +
    'elbotola.com\n' +
    'eldia.com.ar\n' +
    'elephantjournal.com\n' +
    'elespectador.com\n' +
    'elfagr.org\n' +
    'elheddaf.com\n' +
    'elitepvpers.com\n' +
    'elitetorrent.net\n' +
    'elkhabar.com\n' +
    'elpais.com.uy\n' +
    'elshaab.org\n' +
    'elwatannews.com\n' +
    'el-wlid.com\n' +
    'emailmeform.com\n' +
    'emoneyspace.com\n' +
    'e-monsite.com\n' +
    'encuentra24.com\n' +
    'englishforums.com\n' +
    'enjoydressup.com\n' +
    'enwdgts.com\n' +
    'epidemz.net\n' +
    'erepublik.com\n' +
    'ero-advertising.com\n' +
    'ethnos.gr\n' +
    'etxt.ru\n' +
    'excellentbux.net\n' +
    'expatriates.com\n' +
    'experts-exchange.com (no leaked data found in several search engine caches)\n' +
    'explosm.net\n' +
    'express.com.pk\n' +
    'express.pk\n' +
    'extabit.com\n' +
    'extratorrent.cc\n' +
    'extratorrent.com\n' +
    'eyny.com\n' +
    'ezilon.com\n' +
    'eztv.it\n' +
    'fabthemes.com\n' +
    'fakenamegenerator.com\n' +
    'fakku.net\n' +
    'fanpop.com\n' +
    'fansided.com\n' +
    'fansshare.com\n' +
    'fanswong.com\n' +
    'fantasy8.com\n' +
    'fap.to\n' +
    'fatakat.com\n' +
    'feedio.net\n' +
    'feedly.com\n' +
    'fenopy.se\n' +
    'ffffound.com\n' +
    'filecloud.io\n' +
    'filelist.ro\n' +
    'filenuke.com\n' +
    'filesfetcher.com\n' +
    'filgoal.com\n' +
    'filmey.com\n' +
    'filmifullizle.com\n' +
    'fishki.net\n' +
    'fiverr.com\n' +
    'fok.nl\n' +
    'fontspace.com\n' +
    'forbes.ru\n' +
    'forex4you.org\n' +
    'forexpeacearmy.com\n' +
    'forgifs.com\n' +
    'foro20.com\n' +
    'foroactivo.com\n' +
    'forobeta.com\n' +
    'forocoches.com\n' +
    'forosdelweb.com\n' +
    'forumactif.com\n' +
    'forumactif.org\n' +
    'forum.hr\n' +
    'forumophilia.com\n' +
    'forumotion.com\n' +
    'fotka.pl\n' +
    'fotolog.net\n' +
    'foundationapi.com\n' +
    'fragrantica.com\n' +
    'frandroid.com\n' +
    'freakshare.com\n' +
    'freekaamaal.com\n' +
    'freelanceswitch.com\n' +
    'freeonlinegames.com\n' +
    'freepatriot.org\n' +
    'freepornvs.com\n' +
    'free-press-release.com\n' +
    'free-tv-video-online.me\n' +
    'freewebs.com\n' +
    'freshdesignweb.com\n' +
    'fresherslive.com\n' +
    'frmtr.com\n' +
    'frombar.com\n' +
    'fsiblog.com\n' +
    'fssnet.co.in\n' +
    'fuckbooknet.net\n' +
    'fullhdfilmizle.org\n' +
    'fun698.com\n' +
    'funnyjunk.com\n' +
    'funnymama.com\n' +
    'fuskator.com\n' +
    'futhead.com\n' +
    'fux.com\n' +
    'gaaks.com\n' +
    'game321.com\n' +
    'gameblog.fr\n' +
    'game-debate.com\n' +
    'gamefront.com\n' +
    'gamer.com.tw\n' +
    'games.la\n' +
    'gamestorrents.com\n' +
    'gametracker.com\n' +
    'gamevicio.com\n' +
    'gamme.com.tw\n' +
    'geenstijl.nl\n' +
    'genteflow.com\n' +
    'geo.tv\n' +
    'getbootstrap.com\n' +
    'getcashforsurveys.com\n' +
    'getfireshot.com\n' +
    'getglue.com\n' +
    'gezginler.net\n' +
    'gezinti.com\n' +
    'gfxtra.com\n' +
    'gfy.com\n' +
    'ghanaweb.com\n' +
    'ghost.org\n' +
    'gigaom.com\n' +
    'gigporno.com\n' +
    'gistmania.com\n' +
    'glassdoor.com\n' +
    'globalewallet.com\n' +
    'globovision.com\n' +
    'gmane.org\n' +
    'godvine.com\n' +
    'gofuckbiz.com\n' +
    'gogoanime.com\n' +
    'goldesel.to\n' +
    'goldporntube.com\n' +
    'goldprice.org\n' +
    'gooddrama.net\n' +
    'good.is\n' +
    'goodsearch.com\n' +
    'gossiplankanews.com\n' +
    'gottabemobile.com\n' +
    'graaam.com\n' +
    'grasscity.com\n' +
    'greenwichmeantime.com\n' +
    'grindtv.com\n' +
    'gsmhosting.com\n' +
    'gsmspain.com\n' +
    'gtaforums.com\n' +
    'gulli.com\n' +
    'gun.az\n' +
    'gyazo.com\n' +
    'h2porn.com\n' +
    'hackforums.net\n' +
    'haivl.com\n' +
    'haivl.tv\n' +
    'hamariweb.com\n' +
    'hammihan.com\n' +
    'haqqin.az\n' +
    'hardsextube.com\n' +
    'hardwareluxx.de\n' +
    'hawamer.com\n' +
    'hawkhost.com\n' +
    'hayah.cc\n' +
    'healthkart.com\n' +
    'heavy-r.com\n' +
    'hespress.com\n' +
    'hibapress.com\n' +
    'hightrafficacademy.com\n' +
    'hihi2.com\n' +
    'hiphopdx.com\n' +
    'hir.ma\n' +
    'hitleap.com\n' +
    'hizliresim.com\n' +
    'hkgolden.com\n' +
    'hobbyking.com\n' +
    'hockeysfuture.com\n' +
    'holiday-weather.com\n' +
    'hostgator.com.br\n' +
    'hostgator.in\n' +
    'hostingflame.org\n' +
    'hotair.com\n' +
    'hotarabchat.com\n' +
    'hotfrog.com\n' +
    'hottube.me\n' +
    'hotukdeals.com\n' +
    'howtoforge.com\n' +
    'hubpages.com\n' +
    'hugedomains.com\n' +
    'hugefiles.net\n' +
    'humblebundle.com\n' +
    'humoron.com\n' +
    'hvg.hu\n' +
    'icefilms.info\n' +
    'iconarchive.com\n' +
    'identi.li\n' +
    'idlebrain.com\n' +
    'iitv.info\n' +
    'ijreview.com\n' +
    'ikman.lk\n' +
    'ilbe.com\n' +
    'ilyke.net\n' +
    'imagecurl.org\n' +
    'imageporter.com\n' +
    'imagetwist.com\n' +
    'imgchili.com\n' +
    'imgchili.net\n' +
    'imgdino.com\n' +
    'imgserve.net\n' +
    'imgtiger.com\n' +
    'imore.com\n' +
    'impiego24.it\n' +
    'inbound.org\n' +
    'index.hr\n' +
    'index-of-mp3s.com\n' +
    'india-forums.com\n' +
    'indiafreestuff.in\n' +
    'indiangilma.com\n' +
    'indianpornvideos.com\n' +
    'indiansexstories.net\n' +
    'indowebster.com\n' +
    'inews.gr\n' +
    'infibeam.com\n' +
    'infolinks.com\n' +
    'informationng.com\n' +
    'informe21.com\n' +
    'inkedmag.com\n' +
    'inlinkz.com\n' +
    'inquirer.net\n' +
    'insight.ly\n' +
    'instantcheckmate.com\n' +
    'intercambiosvirtuales.org\n' +
    'intereconomia.com\n' +
    'internethaber.com\n' +
    'interpals.net\n' +
    'ioffer.com\n' +
    'iol.co.za\n' +
    'iphoneogram.com\n' +
    'iphones.ru\n' +
    'ipiccy.com\n' +
    'iptorrents.com\n' +
    'islammemo.cc\n' +
    'italiafilm.tv\n' +
    'it-ebooks.info\n' +
    'ittefaq.com.bd\n' +
    'ixl.com\n' +
    'jagobd.com\n' +
    'jang.com.pk\n' +
    'javascript.ru\n' +
    'jeanmarcmorandini.com\n' +
    'j.gs\n' +
    'jne.co.id\n' +
    'joemonster.org\n' +
    'johnchow.com\n' +
    'jonloomer.com\n' +
    'joomla.fr\n' +
    'joomlart.com\n' +
    'joomshaper.com\n' +
    'jotform.com\n' +
    'jquery.com\n' +
    'jquerymobile.com\n' +
    'jqueryui.com\n' +
    'jusbrasil.com.br\n' +
    'justunfollow.com\n' +
    'jutarnji.hr\n' +
    'jvzoo.com\n' +
    'kaban.tv\n' +
    'kalahari.com\n' +
    'kanui.com.br\n' +
    'karnaval.com\n' +
    'katproxy.com\n' +
    'keep2share.cc\n' +
    'khabarfarsi.com\n' +
    'khmerload.com\n' +
    'kingworldnews.com\n' +
    'kinogo.net\n' +
    'kinox.to\n' +
    'kinozal.tv\n' +
    'kleiderkreisel.de\n' +
    'klicktel.de\n' +
    'klix.ba\n' +
    'kn3.net\n' +
    'komikid.com\n' +
    'korabia.com\n' +
    'kora-online.tv\n' +
    'korben.info\n' +
    'krucil.net\n' +
    'ktonanovenkogo.ru\n' +
    'kure.tv\n' +
    'kwejk.pl\n' +
    'lankacnews.com\n' +
    'lapatilla.com\n' +
    'laravel.com\n' +
    'largeporntube.com\n' +
    'latribune.fr\n' +
    'laughingsquid.com\n' +
    'layalina.com\n' +
    'lebuteur.com\n' +
    'legiaodosherois.com.br\n' +
    'lenskart.com\n' +
    'levelup.com\n' +
    'lewrockwell.com\n' +
    'libertagia.com\n' +
    'life.com.tw\n' +
    'light-dark.net\n' +
    'liilas.com\n' +
    'lik.cl\n' +
    'like4like.org\n' +
    'likesasap.com\n' +
    'likes.com\n' +
    'limetorrents.com\n' +
    'linkbucks.com\n' +
    'linkcollider.com\n' +
    'linkconnector.com\n' +
    'linkcrypt.ws\n' +
    'linksmanagement.com\n' +
    'listcovery.com\n' +
    'listverse.com\n' +
    'livememe.com\n' +
    'lolinez.com\n' +
    'lolnexus.com\n' +
    'looti.net\n' +
    'lumfile.com\n' +
    'm5zn.com\n' +
    'mafiashare.net\n' +
    'makeameme.org\n' +
    'makeupandbeauty.com\n' +
    'makezine.com\n' +
    'malaysiakini.com\n' +
    'malwaretips.com\n' +
    'managewp.com\n' +
    'mangafox.me\n' +
    'mangahere.com\n' +
    'mangapanda.com\n' +
    'mangareader.net\n' +
    'mangastream.com\n' +
    'manoto1.com\n' +
    'maplestage.com\n' +
    'marathonbet.com\n' +
    'marketglory.com\n' +
    'marunadanmalayali.com\n' +
    'matchesfashion.com\n' +
    'mathsisfun.com\n' +
    'matthewwoodward.co.uk\n' +
    'maultalk.com\n' +
    'maxicep.com\n' +
    'maxmind.com\n' +
    'mazika2day.com\n' +
    'mediapart.fr (not proxified by CF and not affected)\n' +
    'mediatakeout.com\n' +
    'mediatraffic.com\n' +
    'medium.com\n' +
    'megashare.info\n' +
    'members.webs.com\n' +
    'memecenter.com\n' +
    'memedad.com\n' +
    'meme-lol.com\n' +
    'menshealth.com\n' +
    'merca20.com\n' +
    'mforos.com\n' +
    'mg.co.za\n' +
    'micromaxinfo.com\n' +
    'microworkers.com\n' +
    'mindmeister.com\n' +
    'mindtools.com\n' +
    'minecraftforum.net\n' +
    'minijuegos.com\n' +
    'minutebuzz.com\n' +
    'mitbbs.com\n' +
    'mixcloud.com\n' +
    'mixedmartialarts.com\n' +
    'mkyong.com\n' +
    'mmo-champion.com\n' +
    'mobafire.com\n' +
    'mobilism.org\n' +
    'moddb.com\n' +
    'moneymakergroup.com\n' +
    'monova.org\n' +
    'moodle.org (no leaked data found in several search engine caches)\n' +
    'morguefile.com\n' +
    'moveon.org\n' +
    'movie4k.to\n' +
    'movie-blog.org\n' +
    'movieweb.com\n' +
    'mp3skull.com\n' +
    'mp3xd.com\n' +
    'mstaml.com\n' +
    'musavat.com\n' +
    'mybb.com\n' +
    'mybroadband.co.za\n' +
    'mydealz.de\n' +
    'mydigitallife.info\n' +
    'myegy.com\n' +
    'mygully.com\n' +
    'mylikes.com\n' +
    'mymodernmet.com\n' +
    'mynewsdesk.com\n' +
    'myorderbox.com\n' +
    'mysavings.com\n' +
    'mysmartprice.com\n' +
    'myvidster.com\n' +
    'n4g.com\n' +
    'n4hr.com\n' +
    'naijapals.com\n' +
    'naij.com\n' +
    'nairaland.com\n' +
    'namepros.com\n' +
    'naosalvo.com.br\n' +
    'nationalreview.com\n' +
    'natunbarta.com\n' +
    'ncrypt.in\n' +
    'neswangy.net\n' +
    'netbarg.com\n' +
    'network-tools.com\n' +
    'newgrounds.com\n' +
    'news.am\n' +
    'newtvworld.com\n' +
    'nexusmods.com\n' +
    'nguoiduatin.vn\n' +
    'nicozon.net\n' +
    'ninisite.com\n' +
    'niusnews.com\n' +
    'nmisr.com\n' +
    'nodejs.org\n' +
    'notdoppler.com\n' +
    'notebookcheck.net\n' +
    'noticiaaldia.com\n' +
    'noticierodigital.com\n' +
    'novafile.com\n' +
    'nowgamez.com\n' +
    'nrc.nl\n' +
    'nuevoloquo.com\n' +
    'nulled.cc\n' +
    'nullrefer.com\n' +
    'nur.kz\n' +
    'nyaa.se\n' +
    'ocioso.com.br\n' +
    'odesk.com\n' +
    'offervault.com\n' +
    'ofreegames.com\n' +
    'ojooo.com\n' +
    'omegle.com\n' +
    'on.cc\n' +
    'onedio.com\n' +
    'onlinekhabar.com\n' +
    'onlinesoccermanager.com\n' +
    'online-stopwatch.com\n' +
    'oodle.com\n' +
    'opencart.com\n' +
    'openclassrooms.com\n' +
    'opensubtitles.org\n' +
    'opinionlab.com\n' +
    'opposingviews.com\n' +
    'optimizepress.com\n' +
    'optionbit.com\n' +
    'orgasmatrix.com\n' +
    'osdir.com\n' +
    'pagina12.com.ar\n' +
    'pandodaily.com\n' +
    'paperblog.com\n' +
    'pastebin.com\n' +
    'patient.co.uk\n' +
    'paxum.com\n' +
    'pbagora.com.br\n' +
    'pcadvisor.co.uk\n' +
    'pccomponentes.com\n' +
    'pcgames.de\n' +
    'pcgameshardware.de\n' +
    'pcinpact.com\n' +
    'pdfonline.com\n' +
    'peb.pl\n' +
    'peerfly.com\n' +
    'peliculas4.com\n' +
    'peliculasyonkis.com\n' +
    'penguinvids.com\n' +
    'penny-arcade.com\n' +
    'persiantools.com\n' +
    'petapixel.com\n' +
    'phimvang.com\n' +
    'phpbb.com\n' +
    'picstopin.com\n' +
    'pijamasurf.com\n' +
    'pik.ba\n' +
    'pimpandhost.com\n' +
    'pingdom.com\n' +
    'pirateproxy.net\n' +
    'pirateproxy.se\n' +
    'piratestreaming.tv\n' +
    'pixhost.org\n' +
    'pjmedia.com\n' +
    'planetminecraft.com\n' +
    'played.to\n' +
    'playvid.com\n' +
    'playxn.com\n' +
    'plugrush.com\n' +
    'plus28.com\n' +
    'popcash.net\n' +
    'poringa.net\n' +
    'pornbb.org\n' +
    'pornerbros.com\n' +
    'pornper.com\n' +
    'porntube.com\n' +
    'porntubevidz.com\n' +
    'pornup.me\n' +
    'portalnet.cl\n' +
    'postplanner.com\n' +
    'prefiles.com\n' +
    'premiere.fr\n' +
    'premiumwp.com\n' +
    'prevention.com\n' +
    'primewire.ag\n' +
    'privatehomeclips.com\n' +
    'priyo.com\n' +
    'prlog.ru\n' +
    'prntscr.com\n' +
    'problogger.net\n' +
    'proboards.com\n' +
    'proceso.com.mx\n' +
    'promiflash.de\n' +
    'promptfile.com\n' +
    'propakistani.pk\n' +
    'proprofs.com\n' +
    'psychcentral.com\n' +
    'ptt.cc\n' +
    'pubdirecte.com\n' +
    'publika.az\n' +
    'puls24.mk\n' +
    'punchng.com\n' +
    'purpleporno.com\n' +
    'putlocker.bz\n' +
    'putlocker.com\n' +
    'putlocker.ws\n' +
    'puu.sh\n' +
    'q8yat.com\n' +
    'qafqazinfo.az\n' +
    'q-ask.com\n' +
    'qatarliving.com\n' +
    'qaynar.info\n' +
    'q.gs\n' +
    'questionablecontent.net\n' +
    '[quizlet.com] (http://quizlet.com)\n' +
    'r10.net\n' +
    'racing-games.com\n' +
    'radiojavan.com\n' +
    'rahnama.com\n' +
    'random.org\n' +
    'ranker.com\n' +
    'rapgenius.com\n' +
    'rapradar.com\n' +
    'rassd.com\n' +
    'raventools.com\n' +
    'rawstory.com\n' +
    'reactiongifs.com\n' +
    'readms.com\n' +
    'realfarmacy.com\n' +
    'realitatea.net\n' +
    'redbubble.com\n' +
    're-direcciona.me\n' +
    'reduxmediia.com\n' +
    'relink.us\n' +
    'resellerclub.com\n' +
    'residentadvisor.net\n' +
    'rghost.ru\n' +
    'ripoffreport.com\n' +
    'robtex.com\n' +
    'rockpapershotgun.com\n' +
    'roro44.com\n' +
    'rosbalt.ru\n' +
    'rozee.pk\n' +
    'rubias19.com\n' +
    'runetki.com\n' +
    'runetki.tv\n' +
    'runnersworld.com\n' +
    'rus.ec\n' +
    'ryushare.com\n' +
    'sa.ae\n' +
    'saaid.net\n' +
    'sabq.org\n' +
    'sadistic.pl\n' +
    'saharareporters.com\n' +
    'samanyoluhaber.com\n' +
    'sankakucomplex.com\n' +
    'say7.info\n' +
    'sayidaty.net\n' +
    'scamadviser.com\n' +
    'scriptmafia.org\n' +
    'sdpnoticias.com\n' +
    'searchengines.ru\n' +
    'searchere.info\n' +
    'searchquotes.com\n' +
    'sedty.com\n' +
    'seemorgh.com\n' +
    'seenive.com\n' +
    'semprot.com\n' +
    'seneweb.com\n' +
    'seozenlaunch.com\n' +
    'sergey-mavrodi.com\n' +
    'sergeymavrodi.com\n' +
    'sergey-mavrodi-mmm.net\n' +
    'serials.ws\n' +
    'serienjunkies.org\n' +
    'series.ly\n' +
    'seriesyonkis.com\n' +
    'seriouseats.com\n' +
    'serviporno.com\n' +
    'seslisozluk.net\n' +
    'sethgodin.typepad.com\n' +
    'sexytube.me\n' +
    'shahvani.com\n' +
    'shareasale.com\n' +
    'share-links.biz\n' +
    'share-online.biz\n' +
    'sheknows.com\n' +
    'shiftdelete.net\n' +
    'shoghlanty.com\n' +
    'shorouknews.com\n' +
    'shortp.com\n' +
    'shoutmeloud.com\n' +
    'sia.az\n' +
    'siasat.pk\n' +
    'siliconrus.com\n' +
    'simplyrecipes.com\n' +
    'sinembargo.mx\n' +
    'sipse.com\n' +
    'sitedeals.nl\n' +
    'sitetalk.com\n' +
    'siyahgazete.com\n' +
    'skidrowcrack.com\n' +
    'skidrowgames.net\n' +
    'skladchik.com\n' +
    'skyscrapercity.com\n' +
    'slaati.com\n' +
    'slashfilm.com\n' +
    'slate.fr\n' +
    'slimspots.com\n' +
    'sm3na.com\n' +
    'smallbiztrends.com\n' +
    'smallseotools.com\n' +
    'smartinsights.com\n' +
    'smartpassiveincome.com\n' +
    'smosh.com\n' +
    'snapwidget.com\n' +
    'soccermanager.com\n' +
    'soccersuck.com\n' +
    'socialadr.com\n' +
    'socialblade.com\n' +
    'socialmediabar.com\n' +
    'socialmediaexaminer.com\n' +
    'socialmediatoday.com\n' +
    'socialtriggers.com\n' +
    'softarchive.net\n' +
    'solidtrustpay.com\n' +
    'someecards.com\n' +
    'somethingawful.com\n' +
    'somuch.com\n' +
    'songlyrics.com\n' +
    'songspk.cc\n' +
    'songspk.name\n' +
    'soompi.com\n' +
    'sooperarticles.com\n' +
    'sopitas.com\n' +
    'source-wave.com\n' +
    'sourtimes.org\n' +
    'spankbang.com\n' +
    'spi0n.com\n' +
    'spin.com\n' +
    'sportcategory.com\n' +
    'sportdog.gr\n' +
    'spotscenered.info\n' +
    'sprashivai.ru\n' +
    'ssense.com\n' +
    'stadelahly.com\n' +
    'stadt-bremerhaven.de\n' +
    'stafaband.info\n' +
    'stagram.com\n' +
    'standardmedia.co.ke\n' +
    'stansberryresearch.com\n' +
    'stargazete.com\n' +
    'starsue.net\n' +
    'statcounter.com\n' +
    'statmyweb.com\n' +
    'statscrop.com\n' +
    'stepashka.com\n' +
    'stereogum.com\n' +
    'stocktwits.com\n' +
    'stopforumspam.com\n' +
    'storenvy.com\n' +
    'streamhunter.eu\n' +
    'stream-tv.me\n' +
    'stuffgate.com\n' +
    'submissionwebdirectory.com\n' +
    'subscene.com\n' +
    'subtitulos.es\n' +
    'sudaneseonline.com\n' +
    'sunmaker.com\n' +
    'super.ae\n' +
    'surveygizmo.com\n' +
    'swalif.net\n' +
    'systweak.com\n' +
    't411.me\n' +
    'talkarcades.com\n' +
    'tamindir.com\n' +
    'taringa.net\n' +
    'taxheaven.gr\n' +
    'te3p.com\n' +
    'teamliquid.net (not proxied by CF and not affected)\n' +
    'techdirt.com\n' +
    'techinasia.com\n' +
    'tech-wd.com\n' +
    'tecmundo.com.br\n' +
    'teespring.com\n' +
    'telelistas.net\n' +
    'template-help.com\n' +
    'templatemonster.com\n' +
    'tfl.gov.uk\n' +
    'tgju.org\n' +
    'th3professional.com\n' +
    'thaqafnafsak.com\n' +
    'thebump.com\n' +
    'the-bux.net\n' +
    'thedailybeast.com\n' +
    'theelevationgroup.com\n' +
    'thefrisky.com\n' +
    'thehackernews.com\n' +
    'thejournal.ie\n' +
    'theladbible.com\n' +
    'themalaysianinsider.com\n' +
    'theme-fusion.com\n' +
    'theme-junkie.com\n' +
    'themelock.com\n' +
    'themobileindian.com\n' +
    'thenationonlineng.net\n' +
    'thenews.com.pk\n' +
    'thenewstribe.com\n' +
    'thepoke.co.uk\n' +
    'theregister.co.uk\n' +
    'thestudentroom.co.uk\n' +
    'thesuperficial.com\n' +
    'thethao247.vn\n' +
    'thetoptens.com\n' +
    'theync.com\n' +
    'thingiverse.com\n' +
    'thisav.com\n' +
    'thisoldhouse.com\n' +
    'tickld.com\n' +
    'tielabs.com\n' +
    'tineye.com\n' +
    'tipsandtricks-hq.com\n' +
    'tmart.com\n' +
    'tn.com.ar\n' +
    'tnr.com\n' +
    'todayhumor.co.kr\n' +
    'tomshw.it\n' +
    'top-channel.tv\n' +
    'topdocumentaryfilms.com\n' +
    'topix.com\n' +
    'toprankblog.com\n' +
    'torlock.com\n' +
    'torrentbutler.eu\n' +
    'torrentcrazy.com\n' +
    'torrentday.com\n' +
    'torrentdownloads.me\n' +
    'torrentfreak.com\n' +
    'torrenthound.com\n' +
    'torrentleech.org\n' +
    'torrentreactor.net\n' +
    'torrents.net\n' +
    'townhall.com\n' +
    'tracklab101.com\n' +
    'tradetracker.com\n' +
    'trafficbroker.com\n' +
    'trafficestimate.com\n' +
    'trafficfactory.biz\n' +
    'trafficg.com\n' +
    'traidnt.net\n' +
    'tribune.com.pk\n' +
    'trndsys.co\n' +
    'trueactivist.com\n' +
    'truthaboutabs.com\n' +
    'tubeplus.me\n' +
    'tukif.com\n' +
    'tunisia-sat.com\n' +
    'tureng.com\n' +
    'tutorialzine.com\n' +
    'tutsplus.com\n' +
    'tuvaro.com\n' +
    'tvboxnow.com\n' +
    'tvrage.com\n' +
    'tv-series.me\n' +
    'tw116.com\n' +
    'twentytwowords.com\n' +
    'twitchy.com\n' +
    'typepad.com\n' +
    'uber.com\n' +
    'udemy.com\n' +
    'uludagsozluk.com\n' +
    'unitezz.com\n' +
    'uploadboy.com\n' +
    'uppit.com\n' +
    'uptobox.com\n' +
    'usingenglish.com\n' +
    'utrace.de\n' +
    'utusan.com.my\n' +
    'uwants.com\n' +
    'vanguardngr.com\n' +
    'vavel.com\n' +
    'vcommission.com\n' +
    'vecernji.hr\n' +
    'vecteezy.com\n' +
    'vetogate.com\n' +
    'vid2c.com\n' +
    'videarn.com\n' +
    'video.az\n' +
    'videomega.tv\n' +
    'videopremium.tv\n' +
    'videoyoum7.com\n' +
    'vidspot.net\n' +
    'viralnova.com\n' +
    'vivas.fi\n' +
    'vladtv.com\n' +
    'vodly.to\n' +
    'vodonet.net\n' +
    'voetbalzone.nl\n' +
    'vozforums.com\n' +
    'vr-zone.com\n' +
    'w3resource.com\n' +
    'w4.com\n' +
    'warez-bb.org\n' +
    'warriorplus.com\n' +
    'waseet.net\n' +
    'washingtontimes.com\n' +
    'watch32.com\n' +
    'watchcartoononline.com\n' +
    'watchfreemovies.ch\n' +
    'watchseries.lt\n' +
    'watchseries-online.eu\n' +
    'wattpad.com\n' +
    'waveapps.com\n' +
    'wayn.com\n' +
    'wearehairy.com\n' +
    'webconfs.com\n' +
    'webdesignerdepot.com\n' +
    'webdesignledger.com\n' +
    'webgains.com\n' +
    'webhostbox.net\n' +
    'webhostingtalk.com\n' +
    'webmastersitesi.com\n' +
    'web-opinions.com\n' +
    'webresourcesdepot.com\n' +
    'webs.com\n' +
    'wed168.com.tw\n' +
    'wehkamp.nl\n' +
    'weknowmemes.com\n' +
    'weloveshopping.com\n' +
    'whatculture.com\n' +
    'whatismyip.com\n' +
    'whatsmyserp.com\n' +
    'whirlpool.net.au\n' +
    'whocallsme.com\n' +
    'whoishostingthis.com\n' +
    'whoismind.com\n' +
    'wikiwiki.jp\n' +
    'wiziq.com\n' +
    'wiziwig.tv\n' +
    'wjunction.com\n' +
    'wmmail.ru\n' +
    'womenshealthmag.com\n' +
    'worldtimebuddy.com\n' +
    'worldtimeserver.com\n' +
    'worthofweb.com\n' +
    'wpcentral.com\n' +
    'wpengine.com\n' +
    'wphub.com\n' +
    'wplocker.com\n' +
    'wpmu.org\n' +
    'x-art.com\n' +
    'xat.com\n' +
    'xbmc.org\n' +
    'xenforo.com\n' +
    'xxxbunker.com\n' +
    'xxxkinky.com\n' +
    'yam.com\n' +
    'yazete.com\n' +
    'yepi.com\n' +
    'yeppudaa.com\n' +
    'yeslibertin.com\n' +
    'yola.com\n' +
    'yoo7.com\n' +
    'yougetpaidfast.com\n' +
    'yougetsignal.com\n' +
    'youm7.com\n' +
    'yourbittorrent.com\n' +
    'youtradefx.com\n' +
    'youtube-mp3.org\n' +
    'yucatan.com.mx\n' +
    'yuku.com\n' +
    'z6.com\n' +
    'zakon.kz\n' +
    'zalukaj.tv\n' +
    'zamalekfans.com\n' +
    'zaman.com.tr\n' +
    'zemanta.com\n' +
    'zemtv.com\n' +
    'zenhabits.net\n' +
    'zero10.net\n' +
    'zetaboards.com\n' +
    'ziprecruiter.com\n' +
    'zone-telechargement.com\n' +
    'zoominfo.com\n' +
    'zoomit.ir\n' +
    'zurb.com\n' +
    'zwaar.net';

let reg = /\w+\.it/g;
console.log(sites.match(reg));

let card = '.++=======[ CC Info ]=======++.\n' +
    'Card Name : Lucas Caamaño Viale\n' +
    'Card Number : 4906962001841822\n' +
    'Expiration : 02/2020\n' +
    'CVV / CVC : 288\n' +
    '.++===========================++.\n' +
    'BIN : 490696 - VISA - CREDIT - CLASSIC\n' +
    'BANK : CITIBANK\n' +
    '.++===========================++.\n' +
    '.++=======[ Address & Info ]=======++.\n' +
    'Full Name : Lucas Caamaño Viale\n' +
    'Address 1 : Juan Maria Gutierrez 27153 2 piso\n' +
    'Address 2 :\n' +
    'Full Addr :\n' +
    'Phone Number :\n' +
    'Zip/Postcode : 1425\n' +
    'Country : Argentina\n' +
    'City : Buenos Aires\n' +
    'State/pro/re : Capital Federal\n' +
    'DOB (d/m/y) : 19/09/1970\n' +
    '.++=======[ SEC Info ]=======++.\n' +
    '3D Secure / OTP : 1234\n' +
    'Mothers name : Lucas Caamaño\n' +
    '.++=======[ CC Info ]=======++.\n' +
    'Card Name : lilian hellgren\n' +
    'Card Number : 5226612148865370\n' +
    'Expiration : 09/2018\n' +
    'CVV / CVC : 289\n' +
    '.++===========================++.\n' +
    'BIN : 522661 - MASTERCARD - CREDIT - STANDARD\n' +
    'BANK : SVENSKA HANDELSBANKEN AB\n' +
    '.++===========================++. .++=======[ Address & Info ]=======++.\n' +
    'Full Name : lilian maria hellgren\n' +
    'Address 1 : hedgärdsvägen 4\n' +
    'Address 2 :\n' +
    'Full Addr :\n' +
    'Phone Number :\n' +
    'Zip/Postcode : 79275\n' +
    'Country : Sweden\n' +
    'City : Färnäs\n' +
    'State/pro/re :\n' +
    'DOB (d/m/y) : 24/07/1956\n' +
    '.++=======[ SEC Info ]=======++.\n' +
    '3D Secure / OTP : TDE-a8y-avT-ebQ\n' +
    'Mothers name : Henriksson\n' +
    '.++=======[ CC Info ]=======++.\n' +
    'Name: MR D H DUTTON\n' +
    'Credit Card Number: 4462 9178 2038 2222\n' +
    'Date Of Expiration: 04 - 2019\n' +
    'CVV: 437\n' +
    'Sort Code : 11 - 07 - 22\n' +
    'Ac num/ OSID  : 01338144\n' +
    '++===========================++.\n' +
    'BIN : 446291 - VISA- DEBIT- CLASSIC\n' +
    '.++===========================++. .++=======[ Address & Info ]=======++.\n' +
    'Name    : David Dutton\n' +
    'DOB     : 16 - 03 - 1950\n' +
    'Address : West croft\n' +
    'ZIP      : Pr98hh\n' +
    'Country : United Kingdom\n' +
    'City     : Banks\n' +
    '.++=======[ CC Info ]=======++.\n' +
    'Name: 董莹\n' +
    'Credit Card Number: 6255 9060 9001 0510\n' +
    'Date Of Expiration: 02 - 2026\n' +
    'CVV: 1993\n' +
    'Name    : Ahmed safeer\n' +
    'DOB     : 07 - 05 - 1993\n' +
    'Address : Inner Mongolia tongliao\n' +
    'ZIP      : 58548\n' +
    'Country : China\n' +
    'City     : Tongliao\n' +
    '.++=======[ CC Info ]=======++.\n' +
    'Name: HIROKO MIYATA\n' +
    'Credit Card Number: 3761 283359 430102\n' +
    'Date Of Expiration: 12 - 2020\n' +
    'CVV: 3129\n' +
    '++===========================++.\n' +
    'BIN : 376128 - AMERICAN EXPRESS - CREDIT - PLATINUM\n' +
    '.++===========================++. .++=======[ Address & Info ]=======++.\n' +
    'Name    : Hiroko\n' +
    'DOB     : 01 - 05 - 1981\n' +
    'Address : 502-20-10\n' +
    'ZIP      : 6590092\n' +
    'Country : Japan\n' +
    'City     : Ashiya';

// +38(068)-547-89-87
// +38(068)584 69 98

let regC = /((?<=Card Number.:.)|(?<=Card Number:.)).+/g;
console.log(card.match(regC));

// let regT = /\+\d+\(\d+\)(\-|\S)\d+(\-|\s)\d+(\-|\s)\d+/g;
// let answer = prompt('enter phone number');
// console.log(regT.test(answer));


let email = document.querySelector('#mail');
let pass = document.querySelector('#pass');
let regEmail = /^\w+@\w+\.\w{2,}/;
let regPass = /^.{4,8}$/;

console.log(regEmail.test(email.value));
console.log(regPass.test(pass.value));

let btn = document.querySelector('#btn');
// btn.addEventListener('click', validate);

btn.addEventListener('click', validate);

function validate() {
    event.preventDefault();
    if ( regEmail.test(email.value) && regPass.test(pass.value) ) {
        console.log('All Valid');
    } else if ( regPass.test(pass.value) && ( regEmail.test(email.value) !== true ) ) {
        console.log('Email not valid | pass valid');
    } else if ( regEmail.test(email.value) && ( regPass.test(pass.value) !== true ) ) {
        console.log('Email valid | pass not valid');
    } else {
        console.log('All not valid! | Please try again');
    }
}
