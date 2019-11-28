'use strict'; // es kodov asumenq javascriptin vor 
//vor ashxatumenq nor standartov -- ES6 


abs = 5;
console.log(abs);


//goutyun uni 3 tesaki peremenaya - popoxakan
//popoxakan haytaraerlu araji dzevy -- klyuchevoy var - barov , vory arden chi ogtagorcvum ustarel uje ))
//popoxakani anun kara lini ,, tareric , tveric, $ sivol _ nerqevi gcik 
// bayc araji sivoly chpti lini tiv  u mekel  klyuchevoy barer chi kareli dnel 
//orinak error, promt, alert ev aylon mi xosqov js i meji klyuchevoy baerery choktagorcel vorpes popoxakani anun 
//popoxakani anuny kareli grel camelcase-aysinqn orinak, leftBorder-border grumenq mecatarov
///anunery dnel imastavorvac vor kardaluc parz lini inchi hamar carayum popoxakany 
// popoxakany grvac tarber registrnerov dranq nuyn chen , tarbere en 
// orinak  var LEFT = 1;  u var left = 1; sranq tarber popoxakaner en 

//mnacac erku dzevy popoxakan hatararelu , galisa ES6 - jamanakakic standartic
// let ev const orinak nerqevum 
//console.log(second);
//let second = 2;
//const pi = 3.14;
//tarberutyuny vari ev let - i 
//ete var -ov popoxakane haytararvac kodum, inqy arden goutyun uni minch kodi ashxately
// u inqy ka amen tex  orinak nerqevum
// var left = 1;
// console.log(left);
//console.log(left); -- orinak console.log-ov kanchumen popoxakanin vor der chi haytararvel 
//konsolum beruma underfind- bayc ete consol.log-ov kanchum enq haytarareluc heto 
// conslum- beruma ira arjeqy = 1;
//aysinqn var - ov stexcvac popoxakany, misht ka kanchenq iran mejev haytararerly te haytarareluc heto 
// isk ete nuyn pordzum enq let - popxakani het 
//console.log(second);
//let second = 2; // es depqum conslum bneruma vor chka tenc pooxakan der haytararvac chi 

// let second = 2;
// console.log(second); // bacy let haytarareluc heto nor consol kanchaeluc heto, 
//beruma ira arjeqy ,, aysinqn let - ov popoxakan haytararelu depqum, 
//inqy kashxati en jamanak  erb iran haytararum enq nor dranic heto kanchum
//da ognuma vor shat sxalneric xusapenq es kody hertakanutyamba kardum u 
//u kochvuma xostik -- kchshtenq hlo es pahy 
// isk vari jamanak erb kanchumes console.log-y demic lini heto lini meka inqy ka
// let tesaneli en varyum vortex inqy haytararvac e ete dneqn skopkeqi mej
//{let second = 2;} u kanchenq console.log(second); chi gtni let-in
// pti console log -nel lini skopkeqi mej vor ashxti {let second = 2; console.log(second);}
//ay senc kasxhati

// isk popoxakan const- tarberutyuny ena vor vor ia arjeqy hnarvor chi poxel
//mi angam grumenq u el chi kareli poxel isk let - i u var -i depqum hnaravora
//arjeqy hatrareluc hto poxel ... ba senc baner 

//das 2
// qani tip danix karoxenq haytararel popoxakneri mej kam vabshe. qani tip danih ka js - i mej
// yndanur 6 bayc nor standarty mihatela tip berel ( symbol ) 
// tvarkenq voronq en dranq 
// number / tvery karan linen te amboxjkan te drobnie tver tvery aranc skopkeqi en grum ete skopkeqi meja hamarvuma string
// string
//
// console.log(4/0);  es depqum kstananq Infinity, 
// tip danih string- naxadastutyun , stroka , i tarberutyun tveri string -y
// pti grvi chakertneri mej "" u tarberutyun chka '' odinarnie kavichkie ili dvaynine "" 
//4 tip danih logicheskina kam chisht kam sxal true , fasle -- menak es eru znachenian kara unena kochvuma boolean - tip 
//ka erku hat speceficheski ti danih null ev undefind 
//null et en depquma lium erb kodum uxaki bacakayuma orinak popoxakany 
//chka tenc anunov haytararvac popoxakan 
// isk undefind- et en jamanaka linum erb popoxakan ka bayc arjeq grac chi 
// consol log-ov kanchumenq popoxakani ananuov manaa galis , gtnuma 
//baycm ejy arjeq grac chi linum beruma undefind
//isk ay erb consolov kanchumen popxaknin ira anunov u vabshe tenc popoxakan chi gtnum 
//chi linum haytararvac yntanrapes tenc popoxakan , et jamanak beruma null
//5 ti danix obyekt 
//obekt popoxakan i mej karoxenq grel shat arjeqner tarber anunerov
// grvma skopkeqi mej nerqevum orinak
// let persone = {
//     name: "jhon",
//     age: 25,
//     isMarried: false
// };

// console.log(persone.name);  // erku dzev ka kanchelu iranc meky esa 
// console.log(persone["name"]); // esel erkrdo dzevna 

// masiv enq sarqum , kvadratni skopkeqi meja sarqvum nerqevum orinak
//masiv carayuma pahpanelu lyuboy ti danineri hamamr 

// let arr = ['plum.png', 'orange','apple.bmp'];

// console.log(arr[0])

//  alert("Hello World");

//  let answer = confirm("are you here?");

//  console.log(answer);

// let answer = +prompt("are you here?", "da");

// console.log(typeof(answer));

// console.log(4 + " - object");

// let incr  = 10,
//     decor = 10;


// console.log(incr++);
// console.log(decor--);

// console.log(5%2);
// console.log("2" === 2);
//== stuguma havasr en te che === 3 havasary stuguma tip dani

// let isChecked = true,
// isClose = false;
// console.log(isChecked && isClose);
//operator && ashxatuma senc ete erku komnel true-a kam false
//urish oriank ete grelenq asenq erku popoxakan 
// erkusi mejel arjeqy 7-a  && ste kashxati 
//bayc ka nayev ili ete kam tarberyaky  ||
//
// console.log(isChecked || !isClose); // aysiqnn orinak
//ete armeni kam artrui dzery ka 1000 dram kgnanq ete vohc meki 
//dzery chka chenq gna .

//  ! -- esel znak atricaniye 