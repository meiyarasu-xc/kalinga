import React from 'react'
import PublicationGrid from '../research/publication-grid'

function Hostelgrid() {
    const Stats = [
        {
            title: "Boys’ Accommodation",
            value: "930 +",
            description: "",
        },
        {
            title: "Girls’ Accommodation ",
            value: "460 +",
            description: "",
        }
    ]
    return (
        <div>
            <PublicationGrid stats={Stats} />
        </div>
    )
}

export default Hostelgrid