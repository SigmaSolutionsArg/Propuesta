import { BarChart3, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function AnalyticsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Analytics</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                El Poder de la Gerencia
              </h2>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-slate-800 mb-6">
            De la carga operativa a la estrategia gerencial.
          </h3>

          <div className="prose prose-lg max-w-none text-slate-700 mb-10">
            <p className="text-lg leading-relaxed">
              El objetivo final no es solo cumplir la norma, sino mejorar el negocio. Mientras los equipos operativos cargan registros y completan tareas en su día a día, el sistema compila toda esa información y la transforma en estadísticas vitales.
            </p>

            <p className="text-lg leading-relaxed">
              Los perfiles gerenciales tendrán acceso a un módulo de Analytics donde podrán evaluar el rendimiento, cruzar la asistencia con la tasa de accidentes, ver el porcentaje de cumplimiento de las obras y tomar decisiones basadas en datos concretos, no en intuiciones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border-2 border-indigo-200">
              <BarChart3 className="w-12 h-12 text-indigo-600 mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-3">Visualización de Datos</h4>
              <p className="text-slate-700">
                Gráficos de barras, anillos y KPIs automáticos que se alimentan en tiempo real del trabajo de campo.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-3">Decisiones Basadas en Datos</h4>
              <p className="text-slate-700">
                Análisis de rendimiento, correlaciones entre asistencia y accidentes, y cumplimiento por obra en una sola pantalla.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}