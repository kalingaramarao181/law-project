import React from "react";
import { FaPhoneFlip } from "react-icons/fa6";
import "./PhoneButton.css";

const PhoneButton = () => {
  const phoneNumber = "987654321"; 

  return (
    <a
      href={`tel:${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="phone-button"
    >
      <FaPhoneFlip size={26} />
    </a>
  );
};

export default PhoneButton;