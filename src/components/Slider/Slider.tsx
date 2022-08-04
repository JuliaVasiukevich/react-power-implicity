import "./index.scss";

export const Slider = () => {
  return (
    <div className="slider">
      <div className="slider__container">
        <div className="slide">
          <h2 className="slide__title">The Power of Simplicity</h2>
          <p className="slide__description">
            Instead of spending time searching for the right app, our AI will
            bring the right app to you.
          </p>
          <button type='button' className="slide__button">
          </button>
        </div>
        <ul className="slider__dots">
          <li className="slider__dot"></li>
          <li className="slider__dot"></li>
          <li className="slider__dot slider__dot--active"></li>
          <li className="slider__dot"></li>
          <li className="slider__dot"></li>
        </ul>
      </div>
    </div>
  );
};
