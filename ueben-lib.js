/* Üben – the logic behind Aussprache, Diktat and Verben (ueben.html), kept apart
   from the page so tools/check-ueben.mjs can test it.

     UL.sentences(level)   sentences from the app: "Alltag" (Alltagssätze,
                           saetze-data.js) or "A1" / "A2" / "B1" (Satzbau,
                           satzbau-data.js) → [{id, de, en}]
     UL.diktat(target, typed)  word by word: [{t, g, kind}] with kind
                           ok · case (Groß/klein) · uml (ä ö ü ß) · spell ·
                           miss (missing word) · extra · punct (missing or
                           wrong punctuation) · xpunct (extra punctuation)
     UL.heard(target, said)  pronunciation: [{t, ok, h}] – every word of the
                           target, heard or not (case, punctuation, ä/ae, ß/ss,
                           numbers as digits and compounds split in two are
                           all the same)
     UL.verbs()            the verbs for the drill: [{inf, sep, reg, praes[6],
                           perf[6], praet[6], alt}] – from woerter-lex.js (WL)
                           plus a few everyday verbs below
     UL.fold(word)         lower case, ä→a ö→o ü→u ß→ss (and ae oe ue)
*/
(function(){
const W=typeof window!=="undefined"?window:globalThis;

/* ---- words and punctuation ---- */
const WORD=/[A-Za-zÄÖÜäöüßéèêàáçñ0-9]+(?:['’\-][A-Za-zÄÖÜäöüßéèêàáçñ0-9]+)*/;
const TOK=new RegExp(WORD.source+"|[.,!?;:–—\\-\"„“”‚‘'…()]","g");
const tokens=s=>(String(s).replace(/\s+/g," ").match(TOK)||[]).map(t=>/^[.,!?;:–—\-"„“”‚‘'…()]$/.test(t)?{t,p:true}:{t,p:false});
/* quotation marks and dashes are not marked: the keyboards write them so differently */
const SOFT=/^["„“”‚‘'–—\-…()]$/;
const fold=w=>String(w).toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss")
 .replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u");
/* edit distance, for "almost the same word" */
function lev(a,b){if(a===b)return 0;const m=a.length,n=b.length;if(!m)return n;if(!n)return m;
 let p=Array.from({length:n+1},(_,j)=>j);for(let i=1;i<=m;i++){const c=[i];for(let j=1;j<=n;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=c}return p[n]}
const close=(a,b)=>{const x=a.toLowerCase(),y=b.toLowerCase();return lev(x,y)<=Math.max(1,Math.floor(Math.max(x.length,y.length)*.45))};

/* Align two token lists with the least cost: same → 0, almost the same → 1,
   anything else is one deleted and one inserted (2). Returns pairs [i, j]
   with -1 for a gap. */
function align(A,B,same,near){const m=A.length,n=B.length,D=[],P=[];
 for(let i=0;i<=m;i++){D[i]=[];P[i]=[];for(let j=0;j<=n;j++){
  if(!i&&!j){D[0][0]=0;continue}
  let best=Infinity,how=0;
  if(i&&j){const c=same(A[i-1],B[j-1])?0:near(A[i-1],B[j-1])?1:Infinity;if(D[i-1][j-1]+c<best){best=D[i-1][j-1]+c;how=1}}
  if(i&&D[i-1][j]+1<best){best=D[i-1][j]+1;how=2}
  if(j&&D[i][j-1]+1<best){best=D[i][j-1]+1;how=3}
  D[i][j]=best;P[i][j]=how}}
 const out=[];let i=m,j=n;
 while(i||j){const h=P[i][j];if(h===1){out.push([i-1,j-1]);i--;j--}else if(h===2){out.push([i-1,-1]);i--}else{out.push([-1,j-1]);j--}}
 return out.reverse()}

/* ---- Diktat: every difference, word by word ---- */
function diktat(target,typed){
 const A=tokens(target).filter(x=>!(x.p&&SOFT.test(x.t))),B=tokens(typed).filter(x=>!(x.p&&SOFT.test(x.t)));
 const same=(a,b)=>a.p===b.p&&(a.p?a.t===b.t:fold(a.t)===fold(b.t)||a.t.toLowerCase()===b.t.toLowerCase());
 const near=(a,b)=>a.p?b.p:!b.p&&close(fold(a.t),fold(b.t));
 return align(A,B,same,near).map(([i,j])=>{const a=i<0?null:A[i],b=j<0?null:B[j];
  if(!a)return {t:"",g:b.t,kind:b.p?"xpunct":"extra"};
  if(!b)return {t:a.t,g:"",kind:a.p?"punct":"miss"};
  if(a.p)return {t:a.t,g:b.t,kind:a.t===b.t?"ok":"punct"};
  if(a.t===b.t)return {t:a.t,g:b.t,kind:"ok"};
  if(a.t.toLowerCase()===b.t.toLowerCase())return {t:a.t,g:b.t,kind:"case"};
  const l=s=>s.toLowerCase().replace(/ae/g,"ä").replace(/oe/g,"ö").replace(/ue/g,"ü");
  /* the same apart from ä/ö/ü/ß (also "ae" for ä): an umlaut or ß mistake */
  if(fold(a.t)===fold(b.t)&&l(a.t)!==l(b.t)||/[äöüß]/i.test(a.t+b.t)&&fold(a.t)===fold(b.t))return {t:a.t,g:b.t,kind:"uml"};
  if(fold(a.t)===fold(b.t))return {t:a.t,g:b.t,kind:"case"};
  return {t:a.t,g:b.t,kind:"spell"}})}

/* ---- Aussprache: which words of the sentence were heard ---- */
const NUM={0:"null",1:"eins",2:"zwei",3:"drei",4:"vier",5:"fünf",6:"sechs",7:"sieben",8:"acht",9:"neun",10:"zehn",11:"elf",12:"zwölf",13:"dreizehn",14:"vierzehn",15:"fünfzehn",16:"sechzehn",17:"siebzehn",18:"achtzehn",19:"neunzehn",20:"zwanzig",30:"dreißig",40:"vierzig",50:"fünfzig",60:"sechzig",70:"siebzig",80:"achtzig",90:"neunzig",100:"hundert",1000:"tausend"};
const key=w=>{w=String(w).toLowerCase().replace(/[’']/g,"").replace(/-/g,"");if(NUM[w])w=NUM[w];if(w==="ein"||w==="eine"||w==="einen")w="eins";return fold(w)};
function heard(target,said){
 const A=tokens(target).filter(x=>!x.p).map(x=>x.t),B=tokens(said).filter(x=>!x.p).map(x=>x.t);
 /* a compound heard as two words (Deutsch Kurs) counts as one */
 const Bk=B.map(key),Ak=A.map(key);
 const merged=[];for(let j=0;j<B.length;j++){if(j+1<B.length&&!Ak.includes(Bk[j])&&Ak.includes(Bk[j]+Bk[j+1])){merged.push({t:B[j]+" "+B[j+1],k:Bk[j]+Bk[j+1]});j++}else merged.push({t:B[j],k:Bk[j]})}
 /* any word heard in the same place is shown under the target word */
 const pairs=align(Ak,merged,(a,b)=>a===b.k,()=>true);
 const out=[];pairs.forEach(([i,j])=>{if(i<0)return;out.push({t:A[i],ok:j>=0&&Ak[i]===merged[j].k,h:j>=0?merged[j].t:""})});
 return out}

/* ---- sentences the app already has ---- */
function sbSentence(row){const raw=row[0].replace(/[.?!]$/,""),end=(row[0].match(/[.?!]$/)||["."])[0];
 const t=raw.split("|").map(b=>b.replace(/^\^/,"")).map((x,i)=>i&&!/^,/.test(x)?" "+x:x).join("");return t[0].toUpperCase()+t.slice(1)+end}
function sentences(level){const out=[];
 if(level==="Alltag"){(W.AS||[]).forEach(T=>(T.groups||[]).forEach(g=>(g.items||[]).forEach(it=>(it.ex||[]).forEach((x,k)=>{
  const de=String(x[1]).replace(/\[\[|\]\]/g,"").trim();if(de.split(/\s+/).length>=3)out.push({id:"as:"+T.id+":"+it.w+":"+k,de,en:x[2]||""})}))));return out}
 ((W.SB||{})[level]||[]).forEach((set,si)=>set.forEach((row,i)=>out.push({id:"sb:"+level+":"+si+":"+i,de:sbSentence(row),en:row[1]||""})));
 return out}

/* ---- verbs: Präsens, Perfekt, Präteritum for every person ---- */
/* everyday verbs the texts of Wörter erkennen do not have – more with sein in the
   Perfekt, and common separable verbs. Same format as VERBS_SRC in woerter-lex.js. */
const EXTRA=`
aufstehen: stehe auf,stehst auf,steht auf,stehen auf,steht auf,stehen auf; stand auf; ist aufgestanden
ankommen: komme an,kommst an,kommt an,kommen an,kommt an,kommen an; kam an; ist angekommen
aufwachen: wache auf,wachst auf,wacht auf,wachen auf,wacht auf,wachen auf; wachte auf; ist aufgewacht
einsteigen: steige ein,steigst ein,steigt ein,steigen ein,steigt ein,steigen ein; stieg ein; ist eingestiegen
umsteigen: steige um,steigst um,steigt um,steigen um,steigt um,steigen um; stieg um; ist umgestiegen
einschlafen: schlafe ein,schläfst ein,schläft ein,schlafen ein,schlaft ein,schlafen ein; schlief ein; ist eingeschlafen
einkaufen: kaufe ein,kaufst ein,kauft ein,kaufen ein,kauft ein,kaufen ein; kaufte ein; hat eingekauft
fernsehen: sehe fern,siehst fern,sieht fern,sehen fern,seht fern,sehen fern; sah fern; hat ferngesehen
einladen: lade ein,lädst ein,lädt ein,laden ein,ladet ein,laden ein; lud ein; hat eingeladen
laufen: laufe,läufst,läuft,laufen,lauft,laufen; lief; ist gelaufen
fliegen: R; flog; ist geflogen
reisen: reise,reist,reist,reisen,reist,reisen; reiste; ist gereist
warten: warte,wartest,wartet,warten,wartet,warten; wartete; hat gewartet
beginnen: R; begann; hat begonnen
sitzen: sitze,sitzt,sitzt,sitzen,sitzt,sitzen; saß; hat gesessen
`;
/* left out of the drill: reflexive, only with es, or odd for every person */
const SKIP=new Set(["wohlfühlen","ernähren","freuen","ausruhen","bewerben","möchten","regnen","schneien","stattfinden","reifen","gefallen","schwerfallen","kosten","dauern","stimmen","sinken","vertragen","zünden","streichen"]);
const PRON=["ich","du","er/sie/es","wir","ihr","sie/Sie"];
const HABEN=["habe","hast","hat","haben","habt","haben"],SEIN=["bin","bist","ist","sind","seid","sind"];
/* a regular present built from the stem: du arbeitest, du tanzt */
function regular(inf){const st=inf.replace(/e?n$/,""),s=/(s|ß|z|x)$/.test(st),e=/([dt]|chn|[^aeioulrhmn][mn])$/.test(st)?"e":"";
 return [st+"e",st+(s?"t":e+"st"),st+e+"t",inf,st+e+"t",inf]}
function parse(src){const out={};String(src).trim().split("\n").forEach(line=>{const [inf,rest]=line.split(": "),[pres,praet,perf]=rest.split("; ");
 out[inf]={forms:pres==="R"?regular(inf):pres.split(","),praet,perf}});return out}
/* Präteritum from the er-form: weak (machte) +st +n +t; strong (kam) +st +en +t,
   after d/t (fand) +est +et, after s/ß/z (aß) +est, also aßt */
function praet(er){const [w,...rest]=er.split(" "),pre=rest.length?" "+rest.join(" "):"";
 let f,alt={};if(/e$/.test(w))f=[w,w+"st",w,w+"n",w+"t",w+"n"];
 else{const dt=/[dt]$/.test(w),s=/(s|ß|z|x)$/.test(w);
  f=[w,w+(dt||s?"est":"st"),w,w+"en",w+(dt?"et":"t"),w+"en"];
  if(s)alt[1]=w+"t";if(dt)alt[1]=w+"st"}
 return {f:f.map(x=>x+pre),alt:Object.fromEntries(Object.entries(alt).map(([k,v])=>[k,v+pre]))}}
let CACHE=null;
function verbs(){if(CACHE)return CACHE;const src=Object.assign({},W.WL&&W.WL.VERBS||{},parse(EXTRA)),out=[];
 Object.keys(src).sort((a,b)=>a.localeCompare(b,"de")).forEach(inf=>{if(SKIP.has(inf))return;const v=src[inf];
  const forms=v.forms,sep=/ /.test(forms[0]),[aux,...pp]=v.perf.split(" "),part=pp.join(" "),pr=praet(v.praet);
  const stem=inf.replace(/e?n$/,"");
  /* regular: no change in the present, Präteritum on -te from the same stem, participle on -t */
  const reg=!sep&&forms.join()===regular(inf).join()&&/te$/.test(v.praet)&&v.praet.startsWith(stem)&&/t$/.test(part);
  const A=aux==="ist"?SEIN:HABEN;
  out.push({inf,sep,reg,aux:aux==="ist"?"sein":"haben",part,praes:forms.slice(),perf:A.map(x=>x+" "+part),praet:pr.f,alt:{praet:pr.alt}})});
 return CACHE=out}

W.UL={tokens,fold,lev,align,diktat,heard,sentences,sbSentence,verbs,regular,praet,PRON,EXTRA,SKIP};
})();
