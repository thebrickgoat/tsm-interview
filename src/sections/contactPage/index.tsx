import ContactForm from "./ContactForm";
import ContactHero from "./Hero";

const ContactPage = () => {
  return (
    <>
      <ContactHero title="Get In Touch"
        subtitle="The Galaxy is a big place, but we're only a few clicks away." />
      <ContactForm />
    </>
  );
};

export default ContactPage;
