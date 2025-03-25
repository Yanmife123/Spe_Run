import "./Form.css";

export default function Form() {
  return (
    <form className="contact-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="subject">Subject:</label>
      <input type="text" id="subject" name="subject" required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" rows="4" required></textarea>

      <div className="captcha">
        {/* <!-- Insert CAPTCHA or similar validation here --> */}
        <p>CAPTCHA Placeholder</p>
      </div>

      <button type="submit">Send Message</button>
    </form>
  );
}
