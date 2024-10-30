import nodeReact from "../assets/Node-React.png";
import violence from "../assets/violence-detection.jpg";
import traffic from "../assets/traffic-sign-recognition.png";
import "./CSS/projects.css";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="project website">
        <img className="project-img website-img" src={nodeReact} alt="" />
        <div className="project-desc">
          <h2>Personal Portfolio Website with Node.js and React.js</h2>
          <p>
            In this project, I developed a personal portfolio website using
            React.js for the frontend and Node.js for the backend. The site
            showcases my skills, projects, and experiences, while also featuring
            a responsive design for seamless navigation across devices. This
            endeavor not only enhanced my proficiency in modern web technologies
            but also deepened my understanding of full-stack development.
          </p>
        </div>
      </div>
      <div className="project">
        <div className="project-desc">
          <h2>Research Paper : Violence Detection System</h2>
          <p>
            In my research paper, I explore a Violence Detection System
            utilizing Bi-directional Long Short-Term Memory (BiLSTM) networks.
            This study investigates the application of advanced machine learning
            techniques to analyze video feeds for real-time detection of violent
            behavior. By combining computer vision with deep learning, the
            research aims to enhance safety across various settings. This work
            not only deepens our understanding of AI and data analysis but also
            underscores the potential of technology in promoting social safety.
          </p>
        </div>
        <img className="project-img violence-img" src={violence} alt="" />
      </div>
      <div className="project traffic">
        <img className="project-img traffic-img" src={traffic} alt="" />
        <div className="project-desc">
          <h2>Traffic Sign Detection and Classification</h2>
          <p>
            In my research paper, I present a Traffic Sign Detection and
            Classification System that employs deep learning techniques to
            accurately identify and categorize traffic signs in real-time. This
            study leverages convolutional neural networks (CNNs) to enhance road
            safety and improve autonomous vehicle navigation. By analyzing
            various datasets, the research demonstrates the effectiveness of
            machine learning in recognizing diverse traffic signs under
            different conditions. This work highlights the critical role of AI
            in advancing intelligent transportation systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
