import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
	let date = new Date();
	let year = date.getFullYear();
	return (
		<Container fluid className="footer">
			<Row>
				<Col md="4" className="footer-copywright">
					<h3></h3>
				</Col>
				<Col md="4" className="footer-copywright">
					<h3></h3>
				</Col>
				<Col md="4" className="footer-body">
					<ul className="footer-icons">
						<li className="social-icons">
							<a
								href="https://github.com/Logeshwaran715"
								style={{ color: "white" }}
							>
								<AiFillGithub />
							</a>
						</li>

						<li className="social-icons">
							<a
								href="https://www.linkedin.com/in/logeshwaran-r-2b79071ba/"
								style={{ color: "white" }}
							>
								<FaLinkedinIn />
							</a>
						</li>
						<li className="social-icons">
							<a href="mailto: waran715@gmail.com" style={{ color: "white" }}>
								<SiGmail />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://www.instagram.com/logeshwaran157/"
								style={{ color: "white" }}
							>
								<AiFillInstagram />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
