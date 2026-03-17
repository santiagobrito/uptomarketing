import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-blue-800 mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Pagina no encontrada
        </h1>
        <p className="text-gray-600 mb-8">
          La pagina que buscas no existe o ha sido movida.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition-colors duration-200"
          >
            Volver al inicio
          </Link>
          <Link
            href="/servicios"
            className="inline-flex items-center justify-center px-6 py-3 border border-blue-800 text-blue-800 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Ver servicios
          </Link>
        </div>
      </div>
    </div>
  );
}
