console.log('Cards cargado correctamente');

const dataCards = [
{
  title: "Laptops de Alto Rendimiento",
  url_image: "./img/laptop2.jfif",
  desc: "Equipos potentes para estudio, trabajo y gaming.",
  cta: "Ver más",
  link: "./laptops.php"
},
{
  title: "Componentes Premium",
  url_image: "./img/componentes1.jfif",
  desc: "Procesadores, RAM, SSD y tarjetas gráficas modernas.",
  cta: "Ver más",
  link: "./componentes.php"
},
{
  title: "Periféricos y Accesorios",
  url_image: "./img/perifericos2.jfif",
  desc: "Mouse, teclados, headsets y accesorios para tu setup.",
  cta: "Ver más",
  link: "./perifericos_accesorios.php"
}
];

(function () {
  let CARD = {
    init: function () {
      //console.log('card module was loaded');
      let _self = this;

      //llamanos las funciones
      this.insertData(_self);
      //this.eventHandler(_self);
    },

    eventHandler: function (_self) {
      let arrayRefs = document.querySelectorAll('.accordion-title');

      for (let x = 0; x < arrayRefs.length; x++) {
        arrayRefs[x].addEventListener('click', function (event) {
          console.log('event', event);
          _self.showTab(event.target);
        });
      }
    },

    insertData: function (_self) {
      dataCards.map(function (item, index) {
        document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
      });
    },

    tplCardItem: function (item, index) {
      return (`<div class='card-item' id="card-number-${index}">
            <img src="${item.url_image}"/>
            <div class="card-info">
              <p class='card-title'>${item.title}</p>
              <p class='card-desc'>${item.desc}</p>
              <div class="boton-cta">
              <a class='card-cta' target="blank" href="${item.link}">${item.cta}</a>
              </div>
            </div>
          </div>`)
    },
  }

  CARD.init();
})();