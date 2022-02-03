import React from 'react'
import { Line } from 'react-chartjs-2'
const LineChart = () => {
    return (
        <>
             <Line
                data={{
                    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
                    datasets: [
                        {
                            label: 'Total Revenue',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                            ],
                            borderWidth: 1,
                        },
                        {
                            label: 'Price Movements',
                            data: [47, 52, 67, 58, 9, 50],
                            backgroundColor: 'orange',
                            borderColor: 'red',
                        },
                    ],
                }}

            />
        </>
    )
}

export default LineChart
