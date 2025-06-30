import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

function Loader({ loading }) {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <ClipLoader
                color="#36d7b7"
                loading={loading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loader
