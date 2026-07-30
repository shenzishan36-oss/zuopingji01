import { useState } from "react";

export default function SmartImage({ src, alt, label, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`media-frame ${className}`}>
      {!failed && src ? (
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      ) : (
        <div className="image-placeholder" aria-label={alt}>
          {label || alt}
        </div>
      )}
    </div>
  );
}
