// This Component is used to calculate the Reward

import React from 'react';

const rewardCalculator = (props) => {
    return (
        <div>
            <h3>Your Rewards</h3>
            <button className="btn btn-success" onClick={() => props.rewardCalc(props.price)} >Calculate Rewards</button>
            <div>
                {props.rewards > 0 ? <p>Your Rewards : {props.rewards}</p> : <p>Your Rewards : 0</p>}
            </div>
        </div>
    )
}

export default rewardCalculator;