import ContactForm from "../components/Contact/ContactForm";
import ContactSlider from "../components/Contact/ContactSlider";

export default function HomePage() {
  return (
    <main className="main-bg">
        <ContactSlider/>
        <ContactForm/>
    </main>
  );
}
