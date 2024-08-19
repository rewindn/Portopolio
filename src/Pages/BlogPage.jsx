import { Container, Row, Col } from "react-bootstrap";
import { Blog } from "../data/index.js";

const BlogPage = () => {
  return (
    <div className="blog  w-100 min-vh-100">
      <Container>
        <Row className="mb-1">
          <Col data-aos="fade-up" data-aos-duration="1000">
            <h1 className="fw-bold text-center ">My Blog</h1>
            <p className="text-center mb-5 ">
              Temukan topik menarik di dalam blog ku
            </p>
          </Col>
        </Row>
        <Row
          className=" row-cols-1"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {Blog.map(data => {
            return (
              <Col key={data.id} className=" mb-5  ">
                <div className="desc shadow rounded-4">
                  <h4 className="fw-bold my-3">{data.judul}</h4>
                  <div dangerouslySetInnerHTML={{ __html: data.desc }} />
                </div>
                <div className="people">
                  <img src={data.image} alt="" />
                  <div>
                    <h5 className="mb-1">{data.name}</h5>
                    <p className="m-0 fw-bold">{data.date}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default BlogPage;
