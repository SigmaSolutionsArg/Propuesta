import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Check, DollarSign, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function PricingSection() {
  const includes = [
    'Relevamiento completo del directorio actual',
    'Programación a medida de 5 módulos integrados',
    'Mantenimiento durante todo el desarrollo',
    'Capacitación inicial del equipo',
    '2 meses de soporte post-implementación (bonificados)',
    'Documentación técnica completa',
    'Ajustes finos y monitoreo de adopción'
  ];

  const modules = [
    'Centro de Documentación',
    'Registros Críticos',
    'Gestión de Obras',
    'Control de Tareas',
    'Analytics Gerencial'
  ];

  return (
    <section id="inversion" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <DollarSign className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-700 font-semibold">Inversión Tecnológica</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Propuesta de Presupuesto
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Desarrollo integral del Sistema de Gestión ISO para Grupo Pose
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Pricing Card */}
            <div className="md:col-span-2">
              <Card className="border-2 border-blue-200 shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-5xl font-bold text-slate-900">$1.200.000</span>
                      <span className="text-xl text-slate-600">ARS / módulo</span>
                    </div>
                    <p className="text-slate-600 text-lg">
                      Desarrollo integral por módulo incluyendo todas las etapas del proyecto
                    </p>
                  </div>

                  <div className="border-t border-slate-200 pt-6 mb-6">
                    <h4 className="font-bold text-slate-900 mb-4 text-lg">El valor incluye:</h4>
                    <div className="space-y-3">
                      {includes.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-blue-700 font-semibold mb-1">Inversión Total del Proyecto</p>
                        <p className="text-3xl font-bold text-blue-900">$6.000.000 ARS</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-blue-700 font-semibold mb-1">5 Módulos Integrados</p>
                        <p className="text-lg text-blue-800">+ 2 meses bonificados</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Modules Breakdown */}
            <div>
              <Card className="border-2 border-slate-200 h-full">
                <CardContent className="p-8">
                  <h4 className="font-bold text-slate-900 mb-6 text-lg">Módulos del Sistema</h4>
                  <div className="space-y-4">
                    {modules.map((module, index) => (
                      <div key={index} className="pb-4 border-b border-slate-200 last:border-0 last:pb-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-6 h-6 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </span>
                          <span className="font-semibold text-slate-900 text-sm">{module}</span>
                        </div>
                        <div className="text-right text-sm text-slate-600">
                          $1.2M
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-10 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">¿Listo para transformar la gestión de Grupo Pose?</h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Contactanos para coordinar una reunión técnica y comenzar con el relevamiento
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Iniciar Proyecto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white hover:bg-white/10 text-white px-8 py-6 text-lg rounded-lg"
              >
                Agendar Reunión
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}