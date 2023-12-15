import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { deleteAllUser, deleteOneUser } from "../redux/userSlice";
import '../style.css'
import trash_Svg from '../trash.svg'
import edit_svg from '../edit.svg'
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
</svg>
export const DisplayUsers = () => {
   const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.allusers;
  });
  const deleteUserfunction = (e)=>{
    dispatch(deleteOneUser(e))
  }

  const deleteAllUserfunction = ()=>{
    dispatch(deleteAllUser())
  }
  console.log(data, 'data');

  return (
    <>
    
    <div className="table_display">
    <div className="table_above"><h1>List Of User Data</h1> <button onClick={()=>deleteAllUserfunction()}>Delete ALL</button></div>
      <table className="table" width="100%"  >
      
        <thead className="tablehead">
          <tr   height="50px" className="tableheads" >
            <th scope="col" width="5%">Sr.No</th>
            <th scope="col" width="10%">First Name</th>
            <th scope="col" width="10%">Last Name</th>
            <th scope="col" width="15%">Email</th>
            <th scope="col" width="10%">Country</th>
            <th scope="col" width="10%">State</th>
            <th scope="col" width="10%">City</th>
            <th scope="col" width="10%">Address</th>
            <th scope="col" width="15%">Phone</th>
            <th scope="col" width="20px">Action Button</th>
          </tr>
        </thead>
        <tbody>
        {data.usersData.map((value, index)=>{
        return( 
          <tr height="50px" className="tablerows" key={index}>
            <th>{index }</th>
            <td>{value.firstName}</td>
            <td>{value.lastName}</td>
            <td>{value.email}</td>
            <td>{value.country}</td>
            <td>{value.state}</td>
            <td>{value.city}</td>
            <td>{value.address}</td>
            <td>{value.phone}</td>
            <td><div className="table_button">
              <button ><img src={edit_svg} alt="edit"/> </button>
              <button onClick={()=>deleteUserfunction(index)}><img src={trash_Svg} alt="delete"/> </button>
            </div></td>
          </tr>)
        })}
         
        </tbody>
      </table>
      </div>
    </>
  );
};

export default DisplayUsers;
