var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var a=n("2shzp");async function r(e,t,o){const n=`https://api.openweathermap.org/data/2.5/forecast?lat=${e}&lon=${t}&appid=${o}&units=metric`;try{const e=(await a.default.get(n)).data;e.list.forEach((e=>{new Date(1e3*e.dt)}));document.querySelector(".show-on-map").addEventListener("click",(()=>function(e){void 0===e&&(e="Kyiv");const t=`https://www.google.com/maps/place/${e}`;window.open(t,"_blank")}(e.city.name)))}catch(e){console.log(e)}}(async()=>{try{const e=await new Promise(((e,t)=>{navigator.geolocation.getCurrentPosition((t=>e(t)),(t=>{e(null)}))})).then((e=>e||{coords:{latitude:50.4501,longitude:30.5234}}));if(!e)return;const t=e.coords.latitude,o=e.coords.longitude,n="ba95449c69063d2989b1d45f265b0f98",c=await async function(e,t){const o=`https://nominatim.openstreetmap.org/reverse?lat=${e}&lon=${t}&format=jsonv2`;try{return(await a.default.get(o)).data.address.city}catch(e){console.log(e)}}(t,o);document.querySelector(".location").innerHTML=c,await async function(e,t,o){const n=`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&appid=${o}&units=metric`;try{const e=(await a.default.get(n)).data,t=new Date,o={day:"numeric",month:"long",year:"numeric"},r=t.toLocaleDateString("en-GB",o),c=t.toLocaleString("en-US",{weekday:"long"}),i=document.querySelector(".degrees"),l=document.querySelector(".whats-the-weather"),d=document.querySelector(".week-day"),s=document.querySelector(".weather-date"),u=document.querySelector(".weather-icon");i.innerHTML=`${Math.round(e.main.temp)}°`,l.innerHTML=e.weather[0].description.charAt(0).toUpperCase()+e.weather[0].description.slice(1),d.innerHTML=c,s.innerHTML=r;const p=`http://openweathermap.org/img/w/${e.weather[0].icon}.png`;u.setAttribute("src",p)}catch(e){console.log(e)}}(t,o,n),await r(t,o,n)}catch(e){console.log(e)}})();
//# sourceMappingURL=index.857f3a3c.js.map
