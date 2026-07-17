// Número único de WhatsApp para todos los CTAs del sitio.
export const WHATSAPP_NUMBER = "PENDIENTE"; // [PENDIENTE: número de WhatsApp de LH Multiproyectos]

// Correo de respaldo para el formulario de contacto.
export const CONTACT_EMAIL = "PENDIENTE@lhmultiproyectos.com"; // [PENDIENTE: correo real de contacto]

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SITE = {
  name: "LH Multiproyectos SAS",
  salesOffice: "Carrera 4 # 12-104, Cartago, Valle del Cauca",
  instagram: {
    lh: "https://instagram.com/lhmultiproyectos",
    tumbaga: "https://instagram.com/condominiotumbaga",
  },
  whatsappMessages: {
    home: "Hola, quiero información sobre los proyectos de LH Multiproyectos.",
    tumbaga: "Hola, quiero información sobre los lotes de Tumbaga.",
    laAldea: "Hola, quiero información sobre los lotes de La Aldea en Alcalá.",
    locales: "Hola, quiero información sobre los locales comerciales en venta o arriendo.",
    construccion: "Hola, quiero información sobre el diseño y construcción de mi casa campestre.",
    nosotros: "Hola, quiero saber más sobre LH Multiproyectos.",
    contacto: "Hola, quiero que se pongan en contacto conmigo.",
  },
};
