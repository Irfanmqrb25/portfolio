import ContentLoader from "react-content-loader";

const SocialsLoader = (props: any) => {
  return (
    <ContentLoader
      viewBox="0 0 200 150"
      height={226}
      width={305}
      speed={1}
      backgroundColor="#cfe8f7"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" width="400" height="200" />
    </ContentLoader>
  );
};

export default SocialsLoader;
