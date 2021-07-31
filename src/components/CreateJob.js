import React, {useState} from 'react'

const CreateJob = ({submit}) => {

    const [form, setForm] = useState({
        title: '',
        company: '',
        city: '',
        description: ''
    })
    const handleInput = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        submit({...form, id: new Date().getTime().toString()})
        console.log('Submitting...')
    }
    return (
        <div className="box">
            <h1 className="title is-5">Create a vacancy</h1>
            <form onSubmit={handleSubmit}>
                <input className="input" type="text" placeholder="Job title" name="title" value={form.title} onChange={handleInput} required></input>
                <input className="input" type="text" placeholder="Company name" name="company" value={form.company} onChange={handleInput} required></input>
                <input className="input" type="text" placeholder="city" name="city" value={form.city} onChange={handleInput} required></input>
                <textarea className="input" type="text" placeholder="description" name="description" value={form.description} onChange={handleInput} required></textarea>
                <button className="button is-primary">Create</button>
            </form>
            
        </div>
    )
}

export default CreateJob
