import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Faris RR</h3>
            <p className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              sequi cumque harum nulla pariatur ratione iste dolorum eos
              quisquam doloremque!
            </p>
            <div className="nomor mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+0851-7202-0904</p>
              </Link>
            </div>
            <div className="email">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">farismudji@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
            <h5 className="fw-bold">Menu</h5>
            <Link to="">Home</Link>
            <Link to="galeri">Galery</Link>
            <Link to="blog">Blog</Link>
            
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
          <h5 className="fw-bold mb-3">Subscribe untuk info menarik</h5>
          <div className="subscribes">
            <input type="text" name="" id="" placeholder="Email..." />
         <button className="purple btn btn-success rounded-end rounded-0">Subscribe</button>
          </div>
          </Col>
        </Row>
        <Row>

        <Col>
        <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()}</p>
        </Col>


        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
