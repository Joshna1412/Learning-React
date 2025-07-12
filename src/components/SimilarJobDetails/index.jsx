import './index.css'
import { MdLocationOn } from 'react-icons/md'
import { BsBriefcase } from 'react-icons/bs'

const SimilarJobDetails = ({ job }) => {
    const {
        companyLogoUrl,
        title,
        rating,
        location,
        employmentType,
        jobDescription
    } = job

    return (
        <div className="similar-job-card">
            <div className="similar-header">
                <img src={companyLogoUrl} alt="company logo" className="company-logo" />
                <div>
                    <h3>{title}</h3>
                    <p className='similar-job-rating'>⭐ {rating}</p>
                </div>
            </div>
            <h4>Description</h4>
            <p className="similar-description">{jobDescription}</p>
            <div className="similar-meta">
                <p className='similar-job-location'><MdLocationOn size={20} style={{ marginRight: '5px', marginTop: '5px' }} />{location}</p>
                <p className='similar-job-employment'><BsBriefcase size={20} style={{ marginRight: '5px', marginTop: '5px' }} />{employmentType}</p>
            </div>
        </div>
    )
}

export default SimilarJobDetails
