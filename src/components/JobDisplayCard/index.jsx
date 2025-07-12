import './index.css'
import { useNavigate } from 'react-router-dom'
import { MdLocationOn } from 'react-icons/md'
import { BsBriefcase } from 'react-icons/bs'

const JobDisplayCard = ({ jobDetails }) => {
    const {
        companyLogoUrl,
        employmentType,
        jobDescription,
        location,
        packagePerAnnum,
        rating,
        title,
        id
    } = jobDetails

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/jobs/${id}`)
    }

    return (
        <div className='job-display-card-container' onClick={handleClick}>
            <div className='job-company-header'>
                <img src={companyLogoUrl} alt="company logo" className="company-logo" />
                <div>
                    <h3>{title}</h3>
                    <p className='job-rating'><span>⭐</span> {rating}</p>
                </div>
            </div>
            <div className='job-location-employment-type-salary-container'>
                <div className='location-employment-type-container'>
                    <p className='location'><MdLocationOn className='location-icon' size={20} style={{ marginRight: '5px', marginTop: '5px' }} />{location}</p>
                    <p className='employment-type'><BsBriefcase size={20} style={{ marginRight: '5px', marginTop: '5px' }} />{employmentType}</p>
                </div>
                <h3>{packagePerAnnum}</h3>
            </div>
            <hr className='horizontal-line' />
            <h3>Description</h3>
            <p className='job-description'>{jobDescription}</p>
        </div>
    )
}

export default JobDisplayCard
