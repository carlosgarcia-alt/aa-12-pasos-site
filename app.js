// Configuración básica
const OFFICIAL_URL = "https://www.aa.org/the-twelve-steps"; // Enlace de referencia oficial
const STEPS = [
  {
    "title": "Admitir la impotencia ante el alcohol",
    "summary": "Reconocer que el consumo se volvió inmanejable y que, por cuenta propia, no se ha podido controlar. Aceptar este hecho abre la puerta al cambio."
  },
  {
    "title": "Creer en una fuerza mayor que nosotros",
    "summary": "Aceptar que existe una ayuda más grande que uno mismo —sea espiritual, comunitaria o de otra naturaleza— capaz de devolver equilibrio y cordura."
  },
  {
    "title": "Decidir confiar y poner la voluntad en esa ayuda",
    "summary": "Tomar la decisión consciente de apoyarse en esa fuerza y dejar de luchar en solitario, orientando la vida hacia una guía más sana."
  },
  {
    "title": "Hacer un inventario moral valiente",
    "summary": "Revisar con honestidad conductas, miedos, resentimientos y daños causados. Nombrar lo que duele para poder trabajarlo."
  },
  {
    "title": "Compartir el inventario con alguien de confianza",
    "summary": "Expresar sin adornos lo descubierto ante uno mismo, otra persona y una fuerza superior, para aliviar la carga y clarificar el rumbo."
  },
  {
    "title": "Prepararse para abandonar defectos de carácter",
    "summary": "Estar dispuesto a soltar hábitos y actitudes que sostienen el problema. La apertura al cambio es la base del progreso."
  },
  {
    "title": "Pedir humildemente ayuda para superar esos defectos",
    "summary": "Reconocer límites personales y solicitar apoyo para transformar lo que no se puede cambiar solo."
  },
  {
    "title": "Hacer una lista de las personas dañadas",
    "summary": "Identificar a quienes fueron afectadas por nuestras acciones y estar dispuesto a reparar, cuando sea posible y prudente."
  },
  {
    "title": "Emprender enmiendas directas cuando no cause más daño",
    "summary": "Ofrecer disculpas y resarcir, con tacto y responsabilidad, cuidando no empeorar las cosas para nadie."
  },
  {
    "title": "Mantener un inventario diario y corregir al instante",
    "summary": "Vigilar actitudes y decisiones cotidianas. Admitir errores pronto evita recaer en viejos patrones."
  },
  {
    "title": "Fortalecer la conexión mediante reflexión u oración",
    "summary": "Dedicar tiempo a la serenidad: meditar, orar o reflexionar para alinear acciones con principios y mantener claridad."
  },
  {
    "title": "Compartir el mensaje y practicar los principios",
    "summary": "Ayudar a otras personas con problemas similares y vivir estos principios en todos los ámbitos, con coherencia y servicio."
  }
];

// Render de tarjetas
function renderSteps() {
  const grid = document.getElementById("steps");
  grid.innerHTML = "";
  STEPS.forEach((s, i) => {
    const card = document.createElement("article");
    card.className = "card";
    card.setAttribute("tabindex", "0");

    const num = document.createElement("div");
    num.className = "num";
    num.textContent = i + 1;

    const h3 = document.createElement("h3");
    h3.textContent = s.title;

    const p = document.createElement("p");
    p.textContent = s.summary;

    const more = document.createElement("a");
    more.className = "more";
    more.href = OFFICIAL_URL;
    more.target = "_blank";
    more.rel = "noopener noreferrer";
    more.textContent = "Texto completo (sitio oficial)";

    card.appendChild(num);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(more);
    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderSteps);
