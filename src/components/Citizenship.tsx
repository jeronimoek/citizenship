export function Citizenship(props: { title: string; passportImage: string }) {
  const { passportImage, title } = props;

  return (
    <div className="citizenship">
      <p className="citizenship-title">{title}</p>

      <div className="citizenship-image-container">
        <div className="citizenship-image">
          <img src={passportImage} alt="passport image" />
        </div>
      </div>
    </div>
  );
}
