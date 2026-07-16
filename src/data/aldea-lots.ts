import lote1 from "../assets/aldea/lote-1.jpg";
import lote2 from "../assets/aldea/lote-2.jpg";
import lote3 from "../assets/aldea/lote-3.jpg";
import type { Lot } from "../types/lot";

// Para agregar un lote nuevo: añade un objeto aquí. No requiere tocar componentes.
export const aldeaLots: Lot[] = [
  {
    id: "aldea-1",
    image: lote1,
    area: "2.000 m²", // [PENDIENTE: confirmar área exacta]
    estado: "Lote solo",
    whatsappMessage: "Hola, quiero información sobre el lote de 2.000 m² en La Aldea.",
  },
  {
    id: "aldea-2",
    image: lote2,
    area: "2.500 m²", // [PENDIENTE: confirmar área exacta]
    estado: "Lote solo",
    whatsappMessage: "Hola, quiero información sobre el lote de 2.500 m² en La Aldea.",
  },
  {
    id: "aldea-3",
    image: lote3,
    area: "3.000 m²", // [PENDIENTE: confirmar área exacta]
    estado: "Lote con casa",
    whatsappMessage: "Hola, quiero información sobre el lote con casa de 3.000 m² en La Aldea.",
  },
];
