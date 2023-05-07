const data = {
  slider0: {
    h1: "NAJKVALITETNIJI HOSTING U SRBIJI!",
    paragraph:
      "Mi smo CyperWebb hosting provajder iz Srbije koji Vam nudi uslige po svetskim standardima na domaćem tržištu. Naše usluge prilagođene su kako fizičkim tako i pravnim licima.",
  },
  slider1: {
    paragraph:
      "Naš cilj su zadovoljni korisnici hostinga u Srbiji.S tim u vezi, radujemo se uspešnoj i kvalitetnoj saradnji",
  },
  slider2: {
    paragraph:
      "Stabilno i sigurno hosting rešenje predstavlja potporu u osvajanju internet tržišta. Uz našu podršku na tom putu Vama preostaje da se fokusirate na ciljeve Vašeg biznisa",
  },
  slider3: {
    paragraph:
      "Registracije domena su, pored povoljnih usluga hosting ponude usklađene sa nabavnim cenama, tako da su troškovi Vašeg nastupa na internetu svedeni na minimum.",
  },
  slider4: {
    paragraph:
      "Cene naših usluga prilagodili smo uslovima tržišta i slobodno tvrdimo da nudimo najbolja hosting rešenja po najpovoljnijim uslovima na teritoriji Srbije.",
  },
};

function init() {
  let curr = 0;

  document.getElementById("btn-right").addEventListener("click", (e) => {
    curr = (curr + 1) % 5;

    slider_h1 = document.getElementById("slider-h1");
    slider_p = document.getElementById("slider-p");
    slider_image = document.getElementById("slider-image");

    if (data[`slider${curr}`]["h1"]) {
      slider_h1.textContent = data[`slider${curr}`]["h1"];
    } else {
      slider_h1.textContent = "";
    }

    slider_p.innerText = data[`slider${curr}`]["paragraph"];
    slider_image.src = `../images/slider${curr + 1}.png`;
  });

  document.getElementById("btn-left").addEventListener("click", (e) => {
    curr = (((curr - 1) % 5) + 5) % 5;
    console.log(curr);

    slider_h1 = document.getElementById("slider-h1");
    slider_p = document.getElementById("slider-p");
    slider_image = document.getElementById("slider-image");

    if (data[`slider${curr}`]["h1"]) {
      slider_h1.textContent = data[`slider${curr}`]["h1"];
    } else {
      slider_h1.textContent = "";
    }

    slider_p.innerText = data[`slider${curr}`]["paragraph"];
    slider_image.src = `../images/slider${curr + 1}.png`;
  });
}
