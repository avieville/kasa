export default function Banner(props) {
  const { imageLink, textOnImage } = props;
  return (
    <div className="banner">
      <img src={imageLink} alt="paysage" />
      {textOnImage && <h1>{textOnImage}</h1>}
    </div>
  );
}
