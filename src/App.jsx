import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header title="Galería de imágenes con React" />
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
          <Card
            cardImage="https://th.bing.com/th/id/R.2c62fc44e3d574f823c17c448340d534?rik=JYGxiWy%2foWcGBg&riu=http%3a%2f%2fmontecarlohotels.com%2fwp-content%2fuploads%2f2017%2f08%2fjardin-japones-4-770x530.jpg&ehk=MeykLsP%2f066cYRkHXaKCrWphYUicKYjzjZ0GFF39pGg%3d&risl=&pid=ImgRaw&r=0"
            cardTitle="Jardín Japones"
            cardText="Ubicado en el corazón de la ciudad, comuna de Providencia"
          >
            <Button textButton="Ver mas" size="btn-sm" />
          </Card>
          <Card
            cardImage="https://th.bing.com/th/id/R.c274297093458078755999a0d8867e7c?rik=iwzP6tAOVrS5bg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-za0x3SRztYc%2fUWwVXBBY2tI%2fAAAAAAAAAZU%2f9r7O_PRfKYE%2fs320%2fdownload.jpg&ehk=na1SoIrLqT6YEjXR820FupykecLvWPfFO86AYIVvCIM%3d&risl=&pid=ImgRaw&r=0"
            cardTitle="Jardín Alemán"
            cardText="En la zona de la antigua Vitacura se encuentra el club Manquehue con un hermoso jardín Alemán en su interior"
          >
            <Button textButton="Ver mas" size="btn-sm" />
          </Card>
          <Card
            cardImage="https://i1.wp.com/imagenesdejardines.com/wp-content/uploads/2016/05/Jardines-Chinos-en-Shanghai-Yuyuan-Fotos.jpg?w=1889&ssl=1"
            cardTitle="Jardín Chino"
            cardText="Dentro del parque O'Higgins podemos deleitarnos con este impresionante jardín Chino"
          >
            <Button textButton="Ver mas" size="btn-sm" />
          </Card>
          <Card
            cardImage="https://th.bing.com/th/id/R.ad170742bdef4be34ec0250c2e35ce0b?rik=FkCv0rOBW6%2fOLA&riu=http%3a%2f%2fmedia-cdn.tripadvisor.com%2fmedia%2fphoto-s%2f04%2f81%2f4e%2fa7%2fjardin-botanico-nacional.jpg&ehk=2jLojPOY6pWwHJu5LzX80hcGL%2fC%2feUfM%2bPvKweowcFQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
            cardTitle="Jardín Botánico"
            cardText="Unos de los tantos tesoros que alberga Viña del Mar es este emblemático Jardín Botánico"
          >
            <Button textButton="Ver mas" size="btn-sm" />
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default App;
