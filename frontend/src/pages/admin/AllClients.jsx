import React, { useState } from "react";
import axios from "axios";

const AllClients = () => {

  return (

    <div className="py-5">
        <div className="client-table relative overflow-x-auto p-5 shadow-lg rounded-xl bg-transparent text-secClr border border-secClr max-h-[78vh]">
            <table className="w-full text-sm whitespace-nowrap">
                <thead>
                    <tr>
                        <th className="p-3" scope="col">Full Name</th>
                        <th className="p-3" scope="col">Email</th>
                        <th className="p-3" scope="col">Phone Number</th>
                        <th className="p-3" scope="col">Address</th>
                        <th className="p-3" scope="col">Subscription Status</th>
                    </tr>
                </thead>
                <tbody className="space-y-2">
                    <tr className="border-b my-2 border-secClr">
                        <td className="p-3 text-center">Adeleke Favour</td>
                        <td className="p-3 text-center">adelekeoluwamayokun27@gmail.com</td>
                        <td className="p-3 text-center">+234 708 169 6490</td>
                        <td className="p-3 text-center">Adebimpe Hostel, Stadium, Ogbomosho, Oyo State</td>
                        <td className="p-3 text-center">subscribed</td>
                    </tr>
                    <tr className="border-b my-2 border-secClr">
                        <td className="p-3 text-center">Adeleke Favour</td>
                        <td className="p-3 text-center">adelekeoluwamayokun27@gmail.com</td>
                        <td className="p-3 text-center">+234 708 169 6490</td>
                        <td className="p-3 text-center">Adebimpe Hostel, Stadium, Ogbomosho, Oyo State</td>
                        <td className="p-3 text-center">subscribed</td>
                    </tr>
                    <tr className="border-b my-2 border-secClr">
                        <td className="p-3 text-center">Adeleke Favour</td>
                        <td className="p-3 text-center">adelekeoluwamayokun27@gmail.com</td>
                        <td className="p-3 text-center">+234 708 169 6490</td>
                        <td className="p-3 text-center">Adebimpe Hostel, Stadium, Ogbomosho, Oyo State</td>
                        <td className="p-3 text-center">subscribed</td>
                    </tr>
                    <tr className="border-b my-2 border-secClr">
                        <td className="p-3 text-center">Adeleke Favour</td>
                        <td className="p-3 text-center">adelekeoluwamayokun27@gmail.com</td>
                        <td className="p-3 text-center">+234 708 169 6490</td>
                        <td className="p-3 text-center">Adebimpe Hostel, Stadium, Ogbomosho, Oyo State</td>
                        <td className="p-3 text-center">subscribed</td>
                    </tr>
                    <tr className="border-b my-2 border-secClr">
                        <td className="p-3 text-center">Adeleke Favour</td>
                        <td className="p-3 text-center">adelekeoluwamayokun27@gmail.com</td>
                        <td className="p-3 text-center">+234 708 169 6490</td>
                        <td className="p-3 text-center">Adebimpe Hostel, Stadium, Ogbomosho, Oyo State</td>
                        <td className="p-3 text-center">subscribed</td>
                    </tr>
                    <tr className="border-b my-2 border-secClr">
                        <td className="p-3 text-center">Adeleke Favour</td>
                        <td className="p-3 text-center">adelekeoluwamayokun27@gmail.com</td>
                        <td className="p-3 text-center">+234 708 169 6490</td>
                        <td className="p-3 text-center">Adebimpe Hostel, Stadium, Ogbomosho, Oyo State</td>
                        <td className="p-3 text-center">subscribed</td>
                    </tr>
                    <tr className="border-b my-2 border-secClr">
                        <td className="p-3 text-center">Adeleke Favour</td>
                        <td className="p-3 text-center">adelekeoluwamayokun27@gmail.com</td>
                        <td className="p-3 text-center">+234 708 169 6490</td>
                        <td className="p-3 text-center">Adebimpe Hostel, Stadium, Ogbomosho, Oyo State</td>
                        <td className="p-3 text-center">subscribed</td>
                    </tr>
                    <tr className="border-b my-2 border-secClr">
                        <td className="p-3 text-center">Adeleke Favour</td>
                        <td className="p-3 text-center">adelekeoluwamayokun27@gmail.com</td>
                        <td className="p-3 text-center">+234 708 169 6490</td>
                        <td className="p-3 text-center">Adebimpe Hostel, Stadium, Ogbomosho, Oyo State</td>
                        <td className="p-3 text-center">subscribed</td>
                    </tr>
                    <tr className="border-b my-2 border-secClr">
                        <td className="p-3 text-center">Adeleke Favour</td>
                        <td className="p-3 text-center">adelekeoluwamayokun27@gmail.com</td>
                        <td className="p-3 text-center">+234 708 169 6490</td>
                        <td className="p-3 text-center">Adebimpe Hostel, Stadium, Ogbomosho, Oyo State</td>
                        <td className="p-3 text-center">subscribed</td>
                    </tr>
                    <tr className="border-b my-2 border-secClr">
                        <td className="p-3 text-center">Adeleke Favour</td>
                        <td className="p-3 text-center">adelekeoluwamayokun27@gmail.com</td>
                        <td className="p-3 text-center">+234 708 169 6490</td>
                        <td className="p-3 text-center">Adebimpe Hostel, Stadium, Ogbomosho, Oyo State</td>
                        <td className="p-3 text-center">subscribed</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

  );
};

export default AllClients;
