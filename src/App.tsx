import "./App.css";
import {
  AtTheTable,
  Clients,
  Craft,
  Footer,
  Form,
  Header,
  Navbar,
  Testimonials,
  TheCollection,
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
