/* Speak: reading texts aloud with the device voices, made sturdy for the
   browsers' known speech bugs (used by test.js and the A1/B1 practice pages).

     Speak.run(pieces, {onend(ok)})   pieces: [{text, voice?, lang?, rate?}]
     Speak.stop()

   - One sentence at a time, the next one started when the last ends. Long lines
     are split at sentence ends, because Chrome cuts off long utterances silently.
   - Every utterance is kept referenced until it ends (Chrome otherwise collects
     it and its end event never arrives – the ▶ button would stay "playing").
   - A sentence that does not start within 2.5 s is tried once more (Safari
     sometimes drops a speak() right after cancel()); if it still does not start,
     onend(false) – nothing was heard.
   - A sentence that started but never reports its end is given up after its
     expected time plus a margin, and reading goes on.
   - The first sentence is spoken inside the tap (iPhone needs that). */
(function(){
const synth=window.speechSynthesis;
let gen=0,held=[],timer=0;
function split(t){t=String(t).replace(/\s+/g," ").trim();if(t.length<=160)return t?[t]:[];
 const out=[];let cur="";
 (t.match(/.*?[.!?;:]+(?=\s|$)|.+$/g)||[t]).map(x=>x.trim()).filter(Boolean).forEach(s=>{if(cur&&(cur+" "+s).length>160){out.push(cur);cur=s}else cur=cur?cur+" "+s:s});
 if(cur)out.push(cur);
 /* a sentence still too long: break at commas */
 return out.flatMap(s=>s.length<=220?[s]:(s.match(/.*?,(?=\s|$)|.+$/g)||[s]).map(x=>x.trim()).filter(Boolean))}
function stop(){gen++;clearTimeout(timer);held=[];if(synth){try{synth.cancel()}catch(e){}}}
function run(pieces,o){o=o||{};stop();const my=gen;
 if(!synth||typeof SpeechSynthesisUtterance==="undefined"){o.onend&&o.onend(false);return}
 const list=[];pieces.forEach(p=>split(p.text).forEach(t=>list.push(Object.assign({},p,{text:t}))));
 if(!list.length){o.onend&&o.onend(true);return}
 let i=0,heard=false,tries=0;
 const done=ok=>{if(my!==gen)return;clearTimeout(timer);held=[];gen++;o.onend&&o.onend(ok)};
 function next(){if(my!==gen)return;clearTimeout(timer);if(i>=list.length){done(true);return}
  const p=list[i],u=new SpeechSynthesisUtterance(p.text);u.lang=p.lang||"de-DE";u.rate=p.rate||1;if(p.voice)u.voice=p.voice;
  let started=false,ended=false;
  const end=()=>{if(ended||my!==gen)return;ended=true;i++;tries=0;next()};
  u.onstart=()=>{if(my!==gen)return;started=heard=true;clearTimeout(timer);
   /* about 13 characters a second at rate 1; allow double plus 4 s */
   timer=setTimeout(()=>{try{synth.cancel()}catch(e){}end()},(p.text.length/(13*(p.rate||1))*2+4)*1000)};
  u.onend=end;
  u.onerror=e=>{if(my!==gen||ended)return;if(e&&(e.error==="interrupted"||e.error==="canceled"))return;end()};
  held.push(u);
  try{if(synth.paused)synth.resume();synth.speak(u)}catch(e){end();return}
  timer=setTimeout(()=>{if(started||ended||my!==gen)return;
   if(tries++<1){ended=true;try{synth.cancel()}catch(e){}setTimeout(()=>{if(my===gen)next()},250);return}
   ended=true;if(!heard){done(false);return}i++;tries=0;next()},2500)}
 next()}
window.Speak={run,stop,split};
})();
