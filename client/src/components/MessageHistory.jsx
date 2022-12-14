import React, { useEffect, useState } from "react";

const MessageHistory = ( ) => {

    const [ msg, setMsg ] = useState([]);

    useEffect(()=>{
        getMessages();
    },[])



    const getMessages = async() => {
        const res = await fetch(`http://localhost:8000/api/message`);
        const data = await res.json()
        setMsg(data.msg)
    }

    return (
        <>
        <h1 className="text-center">Message history</h1>
        <div className="h-screen">
    
             <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                 <tr>
                     <th scope="col" className="py-3 px-6">
                         name
                     </th>
                     <th scope="col" className="py-3 px-6">
                         message
                     </th>
                     <th scope="col" className="py-3 px-6">
                         Phone Number
                     </th>
                     <th scope="col" className="py-3 px-6">
                         Status
                     </th>
                     <th scope="col" className="py-3 px-6">
                         Created At
                     </th>
                 </tr>
             </thead>

             { 
                msg ? 
                msg.map((message) => (
                    <tr key={message._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {message.name}
                                        </th>
                                        <td className="py-4 px-6">
                                            {message.message}
                                        </td>
                                        <td className="py-4 px-6">
                                            {message.phoneNumber}
                                        </td>
                                        <td className="py-4 px-6">
                                            {message.status}
                                        </td>
                                        <td className="py-4 px-6">
                                            {message.createdAt}
                                        </td>
                                        </tr>          
                )) : ""
             }
             </table>
        
        </div>
        </>
    )
}

export default MessageHistory;