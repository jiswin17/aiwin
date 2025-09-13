// Theme Toggle
const themeToggle=document.getElementById('themeToggle');
themeToggle.addEventListener('click',()=>{
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
});

// Skill Bars
const skillBars=document.querySelectorAll('.bar div');
window.addEventListener('scroll',()=>{
  skillBars.forEach(bar=>{
    const value=bar.getAttribute('data-skill');
    const barPos=bar.getBoundingClientRect().top;
    const screenPos=window.innerHeight;
    if(barPos<screenPos-50){bar.style.width=value+'%';}
  });
});

// Stats Counter
const counters=document.querySelectorAll('.count');
counters.forEach(counter=>{
  const updateCount=()=>{
    const target=+counter.getAttribute('data-target');
    const count=+counter.innerText;
    const increment=target/200;
    if(count<target){counter.innerText=Math.ceil(count+increment);setTimeout(updateCount,10);}
    else{counter.innerText=target;}
  };
  updateCount();
});

// Typing Effect
const typing=document.getElementById('typing');
const text="Electrician • ITI Student • Practical Skills";
let index=0;
function type(){typing.innerText=text.slice(0,index);index++;if(index>text.length)index=0;setTimeout(type,100);}
type();

// Scroll Reveal
const revealElements=document.querySelectorAll('.reveal');
window.addEventListener('scroll',()=>{
  revealElements.forEach(el=>{
    const top=el.getBoundingClientRect().top;
    const screen=window.innerHeight;
    if(top<screen-50){el.classList.add('active');}
  });
});

// Language Switcher
const langSwitcher=document.getElementById('languageSwitcher');
langSwitcher.addEventListener('change',()=>{
  const lang=langSwitcher.value;
  const heroText=document.getElementById('heroName');
  const aboutText=document.getElementById('aboutText');
  if(lang==="en"){heroText.innerHTML='Hi, I’m <span>Aiwin Rijo Columbus</span>';aboutText.innerText='I’m an electrician, passionate about practical work and skilled in my field. Currently pursuing ITI certification and committed to delivering quality and reliable work.';}
  else if(lang==="hi"){heroText.innerHTML='नमस्ते, मैं हूँ <span>Aiwin Rijo Columbus</span>';aboutText.innerText='मैं एक इलेक्ट्रिशियन हूँ, व्यावहारिक काम में निपुण और अपने क्षेत्र में कुशल। वर्तमान में ITI प्रमाणन हासिल कर रहा हूँ और गुणवत्तापूर्ण काम देने के लिए प्रतिबद्ध हूँ।';}
  else if(lang==="ml"){heroText.innerHTML='ഹായ്, ഞാൻ <span>Aiwin Rijo Columbus</span>';aboutText.innerText='ഞാൻ ഒരു ഇലക്ട്രീഷ്യൻ ആണ്, പ്രായോഗിക ജോലി കഴിവുള്ളവനും തന്റെ മേഖലയിലെ കഴിവുള്ളവനും. നിലവിൽ ITI സർട്ടിഫിക്കറ്റ് നേടുകയാണ്, ഗുണമേന്മയുള്ള ജോലി നൽകാൻ പ്രതിബദ്ധനയുള്ളവൻ.';}
});
