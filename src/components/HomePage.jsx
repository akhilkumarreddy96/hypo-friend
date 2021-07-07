import styles from "./HomePage.module.scss";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
const HomePage = (props) => {
  const handleStep = () => {
    props.setSelectedStep(props.selectedStep + 1);
  };
  const Step2 = () => {
    return (
      <div>
        <div className={styles["heading"]}>{"Where do you live ?"}</div>

        <Row>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            <span className={styles["btn-text"]}>I live in Germany</span>
          </Col>
          <Col
            md={5}
            onClick={() => handleStep()}
            className={`${styles["btn"]} ${styles["second-btn"]}`}
          >
            {" "}
            <span className={styles["btn-text"]}>I dont live in Germany</span>
          </Col>
        </Row>
      </div>
    );
  };

  const Step3 = () => {
    return (
      <div>
        <div className={styles["heading"]}>
          {"What is your German residence status?"}
        </div>
        <Row>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"EU Citizen"}</span>
          </Col>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"German Citizen"}</span>
          </Col>

          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Permanent Resident"}</span>
          </Col>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Blue Card Holder"}</span>
          </Col>

          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Temporary Resident"}</span>
          </Col>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Not a Resident"}</span>
          </Col>
        </Row>
      </div>
    );
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
        <div className={styles["heading"]}>
          {"What are you planning to Finance?"}
        </div>
        <Row>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>
              {"Buying a new building from a developer "}
            </span>
          </Col>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>
              {"Buy an existing property"}
            </span>
          </Col>

          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>
              {"Own construction project"}
            </span>
          </Col>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Modernisation"}</span>
          </Col>

          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Refinance"}</span>
          </Col>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Capital raising"}</span>
          </Col>
        </Row>
      </div>
    );
  };
  const Step4 = () => {
    return (
      <div>
        <div className={styles["heading"]}>
          {"What is the progress of your property search?"}
        </div>
        <Row>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"I am just curious"}</span>
          </Col>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>
              {"I am looking at properties online"}
            </span>
          </Col>

          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>
              {"I am actively viewing properties"}
            </span>
          </Col>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>
              {"I have found a property"}
            </span>
          </Col>
        </Row>
      </div>
    );
  };
  const Step5 = () => {
    return (
      <div>
        <div className={styles["heading"]}>
          {"Do you plan to live there or rent it out ?"}
        </div>
        <Row>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Live there"}</span>
          </Col>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Rental"}</span>
          </Col>

          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Partial Rental"}</span>
          </Col>
        </Row>
      </div>
    );
  };
  const handleSearch=()=>{
    console.log("Search");
  }
  const Step6 = () => {
    return (
      <div>
        <div className={styles["heading"]}>
          {"Do you plan to live there or rent it out ?"}
        </div>
        <div>
          <label>
            <span><button onClick={handleSearch}>{'Search'}</button></span>
          <input type="text" value="enteredCity" placeholder="Enter your city here" />

          </label>

        </div>
        <Row>
          <Col md={3} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Live there"}</span>
          </Col>
          <Col md={3} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Rental"}</span>
          </Col>

          <Col md={3} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Partial Rental"}</span>
          </Col>
          <Col md={3} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Live there"}</span>
          </Col>
          <Col md={3} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Rental"}</span>
          </Col>

          <Col md={3} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Partial Rental"}</span>
          </Col>
          <Col md={3} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Live there"}</span>
          </Col>
          <Col md={3} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Rental"}</span>
          </Col>

          <Col md={3} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Partial Rental"}</span>
          </Col>
        </Row>
      </div>
    );
  };
  const Step7 = () => {
    return <div>In Step7</div>;
  };
  const Step8 = () => {
    return <div>In Step8</div>;
  };
  const getStep = () => {
    switch (props.selectedStep) {
      case 1:
        return Step1();

      case 2:
        return Step2();
      case 3:
        return Step3();
      case 4:
        return Step4();
      case 5:
        return Step5();
      case 6:
        return Step6();
      case 7:
        return Step7();
      case 8:
        return Step8();

      default:
        return Step1();
        break;
    }
  };
  const goBack = () => {
    if (props.selectedStep > 1) {
      props.setSelectedStep(props.selectedStep - 1);
    }
  };
  return (
    <Container className={styles["home-container"]}>
      {props.selectedStep != 1 && (
        <button className={styles["back-btn"]} onClick={goBack}>
          back
        </button>
      )}
      <img src="assets/dummy.webp" />

      {getStep()}
    </Container>
  );
};

export default HomePage;
