import React, { useEffect, useState } from "react";

const AttendanceInfo = () => {
  const [attendance, setAttendance] = useState({});
  useEffect(() => {
    fetch("https://test.nexisltd.com/test", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")} `,
      },
    })
      .then((res) => res.json())
      .then((data) => setAttendance(data));
  }, []);
  //   console.log(attendance);
  const usersDetailInfo = Object.values(attendance);
    // const userAttendanceStatus = Object.keys(attendance.attendance)
    // console.log(userAttendanceStatus)
    console.log(usersDetailInfo)

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="w-3/4 md:w-2/4 text-3xl mt-6 text-white bg-primary h-16 flex items-center justify-center">Attendance Information</h1>

      <div className="text-sm md:w-4/5 mt-16 overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr >
              <th>Employee Name</th>
              <th>Position</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody >
            {/* <!-- row 1 --> */}
            {usersDetailInfo.map((user) => (
              <tr key={user.id}>
                {/* <td>{user.attendance.2022-11-01.status}</td> */}
                <td>{user.name}</td>
                <td>{user.position}</td>
                <td>{user.branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceInfo;

{
  /*  */
}
