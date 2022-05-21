import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
	DiPython,
	DiGit,
	DiJava,
} from "react-icons/di";
import {
	SiPytorch,
	SiTensorflow,
	SiFirebase,
	SiJava,
	SiSpring,
	SiHibernate,
	SiMicrosoftazure,
} from "react-icons/si";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<DiPython />
			</Col>

			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiMongodb />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMicrosoftazure />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJava />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiHibernate />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiSpring />
			</Col>
		</Row>
	);
}

export default Techstack;
