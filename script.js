/**
 * Bojayá: Cartografía de la memoria y la resistencia
 * Archivo principal de JavaScript
 */

// --- DATOS DE LOS PUNTOS DE INTERÉS ---
const tourPoints = [
    {
        id: 1,
        title: "Iglesia San Pablo Apóstol y casco antiguo — Bellavista Viejo",
        lat: 6.5211,
        lng: -76.9726,
        category: "Hito histórico / Escenario significativo",
        categoryClass: "cat-historico",
        description: "Aquí ocurrió la masacre el 2 de mayo de 2002. El pueblo original fue abandonado tras el hecho por su vulnerabilidad a inundaciones; la iglesia fue restaurada y se mantiene como memorial. Cada 2 de mayo se realiza una procesión conmemorativa desde Bellavista Nuevo hasta este lugar.",
        notes: "Contextualizar la masacre y sus actores armados (FARC-EP, AUC). Explicar el refugio de la población civil en la iglesia.",
        source: "https://centrodememoriahistorica.gov.co/bojaya-resistencia-memoria-y-reclamo-por-la-vida/",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Parroquia_de_Tad%C3%B3_-_Choc%C3%B3.JPG/960px-Parroquia_de_Tad%C3%B3_-_Choc%C3%B3.JPG.webp"
    },
    {
        id: 2,
        title: "Bellavista Nuevo y el Cristo Mutilado",
        lat: 6.5236,
        lng: -76.9744,
        category: "Escenario significativo / Hito histórico",
        categoryClass: "cat-historico",
        description: "Nuevo casco urbano construido entre 2003 y 2007, un kilómetro río arriba y en terreno más alto para evitar inundaciones (diseño de la Universidad Javeriana, 265 viviendas). Es la actual cabecera municipal. En su iglesia se conserva el Cristo Mutilado —la imagen que perdió brazos y piernas en la explosión y se convirtió en símbolo nacional de la tragedia y de la búsqueda de paz (visitado por el papa Francisco en 2017)— junto al Cristo Negro que la FARC entregó en 2016 como gesto de reparación durante las negociaciones de paz.",
        notes: "Explicar la reubicación como política pública. Resaltar el significado simbólico del Cristo Mutilado y el acto de contrición de 2016.",
        source: "https://www.elcolombiano.com/cultura/cristo-mutilado-bojaya-historia-KA38386950",
        imageUrl: "https://estaticos.elcolombiano.com/binrepository/708x714/0c74/708d565/none/11101/VYBP/captura-de-pantalla-2026-06-26-13432_50983637_20260626142422.jpg"
    },
    {
        id: 3,
        title: "Vigía del Fuerte (Antioquia)",
        lat: 6.5573,
        lng: -76.8836,
        category: "Actor comunitario / Escenario significativo",
        categoryClass: "cat-comunitario",
        description: "Municipio vecino, al otro lado del río, en el departamento de Antioquia. Fue el primer punto al que llegaron los grupos armados antes de trasladarse a Bellavista, y su población brindó ayuda decisiva a los sobrevivientes tras la masacre. Hoy sigue siendo una comunidad hermana de Bojayá.",
        notes: "Resaltar la solidaridad comunitaria, las rutas de escape por el río y la resistencia civil de las comunidades vecinas.",
        source: "https://www.elcolombiano.com/cultura/cristo-mutilado-bojaya-historia-KA38386950",
        imageUrl: "https://www.ecured.cu/images/b/bb/Vista_aerea_de_vigia_del_fuerte_antioquia.jpg"
    },
    {
        id: 4,
        title: "Río Atrato — sujeto de derechos",
        lat: 6.5300,
        lng: -76.9600,
        category: "Política pública / Escenario significativo",
        categoryClass: "cat-politica",
        description: "El río Atrato es el eje de la vida material, cultural y espiritual de las comunidades afro e indígenas de la región. En 2016, la Corte Constitucional (Sentencia T-622) lo declaró 'sujeto de derechos a la protección, conservación, mantenimiento y restauración', ordenando al Estado y a las comunidades étnicas ejercer su tutela conjunta: un fallo pionero en Colombia sobre derechos de la naturaleza.",
        notes: "Vincular con la agenda global: derechos de la naturaleza, ODS 15 (Vida de ecosistemas terrestres) y 16 (Paz, justicia), y la justicia ambiental.",
        source: "https://forseti.defensoria.gov.co/gestor/compilacion/docs/t-622_2016.htm",
        imageUrl: "https://www.swissinfo.ch/content/wp-content/uploads/sites/13/2024/09/b2e13b2b4cb7a2bb7f02f69b52e2cb2e-87578875.jpg?ver=d977870a&fit=954,630"
    },
    {
        id: 5,
        title: "Quibdó, capital del Chocó",
        lat: 5.6919,
        lng: -76.6583,
        category: "Actor institucional",
        categoryClass: "cat-institucional",
        description: "A varias horas en lancha por el río Atrato desde Bojayá. Sede de la Diócesis de Quibdó (que acompañó a la comunidad antes y después de la masacre) y de la institucionalidad departamental. La distancia ilustra el aislamiento del territorio: los habitantes de Bojayá han reportado dificultades para acceder a atención hospitalaria rápida.",
        notes: "Analizar el abandono estatal histórico, las distancias geográficas, el papel clave de la Diócesis y las barreras de acceso a servicios.",
        source: "https://www.eltiempo.com/colombia/otras-ciudades/cristo-mutilado-de-bojaya-dio-esperanzas-de-paz-al-pueblo-colombiano-154128",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_lbxp6gvzu6FwY5eRjAuZ9z2bScuKwwPZA&s"
    },
    {
        id: 6,
        title: "Comité por los Derechos de las Víctimas de Bojayá y autoridades étnico-territoriales",
        lat: 6.5240,
        lng: -76.9750,
        category: "Actor comunitario",
        categoryClass: "cat-comunitario",
        description: "Organización de víctimas que, junto con los consejos comunitarios afrodescendientes y los resguardos indígenas Emberá de la región, organiza cada año la conmemoración del 2 de mayo y exige la implementación efectiva de la reparación colectiva bajo la Ley 1448 de 2011 y los decretos ley étnicos 4633, 4634 y 4635 de 2011.",
        notes: "Mostrar la organización comunitaria y étnico-territorial. Mencionar la importancia de los decretos ley étnicos en la reparación.",
        source: "https://accioneseiniciativas.centrodememoriahistorica.gov.co/s/inicio/item-set/486",
        imageUrl: "https://i1.sndcdn.com/avatars-000269406726-f9vfj4-t240x240.jpg"
    },
    {
        id: 7,
        title: "Congreso de la República — Ley 2087 de 2021",
        lat: 4.5981,
        lng: -74.0758,
        category: "Política pública",
        categoryClass: "cat-politica",
        description: "En 2021 el Congreso colombiano expidió la Ley 2087, que honra la memoria de las víctimas de Bojayá y declara el 2 de mayo día conmemorativo nacional. Este punto, aunque geográficamente distante, representa la respuesta institucional del Estado central frente al caso.",
        notes: "Analizar los avances y límites de la política pública de memoria. Cerrar el video con la propuesta personal de fortalecimiento.",
        source: "https://portalhistorico.unidadvictimas.gov.co/es/normativa-suin-juriscol/75177",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKnv48mLGXUOjQe54UwhpJU5GFvmkT_yrNQ&s"
    }
];

// --- ESTADO DE LA APLICACIÓN ---
let map;
let markers = [];
let currentPointIndex = -1; // -1 significa que no se ha iniciado el recorrido

// --- INICIALIZACIÓN ---
document.addEventListener("DOMContentLoaded", () => {
    initMap();
    setupEventListeners();
});

// --- FUNCIONES DEL MAPA ---
function initMap() {
    // Coordenadas iniciales (centrado general de Colombia/Chocó)
    const initialLat = 5.5;
    const initialLng = -76.0;
    const initialZoom = 6;

    // Inicializar Leaflet
    map = L.map('map', {
        zoomControl: false // Desactivamos el control por defecto para reubicarlo
    }).setView([initialLat, initialLng], initialZoom);

    // Añadir control de zoom en la esquina superior derecha
    L.control.zoom({
        position: 'topright'
    }).addTo(map);

    // Añadir capa de OpenStreetMap (gratuita, sin API key)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    // Crear marcadores para cada punto
    tourPoints.forEach((point, index) => {
        // Icono personalizado según la categoría (usando divIcon para aplicar clases CSS)
        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background-color: var(--${point.categoryClass}); width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

        const marker = L.marker([point.lat, point.lng], {
            icon: customIcon,
            title: point.title
        }).addTo(map);

        // Al hacer clic en un marcador, ir a ese punto
        marker.on('click', () => {
            goToPoint(index);
        });

        markers.push(marker);
    });
}

// --- LÓGICA DEL RECORRIDO ---
function goToPoint(index) {
    if (index < 0 || index >= tourPoints.length) return;
    
    currentPointIndex = index;
    const point = tourPoints[index];

    // Mover el mapa de forma suave (animada)
    // Usamos flyTo para un efecto cinematográfico ideal para el video
    map.flyTo([point.lat, point.lng], 14, {
        animate: true,
        duration: 2.5 // Duración en segundos de la animación
    });

    // Actualizar el panel lateral
    updateSidePanel(point);
    
    // Actualizar los controles de recorrido (barra de progreso, contador, botones)
    updateTourControls();
    
    // Actualizar notas del presentador
    updatePresenterNotes(point.notes);
}

function updateSidePanel(point) {
    const panelContent = document.getElementById('panel-content');
    const template = document.getElementById('panel-template');
    
    // Limpiar contenido actual
    panelContent.innerHTML = '';
    
    // Clonar la plantilla
    const clone = template.content.cloneNode(true);
    
    // Llenar datos
    clone.querySelector('.point-category').textContent = point.category;
    clone.querySelector('.point-category').classList.add(point.categoryClass);
    clone.querySelector('.point-title').textContent = point.title;
    clone.querySelector('.point-description').textContent = point.description;
    
    // Llenar fuente
    const sourceLink = clone.querySelector('.point-source-link');
    if (sourceLink && point.source) {
        sourceLink.href = point.source;
        sourceLink.style.display = 'inline-block';
    } else if (sourceLink) {
        sourceLink.style.display = 'none';
    }
    
    // Mostrar imagen si existe
    const img = clone.querySelector('.point-image');
    const placeholder = clone.querySelector('.image-placeholder');
    if (point.imageUrl) {
        img.src = point.imageUrl;
        img.classList.remove('hidden');
        placeholder.classList.add('hidden');
    } else {
        img.classList.add('hidden');
        placeholder.classList.remove('hidden');
    }
    
    panelContent.appendChild(clone);
}

function updateTourControls() {
    const total = tourPoints.length;
    const current = currentPointIndex + 1;
    
    // Actualizar texto del contador
    document.getElementById('tour-counter').textContent = `Punto ${current} de ${total}`;
    
    // Actualizar barra de progreso
    const progressPercentage = (current / total) * 100;
    document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
    
    // Habilitar/deshabilitar botones
    document.getElementById('btn-prev').disabled = currentPointIndex === 0;
    document.getElementById('btn-next').disabled = currentPointIndex === total - 1;
}

function updatePresenterNotes(notesText) {
    const notesContent = document.getElementById('notes-content');
    notesContent.innerHTML = `<p>${notesText}</p>`;
}

// --- EVENTOS ---
function setupEventListeners() {
    // Botones de recorrido
    document.getElementById('btn-prev').addEventListener('click', () => {
        if (currentPointIndex > 0) goToPoint(currentPointIndex - 1);
    });

    document.getElementById('btn-next').addEventListener('click', () => {
        // Si no se ha iniciado, ir al punto 0, de lo contrario avanzar
        if (currentPointIndex === -1) {
            goToPoint(0);
        } else if (currentPointIndex < tourPoints.length - 1) {
            goToPoint(currentPointIndex + 1);
        }
    });

    // Atajos de teclado
    document.addEventListener('keydown', (e) => {
        // Evitar que las flechas interactúen con el textarea u otros inputs si están enfocados
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;

        if (e.key === 'ArrowRight') {
            if (currentPointIndex === -1) goToPoint(0);
            else if (currentPointIndex < tourPoints.length - 1) goToPoint(currentPointIndex + 1);
        } else if (e.key === 'ArrowLeft') {
            if (currentPointIndex > 0) goToPoint(currentPointIndex - 1);
        } else if (e.key === 'n' || e.key === 'N') {
            // Tecla N para alternar las notas del presentador
            const notesPanel = document.getElementById('presenter-notes');
            notesPanel.classList.toggle('hidden');
        }
    });
}
