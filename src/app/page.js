

"use client";

import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "../components/profile/ProfileCard/ProfileCard.jsx";
import ContactButtons from "@/components/profile/ContactButtons/ContactButtons.jsx";
import SocialMediaIcons from "@/components/profile/SocialMediaIcons/SocialMediaIcons.jsx";
import GalleryWithModal from "@/components/cardContent/GalleryWithModal/GalleryWithModal.jsx";
import Slider from "@/components/cardContent/Slider/Slider.jsx";
import EducationExperience from "@/components/cardContent/EducationExperience/EducationExperience.jsx";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer.jsx";
import QRDisplay from "@/components/cardContent/QRDisplay/QRDispaly.jsx";
import PaymentInfo from "@/components/cardContent/PaymentInfo/PaymentInfo.jsx";

// Animaciones básicas
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const slideInLeft = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const slideInRight = {
  hidden: { x: "100vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};


export default function Home() {
  //---------------------------------------------------------
  // Perfil
  //---------------------------------------------------------

  const profileData = {
    name: "Anvetcorp SAS",
    title: "Informática & Tecnología",
    image: "/assets/images/profile/profile.png",
    description:
      "Somos una empresa especializada en soporte técnico, repotenciación de computadoras, desarrollo web y soluciones tecnológicas para empresas y clientes individuales.",
    phone: "+593939154014",
  };

  const whatsappMessage = "Hola, me gustaría contratar sus servicios.";

  //---------------------------------------------------------
  // Datos de contacto
  //---------------------------------------------------------

  //---------------------------------------------------------
  //Iconos de contacto

  const contacts = [
    {
      type: "location",
      icon: "/assets/icons/location.png",
      text: "Dirección",
      address: "Juan Montalvo 53 y Abdón Calderón, Urb. Ontaneda, Conocoto, Quito, Ecuador",
      hours: "Lunes a Viernes, 9:00 AM - 6:00 PM",
      googleMapsLink:
        "https://www.google.com/maps/place/ANVETCORP+Inform%C3%A1tica+y+Tecnolog%C3%ADa/@-0.2987752,-78.4889591,18z/data=!4m20!1m13!4m12!1m4!2m2!1d-78.4802151!2d-0.3126909!4e1!1m6!1m2!1s0x91d5a2b0678255c3:0xcba1b16c406a929d!2sanvetcorp!2m2!1d-78.4897359!2d-0.2979049!3m5!1s0x91d5a2b0678255c3:0xcba1b16c406a929d!8m2!3d-0.2979049!4d-78.4897359!16s%2Fg%2F11bwfmfm_t?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      type: "phone",
      icon: "/assets/icons/call.png",
      action: "tel:+593939154014",
      text: "Llamar",
    },
    {
      type: "email",
      icon: "/assets/icons/email.png",
      action: "mailto:asistencia@anvetcorp.com",
      text: "email",
    },
    {
      type: "whatsapp",
      icon: "/assets/icons/whatsapp.png",
      action: "https://wa.me/+593939154014",
      text: "WhatsApp",
    },
  ];

  //---------------------------------------------------------
  // Social media
  //---------------------------------------------------------

  //---------------------------------------------------------
  //Iconos y botones de redes sociales

  const socialMediaLinks = [
    {
      type: "facebook",
      icon: "facebook.png",
      url: "https://www.facebook.com/anvetcorp/",
      text: "Facebook",
    },
    {
      type: "instagram",
      icon: "instagram.png",
      url: "https://www.instagram.com/anvetcorp/",
      text: "Instagram",
    },
    {
      type: "twitter",
      icon: "x.png",
      url: "https://x.com/anvetcorp",
      text: "Twitter",
    },
    {
      type: "tiktok",
      icon: "tiktok.png",
      url: "https://www.tiktok.com/@anvetcorp?lang=es",
      text: "Linkedin",
    },
  ];

  //---------------------------------------------------------
  // Galería de productos y/servicios con imagen o video
  //---------------------------------------------------------

  const featuredServices = [
    {
      type: "image",
      title: "Repotenciación de Computadoras",
      image: "/assets/images/services/repotenciacion_computadoras.jpg",
      description: [
        "Transforma tu computadora lenta en una máquina rápida y eficiente gracias a la instalación de discos de estado sólido (SSD).",
        "Aumenta el rendimiento de tu equipo con la ampliación de memoria RAM, ideal para manejar múltiples aplicaciones y tareas al mismo tiempo.",
        "Actualización de hardware clave para mejorar la experiencia de usuario, brindando una mayor velocidad y tiempos de respuesta más cortos.",
        "Optimización del sistema operativo y eliminación de software innecesario para maximizar el rendimiento sin necesidad de invertir en un equipo nuevo."
      ],
      highlight: "Promoción especial: 10% de descuento en repotenciación durante este mes."
    },
    {
      type: "image",
      title: "Diseño Web con Administración de Hosting y Dominio",
      image: "/assets/images/services/web_design.jpg",
      description: [
        "Diseño de sitios web responsivos que se adaptan perfectamente a cualquier dispositivo, desde computadoras de escritorio hasta móviles.",
        "Optimización de SEO para que tu sitio web se posicione en los primeros resultados de los motores de búsqueda y atraiga más tráfico.",
        "Administración de hosting y dominios personalizados, asegurando que tu sitio esté siempre disponible y funcione con la mayor eficiencia posible.",
        "Implementación de tiendas en línea, plataformas empresariales y páginas de aterrizaje que generan conversiones y maximizan el retorno de inversión (ROI).",
        "Mantenimiento continuo para garantizar que tu sitio web se mantenga actualizado, seguro y completamente funcional en todo momento."
      ],
      highlight: "Plan desde $30/mes para mantenimiento y administración completa."
    },
    {
      type: "image",
      title: "Outsourcing de TI",
      image: "/assets/images/services/outsourcing.jpg",
      description: [
        "Externalización completa de la gestión de infraestructura tecnológica para que puedas concentrarte en el core de tu negocio.",
        "Ahorro de costos operativos mediante la contratación de un equipo especializado en TI sin necesidad de mantener personal interno.",
        "Soluciones tecnológicas adaptadas a las necesidades específicas de tu empresa, brindando soporte tanto remoto como en sitio según los requerimientos.",
        "Mantenimiento preventivo y correctivo de sistemas, garantizando la continuidad operativa y evitando fallos inesperados en tus redes y equipos.",
        "Consultoría continua para identificar oportunidades de mejora y optimización tecnológica en tu empresa, maximizando la productividad."
      ],
      highlight: "Consultoría gratuita en la primera reunión para evaluar tus necesidades tecnológicas."
    },
    {
      type: "image",
      title: "Soporte Técnico y Help Desk",
      image: "/assets/images/services/soporte_tecnico.jpg",
      description: [
        "Atención personalizada y rápida para resolver cualquier problema técnico que pueda afectar el desempeño de tus equipos o sistemas.",
        "Soporte remoto disponible las 24 horas del día para garantizar que tu negocio nunca se detenga por fallos técnicos inesperados.",
        "Monitoreo proactivo de tus sistemas para anticipar y solucionar problemas antes de que afecten la operación de tu empresa.",
        "Consultoría especializada para la optimización de tus sistemas de TI, mejorando la eficiencia y seguridad de tu infraestructura tecnológica.",
        "Soporte en sitio cuando sea necesario para resolver problemas complejos que no se puedan manejar de forma remota."
      ],
      highlight: "Soporte técnico disponible 24/7, asegurando la continuidad operativa de tu negocio."
    }
  ];
  
  

  //---------------------------------------------------------
  //Slider de productos y servicios
  //---------------------------------------------------------

  const slidesData = [
    {
      image: "/assets/images/slides/repotenciacion_ssd_ram.png",
      title: "Repotenciación con SSD y RAM",
    },
    {
      image: "/assets/images/slides/proteccion_electrica.jpg",
      title: "Protección eléctrica con UPS",
    },
    {
      image: "/assets/images/slides/venta_computadoras.jpg",
      title: "Venta de Computadoras",
    },
    {
      image: "/assets/images/slides/anvetcard.jpg",
      title: "Tarjetas de presentación digitales",
    },
    {
      image: "/assets/images/slides/web_design.png",
      title: "Diseño web y hosting",
    },
  ];

  //---------------------------------------------------------
  // Accordion de experiencia laboral y educación
  //---------------------------------------------------------

  const entries = [
    {
      date: "",
      title: "Soporte Técnico y Help Desk",
      description: "Anvetcorp S.A.S.",
      details: [
        "Mantenimiento preventivo y correctivo de equipos informáticos.",
        "Soluciones personalizadas de soporte técnico para empresas y clientes individuales.",
        "Prácticas en soporte técnico remoto y en sitio.",
        "Diagnóstico y reparación de computadoras, laptops y servidores.",
        "Asesoramiento en protección eléctrica y seguridad informática.",
        "Outsourcing de soporte técnico y gestión de infraestructura TI.",
      ],
      image: "/assets/images/education/soporte.png",
    },
    {
      date: "",
      title: "Repotenciación de Computadoras",
      description: "Anvetcorp S.A.S.",
      details: [
        "Implementación de discos SSD, ampliación de memoria RAM y otros upgrades.",
        "Optimización del rendimiento de PCs y laptops.",
        "Mantenimiento y mejora de la eficiencia energética.",
        "Instalación y configuración de software especializado para empresas.",
      ],
      image: "/assets/images/education/repotenciacion.png",
    },
    {
      date: "",
      title: "Desarrollo Web y Soluciones Digitales",
      description: "Anvetcorp S.A.S.",
      details: [
        "Desarrollo de sitios web personalizados para empresas y clientes individuales.",
        "Diseño y administración de hosting y dominios.",
        "Soluciones web full-stack usando tecnologías modernas como Next.js.",
        "Desarrollo de tarjetas de presentación digitales personalizadas.",
        "Optimización de sitios web para motores de búsqueda (SEO).",
      ],
      image: "/assets/images/education/diseño_web.png",
    },
    {
      date: "",
      title: "Consultoría en Infraestructura TI",
      description: "Anvetcorp S.A.S.",
      details: [
        "Diseño e implementación de redes LAN y WiFi para empresas.",
        "Consultoría en soluciones de infraestructura TI y protección de datos.",
        "Gestión y mantenimiento de servidores y sistemas empresariales.",
        "Optimización de infraestructuras TI para eficiencia y seguridad.",
        "Administración y monitoreo de redes empresariales.",
      ],
      image: "/assets/images/education/consultoria.png",
    },
    {
      date: "",
      title: "Seguridad Informática",
      description: "Anvetcorp S.A.S.",
      details: [
        "Implementación de soluciones de seguridad informática y protección de datos.",
        "Consultoría en protección de redes y sistemas empresariales.",
        "Monitoreo y actualización de software de seguridad para prevenir ciberataques.",
        "Soluciones personalizadas de firewall y antivirus.",
      ],
      image: "/assets/images/education/security.png",
    },
    {
      date: "",
      title: "Instalación y Administración de Redes WiFi",
      description: "Anvetcorp S.A.S.",
      details: [
        "Instalación de redes WiFi para empresas y hogares.",
        "Optimización de redes WiFi para mayor velocidad y alcance.",
        "Monitoreo y administración de redes para garantizar su seguridad y funcionamiento óptimo.",
        "Soluciones para ampliación de cobertura y mejora de la conectividad.",
      ],
      image: "/assets/images/education/wifi.png",
    },
    {
      date: "",
      title: "Venta de Equipos Informáticos",
      description: "Anvetcorp S.A.S.",
      details: [
        "Venta de computadoras, laptops y accesorios informáticos.",
        "Asesoramiento en la adquisición de equipos tecnológicos.",
        "Ofertas personalizadas para empresas y proyectos específicos.",
      ],
      image: "/assets/images/education/sales.png",
    },
    {
      date: "",
      title: "Gestión y Administración de Redes Sociales",
      description: "Anvetcorp S.A.S.",
      details: [
        "Gestión de perfiles de redes sociales para empresas.",
        "Desarrollo de estrategias de contenido y marketing digital.",
        "Optimización de perfiles para generar mayor visibilidad y engagement.",
        "Monitorización de campañas y análisis de métricas de redes sociales.",
      ],
      image: "/assets/images/education/social-media.png",
    },
  ];
  
  //---------------------------------------------------------
  // Promociones
  //---------------------------------------------------------

  const equipmentForSale = [
    {
      type: "image",
      title: "PC Gamer de Alto Rendimiento",
      image: "/assets/images/equipment/pc_gamer.jpg",
      description: [
        "Procesador Intel Core i7 de 12ª generación para un rendimiento extremo en juegos y multitarea.",
        "Tarjeta gráfica NVIDIA GeForce RTX 3080 para gráficos ultrarrealistas y fluidez en juegos AAA.",
        "32 GB de RAM DDR4 para un rendimiento sin interrupciones, incluso en las tareas más intensas.",
        "Disco SSD de 1TB para tiempos de carga ultrarrápidos y almacenamiento adicional de 2TB en HDD.",
        "Gabinete con iluminación RGB personalizable y sistema de refrigeración líquida para un rendimiento óptimo.",
        "Monitor curvo de 27 pulgadas con resolución QHD y tasa de refresco de 144Hz para una experiencia de juego inmersiva.",
        "Incluye teclado mecánico RGB y ratón gamer de regalo.",
        "Garantía de 1 años con soporte técnico especializado."

      ],
      highlight: "Precio especial: $2,999.99"
    },
    {
      type: "image",
      title: "Laptop Dell Ryzen 7 8845HS",
      image: "/assets/images/equipment/hp_victus.jpeg",
      description: [
        "Procesador AMD Ryzen 7, ideal para tareas profesionales y edición de video.",
        "16 GB de RAM DDR4 para un rendimiento ágil y multitarea eficiente.",
        "Disco SSD de 512 GB para tiempos de arranque rápidos y almacenamiento seguro.",
        "Pantalla Full HD de 16.1 pulgadas con tecnología antirreflejo, perfecta para uso prolongado.",
        "Tarjeta gráfica NVIDIA GeForce RTX 4070 DE 8 GB DDR6 para gráficos nítidos y fluidos en juegos y aplicaciones.",
        "Incluye estuche de neopreno",
        "Garantía de 1 año con soporte técnico especializado."
      ],
      highlight: "Precio especial: $1,429.99"
    },
    {
      type: "image",
      title: "Impresora Multifuncional Epson L3250",
      image: "/assets/images/equipment/epson_l3250.jpg",
      description: [
        "Impresora, escáner y copiadora en un solo equipo con sistema de tanque de tinta.",
        "Impresión económica y de alta calidad con botellas de tinta de ultra alto rendimiento.",
        "Conectividad Wi-Fi para impresión inalámbrica desde tu smartphone, tablet o computadora.",
        "Ideal para el hogar y pequeñas oficinas con un bajo costo por página impresa.",
        "Incluye set de tintas originales",
      ],
      highlight: "Precio especial: $249.99"
    }
  ];
  


  //---------------------------------------------------------
  // Payment Info
  //---------------------------------------------------------

  const banksData = [
    {
      name: "Banco Produbanco",
      logo: "produbanco.png",
      instructions: "Use estos detalles para realizar el pago. ",
      details: [
        { label: "Número de Cuenta", value: "12040563869" },
        { label: "Tipo de Cuenta", value: "Ahorros" },
        { label: "Identificación", value: "1793103677001" },
        { label: "Email", value: "contabilidad@anvetcorp.com" },
      ],
    },
   
  ];

  //---------------------------------------------------------
  //---------------------------------------------------------

  return (
    <main>
      {/* Sección Inicio */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} id="inicio" >
        <ProfileCard profile={profileData} whatsappMessage={whatsappMessage} />
        <ContactButtons contacts={contacts} />
        <SocialMediaIcons socialLinks={socialMediaLinks} />
      </motion.div>

      {/* Servicios */}
      <motion.div id="curriculum" initial="hidden" animate="visible" variants={fadeIn} className="my-spacing-4">
        <h1 className="section-subtitle py-spacing-2">Nuestros Servicios</h1>
        <EducationExperience entries={entries} />
      </motion.div>

      {/* featuredServices */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
        id="productos"
      >
        <h1 className="section-subtitle py-spacing-2">Servicios Destacados</h1>
        <GalleryWithModal items={featuredServices} />
      </motion.div>

      {/* Servicios */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
      >
        <h1 className="section-subtitle py-spacing-2">Ofertas y Promociones</h1>
        <Slider slides={slidesData} />
      </motion.div>

      {/* Venta de Equipos */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
        id="productos"
      >
        <h1 className="section-subtitle py-spacing-2">Productos Destacados</h1>
        <GalleryWithModal items={equipmentForSale} />
      </motion.div>

      {/* Video Player */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="my-spacing-4">
        <VideoPlayer
          videoSrc="/assets/videos/servicios_informaticos.mp4"
          title="Servicios Informáticos"
        />
      </motion.div>

      {/* Información de Pago */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
        id="info_pago"
      >
        <h1 className="section-subtitle py-spacing-2">Información de Pago</h1>
        <PaymentInfo banks={banksData} />
      </motion.div>

      {/* QR Code */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="my-spacing-4">
        <QRDisplay qrImage="/assets/images/qrCode.png" title="Código QR" />
      </motion.div>
    </main>
  );
}
