import React, { useEffect } from "react";
import { useSpring, animated as anim } from "react-spring";
import "./floating-button.css";

const fast = { tension: 1200, friction: 20 };
// const slow = { mass: 10, friction: 200 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;
function FloatingButton(props) {
  const [{ pos1 }, setPos1] = useSpring(() => ({
    pos1: [window.innerWidth - 40, window.innerHeight - 40],
    config: fast,
  }));
  const [{ pos2 }, setPos2] = useSpring(() => ({
    pos2: [window.innerWidth - 40, window.innerHeight - 40],
    config: fast,
  }));
  useEffect(() => {
    const handler = ({ clientX, clientY }) => {
      setPos1({
        pos1: [
          clientX <= window.innerWidth - 90 ||
          clientY <= window.innerHeight - 90
            ? window.innerWidth -
              45 -
              45 *
                ((window.innerWidth - clientX) /
                  Math.sqrt(
                    Math.pow(window.innerWidth - clientX, 2) +
                      Math.pow(window.innerHeight - clientY, 2)
                  ))
            : clientX,
          clientX <= window.innerWidth - 90 ||
          clientY <= window.innerHeight - 90
            ? window.innerHeight -
              45 -
              45 *
                ((window.innerHeight - clientY) /
                  Math.sqrt(
                    Math.pow(window.innerHeight - clientY, 2) +
                      Math.pow(window.innerWidth - clientX, 2)
                  ))
            : clientY,
        ],
      });
      setPos2({
        pos2: [window.innerWidth - 40, window.innerHeight - 40],
      });
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="15" />
          <feColorMatrix
            in="blur"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 15 -7"
          />
        </filter>
      </svg>
      <div className="hooks-main">
        <div className="hooks-filter">
          <anim.div
            className="b3"
            style={{ transform: pos1.to(trans) }}
          ></anim.div>
          <anim.div
            className="b2"
            style={{ transform: pos2.to(trans) }}
          ></anim.div>
        </div>
      </div>
    </>
  );
}

export default FloatingButton;
