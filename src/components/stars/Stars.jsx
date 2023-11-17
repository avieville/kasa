import starActive from "../../assets/star-active.png";
import starInactive from "../../assets/star-inactive.png";

export function Stars(props) {
  const { score } = props;
  let content = [];
  for (let i = 0; i < 5; i++) {
    score >= i + 1
      ? content.push(<img key={i}src={starActive} alt="star" />)
      : content.push(<img key={i} src={starInactive} alt="star" />);
  }
  return content;
}
