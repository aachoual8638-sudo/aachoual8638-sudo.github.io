import { useEffect } from "react";
import $ from "jquery";
import ProjectCard from "./components/ProjectCard";
import "./App.css";
import profile from "./assets/image.png";
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
        background: "linear-gradient(to right, #66bdd4, #66bdd4)",
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
        <p> a.achoual8638@uca.ac.ma |  www.linkedin.com/in/asma-achoual-b93572407 |  GitHub</p>
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
      <section>
        <h2>Compétences</h2>

        <div className="skill">HTML <div className="bar" data-level="90"></div></div>
        <div className="skill">CSS <div className="bar" data-level="85"></div></div>
        <div className="skill">JavaScript <div className="bar" data-level="75"></div></div>
        <div className="skill">React <div className="bar" data-level="70"></div></div>
      </section>

      {/*  FORMATION  */}
      <section>
        <h2>Formation</h2>

        <div className="accordion">Licence SINF</div>
        <div className="panel">2023 - 2026 | Faculté des Sciences</div>

        <div className="accordion">Baccalauréat</div>
        <div className="panel">2023 | Science Physique</div>
      </section>

      {/*  PROJECTS  */}
      <section>
        <h2>Projets</h2>

        <ProjectCard
         title="Jeu en C++"
         desc="Ce projet représente un jeu en C++ qui symbolise les obstacles et les difficultés que rencontre un étudiant universitaire face aux examens et aux défis académiques. Le jeu illustre de manière logique et algorithmique la gestion du stress et la résolution de problèmes sous pression."
         tech="C++"
        />

        <ProjectCard
          title="Site Web Décoration Marocaine"
          desc="Site web moderne dédié à la décoration marocaine traditionnelle et contemporaine. Il propose une interface élégante permettant aux clients de découvrir différents styles décoratifs et de répondre à tous leurs besoins en matière de design intérieur, alliant modernité et tradition."
          tech="HTML, CSS, JS"
        />

        <ProjectCard
          title="CV React"
          desc="CV interactif avec React + jQuery"
          tech="React, jQuery"
        />
      </section>

      {/* Contact*/}
      <section>
        <h2>Contact</h2>

        <form id="contactForm">
          <input id="name" placeholder="Nom" /><br /><br />
          <input id="email" placeholder="Email" /><br /><br />
          <textarea id="msg" placeholder="Message"></textarea><br /><br />
          <button>Envoyer</button>
        </form>
      </section>

    </div>
  );
}