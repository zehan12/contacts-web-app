import React, { useEffect, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai"



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

            <div class="overflow-x-auto relative m-auto" style={{width:"80%"}}>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                First Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Last Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Phone Number
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {contacts.map((contact) => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {contact.firstName}
                                </th>
                                <td class="py-4 px-6">
                                    {contact.lastName}
                                </td>
                                <td class="py-4 px-6">
                                    {contact.phoneNumber}
                                </td>
                                <td class="py-4 px-6">
                                    <AiTwotoneDelete className="text-2xl hover:text-red-600 cursor-pointer"  />
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