import React from "react";
import ContentLoader from "react-content-loader";

const ChattLoader = (props: any) => {
  return (
    <ContentLoader
      height={500}
      width={700}
      backgroundColor="#cfe8f7"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="15" cy="15" r="15" />
      <circle cx="15" cy="115" r="15" />
      <circle cx="15" cy="215" r="15" />
      <circle cx="15" cy="315" r="15" />

      <rect x="40" y="5" rx="5" ry="5" width="220" height="15" />
      <rect x="40" y="30" rx="5" ry="5" width="220" height="50" />

      <rect x="40" y="105" rx="5" ry="5" width="220" height="15" />
      <rect x="40" y="130" rx="5" ry="5" width="220" height="50" />

      <rect x="40" y="205" rx="5" ry="5" width="220" height="15" />
      <rect x="40" y="230" rx="5" ry="5" width="220" height="50" />

      <rect x="40" y="305" rx="5" ry="5" width="220" height="15" />
      <rect x="40" y="330" rx="5" ry="5" width="220" height="50" />
    </ContentLoader>
  );
};

export default ChattLoader;
