import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						I am <span className="purple">Logeshwaran R </span>
						from <span className="purple"> Cuddalore, India.</span>
						<br />I am a fresh engineering graduate, seeking an entry level
						position preferably in the field of Data Science, Machine learning
						with special interests in areas like Web development, AI and related
						areas, to contribute towards organizational growth along with
						personal and professional development.
					</p>
					<br />
					<p style={{ textAlign: "justify" }}>My areas of Interest are:</p>

					<ul>
						<li className="about-activity">
							<ImPointRight /> Data Science
						</li>
						<li className="about-activity">
							<ImPointRight /> Machine Learning,AI
						</li>
						<li className="about-activity">
							<ImPointRight /> Web Development
						</li>
						<li className="about-activity">
							<ImPointRight /> Coding and problem solving
						</li>
					</ul>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
