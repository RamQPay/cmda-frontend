// import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/react/24/outline";
// import React from "react";

// const MISHeader = () => {
//   const data = [
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Budget Header": "Scrutiny Fees",
//       "Applicant Name": "Karpagam",
//       "Challan No": "CMDA/0004/2024",
//       "File No": "RE/GR-II/09/07/0019",
//       "Transaction id": "CMDA_16098",
//       "Zone": "Panchayat Union",
//       "Project Name": "Planning Clearance for Pohys Building",
//       "Status": "Not Paid",
//       "Total fees (INR)": 3000.00,
//       "Penal Interest (INR)": 500.00,
//       "Total Balance": 3500.00
//     },
//     {
//       "Action": "View",
//       "Date": "10-03-2024",
//       "Budget Header": "Scrutiny Fees",
//       "Applicant Name": "Dugar Housing Limited",
//       "Challan No": "CMDA/0007/2024",
//       "File No": "RE/GR-II/09/07/019",
//       "Transaction id": "CMDA_16099",
//       "Zone": "Municipality",
//       "Project Name": "DUGAR Housing",
//       "Status": "Paid",
//       "Total fees (INR)": 3000.00,
//       "Penal Interest (INR)": 0.00,
//       "Total Balance": 0.00
//     },
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Budget Header": "Scrutiny Fees",
//       "Applicant Name": "Dugar Housing Limited",
//       "Challan No": "CMDA/0008/2024",
//       "File No": "RE/GR-II/09/07/1091",
//       "Transaction id": "CMDA_16100",
//       "Zone": "Municipality",
//       "Project Name": "Layout Refusal",
//       "Status": "Not Paid",
//       "Total fees (INR)": 3000.00,
//       "Penal Interest (INR)": 0.00,
//       "Total Balance": 3000.00
//     },
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Budget Header": "Scrutiny Fees",
//       "Applicant Name": "Karpagam",
//       "Challan No": "CMDA/0009/2024",
//       "File No": "RE/GR-II/09/07/213",
//       "Transaction id": "CMDA_16101",
//       "Zone": "2 Zone",
//       "Project Name": "Site Approval",
//       "Status": "Paid",
//       "Total fees (INR)": 3000.00,
//       "Penal Interest (INR)": 0.00,
//       "Total Balance": 0.00
//     },
//     {
//       "Action": "View",
//       "Date": "08-03-2024",
//       "Budget Header": "Scrutiny Fees",
//       "Applicant Name": "Indian Builders",
//       "Challan No": "CMDA/0014/2024",
//       "File No": "RE/GR-II/09/07/029",
//       "Transaction id": "CMDA_16108",
//       "Zone": "Town Panchayat",
//       "Project Name": "Reclassification",
//       "Status": "Not Paid",
//       "Total fees (INR)": 3000.00,
//       "Penal Interest (INR)": 0.00,
//       "Total Balance": 3000.00
//     }
//   ]


//   function formatAmountWithCommas(amount) {
//     // Convert the number to a floating-point number
//     const number = parseFloat(amount);

//     // If the number is not a valid number, return it as is
//     if (isNaN(number)) {
//         return amount;
//     }

//     // Format the number with thousand separators
//     const formattedNumber = number.toLocaleString("en-IN", {
//         maximumFractionDigits: 2,
//         minimumFractionDigits: 2
//     });

//     // If the original number has no decimal part, append .00
//     if (formattedNumber.indexOf('.') === -1) {
//         return formattedNumber + '.00';
//     }

//     return formattedNumber;
// }

// const dropDown = [
//     { name: 'Development charges for land per Sq.m.', value: 'development_charges_land' },
//     { name: 'Development charges for Building per Sq.m.', value: 'development_charges_building' },
//     { name: 'Regulation Charge for land', value: 'regulation_charge_land' },
//     { name: 'Security Deposit for building', value: 'security_deposit_building' },
//     { name: 'Security Deposit for Display Board', value: 'security_deposit_display_board' },
//     { name: 'IDC - CMWSSB(For sewered area only)', value: 'idc_cmwssb_sewered_area' },
//     { name: 'I & A Charge', value: 'i_a_charge' },
//     { name: 'OSR Charges', value: 'osr_charges' },
//     { name: 'Premium FSI Charges', value: 'premium_fsi_charges' },
//     { name: 'Flag Day Charge', value: 'flag_day_charge' },
//     { name: 'Caution Deposit', value: 'caution_deposit' },
//     { name: 'Balance Scrutiny Fees', value: 'balance_scrutiny_fees' },
//     { name: 'SD - STP', value: 'sd_stp' },
//     { name: 'Advertisement Charges', value: 'advertisement_charges' },
//     { name: 'Shelter fee', value: 'shelter_fee' }
//   ];

//   const totalData = [
//     "Total",
//     15000.00,
//     500.00,
//     9500.00
// ];

//   return (

//     <div className='flex flex-col gap-4'>
//     <h1 className="text-xl font-medium ">Headerwise Reports</h1>
// <div className="w-full md:w-[500px] text-left mx-auto border border-gray-300 px-4 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">
//   <div className="w-full flex flex-col sm:flex-row gap-4 ">
//     <div className="w-full sm:w-[50%]">
//       <label htmlFor="from-date" className="block text-sm font-medium text-gray-700">
//         From Date
//       </label>
//       <div className="mt-1">
//         <input
//           type="date"
//           id="from-date"
//           name="from-date"
//           className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//         />
//       </div>
//     </div>
//     <div className="w-full sm:w-[50%]">
//       <label htmlFor="to-date" className="block text-sm font-medium text-gray-700">
//         To Date
//       </label>
//       <div className="mt-1">
//         <input
//           type="date"
//           id="to-date"
//           name="to-date"
//           className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//         />
//       </div>
//     </div>
//   </div>

//   <div>
//     <label htmlFor="local-body" className="block text-sm font-medium text-gray-700">
// Header
//     </label>
//     <div className="mt-1">
//       <select
//         id="local-body"
//         name="local-body"
//         className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//       >
//                   {dropDown?.map((item, index) => (
// <option key={index} value={item.value} className='whitespace-normal'>{item.name} </option>
// ))}

//       </select>
//     </div>
//   </div>

//   <div className=" flex gap-4">
//     <button className="bg-[#0066FF] text-sm text-white font-medium shadow-sm py-1.5 px-4 rounded">
//       Submit
//     </button>
//     <button className="bg-white border text-sm shadow-sm border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
//       Clear
//     </button>
//   </div>
// </div>


// <div className="w-full flex flex-col gap-4 mt-4">
//       <div className="ml-auto flex gap-4">
//         <button className="relative inline-flex gap-2 items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
//           <PrinterIcon className="w-4 h-4 " />
//           Print
//         </button>
//         <button className="relative inline-flex gap-2 items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
//           <ArrowDownTrayIcon className="w-4 h-4" />
//           Export
//         </button>
//       </div>

//     <div className="w-full overflow-y-auto styleScroll pb-2">
//     <table className="w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               {Object.keys(data[0]).map((key, index) => (
//                 <th
//                   key={index}
//                   className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   {key}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className=" divide-y divide-gray-200">
//             {data.map((item, rowIndex) => (
//               <tr key={rowIndex}>
//                 {Object.entries(item).map(([key, value], cellIndex) => (
//                   <td
//                     key={cellIndex}
//                     className={`px-2 py-4 text-xs ${
//                       value === "View"
//                         ? "text-blue-500 cursor-pointer "
//                         : "text-gray-900 "
//                     } ${!isNaN(value) ? "text-right" : ""}`}


//                   >
//                     {!isNaN(value) ? formatAmountWithCommas(value) : value}
//                   </td>

//                 ))}

//               </tr>

//             ))}
//             <tr>  
//                 <td colSpan={9}></td>

//                 {totalData?.map((item,index)=>{

//                 return <td key={index}    className={`px-2 py-4 text-xs  ${!isNaN(item) ? "text-right" : ""}`}>{!isNaN(item) ? formatAmountWithCommas(item) : item}</td>
//                })}</tr>
//           </tbody>
//         </table>
//     </div>


//     </div>

//     </div>
//   );
// };

// export default MISHeader;


//------------------------------  new code ram 20/04/2024 -----------------------------------


// import React, { useState, useEffect } from "react";
// import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/react/24/outline";
// import SingleReport from "../viewModal";


// const MISHeader = () => {
//   const [headerNames, setheaderNames] = useState([]);
//   const [apiResponse, setApiResponse] = useState(null);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch header names data from API
//     fetch("http://localhost:5063/api/GateWayReport/HeaderNames")
//       .then((response) => response.json())
//       .then((data) => {
//         // Assuming data is an array of header names options
//         setheaderNames(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching header names:", error);
//       });
//   }, []);

//   function formatAmountWithCommas(amount) {
//     // Convert the number to a floating-point number
//     const number = parseFloat(amount);

//     // If the number is not a valid number, return it as is
//     if (isNaN(number)) {
//       return amount;
//     }

//     // Format the number with thousand separators
//     const formattedNumber = number.toLocaleString("en-IN", {
//       maximumFractionDigits: 2,
//       minimumFractionDigits: 2
//     });

//     // If the original number has no decimal part, append .00
//     if (formattedNumber.indexOf('.') === -1) {
//       return formattedNumber + '.00';
//     }

//     return formattedNumber;
//   }

//   const handleSubmit = () => {

//     const fromDateValue = document.getElementById("from-date").value;
//     const toDateValue = document.getElementById("to-date").value;
//     const headersValue = document.getElementById("headerwise").value;
//     // Check if required fields are empty
//     if (!fromDateValue || !toDateValue || !headersValue) {
//       console.error("Required fields are empty.");
//       return;
//     }

//     const url = `http://localhost:5063/api/MISReport/HeaderReportSave?fromdate=${encodeURIComponent(fromDateValue)}&todate=${encodeURIComponent(toDateValue)}&headers=${encodeURIComponent(headersValue)}`;

//     fetch(url, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setApiResponse(data); // Update state with API response
//         setData(data); // Update state with API response for table display

//       })
//       .catch((error) => {
//         console.error("Error fetching Local-Body Report:", error);
//       });
//   };

//   useEffect(() => {
//     console.log("data", apiResponse)
//   }, [apiResponse])


//   return (

//     <div className='flex flex-col gap-4'>
//       <h1 className="text-xl font-medium ">Headerwise Reports</h1>
//       <div className="w-full md:w-[500px] text-left mx-auto border border-gray-300 px-4 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">
//         <div className="w-full flex flex-col sm:flex-row gap-4 ">
//           <div className="w-full sm:w-[50%]">
//             <label htmlFor="from-date" className="block text-sm font-medium text-gray-700">
//               From Date
//             </label>
//             <div className="mt-1">
//               <input
//                 type="date"
//                 id="from-date"
//                 name="from-date"
//                 className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//               />
//             </div>
//           </div>
//           <div className="w-full sm:w-[50%]">
//             <label htmlFor="to-date" className="block text-sm font-medium text-gray-700">
//               To Date
//             </label>
//             <div className="mt-1">
//               <input
//                 type="date"
//                 id="to-date"
//                 name="to-date"
//                 className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//               />
//             </div>
//           </div>
//         </div>

//         <div>
//           <label htmlFor="headerwise" className="block text-sm font-medium text-gray-700">
//             Header
//           </label>
//           <div className="mt-1">
//             <select
//               id="headerwise"
//               name="headerwise"
//               className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
//             >
//               <option value="">Select HeaderList</option>

//               {headerNames.map((headers, index) => (
//                 <option key={index} value={headers}>{headers}</option>
//               ))}

//             </select>
//           </div>
//         </div>

//         <div className=" flex gap-4">
//           <button
//             onClick={handleSubmit}
//             className="bg-[#0066FF] text-sm text-white font-medium shadow-sm py-1.5 px-4 rounded">
//             Submit
//           </button>
//           <button className="bg-white border text-sm shadow-sm border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
//             Clear
//           </button>
//         </div>
//       </div>


//       <div className="w-full flex flex-col gap-4 mt-4">
//         <div className="ml-auto flex gap-4">
//           <button className="relative inline-flex gap-2 items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
//             <PrinterIcon className="w-4 h-4 " />
//             Print
//           </button>
//           <button className="relative inline-flex gap-2 items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
//             <ArrowDownTrayIcon className="w-4 h-4" />
//             Export
//           </button>
//         </div>
//         <div className="w-full overflow-y-auto styleScroll pb-2">
//           <table className="w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50 ">
//               <tr>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Action
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Date
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Budget Header
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Applicant Name
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Challan No
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   File No
//                 </th>
//                 {/* <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Transaction Id
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Zone
//                 </th> */}

//                 {/* <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Project Name	
//                 </th>

//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Status
//                 </th> */}

//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Total Fees (INR)
//                 </th>

//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Penal Interest (INR)
//                 </th>
//                 <th
//                   className="px-2 py-3 text-center text-xs font-medium text-gray-500 "
//                   rowSpan="2"
//                 >
//                   Total Balance
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {data?.map((item, index) => {
//                 const date = new Date(item?.dateofSubmission);
//                 const formattedDate = date.toLocaleDateString('en-US');

//                 return (
//                   <tr>

//                     {/* <td
//                     className="px-2 py-4 text-xs  text-blue-500 cursor-pointer "

//                   >
//                     View
//                   </td> */}
//                     <td
//                       className="px-2 py-4 text-xs text-gray-900 "

//                     >
//                       {/* {item?.dateofSubmission} */}
//                       {formattedDate}
//                     </td>

//                     <td
//                       className="px-2 py-4 text-xs text-gray-900 "

//                     >
//                       {item?.budgetHeader}
//                     </td>

//                     <td
//                       className="px-2 py-4 text-xs text-gray-900 "

//                     >
//                       {item?.applicantName}
//                     </td>
//                     <td
//                       className="px-2 py-4 text-xs text-gray-900 "

//                     >
//                       {item?.challanNumber}
//                     </td>
//                     <td
//                       className="px-2 py-4 text-xs text-gray-900 "

//                     >
//                       {item?.fileNumber}
//                     </td>
//                     {/* <td
//                       className="px-2 py-4 text-xs text-gray-900 "

//                     >
//                       {item?.transactionId}
//                     </td> */}
//                     {/* <td
//                       className="px-2 py-4 text-xs text-gray-900 "

//                     >
//                       {item?.zone}
//                     </td> */}

//                     {/* <td
//                     className="px-2 py-4 text-xs text-gray-900 "

//                   >
//                     {item?.projectName}
//                   </td> 
//                   <td
//                     className="px-2 py-4 text-xs text-gray-900 "

//                   >
//                     {item?.status}
//                   </td>  */}
//                     <td
//                       className="px-2 py-4 text-xs text-gray-900 "

//                     >
//                       {item?.totalFee}
//                     </td>
//                     <td
//                       className="px-2 py-4 text-xs text-gray-900 "

//                     >
//                       {item?.penalInterest}
//                     </td>
//                     <td
//                       className="px-2 py-4 text-xs text-gray-900 "

//                     >
//                       {item?.totalBalance}
//                     </td>
//                   </tr>
//                 )
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MISHeader;

//------------------------------  new code ram 04/05/2024 -----------------------------------

import React, { useState, useEffect } from "react";
import { ArrowDownTrayIcon, PrinterIcon } from "@heroicons/react/24/outline";
import SingleReport from "../viewModal";
import { Environment } from "../../Environment";
// import { Environment } from "../../../Environment";



const Table = ({ data, pagination = true }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(pagination ? 5 : data.length);
  const [showModal, setShowModal] = useState(false)
  const [singleData, setSingleData] = useState(null)

  // Calculate indexes for pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  // const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  //const currentRows = data?.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const nextPage = () => {
    if (indexOfLastRow < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle click on 'View'
  const onViewClick = (fileDetails) => {

    const data = {

      "Date": new Date(fileDetails.dateofSubmission).toLocaleDateString(),
      "Budget Header": fileDetails.budgetHeader,
      "Applicant Name": fileDetails.applicantName,
      "Challan No": fileDetails.challanNumber,
      "File No": fileDetails.fileNumber,
      "Total Fee (INR)": formatAmountWithCommas(fileDetails.totalFee),
      "Penal Interest (INR)": formatAmountWithCommas(fileDetails.penalInterest),
      "Total Balance": formatAmountWithCommas(fileDetails.totalBalance),
    }
    setSingleData(data)
    setShowModal(true)
  };


  //Comma separation Amount Function
  function formatAmountWithCommas(amount) {
    // Convert the number to a floating-point number
    const number = parseFloat(amount);

    // If the number is not a valid number, return it as is
    if (isNaN(number)) {
      return amount;
    }

    // Format the number with thousand separators
    const formattedNumber = number.toLocaleString("en-IN", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    });

    // If the original number has no decimal part, append .00
    if (formattedNumber.indexOf('.') === -1) {
      return formattedNumber + '.00';
    }

    return formattedNumber;
  }




  return (
    <div className="w-full flex flex-col gap-4 mt-4">
      <div className="ml-auto flex gap-4">
        <button className="relative inline-flex gap-2 items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
          <PrinterIcon className="w-4 h-4 " />
          Print
        </button>
        <button className="relative inline-flex gap-2 items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
          <ArrowDownTrayIcon className="w-4 h-4" />
          Export
        </button>
      </div>
      <div className="w-full overflow-y-auto styleScroll pb-2">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>

              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Budget Header
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Applicant Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Challan No
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                File No
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Fees (INR)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Penal Interest (INR)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Balance
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-xs">
            {/* {data.map((transaction) => (                                        //THIS SHOWS EVERY DATA WITHOUT PAGINATION */}
            {/* {(currentRows ? currentRows : data).map((transaction) => (       //THIS IS FOR PAGINATION */}
            {data?.misHeaderList?.map((transaction) => (
              <tr key={transaction.challanNumber}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-900" onClick={() => onViewClick(transaction)}>View</button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(transaction.dateofSubmission).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.budgetHeader}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.applicantName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.challanNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{transaction.fileNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.totalFee)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.penalInterest)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(transaction.totalBalance)}</td>
              </tr>
            ))}

            <tr>
              <td colSpan={5}></td>
              <td className="px-6 py-4 whitespace-nowrap ">Total</td>
              <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(data?.overallTotalFee)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(data?.overallPenalInterest)}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right">{formatAmountWithCommas(data?.overallTotalBalance)}</td>
            </tr>
          </tbody>
        </table>
        {pagination && (
          <div>
            <nav
              className="flex items-center justify-between border-t border-gray-200 bg-white py-4"
              aria-label="Pagination"
            >
              <div className="block">
                <p className="text-left text-xs text-gray-700">
                  Showing <span className="font-medium">{currentPage}</span> of{" "}
                  <span className="font-medium">
                    {Math.ceil(data.length / rowsPerPage)}
                  </span>{" "}
                  pages
                </p>
              </div>
              <div className="flex  justify-between sm:justify-end">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                >
                  Previous
                </button>
                <button
                  onClick={nextPage}
                  disabled={indexOfLastRow >= data.length}
                  className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-xs font-medium text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                >
                  Next
                </button>
              </div>
            </nav>
          </div>
        )}
        <SingleReport open={showModal} setOpen={setShowModal} data={singleData} />
      </div>
    </div>
  );
};

const MISHeader = () => {
  const [headerNames, setheaderNames] = useState([]);
  const [apiResponse, setApiResponse] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch header names data from API
    // fetch("http://localhost:5063/api/GateWayReport/HeaderNames")
    fetch(`${Environment.apiBaseUrl}/api/GateWayReport/HeaderNames`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming data is an array of header names options
        setheaderNames(data);
      })
      .catch((error) => {
        console.error("Error fetching header names:", error);
      });
  }, []);

  const handleSubmit = () => {

    const fromDateValue = document.getElementById("from-date").value;
    const toDateValue = document.getElementById("to-date").value;
    const headersValue = document.getElementById("headerwise").value;
    // Check if required fields are empty
    if (!fromDateValue || !toDateValue || !headersValue) {
      console.error("Required fields are empty.");
      return;
    }

    const url = `${Environment.apiBaseUrl}/api/MISReport/HeaderReportSave?fromdate=${encodeURIComponent(fromDateValue)}&todate=${encodeURIComponent(toDateValue)}&headers=${encodeURIComponent(headersValue)}`;
    
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(data); // Update state with API response
        setData(data); // Update state with API response for table display

      })
      .catch((error) => {
        console.error("Error fetching Local-Body Report:", error);
      });
  };

  return (

    <div className='flex flex-col gap-4'>
      <h1 className="text-xl font-medium ">Headerwise Reports</h1>
      <div className="w-full md:w-[500px] text-left mx-auto border border-gray-300 px-4 py-6 rounded-md mt-4 flex flex-col gap-4 self-baseline">
        <div className="w-full flex flex-col sm:flex-row gap-4 ">
          <div className="w-full sm:w-[50%]">
            <label htmlFor="from-date" className="block text-sm font-medium text-gray-700">
              From Date
            </label>
            <div className="mt-1">
              <input
                type="date"
                id="from-date"
                name="from-date"
                className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
              />
            </div>
          </div>
          <div className="w-full sm:w-[50%]">
            <label htmlFor="to-date" className="block text-sm font-medium text-gray-700">
              To Date
            </label>
            <div className="mt-1">
              <input
                type="date"
                id="to-date"
                name="to-date"
                className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="headerwise" className="block text-sm font-medium text-gray-700">
            Header
          </label>
          <div className="mt-1">
            <select
              id="headerwise"
              name="headerwise"
              className="px-2 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm outline-none"
            >
              <option value="">Select HeaderList</option>

              {headerNames.map((headers, index) => (
                <option key={index} value={headers}>{headers}</option>
              ))}

            </select>
          </div>
        </div>

        <div className=" flex gap-4">
          <button
            onClick={handleSubmit}
            className="bg-[#0066FF] text-sm text-white font-medium shadow-sm py-1.5 px-4 rounded">
            Submit
          </button>
          <button className="bg-white border text-sm shadow-sm border-gray-300 text-gray-900 hover:bg-gray-50 font-medium py-1.5 px-4 rounded">
            Clear
          </button>
        </div>
      </div>
      {data && <Table data={data} pagination={false} />}
    </div>
  );
};

export default MISHeader;


