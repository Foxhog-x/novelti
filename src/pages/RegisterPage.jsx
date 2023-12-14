import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import {  useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';
import PhoneInput from "react-phone-input-2";
import "../style.css";
import "react-phone-input-2/lib/style.css";

const RegisterPage = () => {

  const dispatch = useDispatch()
  const [finalset, setfinalset] = useState({})

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

  const allState = State.getStatesOfCountry(countryCode);
  const allCity = City.getCitiesOfState(countryCode, stateCode);

  const fetchContry = () => {
    const countries = Country.getAllCountries();
    setCountry(countries);
  };
 
  useEffect(() => {
    fetchContry();
   
  }, []);

  const handleChangeCountry = (event) => {
    const index = event.target.value;
    setCountryCode(country[index]?.isoCode);
  
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
    setPhone(event)
    setUserDetail((prev) => {
      return { ...prev, "phone":phone };})
  };

  const handleSubmit = (e, index, event) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(event)
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
          return { ...prev, [name]:value };
        });

        break;
    }
   
  };

  const handleallsubmit =(e)=>{
    e.preventDefault()
   
    dispatch(addUser(userDetail))
      
     
  }
 

  
   

  return (
    <>
      <div>
        <div className="main_container">
          <h1>Registration Form</h1>
          <div className="form">
            <form autocomplete="off" onSubmit={handleallsubmit} >
              <div className="formbox_namebox">
                <label>First Name</label>
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  onChange={handleSubmit}
                />
                <label>Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  onChange={handleSubmit}
                />
              </div>
              <div className="formbox_email">
                <label>Email:</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={handleSubmit}
                />
              </div>
              <div className="formbox_phone">
                <label>Phone Number:</label>
                <PhoneInput
                  name="phone"
                  countryCodeEditable={false}
                  enableSearch={true}
                  type="text"
                  country={"in"}
                  placeholder="Phone number"
                  value={phone}
                  onChange={handChangePhone}
                  autoFormat={false} 
                />
              </div>
              <div className="formbox_address1">
                <label>Address 1 :</label>
                <input
                  name="address"
                  type="text"
                  placeholder="adress-1"
                  required
                  onChange={handleSubmit}
                />
                <label>Address 2 :</label>
                <input type="text" placeholder="adress-2" />
              </div>
              <div className="formbox_country">
                <label>Country</label>
                <select
                  name="country"
                  style={{ width: "200px" }}
                  onChange={handleChangeCountry}
                  required
                >
                  {country.map((ct, index) => (
                    
                    <option defaultValue={true} key={index} value={index} >
                      {ct.name}
                      
                    </option>
                  ))}
                </select>
                <label>State</label>
                <select name='state' style={{ width: "200px" }} onChange={handleChangeState} required>
                <option></option>
                  {allState.map((allst, index) => (
                    <option key={index} value={index}>
                      {allst.name}
                    </option>
                  ))}
                </select>
                <label>City</label>
                <select name="city" style={{ width: "200px" }} onChange={handleChangeCity} required>
                <option></option>
                  {allCity.map((allct, index) => (
                    
                    <option key={index} value={index}>
                      {allct.name}
                    </option>
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
