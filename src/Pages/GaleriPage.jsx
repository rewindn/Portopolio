import { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { semuaGallery } from "../data/index.js";

const GaleriPage = () => {
  // State untuk mengelola modal
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // Fungsi untuk menampilkan modal dengan gambar yang dipilih
  const handleShow = image => {
    setModalImage(image);
    setShowModal(true);
  };

  // Fungsi untuk menutup modal
  const handleClose = () => setShowModal(false);

  return (
    <div className=" gallery w-100 min-vh-100">
      <Container>
        <Row>
          <Col data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-center fw-bold">My Gallery</h1>
            <p className="text-center">
              Temukan hal menarik di dalam galeri ku.
            </p>
          </Col>
        </Row>
        <Row>
          {semuaGallery.map(galeri => {
            return (
              <Col
                key={galeri.ld}
                className="shadow rounded-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                onClick={() => handleShow(galeri.image)} // OnClick to open modal
                style={{ cursor: "pointer" }}
              >
                <img src={galeri.image} alt="" className="mb-4 rounded" />
          
                <div className="star mb-4 rounded px-3">
                  <i className={galeri.star1}></i>
                  <i className={galeri.star2}></i>
                  <i className={galeri.star3}></i>
                  <i className={galeri.star4}></i>
                  <i className={galeri.star5}></i>
                </div>
              </Col>
            );
          })}
        </Row>

        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Body>
            <img src={modalImage} alt="Enlarged" className="w-100" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Tutup
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default GaleriPage;
