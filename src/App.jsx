import { useEffect } from "react";
import $ from "jquery";
import ProjectCard from "./components/ProjectCard";
import "./App.css";
import profile from "./assets/image.jpeg";
export default function App() {

  //  jQuery for Compétences animation + formation accordion + form validation
  useEffect(() => {
    //  SKILLS animation
    $(".bar").each(function () {
      $(this).animate({
        width: $(this).data("level") + "%"
      }, 1000);
    });

    // FORMATION accordion
    $(".panel").hide();
    $(".accordion").click(function () {
      $(this).next().slideToggle();
    });

    //  CONTACT validation
    $("#contactForm").submit(function (e) {
      e.preventDefault();

      let name = $("#name").val();
      let email = $("#email").val();
      let msg = $("#msg").val();

      if (name === "" || email === "" || msg === "") {
        alert(" Tous les champs sont obligatoires !");
      } 
      else if (!email.includes("@")) {
        alert(" Email invalide !");
      } 
      else {
        alert(" Message envoyé avec succès !");
      }
    });

  }, []);

  return (
    <div>

      {/* HEADER */}
      <header style={{
        background: "linear-gradient(to right, #e9a142, #e9a142)",
        color: "white",
        textAlign: "center",
        padding: "40px"
      }}>
       <img
  src={profile}
  alt="profile"
  style={{
    width: "120px",
    height: "120px",
    borderRadius: "100%",
    border: "3px solid white",
    objectFit: "cover"
  }}
/>

        <h1>Asma ACHOUAL</h1>
        <h3>Étudiante en Développement Informatique (SINF)</h3>
       <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "15px",
    flexWrap: "wrap"
  }}
>
  <a
    href="mailto:a.achoual8638@uca.ac.ma"
    style={{ color: "#664c2a", textDecoration: "none" }}
  >
    a.achoual8638@uca.ac.ma
  </a>

  <a
    href="https://www.linkedin.com/in/asma-achoual-b93572407"
    target="_blank"
    rel="noreferrer"
    style={{ color: "#664c2a", textDecoration: "none" }}
  >
    LinkedIn
  </a>

  <a
    href="https://github.com/asma-achoual"
    target="_blank"
    rel="noreferrer"
    style={{ color: "#664c2a", textDecoration: "none" }}
  >
    GitHub
  </a>
</div>
      </header>

      {/* À propos */}
      <section>
        <h2>À propos</h2>
        <p>
          Étudiante passionnée par le développement web et les technologies modernes.
          Curieuse et motivée, je développe mes compétences à travers des projets concrets.
          J'ai acquis des bases solides en HTML, CSS, JavaScript et React.
          Je souhaite devenir développeuse full stack.
          Je travaille constamment pour améliorer mes compétences techniques.
          J'aime apprendre de nouvelles technologies.
          Je suis motivée et sérieuse dans mon travail.
          Mon objectif est d'intégrer une entreprise innovante.
        </p>
      </section>

      {/* Compétences  */}
      <section class="skills">

  <h2>Compétences</h2>

  <div class="skills-container">

   //HTML
    <div class="skill-card">
      <div class="skill-info">
        <h3>HTML</h3>
        <span>85%</span>
      </div>

      <p>Structure des pages web modernes</p>

      <div class="progress-bar">
        <div class="progress html"></div>
      </div>
    </div>

       //CSS
    <div class="skill-card">
      <div class="skill-info">
        <h3>CSS</h3>
        <span>70%</span>
      </div>

      <p>Design responsive et animations</p>

      <div class="progress-bar">
        <div class="progress css"></div>
      </div>
    </div>

    // JavaScript
    <div class="skill-card">
      <div class="skill-info">
        <h3>JavaScript</h3>
        <span>60%</span>
      </div>

      <p>Interactions dynamiques et logique web</p>

      <div class="progress-bar">
        <div class="progress js"></div>
      </div>
    </div>
          //React
    <div class="skill-card">
      <div class="skill-info">
        <h3>React</h3>
        <span>50%</span>
      </div>

      <p>Création d'interfaces modernes et composants</p>

      <div class="progress-bar">
        <div class="progress react"></div>
      </div>
    </div>

  </div>

</section>

      {/*  FORMATION  */}
      <section class="formation">

  <h2>Formation</h2>

  <div class="formation-container">

    <div class="formation-card">
      <div class="formation-date">2024 - Présent</div>

      <h3>Licence SINF</h3>

      <p>
        Formation universitaire spécialisée en systèmes informatiques,
        développement web, programmation et bases de données.
      </p>
    </div>

    <div class="formation-card">
      <div class="formation-date">2023 - 2024</div>

      <h3>Baccalauréat</h3>

      <p>
        Obtention du diplôme du baccalauréat  en sciences physiques.
      </p>
    </div>

  </div>

</section>

      {/* Les PROJECTS  */}
      <section class="projects">

  <h2>Projets</h2>

  <div class="projects-container">

   //Projet 1
    <div class="project-card">

      <div class="project-tech">C++</div>

      <h3>Jeu en C++</h3>

      <p>
        Jeu représentant les obstacles et les défis rencontrés
        par un étudiant universitaire durant les examens.
      </p>

      <button>Voir Projet</button>

    </div>

    //Projet 2
    <div class="project-card">

      <div class="project-tech">HTML • CSS • JS</div>

      <h3>Site Web Décoration Marocaine</h3>

      <p>
        Site moderne dédié à la décoration marocaine traditionnelle
        et contemporaine avec une interface élégante.
      </p>

      <button>Voir Projet</button>

    </div>

    //Projet 3
    <div class="project-card">

      <div class="project-tech">React • jQuery</div>

      <h3>CV React</h3>

      <p>
        CV interactif moderne développé avec React et animations
        dynamiques pour une meilleure expérience utilisateur.
      </p>

      <button>Voir Projet</button>

    </div>

  </div>

</section>

      {/* Contact*/}
      <section class="contact">

  <h2>Contact</h2>

  <div class="contact-container">

    //information de contacte
    <div class="contact-info">

      <h3>Lets Work Together</h3>

      <p>
        N'hésitez pas à me contacter pour toute collaboration,
        projet web ou opportunité professionnelle.
      </p>

      <div class="info-box">
        <i class="fas fa-envelope"></i>
        <span>a.achoual8638@uca.ac.ma</span>
      </div>

      <div class="info-box">
        <i class="fas fa-phone"></i>
        <span>+212 7 00 00 00 00</span>
      </div>

      <div class="info-box">
        <i class="fas fa-location-dot"></i>
        <span>Marrakech, Maroc</span>
      </div>

    </div>

    //Formulaire de contacte
<form
  className="contact-form"
  onSubmit={(e) => {
    e.preventDefault();//e.preventDefault() : empêche le comportement automatique d’un événement (clic, submit, etc.)
    alert("Message envoyé avec succès !");
  }}
    >  </form>
    <form class="contact-form">

      <div class="input-box">
        <input type="text" placeholder="Votre nom" required/>
      </div>

      <div class="input-box">
        <input type="email" placeholder="Votre email" required/>
      </div>

      <div class="input-box">
        <textarea placeholder="Votre message" rows="6"></textarea>
      </div>

      <button type="submit">Envoyer Message</button>

    </form>

  </div>

</section>

    </div>
  );
}