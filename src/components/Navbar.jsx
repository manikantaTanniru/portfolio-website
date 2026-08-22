import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { BsDiagram3 } from "react-icons/bs";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import portfolio from "../Portfolio";

const SECTIONS = [
  { id: "home", label: "Home", icon: AiOutlineHome },
  { id: "about", label: "About", icon: AiOutlineUser },
  { id: "projects", label: "Projects", icon: AiOutlineFundProjectionScreen },
  { id: "system-design", label: "System Design", icon: BsDiagram3 },
  { id: "resume", label: "Resume", icon: CgFileDocument },
  { id: "contact", label: "Contact", icon: AiOutlineMail },
];

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const scrollHandler = () => updateNavbar(window.scrollY >= 20);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    const sectionEls = SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      Boolean
    );
    if (!sectionEls.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (event, id) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    updateExpanded(false);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {SECTIONS.map(({ id, label, icon: Icon }) => (
              <Nav.Item key={id}>
                <Nav.Link
                  href={`#${id}`}
                  className={activeId === id ? "active" : ""}
                  onClick={(event) => scrollToSection(event, id)}
                >
                  <Icon style={{ marginBottom: "2px" }} /> {label}
                </Nav.Link>
              </Nav.Item>
            ))}

            {portfolio.socialLinks?.github && (
              <Nav.Item className="fork-btn">
                <Button
                  href={portfolio.socialLinks.github}
                  target="_blank"
                  className="fork-btn-inner"
                  rel="noreferrer"
                >
                  <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                </Button>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
