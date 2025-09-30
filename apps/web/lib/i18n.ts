type Language = 'en' | 'es';

export const messages = {
  en: {
    welcome: "Welcome to HOTMESS",
    affiliate: "Affiliate Portal",
    partner: "Partner Login",
    join: "Join Now"
  },
  es: {
    welcome: "Bienvenido a HOTMESS",
    affiliate: "Portal de Afiliados",
    partner: "Acceso de Socios",
    join: "Únete Ahora",
    dashboard: "Panel",
    leaderboard: "Clasificación",
    shop: "Tienda",
    timetable: "Programas",
    home: "Inicio",
    login: "Iniciar Sesión",
    logout: "Cerrar Sesión",
    loading: "Cargando...",
    error: "Error ocurrido",
    success: "Éxito",
    cancel: "Cancelar",
    save: "Guardar",
    edit: "Editar",
    delete: "Eliminar",
    confirm: "Confirmar",
    totalSales: "Ventas Totales",
    commission: "Comisión",
    referrals: "Referencias",
    conversionRate: "Tasa de Conversión",
    tier: "Nivel",
    rank: "Rango",
    lastSale: "Última Venta",
    copyLink: "Copiar Enlace",
    referralCode: "Código de Referencia",
    generateCode: "Generar Código",
    viewDetails: "Ver Detalles",
    payoutHistory: "Historial de Pagos",
    monthlyPerformance: "Rendimiento Mensual",
    recentActivity: "Actividad Reciente",
    noActivity: "Aún no hay actividad",
    shareLink: "¡Comparte tu enlace de referencia!",
    enterExperience: "Entra a la Experiencia",
    viewShows: "Ver Programas",
    exclusiveShop: "Tienda Exclusiva",
    earnWithUs: "Gana Con Nosotros",
    liveNow: "EN VIVO AHORA",
    luxuryRadio: "RADIO DE LUJO",
    whereChaosMeetsClass: "Donde el caos encuentra la clase"
  }
};

export function t(key: string, lang: Language = 'en'): string {
  const keys = key.split('.');
  let value: any = messages[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

export function getCurrentLanguage(): Language {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('hotmess_language') as Language;
    if (stored && messages[stored]) {
      return stored;
    }
    
    // Detect browser language
    const browserLang = navigator.language.split('-')[0] as Language;
    return messages[browserLang] ? browserLang : 'en';
  }
  
  return 'en';
}

export function setLanguage(lang: Language): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('hotmess_language', lang);
  }
}

export const supportedLanguages = Object.keys(messages) as Language[];