import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AllClients = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get("http://localhost:5000/api/v1/user/allusers")
                console.log(response)
                console.log("response.data",response.data)
                if (response.status == 200 ) {
                    setUsers(response.data.data)
                    setTimeout(() => {
                        toast.success(response.data.message)
                    }, 4000)
                } else {
                    toast.error(response.data.message)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setTimeout(() => {
                    setIsLoading(false)
                }, 5000)
            }
        }
    
        fetchUsers()
    }, [])

    if (isLoading) {
        return <div className="w-full h-screen flex items-center justify-center">
          <span className="w-28 h-28 p-3 block border-[10px] border-t-transparent border-compClr rounded-full animate-spin"></span>
        </div>;
    }

  return (

    <div className="py-5 mt-5">
        <div className="client-table relative overflow-x-auto p-5 shadow-lg rounded-xl bg-tetClr text-secClr border border-secClr max-h-[78vh]">
            <table className="w-full text-sm whitespace-nowrap">
                <thead>
                    <tr>
                        <th className="p-3" scope="col">S/N</th>
                        <th className="p-3" scope="col">Full Name</th>
                        <th className="p-3" scope="col">Email</th>
                        <th className="p-3" scope="col">Phone Number</th>
                        <th className="p-3" scope="col">Address</th>
                        <th className="p-3" scope="col">Subscription Status</th>
                    </tr>
                </thead>
                <tbody className="space-y-2">
                    {
                        users.map(({ _id, fName, lName, email, phoneNumber, address, subscribe}, index) => (
                            <tr key={_id+index} className="border-b my-2 border-secClr">
                                <td className="p-3 text-center">{index + 1}</td>
                                <td className="p-3 text-center capitalize">{`${fName} ${lName}`}</td>
                                <td className="p-3 text-center">{email}</td>
                                <td className={`p-3 text-center ${phoneNumber > 0 ? null : "bg-pryClr"}`}>{phoneNumber > 0 ? phoneNumber : " - "}</td>
                                <td className={`p-3 text-center ${address ? null : "bg-pryClr"}`}>{address ? address : " - "}</td>
                                <td className={`p-3 text-center ${subscribe ? null : "bg-pryClr"}`}>{subscribe ? "subscribed" : "Not subscribed"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>

  );
};

export default AllClients;
