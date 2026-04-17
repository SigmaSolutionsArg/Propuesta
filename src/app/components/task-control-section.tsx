import { CheckSquare, Calendar, Table, Bell } from 'lucide-react';
import { motion } from 'motion/react';

export function TaskControlSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <CheckSquare className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Enfoque de Tareas</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                La Vista 360°
              </h2>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-slate-800 mb-6">
            Monitoreo y Seguimiento: Que nada quede por hacer.
          </h3>

          <div className="prose prose-lg max-w-none text-slate-700 mb-10">
            <p className="text-lg leading-relaxed">
              Tener los checklist de calidad y los procedimientos no sirve de nada si las tareas no se ejecutan. Hemos diseñado un motor de asignación y seguimiento de tareas (diarias, semanales, mensuales y semestrales) adaptado al rol de cada usuario.
            </p>

            <p className="text-lg leading-relaxed">
              Para garantizar una visión 360° del estado operativo, la plataforma ofrece tres formas de visualización en tiempo real:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
              <CheckSquare className="w-10 h-10 text-blue-600 mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-3">Tablero Kanban</h4>
              <p className="text-slate-600">
                Para entender visualmente en qué etapa está cada proceso (Pendiente, En Proceso, Finalizado).
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
              <Calendar className="w-10 h-10 text-cyan-600 mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-3">Calendario</h4>
              <p className="text-slate-600">
                Para anticipar auditorías, vencimientos y planificar la semana con claridad total.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-slate-200">
              <Table className="w-10 h-10 text-green-600 mb-4" />
              <h4 className="text-xl font-bold text-slate-900 mb-3">Tablas Dinámicas</h4>
              <p className="text-slate-600">
                Para el análisis exhaustivo de datos crudos y exportación de reportes.
              </p>
            </div>
          </div>

          {/* Alertas */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl border-2 border-orange-200">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="w-8 h-8 text-orange-600" />
              <h4 className="text-xl font-bold text-slate-900">Alertas Inteligentes</h4>
            </div>
            <p className="text-slate-700 text-lg">
              El sistema monitorea silenciosamente. Si una tarea crítica no se ejecutó en el plazo establecido, se disparan alertas automáticas (a través de nuestra interfaz de notificaciones personalizada) a los perfiles de supervisión.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}