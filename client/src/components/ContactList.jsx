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
        console.log(contacts)
    }, [contacts])



    return (
        <>
            <h1 className="text-center">List of Contact</h1>
            <div className="m-auto" style={{ width: "40%" }}>
                <div className="flex justify-between" style={{ width: "90%" }}>
                    <p>First Name</p>
                    <p>Last Name</p>
                    <p>Phone Number</p>
                </div>
                {
                    contacts.map((contact) => (
                        <div className="flex justify-between" style={{ width: "90%" }}>
                            <p>{ contact.firstName }</p>
                            <p>{ contact.lastName }</p>
                            <p className="flex">{ contact.phoneNumber }
                            <AiTwotoneDelete />
                            </p>
                        </div> 
                        )
                    )
                }
            </div>
        </>
    )
}

export default ContactList;