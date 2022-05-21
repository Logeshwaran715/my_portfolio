import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Logeshwaran.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
	return (
		<Container fluid className="resume-section">
			<Particle />
			<Container>
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button variant="primary" href={pdf} target="_blank">
						<AiOutlineDownload />
						&nbsp;Download Resume
					</Button>
				</Row>
				<Row className="resume">
					<Col md={6} className="resume-left">
						<h3 className="resume-title">
							<strong className="purple">Areas of Interest</strong>
						</h3>
						<Resumecontent
							title=""
							content={[
								"Data Science",
								"Machine learning,AI",
								"Web development",
								"Coding and problem solving",
							]}
						/>
						<h3 className="resume-title">
							<strong className="purple">Projects</strong>
						</h3>
						<Resumecontent
							title="Occupancy Chart generation"
							date="02/2021 – 05/2021"
							content={[
								"The application is designed in such a way that there is a proper allocation of rooms. The application also supports the reservation of rooms beforehand whenever extra classes are taken.",
								" Framework: MERN",
								"Database:MongoDB",
							]}
						/>

						<Resumecontent
							title="Web based Application for Insurance Services"
							date="07/2020 – 01/2021"
							content={[
								"To develop a web based application for Insurance service to make it easier for accessing the information about each policy and schemes for our users.",
								" Framework: Django",
								"Database:SQLite",
							]}
						/>
					</Col>
					<Col md={6} className="resume-right">
						<h3 className="resume-title">
							<strong className="purple">Education</strong>
						</h3>
						<Resumecontent
							title="B.Tech -Computer Science and Engineering"
							instituion="Amrita School of Engineering"
							date="2018 - Present"
							content={[`CGPA:8.82 (Till 7th Sem)`]}
						/>
						<Resumecontent
							title="12TH BOARD [CBSE]"
							instituion="Jawahar Higher Secondary School"
							date="2016 - 2018"
							content={["Marks: 473/500"]}
						/>
						<Resumecontent
							title="10TH BOARD [CBSE] "
							instituion="Achariya Siksha Mandir"
							date="20014 - 2016"
							content={["CGPA:10"]}
						/>
						<h3 className="resume-title">
							<strong className="purple">Other technical qualifications</strong>
						</h3>
						<Resumecontent
							title=""
							content={[
								"Data Science",
								"Problem Solving",
								"Data Structures and Algorithms",
								"Coding Languages: Python, Java, C",
							]}
						/>
						<h3 className="resume-title">
							<strong className="purple">Contact details:</strong>
						</h3>
						<Resumecontent
							title=""
							content={[
								"address:no 3 Natesan nagar,Thirupapuliyur, Cuddalore-607002, India",
								"phone: 6382438317",
								"mail: waran715@gmail.com",
								"D.O.B:15-07-2001",
							]}
						/>
					</Col>
				</Row>
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button variant="primary" href={pdf} target="_blank">
						<AiOutlineDownload />
						&nbsp;Download Resume
					</Button>
				</Row>
			</Container>
		</Container>
	);
}

export default Resume;
