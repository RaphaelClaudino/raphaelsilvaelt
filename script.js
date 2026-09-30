const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const languageSelect = document.querySelector("#language-select");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
let submittedName = "";

const translations = {
  en: {
    pageTitle: "Raphael Silva ELT | English lessons for your next step",
    metaDescription: "Personalized English lessons with Raphael Silva. Build confidence, communicate clearly, and make English work for you.",
    skip: "Skip to content",
    navLabel: "Main navigation",
    brandHome: "Raphael Silva ELT home",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    languageLabel: "Choose language",
    navApproach: "My approach",
    navBenefits: "Why learn with me",
    navCta: "Let’s talk",
    heroImage: "Teacher and student having a focused conversation in a bright learning space",
    eyebrow: "Raphael Silva · English language teaching",
    heroTitle1: "English for the",
    heroTitle2: "next",
    heroTitle3: "you.",
    heroCopy: "Build the confidence to speak up, take opportunities, and feel at home in English, one purposeful lesson at a time.",
    heroCta: "Find your way forward",
    heroNote: "Personal lessons. Real-life progress.",
    approachKicker: "THE APPROACH",
    approachTitle1: "You bring the ambition.",
    approachTitle2: "I’ll help with the words.",
    approachCopy: "Learning English should connect to the life you want to live, not just the next page in a textbook. We’ll start with your goals and build a practical path to reach them.",
    approachLink: "Tell me what you’re working toward",
    benefitsKicker: "WHY LEARN WITH ME",
    benefitsTitle1: "A lesson plan that",
    benefitsTitle2: "starts with you.",
    benefitsIntro: "No one-size-fits-all course. Just thoughtful teaching, useful practice, and a plan shaped around what matters in your life.",
    benefit1Title: "Your goals set the direction",
    benefit1Copy: "Prepare for work, travel, study, or everyday conversation with lessons built for the situations you actually face.",
    benefit2Title: "Speak more, with more confidence",
    benefit2Copy: "Practice expressing your ideas in a supportive space where mistakes are part of learning, not a reason to hold back.",
    benefit3Title: "Progress you can put to use",
    benefit3Copy: "Build vocabulary, fluency, and communication strategies you can carry straight into your day.",
    contactKicker: "START A CONVERSATION",
    contactTitle1: "Let’s make English",
    contactTitle2: "work for you.",
    contactCopy: "Tell me a little about what you’re looking for. We can figure out a good next step together.",
    contactAside: "No pressure. Just a conversation about your goals.",
    nameLabel: "Your name",
    namePlaceholder: "e.g. Alex Morgan",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    focusLabel: "What would you like to focus on?",
    focusPlaceholder: "Choose an area",
    focusConversation: "Everyday conversation",
    focusWork: "English for work",
    focusTravel: "Travel and new experiences",
    focusStudy: "Study or exam preparation",
    focusOther: "Something else",
    messageLabel: "A little about your goals",
    messagePlaceholder: "What would you like English to help you do?",
    submit: "Send an inquiry",
    submitted: "Thanks, {name}. The form is ready, but needs an email or form-service connection before it can deliver your inquiry.",
    footerTagline: "English for the life you’re building.",
    backTop: "Back to top",
    footerNote: "Learn with purpose. Speak with confidence."
  },
  pt: {
    pageTitle: "Raphael Silva ELT | Inglês para o seu próximo passo",
    metaDescription: "Aulas personalizadas de inglês com Raphael Silva. Desenvolva confiança, comunique-se com clareza e use o inglês a seu favor.",
    skip: "Pular para o conteúdo",
    navLabel: "Navegação principal",
    brandHome: "Página inicial de Raphael Silva ELT",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
    languageLabel: "Escolher idioma",
    navApproach: "Minha abordagem",
    navBenefits: "Por que aprender comigo",
    navCta: "Vamos conversar",
    heroImage: "Professor e aluno conversando em um ambiente de aprendizagem iluminado",
    eyebrow: "Raphael Silva · ensino de inglês",
    heroTitle1: "Inglês para a",
    heroTitle2: "próxima",
    heroTitle3: "versão de você.",
    heroCopy: "Ganhe confiança para se expressar, aproveitar oportunidades e se sentir à vontade em inglês, uma aula com propósito de cada vez.",
    heroCta: "Dê o próximo passo",
    heroNote: "Aulas personalizadas. Progresso para a vida real.",
    approachKicker: "A ABORDAGEM",
    approachTitle1: "Você traz a vontade.",
    approachTitle2: "Eu ajudo com as palavras.",
    approachCopy: "Aprender inglês deve se conectar à vida que você quer viver, não apenas à próxima página de um livro. Vamos começar pelos seus objetivos e criar um caminho prático para alcançá-los.",
    approachLink: "Conte o que você quer alcançar",
    benefitsKicker: "POR QUE APRENDER COMIGO",
    benefitsTitle1: "Um plano de aulas que",
    benefitsTitle2: "começa com você.",
    benefitsIntro: "Nada de curso igual para todo mundo. Ensino cuidadoso, prática útil e um plano feito para o que importa na sua vida.",
    benefit1Title: "Seus objetivos definem o caminho",
    benefit1Copy: "Prepare-se para o trabalho, viagens, estudos ou conversas do dia a dia com aulas pensadas para situações reais.",
    benefit2Title: "Fale mais, com mais confiança",
    benefit2Copy: "Pratique suas ideias em um ambiente acolhedor, onde errar faz parte do aprendizado e não é motivo para ficar em silêncio.",
    benefit3Title: "Progresso que você pode usar",
    benefit3Copy: "Amplie seu vocabulário, sua fluência e suas estratégias de comunicação para levar o inglês para o seu dia a dia.",
    contactKicker: "VAMOS CONVERSAR",
    contactTitle1: "Vamos fazer o inglês",
    contactTitle2: "funcionar para você.",
    contactCopy: "Conte um pouco sobre o que você procura. Juntos, podemos encontrar um bom próximo passo.",
    contactAside: "Sem pressão. Só uma conversa sobre seus objetivos.",
    nameLabel: "Seu nome",
    namePlaceholder: "Ex.: Alex Morgan",
    emailLabel: "E-mail",
    emailPlaceholder: "voce@exemplo.com",
    focusLabel: "Em que você gostaria de focar?",
    focusPlaceholder: "Escolha uma área",
    focusConversation: "Conversação do dia a dia",
    focusWork: "Inglês para o trabalho",
    focusTravel: "Viagens e novas experiências",
    focusStudy: "Estudos ou preparação para exames",
    focusOther: "Outro assunto",
    messageLabel: "Conte um pouco sobre seus objetivos",
    messagePlaceholder: "O que você gostaria de fazer com o inglês?",
    submit: "Enviar mensagem",
    submitted: "Obrigado, {name}. O formulário está pronto, mas precisa ser conectado a um e-mail ou serviço de formulários para enviar sua mensagem.",
    footerTagline: "Inglês para a vida que você está construindo.",
    backTop: "Voltar ao topo",
    footerNote: "Aprenda com propósito. Fale com confiança."
  },
  es: {
    pageTitle: "Raphael Silva ELT | Inglés para tu próximo paso",
    metaDescription: "Clases de inglés personalizadas con Raphael Silva. Gana confianza, comunícate con claridad y haz que el inglés trabaje para ti.",
    skip: "Saltar al contenido",
    navLabel: "Navegación principal",
    brandHome: "Inicio de Raphael Silva ELT",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    languageLabel: "Elegir idioma",
    navApproach: "Mi enfoque",
    navBenefits: "Por qué aprender conmigo",
    navCta: "Hablemos",
    heroImage: "Profesor y estudiante conversando en un espacio de aprendizaje luminoso",
    eyebrow: "Raphael Silva · enseñanza del inglés",
    heroTitle1: "Inglés para tu",
    heroTitle2: "próxima",
    heroTitle3: "versión.",
    heroCopy: "Gana confianza para expresarte, aprovechar oportunidades y sentirte a gusto en inglés, una clase con propósito a la vez.",
    heroCta: "Da el siguiente paso",
    heroNote: "Clases personalizadas. Avances para la vida real.",
    approachKicker: "EL ENFOQUE",
    approachTitle1: "Tú pones las ganas.",
    approachTitle2: "Yo te ayudo con las palabras.",
    approachCopy: "Aprender inglés debe conectar con la vida que quieres vivir, no solo con la siguiente página de un libro. Empezaremos por tus objetivos y trazaremos un camino práctico para alcanzarlos.",
    approachLink: "Cuéntame qué quieres lograr",
    benefitsKicker: "POR QUÉ APRENDER CONMIGO",
    benefitsTitle1: "Un plan de clases que",
    benefitsTitle2: "empieza contigo.",
    benefitsIntro: "Nada de cursos iguales para todos. Enseñanza atenta, práctica útil y un plan pensado para lo que importa en tu vida.",
    benefit1Title: "Tus objetivos marcan el rumbo",
    benefit1Copy: "Prepárate para el trabajo, los viajes, los estudios o las conversaciones cotidianas con clases para situaciones reales.",
    benefit2Title: "Habla más y con más confianza",
    benefit2Copy: "Practica cómo expresar tus ideas en un espacio de apoyo donde equivocarse es parte del aprendizaje, no un motivo para callar.",
    benefit3Title: "Avances que puedes poner en práctica",
    benefit3Copy: "Amplía tu vocabulario, fluidez y estrategias de comunicación para usar el inglés en tu día a día.",
    contactKicker: "EMPECEMOS A CONVERSAR",
    contactTitle1: "Hagamos que el inglés",
    contactTitle2: "trabaje para ti.",
    contactCopy: "Cuéntame un poco qué estás buscando. Juntos podemos encontrar un buen próximo paso.",
    contactAside: "Sin presión. Solo una charla sobre tus objetivos.",
    nameLabel: "Tu nombre",
    namePlaceholder: "p. ej., Alex Morgan",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "tu@ejemplo.com",
    focusLabel: "¿En qué te gustaría enfocarte?",
    focusPlaceholder: "Elige un área",
    focusConversation: "Conversación cotidiana",
    focusWork: "Inglés para el trabajo",
    focusTravel: "Viajes y nuevas experiencias",
    focusStudy: "Estudios o preparación para exámenes",
    focusOther: "Algo diferente",
    messageLabel: "Cuéntame un poco sobre tus objetivos",
    messagePlaceholder: "¿Qué te gustaría poder hacer en inglés?",
    submit: "Enviar consulta",
    submitted: "Gracias, {name}. El formulario está listo, pero necesita conectarse a un correo o servicio de formularios para enviar tu consulta.",
    footerTagline: "Inglés para la vida que estás construyendo.",
    backTop: "Volver arriba",
    footerNote: "Aprende con propósito. Habla con confianza."
  }
};

function updateMenuButton() {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  const copy = translations[languageSelect.value];
  menuToggle.setAttribute("aria-label", isOpen ? copy.menuClose : copy.menuOpen);
}

function setLanguage(language) {
  const selectedLanguage = translations[language] ? language : "en";
  const copy = translations[selectedLanguage];

  document.documentElement.lang = selectedLanguage;
  document.title = copy.pageTitle;
  document.querySelector('meta[name="description"]').content = copy.metaDescription;
  languageSelect.value = selectedLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    element.setAttribute("aria-label", copy[key]);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = copy[element.dataset.i18nPlaceholder];
  });

  updateMenuButton();

  if (submittedName) {
    formStatus.textContent = copy.submitted.replace("{name}", submittedName);
  }
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  updateMenuButton();
  navLinks.classList.toggle("is-open", !isExpanded);
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    updateMenuButton();
    navLinks.classList.remove("is-open");
  }
});

languageSelect.addEventListener("change", () => {
  setLanguage(languageSelect.value);
  try {
    localStorage.setItem("raphael-silva-language", languageSelect.value);
  } catch { }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  submittedName = new FormData(contactForm).get("name").trim();
  formStatus.textContent = translations[languageSelect.value].submitted.replace("{name}", submittedName);
  contactForm.reset();
});

try {
  setLanguage(localStorage.getItem("raphael-silva-language") || "en");
} catch {
  setLanguage("en");
}

document.querySelector("#year").textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".section-kicker, .intro-grid, .benefit-item, .contact-form");
revealItems.forEach((item) => item.setAttribute("data-reveal", ""));

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}