import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
	return (
		<Card className="project-card-view">
			<Card.Body>
				<Card.Title>
					<strong className="purple">{props.title}</strong>
				</Card.Title>
				<Card.Text style={{ textAlign: "justify" }}>
					<strong className="purple">Objective:</strong> <br />{" "}
					{props.description}
				</Card.Text>
				<Card.Text style={{ textAlign: "justify" }}>
					<strong className="purple">Duration:</strong> {props.duration}
				</Card.Text>
				<Card.Text style={{ textAlign: "justify" }}>
					<strong className="purple">Framework:</strong> {props.framework}
				</Card.Text>
				<Card.Text style={{ textAlign: "justify" }}>
					<strong className="purple">Database:</strong> {props.database}
				</Card.Text>
			</Card.Body>
		</Card>
	);
}
export default ProjectCards;
