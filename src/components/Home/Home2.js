import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/filename.jpg";
import Tilt from "react-parallax-tilt";
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>
							LET ME <span className="purple"> INTRODUCE </span> MYSELF
						</h1>
						<p className="home-about-body">
							A fresh engineering graduate, seeking an entry level position
							preferably in the field of Data Science, Machine learning with
							special interests in areas like Web development, AI and related
							areas, to contribute towards organizational growth along with
							personal and professional development.
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img src={myImg} className="img-fluid" alt="avatar" />
						</Tilt>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<h1>FIND ME ON</h1>

						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://github.com/Logeshwaran715"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillGithub />
								</a>
							</li>

							<li className="social-icons">
								<a
									href="https://www.linkedin.com/in/logeshwaran-r-2b79071ba/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.instagram.com/logeshwaran157/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons"
								>
									<AiFillInstagram />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="mailto: waran715@gmail.com"
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons"
								>
									<SiGmail />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
