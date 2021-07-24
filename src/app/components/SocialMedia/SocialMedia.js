import React from "react";
import { Row } from "react-bootstrap";
import Tooltip from "../Tooltip/Tooltip";
const social_media = [
  {
    name: "Behance",
    icon: "behance-square",
    link: "https://www.behance.net/nicolasmoreno99",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/nicolas-moreno-posada/",
  },
  {
    name: "GitHub",
    icon: "github-square",
    link: "https://github.com/NicolasM99",
  },
  {
    name: "Instagram",
    icon: "instagram-square",
    link: "https://www.instagram.com/",
  },
];
export default function SocialMedia({ color }) {
  return (
    <Row className="social-media-icon-container">
      {social_media.map((item, idx) => (
        <Tooltip
          key={idx}
          label={item.name}
          render={(ref, triggerHandler) => {
            return (
              <a
                data-aos="flip-right"
                data-aos-delay={900 + idx * 100 + ""}
                ref={ref}
                {...triggerHandler}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                key={idx}
              >
                <i
                  className={`fab fa-${item.icon} fa-2x social-media-icon`}
                  style={{ color: color }}
                />
              </a>
            );
          }}
        />
      ))}
    </Row>
  );
}
