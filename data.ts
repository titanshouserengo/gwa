import { Plan } from './types';

export const plans: Plan[] = [
  {
    id: "mensual",
    name: "Plan Mensual",
    price: "$25.000",
    period: "/mes",
    description: "Ideal para comenzar tu transformación sin compromisos a largo plazo.",
    features: [
      "Acceso ilimitado al gimnasio",
      "Sin costo de matrícula",
      "Evaluación inicial básica",
      "Acceso a camarines y duchas",
      "Sin contrato de permanencia"
    ]
  },
  {
    id: "trimestral",
    name: "Plan Trimestral",
    price: "$65.000",
    period: "/3 meses",
    recommended: true,
    description: "El equilibrio perfecto entre compromiso y flexibilidad. Ahorra y obtén beneficios extra.",
    features: [
      "Ahorras $10.000 comparado con el mensual",
      "Acceso ilimitado al gimnasio",
      "Sin costo de matrícula",
      "Plan de entrenamiento personalizado",
      "Acceso a eventos comunitarios",
      "1 Sesión de Recovery gratis"
    ]
  },
  {
    id: "semestral",
    name: "Plan Semestral",
    price: "$120.000",
    period: "/6 meses",
    description: "Para los verdaderos titanes. Maximiza tus resultados y tu ahorro.",
    features: [
      "Ahorras $30.000 comparado con el mensual",
      "Todo lo del plan trimestral",
      "Congelamiento de plan (15 días)",
      "Polera oficial Titans House",
      "Descuento en suplementos",
      "Asesoría nutricional básica"
    ]
  }
];