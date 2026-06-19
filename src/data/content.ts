export const highlights = [
  {
    title: 'Mecánica general',
    description: 'Reparaciones, frenos, suspensión, embrague y todo lo que tu motor necesita.',
    icon: 'wrench',
  },
  {
    title: 'Electricidad automotor',
    description: 'Baterías, alternadores, arranques, luces e instalación eléctrica.',
    icon: 'bolt',
  },
  {
    title: 'Auxilios mecánicos',
    description: 'Asistencia en ruta en Salto y alrededores. Te ayudamos cuando más lo necesitás.',
    icon: 'rescue',
  },
  {
    title: 'Horario corrido',
    description: 'De 9:00 a 17:00 hs, sin interrupción. Lunes a viernes.',
    icon: 'clock',
  },
] as const;

export const services = [
  {
    num: '01',
    title: 'Mecánica automotriz',
    description:
      'Reparación y mantenimiento de autos. Cambio de aceite, filtros, correas, frenos, embrague y trabajo general de motor.',
  },
  {
    num: '02',
    title: 'Electricidad del automotor',
    description:
      'Diagnóstico y reparación de sistemas eléctricos. Baterías, alternadores, arranques, luces e instalaciones.',
  },
  {
    num: '03',
    title: 'Mecánica de motos',
    description:
      'Servicio especializado para motocicletas y ciclomotores. Ajustes, reparaciones y puesta a punto.',
  },
  {
    num: '04',
    title: 'Mantenimiento preventivo',
    description:
      'Service, revisiones y cuidado de tu vehículo para que rinda bien y dure más. Todo lo que tenga motor.',
  },
  {
    num: '05',
    title: 'Auxilios mecánicos',
    description:
      '¿Te quedaste varado? Brindamos auxilio mecánico en Salto y zona. Contactanos y salimos a ayudarte.',
  },
  {
    num: '06',
    title: 'Diagnóstico y reparación',
    description:
      'Identificamos fallas mecánicas y eléctricas con precisión. Soluciones claras antes de reparar.',
  },
] as const;

export const aboutFeatures = [
  'Mecánica y electricidad en un solo taller',
  'Autos, motos y todo lo que tenga motor',
  'Auxilios mecánicos en Salto y alrededores',
  'Horario corrido de 9:00 a 17:00 hs',
  'Ubicados en Uruguay 2073 bis, Salto',
] as const;

export const navLinks = [
  { href: '#inicio', label: 'Inicio', id: 'inicio' },
  { href: '#servicios', label: 'Servicios', id: 'servicios' },
  { href: '#nosotros', label: 'Nosotros', id: 'nosotros' },
  { href: '#contacto', label: 'Contacto', id: 'contacto' },
] as const;
