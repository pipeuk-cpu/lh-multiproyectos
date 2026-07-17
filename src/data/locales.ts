import type { LocalComercial } from "../types/local";

// [PENDIENTE: reemplazar con fotos reales y confirmar direcciones/precios con Felipe]
// Para agregar un local nuevo: añade un objeto aquí. No requiere tocar componentes.
export const locales: LocalComercial[] = [
  {
    id: "local-1",
    direccion: "Carrera 4 # 12-104, Cartago", // [PENDIENTE: confirmar dirección]
    area: "45 m²", // [PENDIENTE: confirmar área]
    precio: "Consultar", // [PENDIENTE: confirmar precio]
    modalidad: "Arriendo", // [PENDIENTE: confirmar venta o arriendo]
    whatsappMessage: "Hola, quiero información sobre el local de la Carrera 4 # 12-104 en Cartago.",
  },
  {
    id: "local-2",
    direccion: "[PENDIENTE: dirección]",
    area: "60 m²", // [PENDIENTE: confirmar área]
    precio: "Consultar",
    modalidad: "Venta o arriendo", // [PENDIENTE: confirmar]
    whatsappMessage: "Hola, quiero información sobre el local comercial disponible en Cartago.",
  },
];
