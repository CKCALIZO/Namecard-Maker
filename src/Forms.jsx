import { useState } from 'react'
import NameCard from './NameCard.jsx'
import ValidationModal from './ValidationModal.jsx'

function Forms() {
    const [person, setPerson] = useState({ name: "", age: "", email: "" })
    const [contactList, setContactList] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [modalMessage, setModalMessage] = useState("")

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
            setModalMessage("Please make sure all fields are filled up.");
            setShowModal(true);
            return;
        }
    
        if (!person.email.includes("@") || !person.email.includes(".com")) {
            setModalMessage("Please enter a valid Email Address!");
            setShowModal(true);
            return;
        }
    
        setContactList(prev => [...prev, person]);
        setPerson({ name: "", age: "", email: "" });
    }
    

    function handleRemove(indexToRemove) {
        setContactList(prev => prev.filter((_, index) => index !== indexToRemove));
    }

    return (<>
    <div className="container">
        <form className="d-flex justify-content-center align-items-end gap-3">
            <div className="row w-100 d-flex justify-content-center align-items-end g-3">
                <div className="col-12 col-md">
                    <label htmlFor="name-field" style={{ color: 'white' }} className="mb-2">Name</label>
                    <input type="text" value={person.name} onChange={handleNameChange} className="form-control" id="name-field" placeholder="Lastname, Firstname M.I." />
                </div>
                <div className="col-12 col-md">
                    <label htmlFor="age-field" style={{ color: 'white' }} className="mb-2">Age</label>
                    <input type="number" min="1" value={person.age} onChange={handleAgeChange} className="form-control" id="age-field" placeholder="Enter your age" />
                </div>
                <div className="col-12 col-md">
                    <label htmlFor="email-field" style={{ color: 'white' }} className="mb-2">Email Address</label>
                    <input type="email" value={person.email} onChange={handleEmailChange} className="form-control" id="email-field" placeholder="example@example.com" />
                </div>
                <div className="col-12 col-md-auto d-flex justify-content-center align-items-center mt-4">
                    <button className="btn btn-primary w-100" type="submit" onClick={handleAdd}>Add</button>
                </div>
            </div>
        </form>
    </div>

        <div className="d-flex flex-row align-items-center my-3 mx-3 gap-3 flex-wrap">
            {contactList.map((person, index) => (
                <NameCard key={index} name={person.name} age={person.age} email={person.email} onRemove={()=> handleRemove(index)} />
            ))}
        </div>
        {showModal && <ValidationModal message={modalMessage} onClose={() => setShowModal(false)} />}

    </>
    )
}

export default Forms