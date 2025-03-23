import "./About.css";
import {
  SeeMore,
  Header,
  Figure,
  Content,
  Footer,
  Article,
} from "../../components";
import { infoIcon, Image1, Image2, Image3, Image4 } from "../../assets";

export default function About() {
  return (
    <div className="about">
      <Header pageTitle={"About Us"} icon={infoIcon} />
      <main>
        <Content>
          <Article>
            <h2>Mission and Vision</h2>
            <p>
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra.
            </p>
            <p>
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra.
            </p>
          </Article>
          <Article>
            <h2>History</h2>
            <p>
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra.
            </p>
            <p>
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra.
            </p>
          </Article>
          <Article>
            <h2>Core Values</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              quisquam saepe fugit blanditiis esse sequi culpa atque autem, quas
              hic!
            </p>
            <ol>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                saepe asperiores nemo?
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                saepe asperiores nemo?
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                saepe asperiores nemo?
              </li>
            </ol>
          </Article>
          <Article>
            <h2>Images/Media</h2>
            <section className="gallery-wrapper">
              <Figure imgSource={Image1} />
              <Figure imgSource={Image2} />
              <Figure imgSource={Image3} />
              <Figure imgSource={Image4} />
            </section>
          </Article>
          <SeeMore />
        </Content>
      </main>
      <Footer />
    </div>
  );
}
