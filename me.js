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
const FIELDS=[
 ["vorname","Vorname","first name"],["nachname","Nachname","surname"],["strasse","Straße und Hausnummer","street and number"],
 ["plz","Postleitzahl","postcode"],["ort","Ort","town"],["telefon","Telefon","phone"],["email","E-Mail","email"],
 ["geb","Ihr Geburtsdatum (TT.MM.JJJJ)","your date of birth"],["land","Heimatland","home country"],["sprache","Muttersprache","native language"],["alter","Alter","age"],
 ["kind","Name des Kindes","child's name"],["kindgeb","Geburtsdatum des Kindes (TT.MM.JJJJ)","child's date of birth"]];
const v=k=>(me[k]||"").trim();
const full=()=>[v("vorname"),v("nachname")].filter(Boolean).join(" ");
const plzOrt=()=>[v("plz"),v("ort")].filter(Boolean).join(" ");
/* Placeholder (lower case, German and English) → value; "" leaves it as it is. */
const MAP={
 "ihr name":full,"your name":full,"name":full,
 "nachname":()=>v("nachname"),"surname":()=>v("nachname"),
 "adresse":()=>v("strasse"),"address":()=>v("strasse"),"straße, hausnummer":()=>v("strasse"),"street, number":()=>v("strasse"),"street":()=>v("strasse"),"straße":()=>v("strasse"),
 "adresse, wohnung":()=>v("strasse"),"address, flat":()=>v("strasse"),
 "straße, hausnummer, plz ort":()=>v("strasse")&&plzOrt()?v("strasse")+", "+plzOrt():"","street, number, postcode, town":()=>v("strasse")&&plzOrt()?v("strasse")+", "+plzOrt():"",
 "plz ort":plzOrt,"postcode, town":plzOrt,"postleitzahl":()=>v("plz"),"postcode":()=>v("plz"),
 "ort":()=>v("ort"),"town":()=>v("ort"),
 "telefon":()=>v("telefon"),"telefonnummer":()=>v("telefon"),"phone":()=>v("telefon"),"phone number":()=>v("telefon"),
 "e-mail":()=>v("email"),"email":()=>v("email"),
 "land":()=>v("land"),"country":()=>v("land"),"heimatland":()=>v("land"),"home country":()=>v("land"),
 "muttersprache":()=>v("sprache"),"native language":()=>v("sprache"),"alter":()=>v("alter"),"age":()=>v("alter"),
 "name des kindes":()=>v("kind"),"child's name":()=>v("kind"),"name der tochter":()=>v("kind"),"daughter's name":()=>v("kind")};

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
function birth(k){const m=v(k).match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);if(!m)return null;const d=new Date(+m[3],+m[2]-1,+m[1],12);return isNaN(d)?null:d}
/* Whose birthday: the child's when the child is named just before. */
const whose=b=>/Kind|Tochter|Sohn/.test(b.slice(-45))||(v("kind")&&b.slice(-45).includes(v("kind")))?"kindgeb":"geb";
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
  if(k==="geburtsdatum"){const d=birth(whose(s.slice(0,at)));if(!d)return all;dates.push(d);return mark(fmtDe(d))}
  if(k==="datum"){const d=dateFor(s.slice(0,at),sent,state);if(!d)return all;dates.push(d);return mark(fmtDe(d))}
  if(k==="monat"){const d=monthFor(s.slice(0,at),mi++);dates.push(d);return mark(MON[d.getMonth()])}
  if(k==="jahr"){const y=T0().getFullYear()-1;dates.push(y);return mark(String(y))}
  const f=MAP[k];const val=f?f():"";return val?mark(val):all})}
function fillEn(s,dates){let i=0;
 return s.replace(/\[([^\]\[]+)\]/g,(all,key)=>{const k=key.trim().toLowerCase();
  if(k==="date"||k==="month"||k==="year"||k==="date of birth"){const d=dates[i++];if(d==null)return all;
   return (typeof d==="number"?String(d):k==="month"?MEN[d.getMonth()]:fmtEn(d))}
  const f=MAP[k];const val=f?f():"";return val||all})}

window.Me={FIELDS,get:()=>Object.assign({},me),
 set(o){me=o||{};try{localStorage.setItem("dl:me",JSON.stringify(me))}catch(e){}},
 fill(s){return typeof s==="string"?fillDe(s,[]):s},
 pair(de,en){const dates=[];const a=typeof de==="string"?fillDe(de,dates):de;return [a,typeof en==="string"?fillEn(en,dates):en]},
 /* ⟦x⟧ → marked value; for a page's own placeholder function. */
 mark:s=>s.replace(/⟦([^⟧]*)⟧/g,'<span class="ph me">$1</span>'),
 plain:s=>String(s).replace(/[⟦⟧]/g,"")};
})();
