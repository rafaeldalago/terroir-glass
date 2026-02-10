import "./App.css";
import {
  Footer,
  Header,
  Craft,
  TheCollection,
  Form,
  Clients,
  AtTheTable,
  Navbar,
  Testimonials,
} from "./layout";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AtTheTable />
      <Craft />
      <Clients />
      <TheCollection />
      <Testimonials />
      <Form />
      <Footer />
    </>
  );
}

export default App;
