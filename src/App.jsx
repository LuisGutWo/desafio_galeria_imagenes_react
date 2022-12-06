import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header title="Galería de imágenes con React" className="header-text" />
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
          <Card
            cardImage="src/assets/images/pexels-ryutaro-tsukata-5220061.jpg"
            cardTitle="Jardín Japones"
            cardText="Ubicado en el corazón de la ciudad, comuna de Providencia"
          ></Card>
          <Card
            cardImage="src/assets/images/pexels-maria-loznevaya-14534332.jpg"
            cardTitle="Jardín Alemán"
            cardText="En la zona de la antigua Vitacura se encuentra el club Manquehue con un hermoso jardín Alemán en su interior"
          ></Card>
          <Card
            cardImage="src/assets/images/pexels-peter-lopez-7035950.jpg"
            cardTitle="Jardín Chino"
            cardText="Dentro del parque O'Higgins podemos deleitarnos con este impresionante jardín Chino"
          ></Card>
          <Card
            cardImage="src/assets/images/pexels-daniel-frese-1055400.jpg"
            cardTitle="Jardín Botánico"
            cardText="Unos de los tantos tesoros que alberga Viña del Mar es este emblemático Jardín Botánico"
          ></Card>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default App;
