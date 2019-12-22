import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const PreviewCompatibleImage = ({ imageInfo, className }) => {
  const imageStyle = {};
  const { alt = "", childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        className={className}
        style={imageStyle}
        fluid={image.childImageSharp.fluid}
        fixed={image.childImageSharp.fixed}
        // sizes={{ ...image.sizes, aspectRatio: 3 / 2 }}
        alt={alt}
      />
    );
  }

  if (!!childImageSharp) {
    return (
      <Img
        className={className}
        style={imageStyle}
        fluid={childImageSharp.fluid}
        fixed={childImageSharp.fixed}
        alt={alt}
      />
    );
  }

  if (!!image && typeof image === "string")
    return (
      <img className={className} style={imageStyle} src={image} alt={alt} />
    );

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object
  }).isRequired
};

export default PreviewCompatibleImage;
