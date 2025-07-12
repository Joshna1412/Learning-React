import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'
import SimilarJobDetails from '../SimilarJobDetails'
import { MdLocationOn } from 'react-icons/md'
import { BsBriefcase } from 'react-icons/bs'

const JobDetailsCard = () => {
    const { id } = useParams()
    const [jobDetails, setJobDetails] = useState(null)
    const [similarJobs, setSimilarJobs] = useState([])

    useEffect(() => {
        const fetchJobDetails = async () => {
            const jwtToken = Cookies.get('jwt_token')
            const url = `https://apis.ccbp.in/jobs/${id}`
            const options = {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
            }

            try {
                const response = await fetch(url, options)
                if (response.ok) {
                    const data = await response.json()
                    const job = data.job_details
                    setJobDetails({
                        companyLogoUrl: job.company_logo_url,
                        title: job.title,
                        rating: job.rating,
                        location: job.location,
                        employmentType: job.employment_type,
                        packagePerAnnum: job.package_per_annum,
                        jobDescription: job.job_description,
                        skills: job.skills,
                        lifeAtCompany: job.life_at_company,
                        companyWebsiteUrl: job.company_website_url,
                    })

                    const formattedSimilarJobs = data.similar_jobs.map(job => ({
                        id: job.id,
                        companyLogoUrl: job.company_logo_url,
                        title: job.title,
                        rating: job.rating,
                        location: job.location,
                        employmentType: job.employment_type,
                        jobDescription: job.job_description,
                    }))
                    setSimilarJobs(formattedSimilarJobs)
                }
            } catch (error) {
                console.log('Error fetching job details:', error)
            }
        }

        fetchJobDetails()
    }, [id])

    if (!jobDetails) return <p>Loading...</p>

    return (
        <div className="job-details-page">
            <Header />
            <div className="job-details-card">
                <div className="job-top">
                    <img src={jobDetails.companyLogoUrl} alt="company logo" />
                    <div>
                        <h2 className='job-heading'>{jobDetails.title}</h2>
                        <p className='job-rating'>⭐ {jobDetails.rating}</p>
                    </div>
                </div>
                <div className="job-meta">
                    <div className='job-meta-data'>
                        <p className='location'><MdLocationOn size={20} style={{ marginRight: '5px', marginTop: '5px' }} />{jobDetails.location}</p>
                        <p className='employment'><BsBriefcase size={20} style={{ marginRight: '5px', marginTop: '5px' }} />{jobDetails.employmentType}</p>
                    </div>
                    <h4>{jobDetails.packagePerAnnum}</h4>
                </div>
                <hr className='horizontal-line' />
                <div className="job-description">
                    <div className='description-heading'>
                        <h3>Description</h3>
                        <a className='visit-link' href={jobDetails.companyWebsiteUrl} target="_blank" rel="noreferrer">Visit ↗</a>
                    </div>
                    <p className='description'>{jobDetails.jobDescription}</p>
                </div>
                <div className="skills">
                    <h3>Skills</h3>
                    <div className="skills-list">
                        {jobDetails.skills.map(skill => (
                            <div key={skill.name} className="skill-item">
                                <img src={skill.image_url} alt={skill.name} />
                                <p className='skill-name'>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="life-at-company">
                    <h3>Life at Company</h3>
                    <div className='life-at-company-description-image-section'>
                        <p className='life-at-company-description'>{jobDetails.lifeAtCompany.description}</p>
                        <img src={jobDetails.lifeAtCompany.image_url} alt="life at company" />
                    </div>
                </div>
            </div>
            <div className="similar-jobs-section">
                <h2>Similar Jobs</h2>
                <div className="similar-jobs-list">
                    {similarJobs.map(job => (
                        <SimilarJobDetails key={job.id} job={job} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default JobDetailsCard
