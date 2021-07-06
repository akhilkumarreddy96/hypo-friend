import styles from "./HomePage.module.scss";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
const HomePage = (props) => {
  const handleStep1 = (step) => {
    props.setSelectedStep(2);
  };
  const Step1 = () => {
    return (
      <div>
        <div className={styles["heading"]}>{"Hello, I am Stephen."}</div>
        <div className={styles["description"]}>
          {
            "I'm here to help you check how much you can afford and find the right mortgage."
          }
        </div>
        <Row>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep1(1)}>
            <span className={styles["btn-text"]}>I live in Germany</span>
          </Col>
          <Col
            md={5}
            onClick={() => handleStep1(2)}
            className={`${styles["btn"]} ${styles["second-btn"]}`}
          >
            {" "}
            <span className={styles["btn-text"]}>I dont live in Germany</span>
          </Col>
        </Row>
      </div>
    );
  };

  const Step2 = () => {
    return <div></div>;
  };
  return (
    <Container className={styles["home-container"]}>
      <img src="assets/dummy.webp" />

      {Step1()}
    </Container>
  );
};

export default HomePage;
