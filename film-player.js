(()=>{'use strict';
const root=document.querySelector('.dg-film-player');if(!root)return;
const video=root.querySelector('video'),overlay=root.querySelector('.film-overlay'),large=root.querySelector('.film-big-play'),play=root.querySelector('[data-film-play]'),mute=root.querySelector('[data-film-mute]'),seek=root.querySelector('.film-seek'),volume=root.querySelector('.film-volume'),clock=root.querySelector('.film-time'),full=root.querySelector('[data-film-fullscreen]'),message=document.getElementById('film-player-message');
if(!video||!overlay||!large||!play||!mute||!seek||!volume||!clock||!full)return;
const time=n=>{n=Number.isFinite(n)?Math.max(0,Math.floor(n)):0;return Math.floor(n/60)+':'+String(n%60).padStart(2,'0')};
function progress(){const duration=Number.isFinite(video.duration)?video.duration:0;seek.disabled=duration<=0;seek.value=duration?String(video.currentTime/duration*100):'0';seek.setAttribute('aria-valuetext',time(video.currentTime)+' of '+time(duration));clock.textContent=time(video.currentTime)+' / '+(duration?time(duration):'1:18')}
function state(){const playing=!video.paused&&!video.ended;root.classList.toggle('is-playing',playing);play.classList.toggle('is-playing',playing);play.setAttribute('aria-label',playing?'Pause film':'Play film');overlay.hidden=playing}
function audio(){const off=video.muted||video.volume===0;mute.classList.toggle('is-muted',off);mute.setAttribute('aria-label',off?'Unmute film':'Mute film');volume.value=String(video.muted?0:video.volume)}
async function toggle(){message.textContent='';if(!video.paused){video.pause();return}try{await video.play()}catch(_){message.textContent='Playback could not start. Please try again or use the native controls.';video.controls=true;root.classList.remove('is-enhanced')}}
large.addEventListener('click',toggle);play.addEventListener('click',toggle);video.addEventListener('click',()=>{if(root.classList.contains('is-enhanced'))toggle()});
video.addEventListener('keydown',e=>{if(!root.classList.contains('is-enhanced'))return;if(e.key===' '||e.key==='k'){e.preventDefault();toggle()}else if(['ArrowLeft','ArrowRight'].includes(e.key)&&Number.isFinite(video.duration)){e.preventDefault();video.currentTime=Math.max(0,Math.min(video.duration,video.currentTime+(e.key==='ArrowLeft'?-5:5)))}});
for(const event of ['play','pause','ended','emptied'])video.addEventListener(event,state);
for(const event of ['timeupdate','durationchange','loadedmetadata','emptied'])video.addEventListener(event,progress);
video.addEventListener('volumechange',audio);
video.addEventListener('ended',()=>{video.load();state();progress()});
video.addEventListener('error',()=>{message.textContent='The film could not load. Please check your connection and try again.';video.controls=true;root.classList.remove('is-enhanced')});
seek.addEventListener('input',()=>{if(Number.isFinite(video.duration)&&video.duration>0){video.currentTime=Number(seek.value)/100*video.duration;progress()}});
mute.addEventListener('click',()=>{if(video.muted||video.volume===0){video.muted=false;if(video.volume===0)video.volume=1}else video.muted=true});
volume.addEventListener('input',()=>{video.volume=Number(volume.value);video.muted=video.volume===0});
full.addEventListener('click',async()=>{try{if(document.fullscreenElement){await document.exitFullscreen()}else if(root.requestFullscreen){await root.requestFullscreen()}else if(video.webkitEnterFullscreen){video.webkitEnterFullscreen()}}catch(_){message.textContent='Fullscreen is unavailable in this browser.'}});
document.addEventListener('fullscreenchange',()=>full.setAttribute('aria-label',document.fullscreenElement===root?'Exit fullscreen':'Enter fullscreen'));
if(!root.requestFullscreen&&!video.webkitEnterFullscreen)full.hidden=true;
video.controls=false;root.classList.add('is-enhanced');state();audio();progress();
})();
