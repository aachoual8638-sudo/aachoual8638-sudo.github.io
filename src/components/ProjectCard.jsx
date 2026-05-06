function ProjectCard({ title, desc, tech }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      margin: "10px",
      borderRadius: "10px"
    }}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <p><strong>{tech}</strong></p>
    </div>
  );
}

export default ProjectCard;