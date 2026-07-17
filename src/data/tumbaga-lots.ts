// Datos oficiales del plano "Planteamiento Urbanístico" (SBH Construye S.A.S, mayo 2023).
// Estado tomado del plano de vendidos: X = vendido.
// Para actualizar disponibilidad: cambia `estado` aquí. No requiere tocar componentes.
// `pos` es la posición del marcador sobre la imagen del plano (porcentaje x/y).

export type LotEstado = "disponible" | "vendido";

export interface TumbagaLot {
  num: number;
  area: string;
  estado: LotEstado;
  pos: { x: number; y: number };
}

export const tumbagaLots: TumbagaLot[] = [
  { num: 1, area: "1.636,8 m²", estado: "disponible", pos: { x: 42.9, y: 35.0 } },
  { num: 2, area: "1.642,9 m²", estado: "disponible", pos: { x: 37.9, y: 41.9 } },
  { num: 3, area: "1.668,5 m²", estado: "disponible", pos: { x: 34.3, y: 49.2 } },
  { num: 4, area: "1.736,1 m²", estado: "disponible", pos: { x: 29.6, y: 58.6 } },
  { num: 5, area: "1.888,1 m²", estado: "disponible", pos: { x: 26.8, y: 72.5 } },
  { num: 6, area: "1.526,4 m²", estado: "disponible", pos: { x: 16.4, y: 58.8 } },
  { num: 7, area: "1.506,9 m²", estado: "disponible", pos: { x: 13.9, y: 71.6 } },
  { num: 8, area: "2.114,2 m²", estado: "disponible", pos: { x: 16.8, y: 87.4 } },
  { num: 9, area: "1.507,9 m²", estado: "vendido", pos: { x: 36.1, y: 80.1 } },
  { num: 10, area: "1.602,5 m²", estado: "disponible", pos: { x: 42.5, y: 68.9 } },
  { num: 11, area: "1.567,5 m²", estado: "vendido", pos: { x: 48.6, y: 61.0 } },
  { num: 12, area: "1.787,5 m²", estado: "vendido", pos: { x: 55.0, y: 53.1 } },
  { num: 13, area: "1.612,8 m²", estado: "disponible", pos: { x: 57.1, y: 47.3 } },
  { num: 14, area: "1.519,5 m²", estado: "disponible", pos: { x: 66.4, y: 38.8 } },
  { num: 15, area: "1.675,6 m²", estado: "vendido", pos: { x: 47.9, y: 84.7 } },
  { num: 16, area: "1.504,1 m²", estado: "disponible", pos: { x: 54.6, y: 75.2 } },
  { num: 17, area: "1.530,7 m²", estado: "disponible", pos: { x: 62.9, y: 64.0 } },
];

// Lotes comerciales (sobre la vía)
export const tumbagaComerciales = [
  { id: "A", area: "2.714,7 m²", estado: "vendido" as LotEstado, pos: { x: 25.7, y: 19.7 } },
  { id: "B", area: "2.705,2 m²", estado: "disponible" as LotEstado, pos: { x: 52.9, y: 6.1 } },
];

export function lotWhatsappMessage(lot: TumbagaLot): string {
  return `Hola, quiero información sobre el Lote ${lot.num} (${lot.area}) en Tumbaga.`;
}
