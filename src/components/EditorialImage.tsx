import React from 'react';

export type ImageFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';

export interface EditorialImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Aspect ratio for the container (e.g. "16/9", "4/5", "1/1", "3/4") */
  aspectRatio?: string;
  /** Object-fit mode — defaults to "cover" */
  fit?: ImageFit;
  /** Focal point as percentage (0-100) for object-position. Defaults to center (50% 50%) */
  focalPoint?: { x: number; y: number };
  /** Additional class name for the wrapper */
  wrapperClassName?: string;
  /** Additional class name for the image itself */
  imgClassName?: string;
  /** Inline styles for the wrapper */
  wrapperStyle?: React.CSSProperties;
  /** Inline styles for the image */
  imgStyle?: React.CSSProperties;
}

const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt = '',
  aspectRatio,
  fit = 'cover',
  focalPoint,
  wrapperClassName = '',
  imgClassName = '',
  wrapperStyle,
  imgStyle,
  ...imgProps
}) => {
  const fx = focalPoint ? clamp(focalPoint.x, 0, 100) : 50;
  const fy = focalPoint ? clamp(focalPoint.y, 0, 100) : 50;

  const wrapperStyles: React.CSSProperties = {
    ...(aspectRatio ? { aspectRatio } : {}),
    overflow: 'hidden',
    position: 'relative',
    ...wrapperStyle,
  };

  const imageStyles: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: fit,
    objectPosition: `${fx}% ${fy}%`,
    display: 'block',
    ...imgStyle,
  };

  return (
    <div className={wrapperClassName} style={wrapperStyles}>
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        style={imageStyles}
        {...imgProps}
      />
    </div>
  );
};

export default EditorialImage;
