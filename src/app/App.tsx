import Router from "../routing/router";
import Layout from "./layout";
import PrivacyPolicy from "../pages/privacy-policy/page";
import TermsOfService from "../pages/terms-of-service/page";
import Services_light from "../pages/light/services/page";
import AboutUs_light from "../pages/light/about/page";
import Homepage_light from "../pages/light/homepage/page";
import { BlobCursor } from "../components/Blob/BlobCursor";

function App() {
  return (
    <>
      <Layout>
        <Router
          routes={[
            {
              path: "/",
              component: <Homepage_light />,
              title: "Página Inicial | Meu Site",
              description:
                "Bem-vindo à nossa homepage, descubra nossos valores e serviços.",
            },
            {
              path: "/about",
              component: <AboutUs_light />,
              title: "Página Inicial | Meu Site",
              description:
                "Bem-vindo à nossa homepage, descubra nossos valores e serviços.",
            },
            {
              path: "/services",
              component: <Services_light />,
              title: "Página Inicial | Meu Site",
              description:
                "Bem-vindo à nossa homepage, descubra nossos valores e serviços.",
            },
            {
              path: "/services/automations-solutions",
              component: <Services_light />,
              title: "Página Inicial | Meu Site",
              description:
                "Bem-vindo à nossa homepage, descubra nossos valores e serviços.",
            },
            {
              path: "/services/media-growth",
              component: <Services_light />,
              title: "Página Inicial | Meu Site",
              description:
                "Bem-vindo à nossa homepage, descubra nossos valores e serviços.",
            },
            {
              path: "/privacy-policy",
              component: <PrivacyPolicy />,
              title: "Política de Privacidade | Meu Site",
              description: "Entenda como coletamos e utilizamos seus dados.",
            },
            {
              path: "/terms-of-service",
              component: <TermsOfService />,
              title: "Termos de Serviço | Meu Site",
              description: "Leia nossos termos e condições de uso do site.",
            },
          ]}
        />
      </Layout>
      <BlobCursor />
    </>
  );
}

export default App;
