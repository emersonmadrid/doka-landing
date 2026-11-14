export const DOKA_PHONE_NUMBER = '51932375092';
export const DOKA_DISPLAY_PHONE = '932 375 092';

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${DOKA_PHONE_NUMBER}?text=${encoded}`;
}

export function getGeneralWhatsAppLink(): string {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Buenos días' : hour < 19 ? 'Buenas tardes' : 'Buenas noches';
  return buildWhatsAppLink(
    `¡Hola DoKa! ${greeting}, vi su página web y me gustaría recibir asesoría para un proyecto de remodelación en mi espacio.`
  );
}

export function getServiceWhatsAppLink(serviceTitle: string): string {
  return buildWhatsAppLink(
    `¡Hola DoKa! Me interesa solicitar una cotización y asesoría especializada para el servicio de: *${serviceTitle}*. ¿Podrían brindarme información sobre disponibilidad y visita técnica?`
  );
}

export function getQuoteWhatsAppLink(data: {
  service: string;
  scope: string;
  district: string;
  approxSize: string;
  details?: string;
  clientName?: string;
  clientPhone?: string;
}): string {
  const parts = [
    `🔨 *SOLICITUD DE COTIZACIÓN - WEB DOKA*`,
    ``,
    `👤 *Cliente:* ${data.clientName?.trim() || 'No especificado'}`,
    `📱 *Teléfono:* ${data.clientPhone?.trim() || 'No especificado'}`,
    `📍 *Distrito en Lima:* ${data.district || 'Lima Metropolitana'}`,
    `🛠️ *Servicio principal:* ${data.service}`,
    `📐 *Tipo de trabajo:* ${data.scope}`,
    `📏 *Medidas/Área aproximada:* ${data.approxSize}`,
  ];

  if (data.details && data.details.trim().length > 0) {
    parts.push(`📝 *Detalles adicionales:* ${data.details.trim()}`);
  }

  parts.push(``, `¡Espero su respuesta para coordinar la visita técnica y presupuesto formal! Gracias.`);

  return buildWhatsAppLink(parts.join('\n'));
}
