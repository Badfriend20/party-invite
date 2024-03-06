importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('beforeinstallprompt', (event) => {
    // Cancelamos el evento para evitar que se muestre el prompt de instalación automáticamente
    event.preventDefault();

    // Luego puedes decidir si mostrar manualmente el prompt de instalación basado en ciertas condiciones
    // Por ejemplo, podrías mostrar el prompt después de que el usuario haya interactuado con tu aplicación un cierto número de veces
    // o si han pasado cierta cantidad de tiempo desde su última visita.
}); 