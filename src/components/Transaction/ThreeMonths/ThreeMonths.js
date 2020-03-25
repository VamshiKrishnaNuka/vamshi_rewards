import React from 'react';

const threeMonths = (props) => {
    return (
        <div>
            <button className="btn btn-warning" onClick={() => props.threeMonthsData(props.data)}>Get Three Months Data</button>
            <div className="card shadow-sm mt-3" style={{ display: props.visible ? 'block' : 'none' }} >
                <div className="card-body">
                    <span><b>Total Reward points For the Month Of January: {props.data[2].rewards}</b></span><br />
                    <span><b>Total Reward points For the Month Of February: {props.data[1].rewards}</b></span><br />
                    <span><b>Total Reward points: {props.data[1].rewards + props.data[2].rewards}</b></span><br /><br />
                    <span><b>Transactions Details:</b></span>
                    {props.data.map(data => {
                        return (
                            <span>
                                <p>Price : {data.price}</p>
                                <p>Rewards : {data.rewards}</p>
                                <p>Date : {new Date(data.transactionDate).toLocaleDateString("en-US")}</p>
                            </span>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default threeMonths;