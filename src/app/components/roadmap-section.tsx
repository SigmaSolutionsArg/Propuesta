import { Clock, Code, Users, Award } from 'lucide-react';
import { motion } from 'motion/react';

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            Nuestro Compromiso de Implementación
          </h2>

          <div className="prose prose-lg max-w-none text-slate-700 mb-12">
            <p className="text-lg leading-relaxed text-center">
              No entregamos un software y desaparecemos. Nos involucramos en el proceso. Nos sentaremos con cada parte competente para revisar el directorio actual, definir qué sirve y adaptar la herramienta a sus procesos reales.
            </p>
          </div>

          {/* Plan de Acción */}
          <div className="bg-white rounded-xl p-8 border-2 border-slate-200 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-900">Plan de Acción y Tiempos</h3>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              El desarrollo completo se estructura en un cronograma de <strong>5 meses de trabajo intenso</strong> (estimando 1 mes de desarrollo, testeo y puesta a punto por cada uno de los 5 grandes módulos). Entregamos el sistema con documentación técnica completa y nos encargamos de la capacitación inicial de su equipo.
            </p>
          </div>

          {/* Módulos Timeline */}
          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {[
              'Centro de Documentación',
              'Registros Críticos',
              'Gestión de Obras',
              'Control de Tareas',
              'Analytics'
            ].map((module, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-6 rounded-xl text-center">
                <div className="text-sm font-semibold mb-2 opacity-90">Mes {index + 1}</div>
                <div className="text-lg font-bold">{module}</div>
              </div>
            ))}
          </div>

          {/* Garantía de Adopción */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-10 h-10" />
              <h3 className="text-2xl font-bold">Nuestra Garantía de Adopción</h3>
              <span className="ml-auto bg-yellow-400 text-green-900 px-4 py-2 rounded-full text-sm font-bold">
                BONIFICACIÓN ESPECIAL
              </span>
            </div>
            <p className="text-lg leading-relaxed mb-4">
              Sabemos que la adaptación al cambio lleva tiempo. Por eso, bonificamos <strong>2 meses adicionales de acompañamiento post-lanzamiento</strong>. Durante este tiempo, monitorearemos el impacto del sistema, evaluaremos si se requieren ajustes finos en los módulos y nos aseguraremos de que todos los usuarios dominen la plataforma.
            </p>
            <p className="text-xl font-semibold">
              Su éxito en la adopción es nuestro éxito.
            </p>
          </div>

          {/* Resumen Timeline */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-blue-200 text-center">
              <Code className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">5 Meses</div>
              <p className="text-slate-600">Desarrollo Intensivo</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-green-200 text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">2 Meses</div>
              <p className="text-slate-600">Acompañamiento Bonificado</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-purple-200 text-center">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">7 Meses</div>
              <p className="text-slate-600">Duración Total</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}