const RetailContactForm = () => {
  return (
    <form action="/contact/thanks" method="POST" netlify-honeypot="bot-field" data-netlify="true" name="Contact Form" className="grid grid-cols-1 gap-y-6">
      {/* HIDDEN INPUTS FOR NETLIFY FORMS */}
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="Contact Form" />
      {/* END HIDDEN INPUTS */}

      <div>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" name="name" id="name" autoComplete="name" className="form-input" placeholder="Name" required />
      </div>
      <div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" className="form-input" placeholder="Email" required />
      </div>
      <div>
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <input id="subject" name="subject" type="text" className="form-input" placeholder="Subject" required />
      </div>
      <div>
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea id="message" name="message" rows={4} className="form-input" placeholder="Message" defaultValue={''} required />
      </div>
      <div>
        <button type="submit" className="form-submit">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default RetailContactForm;
