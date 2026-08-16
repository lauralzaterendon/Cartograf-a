# Cartografía de la memoria y la resistencia: Bojayá

Esta es una aplicación web interactiva (Single Page Application) diseñada como herramienta visual para un recorrido narrado en video sobre el caso de la masacre de Bojayá, Colombia.

El proyecto está construido puramente con **HTML, CSS y JavaScript (Vanilla)**, utilizando la librería **Leaflet.js** para el mapeo interactivo y capas gratuitas de OpenStreetMap, sin requerir claves de API ni procesos de compilación (build).

## Características principales

- **Mapa interactivo**: Ubicaciones precisas de 7 hitos clave en el territorio y fuera de él.
- **Recorrido Guiado**: Navegación suave (animación fly-to) entre puntos usando botones o atajos de teclado.
- **Diseño Sobrio y Respetuoso**: Paleta de colores tierra y verde oscuro, adecuada para la sensibilidad del tema.
- **Notas Ocultas del Presentador**: Un panel que se activa con el teclado para leer notas clave durante la grabación, sin estorbar la interfaz pública.
- **Sin Dependencias Complejas**: Listo para abrir en cualquier navegador o alojar en servicios estáticos.

## Instrucciones de uso local

1. No es necesario instalar Node.js ni usar NPM.
2. Simplemente abre el archivo `index.html` en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari).
3. Asegúrate de tener conexión a internet activa para que los mapas de OpenStreetMap y la librería Leaflet se carguen correctamente.

## Controles para la grabación (Modo Recorrido)

Para facilitar tu presentación en cámara:

- **Flecha Derecha (`→`)**: Avanza de manera fluida al siguiente punto del recorrido.
- **Flecha Izquierda (`←`)**: Retrocede al punto anterior.
- **Tecla `N`**: Alterna la visibilidad del "Panel de Notas del Presentador" (recomiendo usarlo solo si no estás grabando esa porción de la pantalla, o como referencia rápida que luego editas).

## Cómo personalizar (Reemplazo de Imágenes)

El proyecto viene con "placeholders" de imágenes. Para incluir tus propias fotografías o imágenes de archivo:

1. Coloca tus imágenes en la carpeta del proyecto (ej. crea una subcarpeta `imagenes/`).
2. Abre el archivo `index.html`.
3. Busca la etiqueta `<template id="panel-template">`.
4. Comenta o elimina el bloque `<div class="image-placeholder">...</div>`.
5. Descomenta la línea `<img src="ruta/a/tu/imagen.jpg" alt="Descripción" class="point-image hidden">`.
6. Alternativamente, en `script.js` dentro de la función `updateSidePanel`, puedes agregar lógica para que cada punto tenga una imagen distinta añadiendo una propiedad `imageUrl` a cada objeto en el array `tourPoints`.

## Publicación

Puedes publicar esto gratuitamente de manera muy rápida:
- **GitHub Pages**: Sube los archivos a un repositorio de GitHub y activa GitHub Pages en los ajustes del repositorio.
- **Netlify / Vercel**: Arrastra y suelta la carpeta contenedora en sus respectivas interfaces web.
