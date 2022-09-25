import React, { useState } from "react"


const ContactForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError]= useState("")

    const handleSubmit = async(e) => {
        e.preventDefault();
        const contact = { firstName, lastName, phoneNumber }
        const res = await fetch( "http://localhost:8000/api/contact/create", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contact)
        })
        const data = await res.json();
        if ( data.message ) return setError(data.message)
         if ( data ) console.log(data)

    }


    return (
        <form onSubmit={(e) => handleSubmit(e)} className="m-auto p-20 flex flex-col justify-center items-center">
            <h1>Enter Your Details Here</h1>
            { error && <h2 className="text-3xl text-red-600">{error}</h2> }
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-2xl" >Enter your first name?</span>
                </label>
                <input onChange={e => setFirstName(e.target.value)} type="text" name="firstName" value={firstName} placeholder="Enter your First Name" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text-alt">Alt label</span>
                </label>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-2xl">Enter your last name?</span>
                </label>
                <input onChange={e => setLastName(e.target.value)} type="text" name="lastName" value={lastName} placeholder="Enter your Last Name" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text-alt">Alt label</span>
                </label>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-2xl">Enter  your phone number?</span>
                </label>
                <input onChange={e => setPhoneNumber(e.target.value)} type="text" name="phoneNumber" value={phoneNumber} placeholder="Enter your Phone Number" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text-alt">Alt label</span>
                </label>
            </div>
            <input type="submit" className="btn btn-wide m-5" value="Submit" />
        </form>
    )
}

export default ContactForm;