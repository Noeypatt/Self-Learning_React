import React from 'react'
import { Table } from 'reactstrap';

const Activitiy = () => {


    const header = ["#", "Activity", "Tel"]
    const data = [
        {
            row: 1,
            r1: "Camping",
            r2: "09-xxxxxxxx"
        },
        {
            row: 2,
            r1: "Party",
            r2: "09-xxxxxxxx"
        },
        {
            row: 3,
            r1: "",
            r2: "09-xxxxxxxx"
        }

    ]

    return (
        <div className="warp-activitiy">
            <div className="activitiy-title">
                <h5>Activitiy</h5>
            </div>

            <div className="activitiy-content">
                <Table bordered>
                    <thead>
                        <tr>
                            {
                                header.map((item, index) => {
                                    return (
                                        <th key={index}>{item}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map((item, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{item.row}</th>
                                        <td>{item.r1}</td>
                                        <td>{item.r2}</td>
                                    </tr>
                                )
                            })

                        }

                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default Activitiy;