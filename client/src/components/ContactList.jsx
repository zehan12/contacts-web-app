import React, { useEffect, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai"
import { GrMail } from "react-icons/gr"


const ContactList = () => {

    const [contacts, setContact] = useState([]);

    const fetchContacts = async () => {
        const res = fetch("http://localhost:8000/api/contact/list");
        const data = await (await res).json()
        if (data) console.log(data)
        setContact(data.listOfContact)
    }

    useEffect(() => {
        fetchContacts();
    }, [])

    useEffect(() => {
    }, [contacts])



    return (
        <>
            <h1 className="text-center">List of Contact</h1>

            <div className="overflow-x-auto relative m-auto" style={{width:"80%"}}>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                First Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Last Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Phone Number
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Contact Detail
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {contacts.map((contact) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {contact.firstName}
                                </th>
                                <td className="py-4 px-6">
                                    {contact.lastName}
                                </td>
                                <td className="py-4 px-6">
                                    {contact.phoneNumber}
                                </td>
                                <td className="py-4 px-6 flex">
                                <button title="delete this contact"> 
                                <AiTwotoneDelete className="text-2xl hover:text-red-600 cursor-pointer mr-3"  />
                                </button>
                                <button title="send OTP to this contact"> 
                                    <GrMail className="text-2xl hover:text-green-600 cursor-pointer" />
                                </button>
                                </td>
                                <td className="py-4 px-6 ml-3 cursor-pointer">
                                    view contact
                                </td>
                            </tr>))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ContactList;