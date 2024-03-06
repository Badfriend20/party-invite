importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.precaching.precacheAndRoute([{"revision":"5871d715df288083065453d93df0f0c6","url":"assets/background-7Woe69Ju.svg"},{"revision":"7d4b20ba7a3c5a9b765ecef8d189dba2","url":"assets/boton-WBGdwJiH.svg"},{"revision":"97340041053e353c5f3d3b8b1ce4098e","url":"assets/index-bd6cCnKM.css"},{"revision":"9d94c10895790203fa44863001419b32","url":"assets/index-RdR2Es0N.js"},{"revision":"f37cd17d7ed2443b1c5a2667835ddd28","url":"assets/KGMidnightMemories-AEDrti9G.ttf"},{"revision":"a6e5446a7c5789aabc9b37eaaf72134d","url":"assets/Oswald-VariableFont_wght-4JitQCio.ttf"},{"revision":"8e3a10e157f75ada21ab742c022d5430","url":"favicon.svg"},{"revision":"ab45db89eb9f5998807e4bff7a371e92","url":"index.html"},{"revision":"8e3a10e157f75ada21ab742c022d5430","url":"vite.svg"}]);

self.addEventListener('beforeinstallprompt', (event) => {
    // Cancelamos el evento para evitar que se muestre el prompt de instalación automáticamente
    event.preventDefault();

    // Luego puedes decidir si mostrar manualmente el prompt de instalación basado en ciertas condiciones
    // Por ejemplo, podrías mostrar el prompt después de que el usuario haya interactuado con tu aplicación un cierto número de veces
    // o si han pasado cierta cantidad de tiempo desde su última visita.
}); 