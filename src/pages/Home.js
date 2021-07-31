import React, {useState, useEffect} from 'react'
import {vaccancies as jobs} from '../data'
import Vacancy from '../components/Vacancy'
import CreateJob from '../components/CreateJob'
const Home = () => {
    const [vaccancies, setVacancies] = useState([])
    useEffect(() => {
        setVacancies(jobs)
        console.log(jobs)
    }, [])
    const handleSubmit = (form) => {
        setVacancies([form, ...vaccancies])
        console.log(form)
    }
    const handleDelete = (id) => {
        const _vaccancies = vaccancies.filter(vacancy => vacancy.id !== id)

        setVacancies(_vaccancies)
    }
    return (
        <>
            <section className="hero">
                <div className="hero-body">
                    <p className="title">Find Your Dream Job Today</p>
                    <p className="subtitle">Apply for any vaccancies today</p>
                </div>
            </section>
            <section>
                <CreateJob submit={handleSubmit}/>
            </section>
            <section>
                {vaccancies.map(vacancy => <Vacancy key={vacancy.id} vacancy={vacancy} handleDelete={handleDelete}/>)}
            </section>
        </>
    )
}

export default Home
