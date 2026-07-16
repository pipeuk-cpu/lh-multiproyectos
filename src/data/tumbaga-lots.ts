import lote5 from "../assets/tumbaga/lote-5.jpg";
import lote7 from "../assets/tumbaga/lote-7.jpg";
import lote8 from "../assets/tumbaga/lote-8.jpg";
import lote9 from "../assets/tumbaga/lote-9.jpg";
import lote10 from "../assets/tumbaga/lote-10.jpg";
import lote11 from "../assets/tumbaga/lote-11.jpg";
import lote12 from "../assets/tumbaga/lote-12.jpg";
import lote13 from "../assets/tumbaga/lote-13.jpg";
import lote14 from "../assets/tumbaga/lote-14.jpg";
import type { Lot } from "../types/lot";

// Para agregar un lote nuevo: añade un objeto aquí. No requiere tocar componentes.
export const tumbagaLots: Lot[] = [
  {
    id: "lote-5",
    image: lote5,
    area: "1.500 m²", // [PENDIENTE: confirmar área exacta]
    estado: "Lote solo",
    whatsappMessage: "Hola, quiero información sobre el lote de 1.500 m² en Tumbaga.",
  },
  {
    id: "lote-7",
    image: lote7,
    area: "1.800 m²", // [PENDIENTE: confirmar área exacta]
    estado: "Lote solo",
    whatsappMessage: "Hola, quiero información sobre el lote de 1.800 m² en Tumbaga.",
  },
  {
    id: "lote-8",
    image: lote8,
    area: "2.000 m²", // [PENDIENTE: confirmar área exacta]
    estado: "Lote solo",
    whatsappMessage: "Hola, quiero información sobre el lote de 2.000 m² en Tumbaga.",
  },
  {
    id: "lote-9",
    image: lote9,
    area: "1.500 m²", // [PENDIENTE: confirmar área exacta]
    estado: "Lote solo",
    whatsappMessage: "Hola, quiero información sobre el lote de 1.500 m² en Tumbaga.",
  },
  {
    id: "lote-10",
    image: lote10,
    area: "1.700 m²", // [PENDIENTE: confirmar área exacta]
    estado: "Lote solo",
    whatsappMessage: "Hola, quiero información sobre el lote de 1.700 m² en Tumbaga.",
  },
  {
    id: "lote-11",
    image: lote11,
    area: "2.200 m²", // [PENDIENTE: confirmar área exacta]
    estado: "Lote con casa",
    whatsappMessage: "Hola, quiero información sobre el lote con casa de 2.200 m² en Tumbaga.",
  },
  {
    id: "lote-12",
    image: lote12,
    area: "1.600 m²", // [PENDIENTE: confirmar área exacta]
    estado: "Lote solo",
    whatsappMessage: "Hola, quiero información sobre el lote de 1.600 m² en Tumbaga.",
  },
  {
    id: "lote-13",
    image: lote13,
    area: "1.900 m²", // [PENDIENTE: confirmar área exacta]
    estado: "Lote solo",
    whatsappMessage: "Hola, quiero información sobre el lote de 1.900 m² en Tumbaga.",
  },
  {
    id: "lote-14",
    image: lote14,
    area: "2.500 m²", // [PENDIENTE: confirmar área exacta]
    estado: "Lote con casa",
    whatsappMessage: "Hola, quiero información sobre el lote con casa de 2.500 m² en Tumbaga.",
  },
];
