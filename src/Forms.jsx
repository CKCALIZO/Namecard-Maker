import { useState } from 'react'
import NameCard from './NameCard.jsx'

function Forms() {
    const [person, setPerson] = useState({ name: "", age: "", email: "" })
    const [contactList, setConcactList] = useState([])

    function handleNameChange(e) {
        setPerson(prev => ({ ...prev, name: e.target.value }))
    }

    function handleAgeChange(e) {
        setPerson(prev => ({ ...prev, age: e.target.value }))
    }

    function handleEmailChange(e) {
        setPerson(prev => ({ ...prev, email: e.target.value }))
    }
    function handleAdd(e) {
        e.preventDefault();
        if (
            person.name.trim() === "" ||
            person.age.trim() === "" ||
            person.email.trim() === ""
        ) {
            alert("Please fill in all fields!");
            return;
        }

        if (!person.email.includes("@") || !person.email.includes(".com")) {
            alert("Please enter a valid Email Address!");
            return;
        }

        setConcactList(prev => [...prev, person]);
        setPerson({ name: "", age: "", email: "" });
    }

    return (<>
        <form className="d-flex justify-content-center align-items-end gap-3">
            <div className="form-group">
                <label htmlFor="name-field" style={{ color: 'white' }} className="mb-2">Name</label>
                <input type="text" value={person.name} onChange={handleNameChange} className="form-control" id="name-field" placeholder="Lastname, Firstname M.I." />
            </div>
            <div className="form-group">
                <label htmlFor="age-field" style={{ color: 'white' }} className="mb-2">Age</label>
                <input type="number" min="1" value={person.age} onChange={handleAgeChange} className="form-control" id="age-field" placeholder="Enter your age" />
            </div>
            <div className="form-group">
                <label htmlFor="email-field" style={{ color: 'white' }} className="mb-2">Email Address</label>
                <input type="email" value={person.email} onChange={handleEmailChange} className="form-control" id="email-field" placeholder="example@example.com" />
            </div>
            <div className="d-flex align-items-end">
                <button className="btn btn-primary" type="submit" onClick={handleAdd}>Add</button>
            </div>
        </form>

        <div className="d-flex flex-row align-items-center my-3 mx-3 gap-3 flex-wrap">
            {contactList.map((person, index) => (
                <NameCard key={index} name={person.name} age={person.age} email={person.email} />
            ))}
        </div>
    </>
    )
}

export default Forms