import React from "react";
// import { InlineWidget } from "react-calendly";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

const StudentAppointment = () => {

    useCalendlyEventListener({
        onProfilePageViewed: () => console.log("onProfilePageViewed"),
        onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
        onEventTypeViewed: () => console.log("onEventTypeViewed"),
        onEventScheduled: (e) => console.log(e.data.payload),
      });

    return (
        <div className="App">
          <InlineWidget url="https://calendly.com/asifiner/patshala-meeting" />
        </div>
      );
}

export default StudentAppointment