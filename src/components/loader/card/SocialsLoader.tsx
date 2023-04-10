import ContentLoader from "react-content-loader";

const SocialsLoader = (props: any) => {
  return (
    <ContentLoader
      viewBox="0 0 390 290"
      height={226}
      width={305}
      speed={1}
      {...props}
    >
      <circle cx="30" cy="258" r="30" />
      <rect x="75" y="233" rx="4" ry="4" width="200" height="13" />
      <rect x="75" y="260" rx="4" ry="4" width="200" height="13" />
      <rect x="0" y="0" rx="5" ry="5" width="400" height="200" />
    </ContentLoader>
  );
};

export default SocialsLoader;
