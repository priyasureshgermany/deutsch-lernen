/* Speak: reading texts aloud with the device voices, made sturdy for the
   browsers' known speech bugs (used by test.js, the A1/B1 practice pages and
   alltag.html – Gespräche, Briefe and the Hören scenes).

     Speak.run(pieces, {onend(ok), onutter(u, info)})
       pieces  [{text, voice?, lang?, rate?, pitch?}]
       onutter called for every utterance before it is spoken, e.g. to follow
               the reading; info = {full, off, last}: the whole text of its
               piece, where this part starts in it, whether it is the last part
     Speak.stop()

   - One sentence at a time, the next one started when the last ends. Long lines
     are split at sentence ends, because Chrome cuts off long utterances silently.
   - Every utterance is kept referenced until it ends (Chrome otherwise collects
     it and its end event never arrives – the ▶ button would stay "playing").
   - A sentence that does not start within 2.5 s is tried once more (Safari
     sometimes drops a speak() right after cancel()); if it still does not start,
     onend(false) – nothing was heard.
   - A sentence that started but never reports its end is given up after its
     expected time plus a margin (with an "end" event of its own, so whoever
     listens to it finishes too), and reading goes on.
   - The first sentence is spoken inside the tap (iPhone needs that) – unless
     speech was just cancelled: phone engines stutter when a new sentence starts
     that very moment, so then it waits the rest of 120 ms. */
(function(){
const synth=window.speechSynthesis;
const AFTER_STOP=120;
let gen=0,held=[],timer=0,stoppedAt=0;
function split(t){t=String(t).replace(/\s+/g," ").trim();if(t.length<=160)return t?[t]:[];
 const out=[];let cur="";
 (t.match(/.*?[.!?;:]+(?=\s|$)|.+$/g)||[t]).map(x=>x.trim()).filter(Boolean).forEach(s=>{if(cur&&(cur+" "+s).length>160){out.push(cur);cur=s}else cur=cur?cur+" "+s:s});
 if(cur)out.push(cur);
 /* a sentence still too long: break at commas */
 return out.flatMap(s=>s.length<=220?[s]:(s.match(/.*?,(?=\s|$)|.+$/g)||[s]).map(x=>x.trim()).filter(Boolean))}
function cancel(){if(!synth)return;try{if(synth.speaking||synth.pending){synth.cancel();stoppedAt=Date.now()}}catch(e){}}
function stop(){gen++;clearTimeout(timer);held=[];cancel()}
function run(pieces,o){o=o||{};stop();const my=gen;
 if(!synth||typeof SpeechSynthesisUtterance==="undefined"){o.onend&&o.onend(false);return}
 const list=[];
 pieces.forEach(p=>{const full=String(p.text).replace(/\s+/g," ").trim(),parts=split(full);let at=0;
  parts.forEach((t,k)=>{const off=full.indexOf(t,at);at=off+t.length;list.push(Object.assign({},p,{text:t,info:{full,off:Math.max(0,off),last:k===parts.length-1}}))})});
 if(!list.length){o.onend&&o.onend(true);return}
 let i=0,heard=false,tries=0;
 const done=ok=>{if(my!==gen)return;clearTimeout(timer);held=[];gen++;o.onend&&o.onend(ok)};
 function next(){if(my!==gen)return;clearTimeout(timer);if(i>=list.length){done(true);return}
  const p=list[i],u=new SpeechSynthesisUtterance(p.text);u.lang=p.lang||"de-DE";u.rate=p.rate||1;if(p.pitch)u.pitch=p.pitch;if(p.voice)u.voice=p.voice;
  let started=false,ended=false;
  const end=()=>{if(ended||my!==gen)return;ended=true;i++;tries=0;next()};
  u.onstart=()=>{if(my!==gen)return;started=heard=true;clearTimeout(timer);
   /* about 13 characters a second at rate 1; allow double plus 4 s */
   timer=setTimeout(()=>{cancel();if(!ended){try{u.dispatchEvent(new Event("end"))}catch(e){}}end()},(p.text.length/(13*(p.rate||1))*2+4)*1000)};
  u.onend=end;
  u.onerror=e=>{if(my!==gen||ended)return;if(e&&(e.error==="interrupted"||e.error==="canceled"))return;end()};
  held.push(u);
  if(o.onutter)try{o.onutter(u,p.info)}catch(e){}
  const go=()=>{if(my!==gen)return;try{if(synth.paused)synth.resume();synth.speak(u)}catch(e){end()}};
  const wait=Math.max(0,AFTER_STOP-(Date.now()-stoppedAt));
  if(wait)setTimeout(go,wait);else go();
  timer=setTimeout(()=>{if(started||ended||my!==gen)return;
   if(tries++<1){ended=true;cancel();try{u.dispatchEvent(new Event("end"))}catch(e){}setTimeout(()=>{if(my===gen)next()},250);return}
   ended=true;try{u.dispatchEvent(new Event("end"))}catch(e){}if(!heard){done(false);return}i++;tries=0;next()},2500+wait)}
 next()}
window.Speak={run,stop,split};
})();
