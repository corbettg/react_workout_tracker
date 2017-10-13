import React, { Component } from 'react';
import CalendarIcon from 'react-icons/lib/fa/calendar'
import RunIcon from 'react-icons/lib/md/directions-run'
import MountainIcon from 'react-icons/lib/md/terrain'
import '../App.css'

class WorkoutDayCount extends Component {

  percentToDecimal(decimal) {
    return((decimal * 100) + '%')
  }
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  }

  render() {
    return (
        <div className = "workout-day-count">
            <div className = "total-days">
                <span><CalendarIcon /> {this.props.total} Days Complete. {this.calcGoalProgress(this.props.total, this.props.goal)}</span>
            </div>
            <div className = "running-days">
                <h2><RunIcon /> Running Days</h2>
                <span>{this.props.running} Days</span>
            </div>
            <div className = "climbing-days">
                <h2><MountainIcon /> Climbing Days:</h2>
                <span>{this.props.climbing} Days</span>
            </div>
        </div>
      );
    }
  }

export default WorkoutDayCount;
