import { Shield, Mail, Code } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Sigma Solution</h3>
                <p className="text-xs text-slate-400">Desarrollo de Software</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Especialistas en desarrollo de aplicaciones web a medida. Transformamos procesos empresariales en soluciones digitales eficientes.
            </p>
          </div>

          {/* Propuesta */}
          <div>
            <h4 className="font-semibold mb-4">Propuesta Grupo Pose</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p>• Sistema Integral de Gestión ISO</p>
              <p>• 5 Módulos Integrados</p>
              <p>• 7 Meses de Desarrollo Total</p>
              <p>• Capacitación y Acompañamiento</p>
              <p className="pt-3 text-cyan-400 font-semibold">Inversión: $6.000.000 ARS</p>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@sigmasolution.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Code className="w-4 h-4" />
                <span className="text-sm">Desarrollo con GAS + React</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          <p>&copy; 2026 Sigma Solution. Propuesta Comercial - Sistema de Gestión ISO para Grupo Pose.</p>
        </div>
      </div>
    </footer>
  );
}