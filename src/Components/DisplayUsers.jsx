import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

export const DisplayUsers = () => {
  const data = useSelector((state) => {
    return state.allusers;
  });

  console.log(data);

  return (
    <>
      <div style={{ display: "grid", placeItems: "center",   margin: "200px" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>State</th>
              <th>City</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dataValue, index) => {
              return (
                <tr>
                  <td>{index}</td>
                  <td>{dataValue.firstName}</td>
                  <td>{dataValue.lastName}</td>
                  <td>{dataValue.email}</td>
                  <td>{dataValue.country}</td>
                  <td>{dataValue.state}</td>
                  <td>{dataValue.city}</td>
                  <td>{dataValue.address}</td>
                  <td>{dataValue.phone}</td>
                </tr>
              );
            })}

            <td>1</td>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default DisplayUsers;
