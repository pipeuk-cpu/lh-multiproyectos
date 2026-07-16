import type { Lot } from "../types/lot";

// [PENDIENTE: reemplazar con fotos/video reales de La Aldea cuando estén disponibles]
// Para agregar un lote nuevo: añade un objeto aquí. No requiere tocar componentes.
export const aldeaLots: Lot[] = [
  {
    id: "aldea-1",
    area: "2.000 m²", // [PENDIENTE: confirmar área exacta]
    estado: "Lote solo",
    whatsappMessage: "Hola, quiero información sobre el lote de 2.000 m² en La Aldea.",
  },
  {
    id: "aldea-2",
    area: "2.500 m²", // [PENDIENTE: confirmar área exacta]
    estado: "Lote solo",
    whatsappMessage: "Hola, quiero información sobre el lote de 2.500 m² en La Aldea.",
  },
  {
    id: "aldea-3",
    area: "3.000 m²", // [PENDIENTE: confirmar área exacta]
    estado: "Lote con casa",
    whatsappMessage: "Hola, quiero información sobre el lote con casa de 3.000 m² en La Aldea.",
  },
];
