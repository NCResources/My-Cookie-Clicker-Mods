# Mods:
## [Rotten Cookies](rottenCookies.js):
### Bookmarklet:
```
javascript:(function(){if(document.getElementById('topbarOrteil')==null){alert('This only works on Cookie Clicker!')}else{if(Game.mods['Rotten Cookies']){Game.Notify('Mod already installed!','<b>Rotten Cookies</b>',[0,0,'https://ncresources.github.io/My-Cookie-Clicker-Mods/rottenCookies.png'])}else{Game.Notify('Installing mod!','<b>Rotten Cookies</b>',[0,0,'https://ncresources.github.io/My-Cookie-Clicker-Mods/rottenCookies.png']);Game.LoadMod('https://ncresources.github.io/My-Cookie-Clicker-Mods/rottenCookies.js')}}})()
```
# Bookmarklets:
## Toggleable:
### Auto-clicker:
```
javascript:(function(){if(document.getElementById('topbarOrteil')==null){alert('This only works on Cookie Clicker!')}else{if(typeof autoClick==='undefined')window.autoClick=false;if(autoClick){PlaySound('snd/tickOff.mp3');autoClick=false;Game.Notify('Auto-Clicker Disabled','<b>NOOOOOOOOOOOOOOOOOOO</b>',[1,7]);clearInterval(window.autoClickInterval)}else{PlaySound('snd/tick.mp3');autoClick=true;Game.Notify('Auto-Clicker Enabled','<b>MWA HA HA HA, it doesn\'t even know that I\'m cheating</b>',[1,7]);window.autoClickInterval=setInterval(()=>{Game.ClickCookie()},10)}}})()
```
### Dev Tools:
```
javascript:(function(){if(document.getElementById('topbarOrteil')==null){alert('This only works on Cookie Clicker!')}else{let devToolsEnabled=(l('debug').style.display==='block');if(!devToolsEnabled){PlaySound('snd/tick.mp3');Game.Notify('Dev Tools Enabled','<b>I HAVE THE POWER</b>',[1,7]);Game.OpenSesame();l('debug').style.display='block'}else{PlaySound('snd/tickOff.mp3');Game.Notify('Dev Tools Disabled','<b>Turn them back on, NOW</b>',[1,7]);l('debug').style.display='none'}}})()
```
## Non-toggleable:
### JavaScript Code Runner:
```
javascript:(function(){var code=prompt('Code to run:');if(code){var script=document.createElement('script');script.textContent=decodeURIComponent(code);document.head.appendChild(script);document.head.removeChild(script)}})()
```
