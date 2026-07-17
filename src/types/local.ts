export interface LocalComercial {
  id: string;
  image?: ImageMetadata;
  direccion: string;
  area: string;
  precio?: string;
  modalidad: "Venta" | "Arriendo" | "Venta o arriendo";
  whatsappMessage: string;
}
