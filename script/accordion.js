console.log('Cargando Accordion...');
const dataAccordion = [
{
  title: "¿Qué es una laptop?",
  desc: "Una laptop es una computadora portátil diseñada para trabajar, estudiar, navegar en internet o jugar, combinando potencia y movilidad en un solo equipo."
},
{
  title: "¿Qué componentes mejoran el rendimiento de una PC?",
  desc: "Los componentes más importantes son el procesador (CPU), memoria RAM, almacenamiento SSD y tarjeta gráfica (GPU). Una buena combinación mejora velocidad y rendimiento."
},
{
  title: "¿Qué periféricos son esenciales para un setup?",
  desc: "Los periféricos básicos incluyen monitor, teclado, mouse, audífonos o headset. También puedes añadir webcam, micrófono y parlantes."
},
{
  title: "¿Cómo elegir el equipo ideal?",
  desc: "Depende del uso. Para oficina basta un equipo básico, para diseño o gaming conviene más RAM, mejor procesador y una tarjeta gráfica dedicada."
}
];

(function () {
    let ACCORDION = {
      init: function () {
        let _self = this;
        //llamanos las funciones
        this.insertData(_self);
        this.eventHandler(_self);
      },
  
      eventHandler: function (_self) {
        let arrayRefs = document.querySelectorAll('.accordion-title');
  
        for (let x = 0; x < arrayRefs.length; x++) {
          arrayRefs[x].addEventListener('click', function(event){
            console.log('event', event);
            _self.showTab(event.target);
          });
        }
      },

showTab: function(refItem){

    let clickedTab = refItem.parentElement;
    let activeTab = document.querySelector('.tab-active');

    // Si clickeó el mismo que ya estaba abierto → cerrar
    if(activeTab === clickedTab){
        activeTab.classList.remove('tab-active');
        return;
    }

    // Si había otro abierto → cerrarlo
    if(activeTab){
        activeTab.classList.remove('tab-active');
    }

    // Abrir el clickeado
    clickedTab.classList.add('tab-active');
},
  
      insertData: function (_self) {
        dataAccordion.map(function (item, index) {
          document.querySelector('.main-accordion-container').insertAdjacentHTML('beforeend', _self.tplAccordionItem(item));
        });
      },

      tplAccordionItem: function (item) {
        return(`<div class='accordion-item'>
        <p class='accordion-title'>${item.title}</p>
        <p class='accordion-desc'>${item.desc}</p>
      </div>`)},
    }
  
    ACCORDION.init();
  })();
