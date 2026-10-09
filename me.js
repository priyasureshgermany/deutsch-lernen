/* Meine Angaben – the learner's own details, kept only on this device
   (localStorage "dl:me", entered in the app's "Meine Angaben" dialog). The
   repo is public, so personal details never go into the data files: the
   [Platzhalter] in letters, dialogues and sample answers are filled in here,
   when a page loads.

   Me.fill(text)      German text → placeholders replaced. A filled value is
                      wrapped in ⟦…⟧ so the page can mark it (its PH turns ⟦x⟧
                      into <span class="ph me">x</span>) and its speech strips
                      the marks.
   Me.pair(de, en)    the same for a German text and its translation, giving
                      both the same dates in the same order; the English gets
                      plain values, no marks.
   Dates are never personal: they are made up from today so that every letter
   reads like a real one – the letter's date is today, "bis zum …" two weeks
   ahead, "am Donnerstag, den …" the next Thursday (the last one when the
   sentence is in the past), "ab dem …" the first of next month, and so on.
   Reference numbers (Kundennummer, IBAN …) stay as placeholders. */
(function(){
let me={};try{me=JSON.parse(localStorage.getItem("dl:me")||"{}")||{}}catch(e){}
/* The form, in groups: [key, German label, English label, input type, wide] */
const FIELDS=[
 {g:"Ich",f:[["vorname","Vorname","first name"],["nachname","Nachname","surname"],["geb","Geburtsdatum","date of birth","date"],
  ["strasse","Straße und Hausnummer","street and number","",1],["etage","Wohnung / Etage (z. B. 2. OG links)","flat / floor","",1],
  ["plz","Postleitzahl","postcode"],["ort","Ort","town"],
  ["telefon","Telefon","phone","tel"],["email","E-Mail","email","email"],["seit","In Deutschland seit (Jahr)","in Germany since (year)","number"]]},
 {g:"Arbeit, Ämter, Bank",f:[["firma","Arbeitgeber (Firma)","employer","",1],["stnr","Steuernummer","tax number"],["kgnr","Kindergeldnummer","child benefit number"],
  ["kvnr","Krankenkasse: Versichertennummer","health insurance number","",1],["iban","IBAN","IBAN","",1],["bank","Name der Bank","bank","",1]]},
 {g:"Herkunft",f:[["land","Heimatland (Herkunftsland)","home country"],["nat","Staatsangehörigkeit (z. B. indisch)","nationality"],["sprache","Muttersprache","native language"],
  ["gericht","Typisches Gericht aus der Heimat","typical dish from home"],["fest","Wichtiges Fest in der Heimat","important festival at home"],
  ["sport","Beliebte Sportart in der Heimat","popular sport at home"],["tradition","Eine Tradition im Winter (kurzer Satz)","a winter tradition","",1]]},
 {g:"Familie",f:[["partner","Name der Ehefrau / des Partners","partner's name","",1],
  ["kind","1. Kind: Name","1st child's name"],["kindsex","1. Kind ist","1st child is","sex"],["kindgeb","1. Kind: Geburtsdatum","1st child's date of birth","date",1],
  ["kind2","2. Kind: Name","2nd child's name"],["kind2sex","2. Kind ist","2nd child is","sex"],["kind2geb","2. Kind: Geburtsdatum","2nd child's date of birth","date",1]]}];
const v=k=>(me[k]||"").trim();
const full=()=>[v("vorname"),v("nachname")].filter(Boolean).join(" ");
/* The children, and which one a sentence is about: a daughter's sentence
   gets the daughter, a son's the son, anything else the first child. */
const kids=()=>[["kind","kindsex","kindgeb"],["kind2","kind2sex","kind2geb"]].map(([n,x,g])=>({n:v(n),s:v(x),g})).filter(k=>k.n);
let hint="";   /* the child a whole letter or dialogue is about, set by Me.about() */
function kidFor(ctx){const ks=kids(),none={n:"",g:"kindgeb"};if(!ks.length)return none;
 const want=/Tochter|daughter/i.test(ctx||"")?"f":/Sohn|\bson\b/i.test(ctx||"")?"m":"";
 const w=want||hint;return (w&&ks.find(k=>k.s===w))||ks[0]}
const age=()=>{const d=birth("geb");if(!d)return v("alter");const t=new Date();let a=t.getFullYear()-d.getFullYear();
 if(t.getMonth()<d.getMonth()||(t.getMonth()===d.getMonth()&&t.getDate()<d.getDate()))a--;return String(a)};
const NEWADR="Musterstraße 12, 60311 Frankfurt am Main";
/* "lebe seit [Zeit] in Deutschland": years since the year given. */
const years=l=>{const y=+v("seit"),n=new Date().getFullYear()-y;if(!y||n<0||n>80)return "";
 return l==="de"?(n<=1?"einem Jahr":`${n} Jahren`):(n<=1?"a year":`${n} years`)};
/* [Nummer]: the learner's own for tax, child benefit and health insurance;
   an example for the numbers of one made-up order, booking or contract. */
const NUM={kindergeldnummer:"kgnr",steuernummer:"stnr",versichertennummer:"kvnr"};
const EXNUM={kundennummer:"KD-482915",mitgliedsnummer:"M-20417",vertragsnummer:"V-3381904",bestellnummer:"302-7719458",buchungsnummer:"BK-58213"};
function numFor(before){const m=before.match(/(\w*nummer)\s*(ist\s*)?$/i);const lab=m?m[1].toLowerCase():"";
 return NUM[lab]?v(NUM[lab]):EXNUM[lab]||""}
const plzOrt=()=>[v("plz"),v("ort")].filter(Boolean).join(" ");
/* Placeholder (lower case, German and English) → value; "" leaves it as it is. */
const MAP={
 "ihr name":full,"your name":full,"name":full,
 "nachname":()=>v("nachname"),"surname":()=>v("nachname"),
 "adresse":()=>v("strasse"),"address":()=>v("strasse"),"straße, hausnummer":()=>v("strasse"),"street, number":()=>v("strasse"),"street":()=>v("strasse"),"straße":()=>v("strasse"),
 "adresse, wohnung":()=>v("strasse"),"address, flat":()=>v("strasse"),
  "plz ort":plzOrt,"postcode, town":plzOrt,"postleitzahl":()=>v("plz"),"postcode":()=>v("plz"),
 "ort":()=>v("ort"),"town":()=>v("ort"),
 "telefon":()=>v("telefon"),"telefonnummer":()=>v("telefon"),"phone":()=>v("telefon"),"phone number":()=>v("telefon"),
 "e-mail":()=>v("email"),"email":()=>v("email"),
 "land":()=>v("land"),"country":()=>v("land"),"heimatland":()=>v("land"),"home country":()=>v("land"),
 "muttersprache":()=>v("sprache"),"native language":()=>v("sprache"),"alter":age,"age":age,
 "name des kindes":c=>kidFor(c).n,"child's name":c=>kidFor(c).n,"name der tochter":()=>kidFor("Tochter").n,"daughter's name":()=>kidFor("Tochter").n,
 "name des sohnes":()=>kidFor("Sohn").n,"son's name":()=>kidFor("Sohn").n,
 "adresse, wohnung 2. og links":()=>v("strasse")?v("strasse")+", "+(v("etage")||"Wohnung 2. OG links"):"",
 "address, flat 2nd floor left":()=>v("strasse")?v("strasse")+", "+(v("etage")||"flat on the 2nd floor, left"):"",
 "firma":()=>v("firma"),"company":()=>v("firma"),"iban":()=>v("iban"),"name der bank":()=>v("bank"),"bank":()=>v("bank"),"bank name":()=>v("bank"),
 "zeit":()=>years("de"),"time":()=>years("en"),
 "gericht":()=>v("gericht"),"dish":()=>v("gericht"),"fest":()=>v("fest"),"festival":()=>v("fest"),
 "sportart":()=>v("sport"),"sport":()=>v("sport"),"tradition":()=>v("tradition"),
 /* Only for one made-up situation – examples, like the dates. The new
    address of the moving letter must not be the learner's own. */
 "betrag":()=>"1.200","amount":()=>"1,200","marke":()=>"Bosch","brand":()=>"Bosch",
 "neue adresse":()=>NEWADR,"new address":()=>NEWADR,
 "straße, hausnummer, plz ort":()=>NEWADR,"street, number, postcode, town":()=>NEWADR,
 "name der ehefrau":()=>v("partner"),"wife's name":()=>v("partner"),"name des partners":()=>v("partner"),"partner's name":()=>v("partner")};

/* ---- dates ---- */
const MON=["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
const MEN=["January","February","March","April","May","June","July","August","September","October","November","December"];
const WD=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
const T0=()=>{const d=new Date();d.setHours(12,0,0,0);return d};
const add=(n)=>{const d=T0();d.setDate(d.getDate()+n);return d};
const workday=d=>{while(d.getDay()===0||d.getDay()===6)d.setDate(d.getDate()+1);return d};
const fmtDe=d=>`${d.getDate()}. ${MON[d.getMonth()]} ${d.getFullYear()}`;
const fmtEn=d=>`${d.getDate()} ${MEN[d.getMonth()]} ${d.getFullYear()}`;
/* Past tense: one of these words, or a perfect tense (habe … verloren). */
const PERF=/\b(habe|hat|haben|bin|ist|sind)\b.*\b(ge\w+(t|en)|\w+iert|verloren|vergessen|ausgezogen|umgezogen|eingezogen|bekommen|erhalten)\b/i;
const PAST=/\b(konnte|war|waren|hatte|wurde|fehlte|gefehlt|geliefert|bestellt|erhalten|bekommen|gekauft|informiert|angerufen|geschrieben|bereits)\b/i;
/* A date from the form: 2019-05-03 (date picker) or 03.05.2019 (older entries). */
function birth(k){const x=v(k);let m=x.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(m)return new Date(+m[1],+m[2]-1,+m[3],12);
 m=x.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);return m?new Date(+m[3],+m[2]-1,+m[1],12):null}
/* Whose birthday: the child's when the child is named just before. */
const whose=b=>{const t=b.slice(-45),k=kids().find(k=>t.includes(k.n));if(k)return k.g;return /Kind|Tochter|Sohn/.test(t)?kidFor(t).g:"geb"};
/* The date a German [Datum] stands for, from the words before it. */
function dateFor(before,sentence,state){
 const b=before.slice(-60);let m;
 if(/(geb\.|geb\. am|geboren am)\s*$/.test(b))return birth(whose(b));
 if((m=b.match(/(Montag|Dienstag|Mittwoch|Donnerstag|Freitag|Samstag|Sonntag),?\s*(den\s*)?$/))){
  const want=WD.indexOf(m[1]),d=T0(),past=PAST.test(sentence)||PERF.test(sentence);
  if(past){do d.setDate(d.getDate()-1);while(d.getDay()!==want)}else{do d.setDate(d.getDate()+1);while(d.getDay()!==want)}
  return d}
 if(/(—|–|-)\s*[^,—–]*,\s*den\s*$/.test(b)||/\],\s*den\s*$/.test(b))return T0();          /* the letter's own date */
 if(/seit dem\s*$/.test(b))return add(-7);
 if(state.from&&/bis( zum)?\s*$/.test(b)){state.from=false;return add(-13)}
 if(/Termin\w* am\s*$/.test(b))return workday(add(3));
 if(/vom\s*$/.test(b)){state.from=true;return add(-20)}
 if(/bis\s*$/.test(b)&&state.from){state.from=false;return add(-13)}
 if(/fristgerecht zum\s*$/.test(b)){const d=T0();d.setMonth(d.getMonth()+3,0);return d}  /* end of the month after next */
 if(/ab dem\s*$/i.test(b)){const d=T0();d.setMonth(d.getMonth()+1,1);return d}
 if(/bis (zum|spätestens)\s*$/.test(b))return add(/gültig/.test(sentence)?42:14);
 const past=PAST.test(sentence)||PERF.test(sentence);
 if(/am\s*$/.test(b))return past?add(-6):workday(add(3));
 return past?add(-7):add(7)}
function monthFor(before,n){const d=T0();d.setDate(1);
 if(/1\.\s*$/.test(before))d.setMonth(d.getMonth()+1);else d.setMonth(d.getMonth()-(n===0?2:1));return d}

const mark=x=>"⟦"+x+"⟧";
/* German first: work out each date, then give the English the same ones. */
function fillDe(s,dates){const state={};let mi=0;
 return s.replace(/\[([^\]\[]+)\]/g,(all,key,at)=>{const k=key.trim().toLowerCase();
  /* only the placeholder's own sentence says whether it is in the past */
  const from=Math.max(s.lastIndexOf(". ",at),s.lastIndexOf("! ",at),s.lastIndexOf("? ",at),s.lastIndexOf("\n",at)),nx=s.slice(at).search(/[.!?](\s|$)/);
  const sent=s.slice(from+1,nx<0?s.length:at+nx+1);
  if(k==="nummer"){const n=numFor(s.slice(0,at));dates.nums=(dates.nums||[]).concat([n]);return n?mark(n):all}
  if(k==="geburtsdatum"){const d=birth(whose(s.slice(0,at)));if(!d)return all;dates.push(d);return mark(fmtDe(d))}
  if(k==="datum"){const d=dateFor(s.slice(0,at),sent,state);if(!d)return all;dates.push(d);return mark(fmtDe(d))}
  if(k==="monat"){const d=monthFor(s.slice(0,at),mi++);dates.push(d);return mark(MON[d.getMonth()])}
  if(k==="jahr"){const y=T0().getFullYear()-1;dates.push(y);return mark(String(y))}
  if((k==="land"||k==="heimatland")&&/Staatsangehörigkeit\s*$/.test(s.slice(0,at))&&v("nat"))return mark(v("nat"));
  const f=MAP[k];const val=f?f(sent):"";return val?mark(val):all})}
function fillEn(s,dates){let i=0;
 return s.replace(/\[([^\]\[]+)\]/g,(all,key)=>{const k=key.trim().toLowerCase();
  if(k==="number"){const n=(dates.nums||[]).shift();return n||all}
  if(k==="date"||k==="month"||k==="year"||k==="date of birth"){const d=dates[i++];if(d==null)return all;
   return (typeof d==="number"?String(d):k==="month"?MEN[d.getMonth()]:fmtEn(d))}
  const f=MAP[k];const val=f?f(s):"";return val||all})}

window.Me={FIELDS,birth,
 /* A letter or dialogue that speaks only of a Sohn (or a Tochter) keeps that
    child in every line, the subject line included; call before filling it. */
 about(text){const t=String(text||""),so=/Sohn|\bson\b/i.test(t),da=/Tochter|daughter/i.test(t);hint=so&&!da?"m":da&&!so?"f":""},get:()=>Object.assign({},me),
 set(o){me=o||{};try{localStorage.setItem("dl:me",JSON.stringify(me))}catch(e){}},
 fill(s){return typeof s==="string"?fillDe(s,[]):s},
 pair(de,en){const dates=[];const a=typeof de==="string"?fillDe(de,dates):de;return [a,typeof en==="string"?fillEn(en,dates):en]},
 /* ⟦x⟧ → marked value; for a page's own placeholder function. */
 mark:s=>s.replace(/⟦([^⟧]*)⟧/g,'<span class="ph me">$1</span>'),
 plain:s=>String(s).replace(/[⟦⟧]/g,"")};
})();
