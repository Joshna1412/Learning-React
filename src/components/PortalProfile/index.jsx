import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import './index.css'

const PortalProfile = () => {
    const [profileDetails, setProfileDetails] = useState(null)

    useEffect(() => {
        const getProfileDetails = async () => {
            const url = 'https://apis.ccbp.in/profile'
            const jwtToken = Cookies.get('jwt_token')

            const options = {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
            }

            try {
                const response = await fetch(url, options)
                if (response.ok) {
                    const data = await response.json()
                    const formattedData = {
                        name: data.profile_details.name,
                        profileImageUrl: data.profile_details.profile_image_url,
                        shortBio: data.profile_details.short_bio,
                    }
                    setProfileDetails(formattedData)
                } else {
                    console.log('Failed to fetch profile details')
                }
            } catch (error) {
                console.log('Error fetching profile details:', error)
            }
        }

        getProfileDetails()
    }, [])

    if (!profileDetails) {
        return <p>Loading profile...</p>
    }

    return (
        <div className="profile-container">
            <img
                src={profileDetails.profileImageUrl}
                alt="profile"
                className="profile-image"
            />
            <h1 className="profile-name">{profileDetails.name}</h1>
            <p className="profile-bio">{profileDetails.shortBio}</p>
        </div>
    )
}

export default PortalProfile
