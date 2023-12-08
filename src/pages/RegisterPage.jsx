import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";

import PhoneInput from "react-phone-input-2";
import "../style.css";
import "react-phone-input-2/lib/style.css";

const RegisterPage = () => {
  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    countryName: "",
    stateName: "",
    cityName: "",
  });

  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState();
  const [country, setCountry] = useState([]);
  const [stateCode, setStateCode] = useState([]);
  const allState = State.getStatesOfCountry(countryCode);
  const allCity = City.getCitiesOfState(countryCode, stateCode);

  useEffect(() => {
    fetchContry();
  }, []);

  const fetchContry = () => {
    const countries = Country.getAllCountries();

    setCountry(countries);
  };
  const handleChangeCountry = (event) => {
    setCountryCode(event.target.value);
  };
  const handleChangeState = (event) => {
    setStateCode(event.target.value);
  };

  const handChangeEvent = (value) => {
    setPhone(value);
  };

  const validation = (phone) => {
    const phonenumberRegx = /^\d{11}$/;
    return phonenumberRegx.test(phone);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log({});
  };

  const onChange = () =>{

  }

  return (
    <>
      <div>
        <div className="main_container">
          <h1>Registration Form</h1>
          <div className="form">
            <form onSubmit={handleSubmitForm}>
              <div className="formbox_namebox">
                <label>First Name</label>
                <input name="firstName" type="text" placeholder="First Name" />
                <label>Last Name</label>
                <input name="lastName" type="text" placeholder="Last Name" />
              </div>
              <div className="formbox_email">
                <label>Email:</label>
                <input name="email" type="email" placeholder="Email" required />
              </div>
              <div className="formbox_phone">
                <label>Phone Number:</label>
                <PhoneInput
                  type="text"
                  country={"in"}
                  placeholder="Phone number"
                  value={phone}
                  onChange={(value) => handChangeEvent(value)}
                />
              </div>
              <div className="formbox_address1">
                <label>Address 1 :</label>
                <input name='address' type="text" placeholder="adress-1" required />
                <label>Address 2 :</label>
                <input type="text" placeholder="adress-2" />
              </div>
              <div className="formbox_country">
                <label>Country</label>
                <select
                  style={{ width: "200px" }}
                  onChange={handleChangeCountry}
                >
                  {country.map((ct, index) => (
                    <option key={index} value={ct.isoCode}>
                      {ct.name}
                    </option>
                  ))}
                </select>
                <label>State</label>
                <select style={{ width: "200px" }} onChange={handleChangeState}>
                  {allState.map((allst, index) => (
                    <option key={index} value={allst.isoCode}>
                      {allst.name}
                    </option>
                  ))}
                </select>
                <label>City</label>
                <select style={{ width: "200px" }}>
                  {allCity.map((allct, index) => (
                    <option key={index}>{allct.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
