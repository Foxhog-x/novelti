import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import PhoneInput from "react-phone-input-2";
import "../style.css";

import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    country: "",
    state: "",
    city: "",
  });
  const [country, setCountry] = useState([]);
  const [phone, setPhone] = useState("");

  const [countryCode, setCountryCode] = useState();
  const [stateCode, setStateCode] = useState([]);
  const [selectStateHide, setSelectStateHide] = useState(true);

  const allState = State.getStatesOfCountry(countryCode);
  const allCity = City.getCitiesOfState(countryCode, stateCode);

  const fetchContry = () => {
    const countries = Country.getAllCountries();
    setCountry(countries);
  };

  useEffect(() => {
    fetchContry();
    function phoneEvent() {
      setUserDetail((prev) => {
        return { ...prev, phone: "+" + phone };
      });
    }
    phoneEvent();
  }, [phone]);

  const handleChangeCountry = (event) => {
    const index = event.target.value;
    setCountryCode(country[index]?.isoCode);
    setSelectStateHide(false);
    handleSubmit(event, index);
  };
  const handleChangeState = (event) => {
    const index = event.target.value;
    setStateCode(allState[index].isoCode);

    handleSubmit(event, index);
  };
  const handleChangeCity = (event) => {
    const index = event.target.value;

    handleSubmit(event, index);
  };

  const handChangePhone = (event) => {
    setPhone(event);
  };

  const handleSubmit = (e, index, event) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(event);
    switch (name) {
      case "country":
        setUserDetail((prev) => {
          return { ...prev, [name]: country[index].name };
        });
        break;
      case "state":
        setUserDetail((prev) => {
          return { ...prev, [name]: allState[index].name };
        });
        break;
      case "city":
        setUserDetail((prev) => {
          return { ...prev, [name]: allCity[index].name };
        });
        break;

      default:
        setUserDetail((prev) => {
          return { ...prev, [name]: value };
        });

        break;
    }
  };

  const handleallsubmit = (e) => {
    e.preventDefault();

    dispatch(addUser(userDetail));
    navigate("/user");
  };

  return (
    <>
      <div className="grid_container">
        <div className="Form_container">
          <form autoComplete="off" onSubmit={handleallsubmit} id="myForm">
            <h1>Regiastation Page</h1>
            <div className="formbox_email">
              <label>First Name :</label>
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                onChange={handleSubmit}
              />
              <label>Last Name :</label>
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                onChange={handleSubmit}
              />
            </div>
            <div className="formbox_email">
              <label>Email :</label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                onChange={handleSubmit}
              />
            </div>
            <div className="formbox_email">
              <label>Address_1 :</label>
              <input
                name="address"
                type="text"
                placeholder="Adress-1"
                required
                onChange={handleSubmit}
              />
              <label>Address_2 :</label>
              <input type="text" placeholder="Optional_Address" />
            </div>
            <div className="formbox_email">
              {" "}
              <label>Country :</label>
              <select name="country" onChange={handleChangeCountry} required>
                <option value={"none"} selected disabled hidden>
                  Select Country
                </option>
                {country.map((ct, index) => (
                  <option defaultValue={true} key={index} value={index}>
                    {ct.name}
                  </option>
                ))}
              </select>
              <label>State :</label>
              <select
                name="state"
                onChange={handleChangeState}
                hidden={selectStateHide}
                required
              >
                <option value={"none"} selected disabled hidden>
                  Select States
                </option>
                {allState.map((allst, index) => (
                  <option key={index} value={index}>
                    {allst.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="formbox_email">
              <label>City :</label>
              <select name="city" onChange={handleChangeCity} required>
                <option value={"none"} selected disabled hidden>
                  Select City
                </option>
                {allCity.map((allct, index) => (
                  <option key={index} value={index}>
                    {allct.name}
                  </option>
                ))}
              </select>
              <label>Phone No :</label>
              <div>
                <PhoneInput
                  name="phone"
                  countryCodeEditable={false}
                  enableSearch={true}
                  type="text"
                  country={"in"}
                  placeholder="Phone number"
                  value={phone}
                  onChange={handChangePhone}
                />
              </div>
            </div>
            <button type="submit" className="submit_btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;

// <div className="main_container">
// <h1>Registration Form</h1>
// <div className="form">
//   <form autoComplete="off" onSubmit={handleallsubmit}>
//     <div className="formbox_namebox">
//       <label style>First Name</label>
//       <input
//         name="firstName"
//         type="text"
//         placeholder="First Name"
//         onChange={handleSubmit}
//       />
//       <label>Last Name</label>
//       <input
//         name="lastName"
//         type="text"
//         placeholder="Last Name"
//         onChange={handleSubmit}
//       />
//     </div>
//     <div className="formbox_email">
//       <label>Email:</label>
//       <input
//         name="email"
//         type="email"
//         placeholder="Email"
//         required
//         onChange={handleSubmit}
//       />
//     </div>
//     <div className="formbox_phone">
//       <label>Phone Number:</label>
//       <PhoneInput
//         name="phone"
//         countryCodeEditable={false}
//         enableSearch={true}
//         type="text"
//         country={"in"}
//         placeholder="Phone number"
//         value={phone}
//         onChange={handChangePhone}
//       />
//     </div>
//     <div className="formbox_address1">
//       <label>Address 1 :</label>
//       <input
//         name="address"
//         type="text"
//         placeholder="adress-1"
//         required
//         onChange={handleSubmit}
//       />
//       <label>Address 2 :</label>
//       <input type="text" placeholder="adress-2" />
//     </div>
//     <div className="formbox_country">
//       <label>Country</label>
//       <select
//         name="country"
//         style={{ width: "200px" }}
//         onChange={handleChangeCountry}
//         required
//       >
//         {country.map((ct, index) => (
//           <option defaultValue={true} key={index} value={index}>
//             {ct.name}
//           </option>
//         ))}
//       </select>
//       <label>State</label>
//       <select
//         name="state"
//         style={{ width: "200px" }}
//         onChange={handleChangeState}
//         required
//       >
//         <option></option>
//         {allState.map((allst, index) => (
//           <option key={index} value={index}>
//             {allst.name}
//           </option>
//         ))}
//       </select>
//       <label>City</label>
//       <select
//         name="city"
//         style={{ width: "200px" }}
//         onChange={handleChangeCity}
//         required
//       >
//         <option></option>
//         {allCity.map((allct, index) => (
//           <option key={index} value={index}>
//             {allct.name}
//           </option>
//         ))}
//       </select>
//     </div>

//     <div>
//       <button type="submit">Submit</button>
//     </div>
//   </form>
// </div>
// </div>
