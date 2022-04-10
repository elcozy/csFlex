import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function BannerComponent({ mode, carouselOnMobile, items }) {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 641;
  const itemsMap = isMobile ? items.slice(0, 2) : items;
  if (!items) {
    return <div>No items passed</div>;
  }

  return (
    <div>
      <div
        className={`${
          mode === "square"
            ? "butopea__square"
            : mode === "rectangle"
            ? "butopea__rectangle"
            : "butopea"
        } ${carouselOnMobile ? "mobile-carousel" : ""}`}
      >
        {mode === "rectangle" ? (
          items.map((item, i) => {
            return (
              <div
                key={i}
                className={`item_single ${item.type} ${
                  item.type === "image" ? item.aspectRatio : ""
                }`}
              >
                {item.type === "cta" && (
                  <>
                    <h1>{item.title}</h1>
                    <a href={`/${item.link}`}>
                      <button>{item.button}</button>
                    </a>
                  </>
                )}

                {item.type === "image" && item.aspectRatio === "square" && (
                  <div>
                    <img src={item.src} alt={i} />
                  </div>
                )}
                {item.type === "image" && item.aspectRatio === "rectangle" && (
                  <div style={{ backgroundImage: `url(${item.src})` }}></div>
                )}
              </div>
            );
          })
        ) : (
          <>
            {itemsMap.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`item_single ${item.type} ${
                    item.type === "image" ? item.aspectRatio : ""
                  }`}
                >
                  {item.type === "cta" && (
                    <>
                      <h1>{item.title}</h1>
                      <a href={`/${item.link}`}>
                        <button>{item.button}</button>
                      </a>
                    </>
                  )}
                  {item.type === "image" && (
                    <div>
                      <img src={item.src} alt={i} />
                    </div>
                  )}
                </div>
              );
            })}
            {carouselOnMobile && isMobile && (
              <Splide
                options={{
                  type: "loop",
                  width: "100%",
                  perPage: 3,
                  perMove: 1,
                  gap: "5px",
                  focus: "center",
                  pagination: false
                  // arrows: false,
                }}
              >
                {items.map(
                  (item, i) =>
                    item.src && (
                      <SplideSlide>
                        <img src={item.src} alt="Imabge 2" />
                      </SplideSlide>
                    )
                )}
              </Splide>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default BannerComponent;
