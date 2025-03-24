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
            <h2>Mission</h2>
            <p>
              The mission of the Society of Petroleum Engineers is to collect,
              disseminate, and exchange technical knowledge concerning the
              exploration, development, and production of oil and gas resources
              and related technologies for the public benefit; and to provide
              opportunities for professionals to enhance their technical and
              professional competence.
            </p>
            <h2>Vision</h2>
            <p>
              Advance the oil and gas community’s ability to meet the world’s
              energy in a safe, environmentally responsible, and
              sustainable manner.
            </p>
          </Article>
          <Article>
            <h2>History</h2>
            <p>
              The Society of Petroleum Engineers (SPE) aims to collect,
              disseminate, and exchange technical knowledge related to oil and
              gas exploration, development, and production, while also advancing
              the oil and gas community's ability to meet the world's energy
              needs safely, responsibly, and sustainably.
            </p>
            <p></p>
          </Article>
          <Article>
            <h2>Core Values</h2>
            <p>
              The core values of the Society of Petroleum Engineers (SPE) are
              excellence, integrity, professionalism, life-long learning,
              diversity, volunteerism, innovation, and social responsibility.
              <br />
              Here's a more detailed breakdown:
            </p>
            <ol>
              <li>
                Excellence: Striving for the highest standards in technical
                knowledge and practice.
              </li>
              <li>
                Integrity: Maintaining the highest ethical standards in all
                activities.
              </li>
              <li>
                Professionalism: Acting with competence, respect, and
                responsibility.
              </li>
              <li>
                Life-long Learning: Continuously seeking to expand knowledge and
                skills.
              </li>
              <li>
                Diversity: Valuing and respecting the wide range of backgrounds,
                experiences, and perspectives within the organization.
              </li>
              <li>
                Volunteerism: Encouraging and supporting members to contribute
                their time and expertise to the organization and the industry.
              </li>
              <li>
                Innovation: Fostering creativity and the development of new
                technologies and solutions.
              </li>
              <li>
                Social Responsibility: Recognizing the impact of the oil and gas
                industry on society and working to minimize negative impacts and
                maximize positive ones.
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
