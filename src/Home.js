import React from "react";
import "./style.css";
import Img1 from "./Photo";
import Img2 from "./Photo";
import Img3 from "./Photo";
import $ from "jquery";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src:
      "https://themom100.com/wp-content/uploads/2014/09/Back-to-School.jpg",
    altText: "Slide 1",
    caption: "Welcom"
  },
  {
    src:
    "data:image/jpeg;base64,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",
    altText: "succesuful",
    caption: "succesuful"
  },
  {
    src:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    altText: "graduation",
    caption: " graduation "
  },
  
];

export default class Home extends React.Component {
  componentDidMount() {
    const h1 = $("h1");
    console.log(h1);
  }
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img height={470} width={1110} src={item.src} alt={item.altText} />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <div className="container">
        <body>
          

          <Carousel
            className="col-auto-12"
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={this.goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={this.previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={this.next}
            />
          </Carousel>
        </body>
      </div>
    );
  }
}


