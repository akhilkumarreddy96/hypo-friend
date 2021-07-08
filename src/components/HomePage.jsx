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
  const handleSearch = () => {
    console.log("Search");
  };
  const Step6 = () => {
    return (
      <div>
        <div className={styles["heading"]}>
          {"Which city you are looking to buy in ?"}
        </div>
        <div className={styles["search-container"]}>
          <label className={`${styles["search-label"]} d-flex`}>
            <span>
              <button onClick={handleSearch} className={styles["search-btn"]}>{"Search"}</button>
            </span>
            <input
              type="text"
              placeholder="Enter your city here"
              className={styles["search-input"]}
            />
          </label>
        </div>
        <Row>
          <Col md={3} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Berlin"}</span>
          </Col>
          <Col md={3} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Munich"}</span>
          </Col>

          <Col md={3} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Hamburg"}</span>
          </Col>
          <Col md={3} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Stuttgart"}</span>
          </Col>
          <Col md={3} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Frankfurt"}</span>
          </Col>

          <Col md={3} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Essen"}</span>
          </Col>
          <Col md={3} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Cologne"}</span>
          </Col>
          <Col md={3} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Dussel"}</span>
          </Col>

          <Col md={3} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Others"}</span>
          </Col>
        </Row>
      </div>
    );
  };
  const Step7 = () => {
    return (
      <div>
        <div className={styles["heading"]}>
          {"What is the purchase value ?"}
        </div>
        <div className={styles["description"]}>
          {
            "If you're not sure, please tell us the approximate amount you plan on spending (only the price of the property)."
          }
        </div>
        <div>
          <span>
            <input type="text" value="purchaseVal" />
            <button onClick={handleStep} className={styles["btn-next"]}>
              Next
            </button>
          </span>
        </div>
      </div>
    );
  };
  const Step8 = () => {
    return (
      <div>
        <div className={styles["heading"]}>
          {
            "What is the maximum down payment you want to invest in the property ?"
          }
        </div>
        <div className={styles["description"]}>
          {
            "If you're not sure, please tell us the approximate amount you plan on spending (only the price of the property)."
          }
        </div>
        <div>
          <span>
            <input type="text" value="downPayment" />
            <button onClick={handleStep} className={styles["btn-next"]}>
              Next
            </button>
          </span>
        </div>
      </div>
    );
  };

  const Step9 = () => {
    return (
      <div>
        <div className={styles["heading"]}>
          {"Do you know the real estate agent fee ?"}
        </div>
        <Row>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"2.5%"}</span>
          </Col>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"7%"}</span>
          </Col>

          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Others"}</span>
          </Col>
        </Row>
      </div>
    );
  };
  const Step10 = () => {
    return (
      <div>
        <div className={styles["heading"]}>
          {"Are you applying alone or with someone else?"}
        </div>
        <Row>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Alone"}</span>
          </Col>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"With Someone else"}</span>
          </Col>
        </Row>
      </div>
    );
  };
  const Step11 = () => {
    return (
      <div>
        <div className={styles["heading"]}>
          {"What is your Employment status?"}
        </div>
        <Row>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Employed"}</span>
          </Col>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Self Employed"}</span>
          </Col>

          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Free Lancer"}</span>
          </Col>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Student"}</span>
          </Col>

          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Wealthy Person"}</span>
          </Col>
          <Col md={5} className={styles["btn"]} onClick={() => handleStep()}>
            {" "}
            <span className={styles["btn-text"]}>{"Pentioner"}</span>
          </Col>
        </Row>
      </div>
    );
  };
  const Step12 = () => {
    return (
      <div>
        <div className={styles["heading"]}>
          {"What's your monthly net income in the household ?"}
        </div>
        <div className={styles["description"]}>
          {
            "Please state your household's income including salary,bonuses and any other incomes ."
          }
        </div>
        <div>
          <span>
            <input type="text" value="monthlyIncome" />
            <button onClick={handleStep} className={styles["btn-next"]}>
              Next
            </button>
          </span>
        </div>
      </div>
    );
  };

  const Step13 = () => {
    return (
      <Container>
        <div className="d-flex">
          <button onClick={goBack}>
            <img src="" alt="back" />
          </button>
          <div className={styles["free-text"]}>{" Get Personalised, English speaking Mortgage advice"}</div>
        </div>

        <Row className={styles["box-container"]}>
          <Col md={6} className={styles["first-half"]}>
            <Row>
              <Col md={2}>
                <div>Salutation</div>

                <select>
                  <option>Mr</option>
                  <option>Mrs</option>
                  <option>Ms</option>
                </select>
              </Col>
              <Col md={4}>
                <div>{"First name"}</div>
                <div>
                  <label>
                    <input type="text"  />
                  </label>
                </div>
              </Col>
              <Col md={4} className={styles["last-name"]}>
                <div>{"Lastname"}</div>
                <div>
                  <label>
                    <input type="text"  />
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div>Email</div>
                <div>
                  <input type="email" className={styles["full-input"]} />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div>Phone</div>
                <div>
                  <input type="tel"  className={styles["full-input"]}/>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <label className="d-flex">
                  <span>
                    <input type="checkbox" />
                  </span>
                  <span>
                    {
                      "Yes, my advisor may contact me by telephone ,optimal offer preparation and or is only possible only if your financial contributor can contact you"
                    }
                  </span>
                </label>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row className={styles["inverse-row"]}>
              <Col>
                <Row className={styles["free-icons"]}>
                  <Col md={3}>
                    <img src="" alt="Icon" />
                  </Col>
                  <Col md={9} >
                    <div>Your digital Wallet</div>
                    <div>Your digital Wallet</div>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row className={styles["free-icons"]}>
                  <Col md={3}>
                    <img src="" alt="Icon" />
                  </Col>
                  <Col md={9}  >
                    <div>Your digital Wallet</div>
                    <div>Your digital Wallet</div>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row className={styles["free-icons"]}>
                  <Col md={3}>
                    <img src="" alt="Icon" />
                  </Col>
                  <Col md={9}  >
                    <div>Your digital Wallet</div>
                    <div>Your digital Wallet</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
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
      case 9:
        return Step9();
      case 10:
        return Step10();
      case 11:
        return Step11();
      case 12:
        return Step12();
      case 13:
        return Step13();

      default:
        return Step1();
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
