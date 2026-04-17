import { Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function Navbar() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">Sigma Solution</h1>
              <p className="text-xs text-slate-400">Propuesta Grupo Pose</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('diagnostico')}
              className="text-slate-300 hover:text-white transition-colors text-sm"
            >
              Diagnóstico
            </button>
            <button
              onClick={() => scrollToSection('roadmap')}
              className="text-slate-300 hover:text-white transition-colors text-sm"
            >
              Roadmap
            </button>
            <button
              onClick={() => scrollToSection('inversion')}
              className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-sm"
            >
              Presupuesto
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}