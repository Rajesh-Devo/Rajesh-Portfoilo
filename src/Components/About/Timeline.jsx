import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline </span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            // date={"October 2021 - Present"}
            // contentStyle={{
            //   boxShadow: `var(--shadow)`,
            //   backgroundColor: `var(--clr-bg)`,
            //   textAlign: "center",
            //   color: `var(--clr-fg-alt)`
            // }}
          //   contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
          //   iconStyle={{
          //     backgroundColor: `var(--clr-bg)`,
          //     color: `var(--clr-primary)`
          //   }}
          //   icon={<WorkIcon />}
          // // >
          //   <h3
          //     className="vertical-timeline-element-title"
          //     data-aos="fade-right"
          //   >
          //     Instructional Associate
          //   </h3>
          //   <h4
          //     className="vertical-timeline-element-subtitle"
          //     data-aos="fade-right"
          //   >
          //     Masai School
          //   </h4>
          //   <p data-aos="fade-right">
          //     Mentoring and clearing student's conceptual doubts via
          //     standups,reviewing student's projects, reporting to the
          //     instructor. Helping students to start their career in Tech.
          //   </p>
          // </VerticalTimelineElement>
          // <VerticalTimelineElement
          //   date={"April 2021 - October 2021"}
          //   contentStyle={{
          //     boxShadow: `var(--shadow)`,
          //     backgroundColor: `var(--clr-bg)`,
          //     textAlign: "center",
          //     color: `var(--clr-fg-alt)`
          //   }}
          //   contentArrowStyle={{ borderRight: "16px solid  rgb(33, 150, 243)" }}
          //   iconStyle={{
          //     backgroundColor: `var(--clr-bg)`,
          //     color: `var(--clr-primary)`
          //   }}
          //   icon={<SchoolIcon />}
          // >
          //   <h3
          //     className="vertical-timeline-element-title"
          //     data-aos="fade-right"
          //   >
          //     Student
          //   </h3>
          //   <h4
          //     className="vertical-timeline-element-subtitle"
          //     data-aos="fade-right"
          //   >
          //     B.C.A(Bachelor of Computer Applications)
          //   </h4>
          //   <p data-aos="fade-right">
          //     Joined the SRN Adarsh College to learn Software Development
          //     and Data Structures. Also learned many soft skills in the process.
          //   </p>
          // </VerticalTimelineElement>
          // <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // date={"2017 - 2020"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  var(--clr-primary)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
             [B.C.A] Bachelor of Computer Applications
             
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
            </h4>
            <p data-aos="fade-right">
          SRN Adarsh College ,Bangalore [2017 - 2020]
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // date={"2020 - 2022"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`
            }}
            contentArrowStyle={{ borderRight: "16px solid  var(--clr-primary)" }}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
            [M.C.A] Master of Computer Applications
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
            </h4>
            <p data-aos="fade-right">B.I.T Bangalore Institute of technology,Bangalore [2020 - 2022]
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};
