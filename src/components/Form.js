import { useState } from "react";
import "../App.css";
import GridTable from "./GridTable";
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
var validator = require("email-validator");
var passwordValidator = require("password-validator");
function Form() {
  var schema = new passwordValidator();
  schema
    .is()
    .min(6) // Minimum length 8
    .is()
    .max(15) // Maximum length 100
    .has()
    .symbols()
    .has()
    .lowercase() // Must have lowercase letters
    .has()
    .digits(1) // Must have at least 2 digits
    .has()
    .not()
    .spaces() // Should not have spaces
    .is()
    .not();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [docData, setDocData] = useState([]);
  const [fname, setFname] = useState("");
  const [fnameError, setFnameError] = useState("");
  const [lname, setLname] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [company, setCompany] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState("");
  const [cpass, setCpass] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [state, setState] = useState("");
  const [stateError, setStateError] = useState("");

  const display = () => {
    console.log(fname, lname, company, email, pass, address, city, state);
    var isValidated = true;
    if (fname.length >= 25) {
      setFnameError("max 25 characters only");
      isValidated = false;
    }
    if (fname.length === 0) {
      setFnameError("Field required *");
      isValidated = false;
    }
    if (lname.length >= 25) {
      setLnameError("max 25 characters only");
      isValidated = false;
    }
    if (lname.length === 0) {
      setLnameError("Field required *");
      isValidated = false;
    }
    if (company.length >= 50) {
      setCompanyError("max 25 characters only");
      isValidated = false;
    }
    if (company.length === 0) {
      setCompanyError("Field required *");
      isValidated = false;
    }
    if (address.length >= 75) {
      setAddressError("max 25 characters only");
      isValidated = false;
    }
    if (address.length === 0) {
      setAddressError("Field required *");
      isValidated = false;
    }
    if (state.length >= 50) {
      setStateError("max 25 characters only");
      isValidated = false;
    }
    if (state.length === 0) {
      setStateError("Field required *");
      isValidated = false;
    }
    if (city.length >= 25) {
      setCityError("max 25 characters only");
      isValidated = false;
    }
    if (city.length === 0) {
      setCityError("Field required *");
      isValidated = false;
    }
    if (!validator.validate(email)) {
      setEmailError("Enter valid email ID");
      isValidated = false;
    }
    if (email.length === 0) {
      setEmailError("Field required *");
      isValidated = false;
    }
    if (!schema.validate(pass)) {
      setPassError("Password must contain alphabet,number,symbol");
      isValidated = false;
    }
    if (pass !== cpass) {
      setPassError("password Mismatch");
      isValidated = false;
    }
    if (isValidated) {
      setDocData([
        ...docData,
        {
          fname: fname,
          lname: lname,
          company: company,
          email: email,
          address: address,
          city: city,
          state: state,
        },
      ]);
    }
  };
  const clearr = () => {
    setLname("");
    setLnameError("");
    setFname("");
    setFnameError("");
    setCompany("");
    setCompanyError("");
    setAddressError("");
    setAddress("");
    setCpass("");
    setPass("");
    setPassError("");
    setCityError("");
    setCity("");
    setState("");
    setStateError("");
    setEmail("");
    setEmailError("");
  };
  return (
    <div className="App">
      <div className="form shadow rounded p-2">
        <div className="form-group d-flex flex-column my-4">
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <label htmlFor="" className="mx-2">
                First Name
              </label>
              <input
                type="text"
                max="25"
                className="form-control form-control-sm w-50 input-sm"
                value={fname}
                onChange={(e) => {
                  setFname(e.target.value);
                  setFnameError("");
                }}
              />
              <i
                className="mx-2 fa fa-question-circle"
                title="Fist name"
                aria-hidden="true"
              ></i>
            </div>

            <div className="d-flex align-items-center">
              <label htmlFor="" className=" mx-2">
                Last Name
              </label>
              <input
                type="text"
                className="form-control form-control-sm w-50 input-sm"
                value={lname}
                onChange={(e) => {
                  setLname(e.target.value);
                  setLnameError("");
                }}
              />
              <i
                className="mx-2 fa fa-question-circle"
                title="last name"
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div className="d-flex justify-content-around">
            <span className="text-danger my-2 mx-5">{fnameError}</span>
            <span className="text-danger my-2">{lnameError}</span>
          </div>
          <div className="d-flex align-items-center mt-4">
            <label htmlFor="" className=" mx-2">
              Company
            </label>
            <input
              type="text"
              className="form-control form-control-sm w-50 input-sm"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
                setCompanyError("");
              }}
            />
            <i
              className="mx-2 fa fa-question-circle"
              title="company"
              aria-hidden="true"
            ></i>
          </div>
          <div className="d-flex  justify-content-start my-2">
            <span className="text-danger" style={{ marginLeft: "132px" }}>
              {companyError}
            </span>
          </div>
          <div className="d-flex align-items-center mt-4">
            <label htmlFor="" className=" mx-2">
              Email Address
            </label>
            <input
              type="text"
              className="form-control form-control-sm w-50 input-sm"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
            />
            <i
              className="mx-2 fa fa-question-circle"
              title="Email test@test.com"
              aria-hidden="true"
            ></i>
          </div>
          <div className="d-flex  justify-content-start my-2">
            <span className="text-danger" style={{ marginLeft: "132px" }}>
              {emailError}
            </span>
          </div>
          <div className="d-flex">
            <div className="d-flex align-items-center">
              <label htmlFor="" className=" mx-2">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-sm w-50 input-sm"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                  setPassError("");
                }}
              />
            </div>

            <div className="d-flex align-items-center justify-content-around">
              <label htmlFor="" style={{ width: "140px" }}>
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control form-control-sm w-50 input-sm"
                value={cpass}
                onChange={(e) => {
                  setCpass(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="d-flex  justify-content-start my-2">
            <span className="text-danger" style={{ marginLeft: "132px" }}>
              {passError}
            </span>
          </div>
          <div className="d-flex align-items-center mt-4">
            <label htmlFor="" className=" mx-2">
              Address
            </label>
            <textarea
              type="text"
              className="form-control form-control-sm w-50 input-sm"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                setAddressError("");
              }}
            ></textarea>
          </div>
          <div className="d-flex  justify-content-start my-2">
            <span className="text-danger" style={{ marginLeft: "132px" }}>
              {addressError}
            </span>
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex align-items-center">
            <label htmlFor="" className=" mx-2">
              City
            </label>
            <input
              type="text"
              className="form-control form-control-sm w-50 input-sm"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                setCityError("");
              }}
            />
          </div>

          <div className="d-flex align-items-center">
            <label htmlFor="" className=" mx-2">
              State
            </label>
            <input
              type="text"
              className="form-control form-control-sm w-50 input-sm"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                setStateError("");
              }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <span className="text-danger my-2 mx-5">{cityError}</span>
          <span className="text-danger my-2">{stateError}</span>
        </div>
        <div
          className="d-flex w-50 my-4 justify-content-center"
          style={{ marginLeft: "54px" }}
        >
          <button
            className="btn btn-secondary btn-sm mx-2"
            onClick={() => {
              toggle();
            }}
          >
            Preview
          </button>
          <button
            className="btn btn-secondary btn-sm"
            type="submit"
            onClick={() => {
              display();
            }}
          >
            Add
          </button>
          <span
            onClick={() => {
              clearr();
            }}
            className="clearbtn"
          >
            Clear
          </span>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Preview</ModalHeader>
        <ModalBody>
          <h4 className="text-primary">{fname + " " + lname}</h4>
          <h4 className="text-primary">{company}</h4>
          <h4 className="text-primary">{email}</h4>
          <h4 className="text-primary">{address}</h4>
          <h4 className="text-primary">{city}</h4>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Ok
          </Button>{" "}
        </ModalFooter>
      </Modal>
      <div>
        <GridTable docData={docData} />
      </div>
    </div>
  );
}

export default Form;
