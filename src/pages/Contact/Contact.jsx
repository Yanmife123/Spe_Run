import "./Contact.css";
import { Header, Footer, Article, Content, Form } from "../../components";
import { infoIcon } from "../../assets";

export default function Contact() {
  return (
    <div>
      <Header pageTitle={"Contact Us"} icon={infoIcon} />
      <main>
        <Content>
          <Article>
            <h2>Partner with us</h2>
            <p>
              We’re here to help! If you have any questions, comments, or
              concerns, please feel free to reach out to us through any of the
              methods below.
            </p>
          </Article>
          <Form />
          <Article>
            <h2>Contact Details</h2>
            <p>
              <strong>Email:</strong>
              <a href="mailto:info@example.com">info@example.com</a>
            </p>
            <p>
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p>
              <strong>Address:</strong>
              <br />
              123 Main Street,
              <br />
              City, State, ZIP Code
            </p>
          </Article>
          <Article>
            <h2>Office Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.0237463728745!2d4.455795872353174!3d7.6805954923363755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10382bf4cfc23a5d%3A0xdc6c4b4c1b582ddf!2sRedeemer&#39;s%20University%20Ede!5e0!3m2!1sen!2sng!4v1737216938501!5m2!1sen!2sng"
              allowFullScreen=""
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Article>
        </Content>
      </main>
      <Footer />
    </div>
  );
}
