import Carousel from "./ui/carousel";
import Child1 from "./ui/child1";
import Child2 from "./ui/child2";
import Child3 from './ui/child3'

export default function Home() {
  return (
    <div>
      <Carousel />
      <Child1 />
      <Child2 />
      <Child3 />
    </div>
  );
}