import { FileText, Search, Filter, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export function DocumentationCenter() {
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
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Eje Troncal 1</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Centro de Documentación
              </h2>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-slate-800 mb-6">
            La norma siempre a tu alcance.
          </h3>

          <div className="prose prose-lg max-w-none text-slate-700 mb-10">
            <p className="text-lg leading-relaxed">
              El primer gran pilar de la plataforma es la democratización del acceso a la información. Todo el manual de calidad, procedimientos y normativas de Grupo Pose dejará de ser una carpeta pesada para convertirse en una biblioteca digital inteligente.
            </p>

            <p className="text-lg leading-relaxed">
              Cualquier persona del equipo, desde el dispositivo que sea, podrá consultar la documentación vigente en segundos. Implementamos herramientas de búsqueda avanzada, filtros dinámicos por área, y sistemas de agrupación y ordenamiento. No más versiones duplicadas ni documentos obsoletos; solo la versión oficial, siempre disponible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
              <Search className="w-8 h-8 text-blue-600 mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Búsqueda Avanzada</h4>
              <p className="text-slate-600 text-sm">Encuentra cualquier documento en segundos con búsqueda inteligente por contenido, título o categoría.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
              <Filter className="w-8 h-8 text-cyan-600 mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Filtros Dinámicos</h4>
              <p className="text-slate-600 text-sm">Organiza por área, tipo de documento, fecha de actualización o cualquier criterio personalizado.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-slate-200">
              <Layers className="w-8 h-8 text-green-600 mb-3" />
              <h4 className="font-semibold text-slate-900 mb-2">Versión Oficial Única</h4>
              <p className="text-slate-600 text-sm">Control de versiones automático. Solo documentos vigentes, sin duplicados ni información obsoleta.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
