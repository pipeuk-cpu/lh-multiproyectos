export interface Lot {
  id: string;
  image?: ImageMetadata;
  area: string;
  estado: "Lote solo" | "Lote con casa";
  whatsappMessage: string;
}
