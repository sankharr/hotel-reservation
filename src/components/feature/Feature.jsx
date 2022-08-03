import {React, useState} from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import './feature.css'

function Feature({ icon, title, description }) {
  const variant = {
    true: {
      transform: "scale(1)",
    },
    false: {
      transform: "scale(0.5)",
    },
  };
  const [elementIsVisible, setElementIsVisible] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      // minTopValue={100}
    >
      <div className="feature">
        {/* icon */}
        <motion.div
          variants={variant}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          animate={`${elementIsVisible}`}
          className="icon bg-[#e5e6ea] rounded-2xl p-4"
        >
          <img
            src={require(`../../assets/${icon}.svg`)}
            alt=""
            className="w-[3rem]"
          />
        </motion.div>

        {/* <span className="mt-5">{title}</span> */}

        <span className="text-[#707070] mt-4">
          {description}
        </span>

        {/* <span className="text-[#E600FF] underline mt-[3rem] hover:cursor-pointer">
          Learn more
        </span> */}
      </div>
    </VisibilitySensor>
  );
}

export default Feature;
