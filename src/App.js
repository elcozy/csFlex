import BannerComponent from "./BannerComponent";
import "./styles.scss";
import "@splidejs/splide/css";
import "@splidejs/react-splide/css/skyblue";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Butopea</h1>
      <BannerComponent
        mode="square"
        carouselOnMobile={false}
        items={[
          {
            type: "image",
            aspectRatio: "square",
            src: "https://picsum.photos/400",
            link: "https://example.com/link1"
          },
          {
            type: "cta",
            title: "CTA Title",
            button: "CTA Button",
            link: "https://example.com/link2"
          },
          {
            type: "image",
            aspectRatio: "square",
            src: "https://picsum.photos/400",
            link: "https://example.com/link3"
          }
        ]}
      />
      <br />
      <BannerComponent
        mode="square"
        carouselOnMobile={true}
        items={[
          {
            type: "cta",
            title: "CTA Title",
            button: "CTA Button",
            link: "https://example.com/link1"
          },
          {
            type: "image",
            aspectRatio: "square",
            src: "https://picsum.photos/400",
            link: "https://example.com/link2"
          },
          {
            type: "image",
            aspectRatio: "square",
            src: "https://picsum.photos/400",
            link: "https://example.com/link3"
          },
          {
            type: "image",
            aspectRatio: "square",
            src: "https://picsum.photos/400",
            link: "https://example.com/link3"
          },
          {
            type: "image",
            aspectRatio: "square",
            src: "https://picsum.photos/400",
            link: "https://example.com/link3"
          },
          {
            type: "image",
            aspectRatio: "square",
            src: "https://picsum.photos/400",
            link: "https://example.com/link3"
          }
        ]}
      />
      <br />
      <BannerComponent
        mode="rectangle"
        carouselOnMobile={false}
        items={[
          {
            type: "image",
            aspectRatio: "rectangle",
            src: "https://picsum.photos/1200/400",
            link: "https://example.com/link1"
          },
          {
            type: "image",
            aspectRatio: "square",
            src: "https://picsum.photos/400",
            link: "https://example.com/link1"
          },
          {
            type: "cta",
            title: "CTA Title",
            button: "CTA Button",
            link: "https://example.com/link1"
          }
        ]}
      />
    </div>
  );
}
