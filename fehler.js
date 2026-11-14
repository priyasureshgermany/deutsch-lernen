/* Fehlerheft – the mistake notebook, shared by every section that marks answers
   (test.js Modelltests, satzbau.js Satzbau and the Grammatik tests, ueben.html
   Diktat and Verben). Kept on this device only, in localStorage "dl:fehler".

     Fehler.add(e)    e = {src, q, k, ...}; a mistake already in the notebook
                      comes back to the start (ok = 0) and counts once more
       src  where it came from ("Modelltest A1 · Hören · Teil 1")
       k    how the review asks it again:
            "mc"    o:[options], a: index of the right one
            "text"  a:[accepted answers], m: "verb" | "form" | "diktat"
            "order" blocks:[…], sols:[[keys…]…], show:[sentences…], end
       q    the question as shown; g what was answered; why, ctx, say, en optional
     Fehler.all()     every entry, oldest first
     Fehler.right(id) answered right in the review: after two in a row it leaves
                      the notebook (returns true then)
     Fehler.wrong(id) answered wrong again: back to the start
     Fehler.remove(id), Fehler.clear()
   Every change sends {dlFehler: count} to index.html (the Tagesplan shows it). */
(function(){
const K="dl:fehler",MAX=400;
function load(){try{const a=JSON.parse(localStorage.getItem(K)||"[]");return Array.isArray(a)?a:[]}catch(e){return []}}
function save(a){try{localStorage.setItem(K,JSON.stringify(a.slice(-MAX)))}catch(e){}
 try{if(parent!==window)parent.postMessage({dlFehler:a.length},location.origin)}catch(e){}}
/* a short stable id from where it came from, the question and the answer */
function hash(s){let h=5381;for(let i=0;i<s.length;i++)h=(h*33^s.charCodeAt(i))>>>0;return h.toString(36)}
const idOf=e=>hash([e.src,e.k,e.q,JSON.stringify(e.a!=null?e.a:e.show||"")].join("\u0001"));
const cut=(s,n)=>s==null?s:String(s).length>n?String(s).slice(0,n)+" …":String(s);
function add(e){if(!e||!e.q)return;const a=load(),id=idOf(e),old=a.find(x=>x.id===id),now=Date.now();
 const rec=Object.assign({},e,{id,ctx:cut(e.ctx,1500),say:cut(e.say,1500),t:now,ok:0,n:old?(old.n||1)+1:1});
 const rest=a.filter(x=>x.id!==id);rest.push(rec);save(rest)}
function right(id){const a=load(),e=a.find(x=>x.id===id);if(!e)return false;e.ok=(e.ok||0)+1;
 if(e.ok>=2){save(a.filter(x=>x!==e));try{localStorage.setItem(K+":done",String((+localStorage.getItem(K+":done")||0)+1))}catch(err){}return true}
 save(a);return false}
function wrong(id){const a=load(),e=a.find(x=>x.id===id);if(!e)return;e.ok=0;e.n=(e.n||1)+1;save(a)}
function remove(id){save(load().filter(x=>x.id!==id))}
function clear(){save([])}
const learned=()=>{try{return +localStorage.getItem(K+":done")||0}catch(e){return 0}};
window.Fehler={add,all:load,right,wrong,remove,clear,learned,KEY:K};
})();
