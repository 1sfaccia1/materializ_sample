const sidenav = document.querySelector('.sidenav');
M.Sidenav.init(sidenav, {});



const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000
});

const ac = document.querySelectorAll('.autocomplete');
M.autocomplete.init(ac, {
  data: {
    "": null,
    "": null,
    "": null,
    "": null,
    "": null,
    "": null,
    "": null,
    "": null,
    "": null,
    
  }
});
