import { ClipboardList, GraduationCap, AlertTriangle, Shield, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

export function RecordsAndProjects() {
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
            <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
              <ClipboardList className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-green-600 uppercase tracking-wide">Eje Troncal 2</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Registros Críticos y Control de Obras
              </h2>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-slate-800 mb-6">
            Ecosistema de Registros y Entidades Vivas.
          </h3>

          <div className="prose prose-lg max-w-none text-slate-700 mb-10">
            <p className="text-lg leading-relaxed">
              Validar normas ISO requiere evidencia. Transformamos las planillas manuales en módulos de registro interconectados:
            </p>
          </div>

          {/* Registros Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                <h4 className="text-xl font-bold text-slate-900">Capacitaciones</h4>
              </div>
              <p className="text-slate-700">
                Trazabilidad de quién se capacitó, cuándo y en qué norma. Registro completo con certificaciones y seguimiento de vigencia.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border-2 border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <h4 className="text-xl font-bold text-slate-900">Accidentes y Asistencia</h4>
              </div>
              <p className="text-slate-700">
                Un registro integral que no solo documenta el incidente, sino que se cruza con las herramientas de control de asistencia de los involucrados para un análisis posterior.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-xl border-2 border-yellow-200">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-yellow-600" />
                <h4 className="text-xl font-bold text-slate-900">Hallazgos y Matrices de Riesgo</h4>
              </div>
              <p className="text-slate-700">
                Mapeo y evaluación de vulnerabilidades en tiempo real. Seguimiento de acciones correctivas y preventivas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-purple-600" />
                <h4 className="text-xl font-bold text-slate-900">Gestión Específica por Obras</h4>
              </div>
              <p className="text-slate-700">
                Cada obra tendrá su propio universo de datos: procedimientos específicos, documentación asociada y registros particulares.
              </p>
            </div>
          </div>

          {/* Detailed explanation */}
          <div className="bg-slate-900 text-white p-8 rounded-xl">
            <h4 className="text-xl font-bold mb-4">Entidades de Obra: El Corazón Operativo</h4>
            <p className="text-slate-300 leading-relaxed text-lg">
              Entendemos que su negocio se mueve por proyectos. Por eso, el sistema permite crear "Entidades de Obra". Cada obra tendrá su propio universo de datos: sus procedimientos específicos, su documentación asociada y sus registros particulares. Todo encapsulado y organizado para que los responsables de campo interactúen solo con lo que les corresponde.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
