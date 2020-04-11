import React from 'react'

const Activitiy = () => {

    const data = [
        {
            title: "Title",
            text: "Description",
            small: "smail text"
        },
        {
            title: "Title",
            text: "Description",
            small: "smail text"
        },
    ]
    return (
        <div className="warp-activitiy">
            <div className="activitiy-title">
                <h5>Activitiy</h5>
            </div>

            <div className="activitiy-content">
                {
                    data.map((item, index) => {
                        return (
                            <div></div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Activitiy;