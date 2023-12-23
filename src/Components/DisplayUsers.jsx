import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import edit_svg from "../edit.svg";
import { deleteAllUser, deleteOneUser } from "../redux/userSlice";
import "../style.css";
import trash_Svg from "../trash.svg";
import RegisterModal from "./RegisterModal";

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  class="bi bi-pen"
  viewBox="0 0 16 16"
>
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
</svg>;
export const DisplayUsers = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedUserIndex, setSelectedUserIndex] = useState("");

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.allusers;
  });
  const deleteUserfunction = (e) => {
    dispatch(deleteOneUser(e));
  };

  const deleteAllUserfunction = () => {
    dispatch(deleteAllUser());
  };
  const editUserFunction = (index) => {
    console.log(index, "index");
    setSelectedUserIndex(index);
    setModalShow(true);
  };
  console.log(data, "data");

  return (
    <>
      <RegisterModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        selectedUserIndex={selectedUserIndex}
      />
      <div className="table_display">
        <div className="table_above">
          <h1>List Of User Data</h1>
          <button
            className="delete_btn"
            onClick={() => deleteAllUserfunction()}
          >
            Delete ALL
          </button>
        </div>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th className="tableheads" style={{ background: "#4CB9E7" }}>
              #
            </th>
            <th className="tableheads" style={{ background: "#4CB9E7" }}>
              First Name
            </th>
            <th className="tableheads" style={{ background: "#4CB9E7" }}>
              Last Name
            </th>
            <th className="tableheads" style={{ background: "#4CB9E7" }}>
              E-mail
            </th>
            <th className="tableheads" style={{ background: "#4CB9E7" }}>
              Country
            </th>
            <th className="tableheads" style={{ background: "#4CB9E7" }}>
              State
            </th>
            <th className="tableheads" style={{ background: "#4CB9E7" }}>
              City
            </th>
            <th className="tableheads" style={{ background: "#4CB9E7" }}>
              Address
            </th>
            <th className="tableheads" style={{ background: "#4CB9E7" }}>
              Phone
            </th>
            <th className="tableheads" style={{ background: "#4CB9E7" }}>
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {data.usersData.map((value, index) => (
            <tr>
              <td className="table_row" style={{ background: "white" }}>
                {index}
              </td>
              <td className="table_row" style={{ background: "white" }}>
                {value.firstName}
              </td>
              <td className="table_row" style={{ background: "white" }}>
                {value.lastName}
              </td>
              <td className="table_row" style={{ background: "white" }}>
                {value.email}
              </td>
              <td className="table_row" style={{ background: "white" }}>
                {value.country}
              </td>
              <td className="table_row" style={{ background: "white" }}>
                {value.state}
              </td>
              <td className="table_row" style={{ background: "white" }}>
                {value.city}
              </td>
              <td className="table_row" style={{ background: "white" }}>
                {value.address}
              </td>
              <td className="table_row" style={{ background: "white" }}>
                {value.phone}
              </td>
              <td className="table_row" style={{ background: "white" }}>
                <div className="table_button">
                  <button
                    className="table_edit"
                    onClick={() => editUserFunction(index)}
                  >
                    <img src={edit_svg} alt="edit" />{" "}
                  </button>
                  <button
                    className="table_deletebutton"
                    onClick={() => deleteUserfunction(value.id)}
                  >
                    <img src={trash_Svg} alt="delete" />{" "}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default DisplayUsers;
