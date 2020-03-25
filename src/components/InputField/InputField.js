import React, { Component } from 'react';
import RewardCalculator from './../Transaction/RewardCalculator/RewardCalculator';
import ThreeMonths from './../Transaction/ThreeMonths/ThreeMonths';

class InputField extends Component {
    state = {
        transaction: [
            {
                price: 100,
                rewards: 50,
                transactionDate: new Date().setDate(new Date().getDate() - 45),
            },
            {
                price: 120,
                rewards: 290,
                transactionDate: new Date().setDate(new Date().getDate() - 30),
            },
            {
                price: 150,
                rewards: 150,
                transactionDate: new Date().setDate(new Date().getDate() - 60),
            },
        ],
        value: 0,
        rewards: 0,
        visible: false,
        threeMonthsVisible: false,
        transactionDate: new Date()
    }

    handleChange = (e) => {
        this.setState({ value: e.currentTarget.value })
    }

    threeMonthsData = (data) => {
        this.setState({ threeMonthsVisible: true })

    }

    calculateRewards = (price) => {
        let bonusPoints = 0;
        if (price > 50 && price <= 100) {
            bonusPoints = price - 50;
            return this.setState({ rewards: bonusPoints, visible: true });
        }
        else if (price > 100) {
            bonusPoints = (2 * (price - 100)) + (1 * 50);
            return this.setState({ rewards: bonusPoints, visible: true });
        }
        else {
            return this.setState({ rewards: 0 });
        }
    }

    render() {
        console.log(this.state.transaction[0].transactionDate)
        return (
            <div className="row">
                <div className="offset-2 col-lg-8">
                    <div className="card shadow-sm m-auto">
                        <div className="card-header bg-primary text-white">Summary</div>
                        <div className="card-body">
                            <input className="form-control" type="text" placeholder="Enter Price" onChange={(e) => this.handleChange(e)} />
                            <RewardCalculator price={this.state.value} visible={this.state.visible} rewards={this.state.rewards} rewardCalc={this.calculateRewards} />
                            <ThreeMonths data={this.state.transaction} visible={this.state.threeMonthsVisible} threeMonthsData={this.threeMonthsData} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default InputField;