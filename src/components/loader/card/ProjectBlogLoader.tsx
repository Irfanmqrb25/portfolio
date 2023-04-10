import React from "react";
import ContentLoader from "react-content-loader";

const ProjectBlogLoader = (props: any) => {
  return (
    <ContentLoader viewBox="0 0 400 475" height={475} width={400} {...props}>
      <rect x="0" y="233" rx="4" ry="4" width="100" height="30" />
      <rect x="0" y="210" rx="5" ry="5" width="400" height="10" />
      <rect x="0" y="0" rx="5" ry="5" width="400" height="200" />
    </ContentLoader>
  );
};

export default ProjectBlogLoader;
