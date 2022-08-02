import "./index.scss";

export const Swiper = () => {
  return (
    <div className="swiper">
      <div className="swiper__container">
        <div className="slide">
          <h2 className="slide__title">The Power of Simplicity</h2>
          <p className="slide__description">
            Instead of spending time searching for the right app, our AI will
            bring the right app to you.
          </p>
          <div className="slide__button-wrap">
            <button className="slide__button">Learn</button>
          </div>
        </div>
          <div className="swiper__dots">
            <div className="swiper__dot"></div>
            <div className="swiper__dot"></div>
            <div className="swiper__dot swiper__dot--active"></div>
            <div className="swiper__dot"></div>
            <div className="swiper__dot"></div>
          </div>
      </div>
    </div>
  );
};
