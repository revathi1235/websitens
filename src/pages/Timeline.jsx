import React, { useState } from 'react';
import HorizontalTimeline from "react-horizontal-timeline";
import './timeline.css'; // Ensure you have the appropriate CSS

const Timeline = () => {
    const [value, setValue] = useState(0);
    const [previous, setPrevious] = useState(0);

    // Define your timeline values (custom points with descriptions)
    const VALUES = [
        { point: "Event 1", text: "New Year's Day - A fresh start for the year." },
        { point: "Event 2", text: "Mid-January Event - Celebrations and festivities." },
        { point: "Event 3", text: "Spring Begins - A time for new beginnings." },
        { point: "Event 4", text: "Summer Solstice - The longest day of the year." },
        { point: "Event 5", text: "Fall Harvest - Time for thanksgiving and gratitude." },
        { point: "Event 6", text: "New Year's Eve - Reflecting on the past year." }
    ];

    return (
        <div className="root-div">
            <div style={{ width: "60%", height: "100px", margin: "0 auto" }}>
                <HorizontalTimeline
                    styles={{ outline: "#DFA867", foreground: "#19295C" }}
                    index={value}
                    indexClick={(index) => {
                        setValue(index);
                        setPrevious(value);
                    }}
                    values={VALUES.map(item => item.point)} // Use only points for the timeline
                />
            </div>
            <div className="text-center">
                {VALUES[value].text} {/* Display the corresponding text */}
            </div>
        </div>
    );
};

export default Timeline;
