import { Zap, Database } from 'lucide-react';
import { motion } from 'motion/react';

export function ProblemSolution() {
  return (
    <section id="diagnostico" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            De un Dropbox inmanejable a un Sistema Interconectado.
          </h2>
          
          <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Sabemos cómo trabajan hoy. Existe un ecosistema fragmentado: un Dropbox inundado de archivos dispersos, procedimientos aislados, planillas de Excel para seguimiento de tareas y documentos desconectados de la realidad operativa diaria. Mantener y validar las normas ISO en estas condiciones no solo es ineficiente, sino que genera cuellos de botella constantes, pérdida de información y estrés frente a cada auditoría.
            </p>

            <p className="text-lg leading-relaxed">
              Desde <strong>Sigma Solution</strong>, junto a mi socio, proponemos un cambio de paradigma: unificar absolutamente todo. Vamos a sumergirnos en su directorio actual, analizar cada archivo y construir una Web App a medida que no solo almacene datos, sino que los conecte, los haga trabajar solos y prevenga errores antes de que ocurran.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl border-2 border-cyan-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Velocidad sin precedentes</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Desarrollado con tecnologías modernas (GAS en el backend y un frontend de última generación), el sistema incluye una lógica de sincronización de caché local. Cada vez que un usuario guarda o modifica un dato, el sistema se actualiza al instante sin recargar la página, garantizando que la aplicación "vuele".
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Experiencia de usuario premium</h3>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Eliminamos por completo las molestas alertas nativas del navegador. Todo el sistema cuenta con componentes de notificación in-app (diseñados a medida) que guían al usuario de forma elegante y corporativa.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}