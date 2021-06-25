import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import algo from "../../Assets/Projects/algo.png";
import plant from "../../Assets/Projects/plant.jpeg";

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>

				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={6} className="project-card">
						<ProjectCard
							isBlog={false}
							title="Occupancy Chart Generation"
							description="The application is designed in such a way that there is a proper allocation of rooms. The
              application also supports the reservation of rooms beforehand whenever extra classes are taken."
							duration=" (02/2021 – 05/2021)"
							framework="MERN"
							database="MongoDB"
						/>
					</Col>

					<Col md={6} className="project-card">
						<ProjectCard
							isBlog={false}
							title="Web based Application for Insurance Services"
							description=" To develop a web based application for Insurance service to make it easier for accessing the information
              about each policy and schemes for our users."
							duration="(07/2020 – 01/2021)"
							framework="Django"
							database="SQLite"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
