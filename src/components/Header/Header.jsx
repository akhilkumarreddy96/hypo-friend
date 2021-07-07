import { Col, ProgressBar, Row } from "react-bootstrap";
import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <div>
      <Row className={`${styles["header"]} d-sm-none d-md-flex`}>
        <Col md={3}>
          <img src={"assets/Logo.svg"} />
        </Col>
        <Col md={6} className={styles["center-comp"]}>
          <ProgressBar now={props.selectedStep} max= {13}/>
        </Col>
        <Col md={3} className={styles["last-col-cont"]}>
          <span className={styles["header-last-col"]}>
            <div>Excellent</div>
            <div>4.9 Out of 5</div>
          </span>
          <span>Trust Pilot</span>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
