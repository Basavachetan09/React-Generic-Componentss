import "./CalendarComponent.css";
import React from "react";
import Calendar from "react-calendar";

export default class CalendarComponent extends React.Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          tileClassName="content"
        />
      </div>
    );
  }
}
