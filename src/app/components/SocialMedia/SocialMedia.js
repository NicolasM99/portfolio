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
    link: "https://www.instagram.com/n_moreno_p/",
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
