
const D=window.WORTSTUFE_LEXICON.levels[window.LEVEL],$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const cats=[...new Set(D.map(x=>x.category))].sort();
$("#category").innerHTML+=cats.map(c=>`<option value="${c}">${c}</option>`).join("");
function speak(t){speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang="de-DE";u.rate=.86;speechSynthesis.speak(u)}
function render(){const q=$("#search").value.trim().toLowerCase(),c=$("#category").value;const arr=D.filter(x=>(!c||x.category===c)&&(!q||(x.word+" "+x.ar+" "+x.example+" "+x.example_ar).toLowerCase().includes(q)));$("#count").textContent=D.length;$("#list").innerHTML=arr.map((x,i)=>`<article class="vcard"><div class="vtop"><span class="badge">${window.LEVEL}</span><span class="type">${x.type}</span><button class="speak" data-s="${encodeURIComponent(x.word)}">🔊</button></div><h2>${x.word}</h2><div class="meaning">${x.ar}</div><div class="example"><div class="de">${x.example}</div><div class="ar">${x.example_ar}</div></div><div class="topic">${x.category}</div></article>`).join("");$$("[data-s]").forEach(b=>b.onclick=()=>speak(decodeURIComponent(b.dataset.s)))}
$("#search").oninput=render;$("#category").onchange=render;render();
