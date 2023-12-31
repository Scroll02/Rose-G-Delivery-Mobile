import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
// import logo1 from "../../assets/logo/footerLogo1.png";
import logo2 from "../../assets/logo/footerLogo2.png";
import "../../style/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          {/* Logo Column */}
          <Col lg="3" md="4" sm="4" xs="4">
            <div className="footer__logo text-start">
              <img src={logo2} alt="logo" />
            </div>
          </Col>
          {/* Menu Navigation Column */}
          <Col lg="3" md="4" sm="4" xs="4">
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="footer__menu-item border-0 ps-0">
                <Link to="/home">
                  <span>Home</span>
                </Link>
              </ListGroupItem>
              <ListGroupItem className="footer__menu-item border-0 ps-0">
                <Link to="/menu">
                  <span>Menu</span>
                </Link>
              </ListGroupItem>
              <ListGroupItem className="footer__menu-item border-0 ps-0">
                <Link to="/orders">
                  <span>Orders</span>
                </Link>
              </ListGroupItem>
              <ListGroupItem className="footer__menu-item border-0 ps-0">
                <Link to="/termsCondition">
                  <span>Terms & Conditions</span>
                </Link>
              </ListGroupItem>
              <ListGroupItem className="footer__menu-item border-0 ps-0">
                <Link to="/privacyPolicy">
                  <span>Privacy Policy</span>
                </Link>
              </ListGroupItem>
            </ListGroup>
          </Col>
          {/* Hours Column */}
          <Col lg="3" md="4" sm="4" xs="4">
            <h5 className="footer__title">Hours</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Monday - Friday</span>
                <p>8:00am - 7:00pm</p>
              </ListGroupItem>

              <ListGroupItem className="delivery__time-item border-0 ps-0">
                <span>Saturday - Sunday</span>
                <p>8:00am - 8:00pm</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          {/* Contact Us Column */}
          <Col lg="3" md="12" sm="12" xs="12">
            <h5 className="footer__title-contact">Contact Us</h5>
            <ListGroup className="contact__us-list mb-3">
              <ListGroupItem className="contact__us-item border-0 ps-0">
                <a href="https://www.google.com/maps/place/60+Camerino,+Project+4,+Lungsod+Quezon,+1109+Kalakhang+Maynila/@14.6248945,121.0667595,17z/data=!3m1!4b1!4m5!3m4!1s0x3397b78e161aaacf:0x32b943dad2a00bf6!8m2!3d14.6248945!4d121.0689482">
                  <i class="ri-map-pin-line"></i>
                  <span>
                    60 Camerino St. Bgy. Marilag Project 4, Quezon City
                  </span>
                </a>
              </ListGroupItem>

              <ListGroupItem className="contact__us-item border-0 ps-0">
                <i class="ri-phone-line"></i>
                <span>0917-994-7550</span>
              </ListGroupItem>

              <ListGroupItem className="contact__us-item border-0 ps-0">
                <i class="ri-mail-line"></i>
                <span>
                  <a href="mailto:rose.g.special@gmail.com">
                    rose.g.special@gmail.com
                  </a>
                </span>
              </ListGroupItem>
              <ListGroupItem className="contact__us-item border-0 ps-0">
                <a href="https://www.facebook.com/profile.php?id=100063606564417">
                  <i class="ri-facebook-circle-line"></i>
                  <span>
                    <a
                      href="https://www.facebook.com/people/Rose-Garden-Special-Palabok/100063606564417/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Rose Garden Special Palabok
                    </a>
                  </span>
                </a>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>

        <Row>
          <div className="conditions__policy">
            <Link to="/termsCondition">
              <span className="terms__conditions">Terms & Conditions</span>
            </Link>
            <Link to="/privacyPolicy">
              <span className="privacy__policy">Privacy Policy</span>
            </Link>
          </div>
        </Row>
        <Row>
          <div className="copyright__text">
            <p>
              <i class="ri-copyright-line"></i> 2022 Rose G. All Rights
              Reserved.
            </p>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
