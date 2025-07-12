import { useEffect, useState } from 'react'
import Header from '../Header'
import PortalProfile from '../PortalProfile'
import Cookies from 'js-cookie'
import './index.css'
import JobDisplayCard from '../JobDisplayCard'
import { FaSearch } from 'react-icons/fa'


const JobsPortal = () => {
    const [jobsList, setJobsList] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [employmentTypes, setEmploymentTypes] = useState([])
    const [salaryRange, setSalaryRange] = useState("")

    const getJobsList = async () => {
        const jwtToken = Cookies.get('jwt_token')
        const employmentQuery = employmentTypes.join(',')
        const URL = `https://apis.ccbp.in/jobs?employment_type=${employmentQuery}&minimum_package=${salaryRange}&search=${searchInput}`

        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
        }

        try {
            const response = await fetch(URL, options)
            if (response.ok) {
                const data = await response.json()
                const formattedData = data.jobs.map(job => ({
                    companyLogoUrl: job.company_logo_url,
                    employmentType: job.employment_type,
                    id: job.id,
                    jobDescription: job.job_description,
                    location: job.location,
                    packagePerAnnum: job.package_per_annum,
                    rating: job.rating,
                    title: job.title
                }))
                setJobsList(formattedData)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getJobsList()
    }, [employmentTypes, salaryRange, searchInput])

    const onSearchInputChange = (event) => {
        setSearchInput(event.target.value)
    }

    const onEmploymentTypeChange = (event) => {
        const type = event.target.value
        setEmploymentTypes(prev =>
            prev.includes(type) ? prev.filter(each => each !== type) : [...prev, type]
        )
    }

    const onSalaryChange = (event) => {
        setSalaryRange(event.target.value)
    }

    return (
        <div>
            <Header />
            <div className='jobs-portal-container'>
                <div className='jobs-list-portal-dashboard-container'>
                    <PortalProfile />
                    <hr className='horizontal-line' />
                    <div className='employment-filter'>
                        <h3>Type of Employment</h3>
                        {[
                            { id: "fulltime", label: "Full Time", value: "FULLTIME" },
                            { id: "parttime", label: "Part Time", value: "PARTTIME" },
                            { id: "freelance", label: "Freelance", value: "FREELANCE" },
                            { id: "internship", label: "Internship", value: "INTERNSHIP" },
                        ].map(({ id, label, value }) => (
                            <div className='selection-feild' key={id}>
                                <input
                                    id={id}
                                    type="checkbox"
                                    value={value}
                                    onChange={onEmploymentTypeChange}
                                    checked={employmentTypes.includes(value)}
                                />
                                <label htmlFor={id} className='employment-type'>{label}</label>
                            </div>
                        ))}
                    </div>
                    <hr className='horizontal-line' />
                    <div className='salary-filter'>
                        <h3>Salary Range</h3>
                        {[
                            { id: "10lpa", label: "10 LPA and Above", value: "1000000" },
                            { id: "20lpa", label: "20 LPA and Above", value: "2000000" },
                            { id: "30lpa", label: "30 LPA and Above", value: "3000000" },
                            { id: "40lpa", label: "40 LPA and Above", value: "4000000" },
                        ].map(({ id, label, value }) => (
                            <div className='selection-feild' key={id}>
                                <input
                                    id={id}
                                    type="radio"
                                    name="salary"
                                    value={value}
                                    onChange={onSalaryChange}
                                    checked={salaryRange === value}
                                />
                                <label htmlFor={id} className='salary-type'>{label}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="job-cards-container">
                    <div className='search-input-container'>
                        <input
                            className='search-input'
                            type="search"
                            value={searchInput}
                            placeholder='Search'
                            onChange={onSearchInputChange}
                        />
                        <FaSearch className='search-icon' />
                    </div>
                    {jobsList.map(each => (
                        <JobDisplayCard key={each.id} jobDetails={each} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default JobsPortal
