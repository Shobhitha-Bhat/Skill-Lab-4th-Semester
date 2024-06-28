import React from 'react'
import './style.css'
import { useNavigate } from "react-router-dom";

const HProduct = ({ Image, navigation, customImageStyle }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    switch (navigation) {
      case "DASHBOARD":
          navigate("/dashboard");
        break;
      case "MENU":
        navigate("/mainmenu");
        break;
      case "REVIEWS":
         navigate("/reviews");
        break;
      default:
        break;
    }
  };
  const defaultImageStyle = {
    display: "block",
    margin: "0 auto", // Center the image horizontally
    maxWidth: "100%", // Ensure the image doesn't overflow the div
    maxHeight: "150px", // Set a max height for the image
    objectFit: "contain", // Ensure the image fits within the container without stretching
  };

  const combinedImageStyle = { ...defaultImageStyle, ...customImageStyle };
  return (
    <div class="col">
      <div class="card shadow-sm">
        <img src={Image} alt="" style={combinedImageStyle} />
        <div class="card-body d-flex justify-content-center align-items-center">
          {/* <img src={Image2} alt="" className='w-25 h-25'/> */}
          <p>
            <button className="btn-center btninside" onClick={handleNavigation}>
              {navigation}
            </button>
            {/* <p>{Description}</p> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HProduct