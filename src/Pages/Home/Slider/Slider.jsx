import AwesomeSlider from "react-awesome-slider";

import "react-awesome-slider/dist/styles.css";

const Slider = () => {
  const images = [
    "/path/to/image-0.jpg",
    "/path/to/image-1.jpg",
    "/path/to/image-2.jpg",
    "/path/to/image-3.jpg",
  ];
  return (
    <div>
      <div>
        <AwesomeSlider>
          {images.map((image, index) => (
            <div key={index} data-src={image} />
          ))}
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default Slider;
