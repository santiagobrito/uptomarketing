"use client";

import { useState } from "react";
import { Check, Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { TimeSlotPicker } from "@/components/booking/time-slot-picker";

interface FormData {
  nombre: string;
  apellido: string;
  empresa: string;
  email: string;
  telefono: string;
  actividad: string;
  empleados: string;
  retoMarketing: string;
  notasAdicionales: string;
}

const initialFormData: FormData = {
  nombre: "",
  apellido: "",
  empresa: "",
  email: "",
  telefono: "",
  actividad: "",
  empleados: "",
  retoMarketing: "",
  notasAdicionales: "",
};

const stepTitles = [
  "Datos personales",
  "Selecciona horario",
  "Informacion adicional",
  "Confirmacion",
];

function formatDisplayDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function InlineBooking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isStep1Valid =
    formData.nombre.trim() !== "" &&
    formData.apellido.trim() !== "" &&
    formData.empresa.trim() !== "" &&
    formData.email.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  const isStep2Valid = selectedDate !== null && selectedTime !== null && selectedTime !== "";
  const isStep3Valid = formData.retoMarketing.trim() !== "";

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/calendar/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, date: selectedDate, time: selectedTime }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Error al agendar la reunion");
      }
      setStep(4);
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : "Error inesperado");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-border px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all";
  const selectClass =
    "w-full rounded-lg border border-border px-3.5 py-2.5 text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all cursor-pointer";
  const btnClass =
    "w-full inline-flex items-center justify-center gap-2 rounded-lg bg-copper-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-copper-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="border-b border-border px-6 pt-5 pb-4">
        <div className="flex items-center gap-3 mb-4">
          {step > 1 && step < 4 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          )}
          <div>
            <p className="text-xs font-medium text-text-secondary uppercase tracking-wider">
              Paso {step} de 4
            </p>
            <h2 className="text-lg font-bold text-text-primary">
              {stepTitles[step - 1]}
            </h2>
          </div>
        </div>
        <div className="flex gap-1.5">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                s < step ? "bg-blue-600" : s === step ? "bg-copper-500" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {step === 1 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">
                  Nombre <span className="text-error">*</span>
                </label>
                <input type="text" value={formData.nombre} onChange={(e) => updateField("nombre", e.target.value)} placeholder="Santiago" className={inputClass} />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-primary mb-1.5">
                  Apellido <span className="text-error">*</span>
                </label>
                <input type="text" value={formData.apellido} onChange={(e) => updateField("apellido", e.target.value)} placeholder="Garcia" className={inputClass} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">
                Empresa / Despacho <span className="text-error">*</span>
              </label>
              <input type="text" value={formData.empresa} onChange={(e) => updateField("empresa", e.target.value)} placeholder="Asesoria Ejemplo S.L." className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">
                Email <span className="text-error">*</span>
              </label>
              <input type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} placeholder="santiago@empresa.com" className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">
                Telefono <span className="text-text-secondary text-xs">(opcional)</span>
              </label>
              <input type="tel" value={formData.telefono} onChange={(e) => updateField("telefono", e.target.value)} placeholder="+34 600 000 000" className={inputClass} />
            </div>
            <button type="button" disabled={!isStep1Valid} onClick={() => setStep(2)} className={`${btnClass} mt-2`}>
              Siguiente <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <p className="text-sm text-text-secondary">
              Selecciona el dia y la hora que mejor te venga. Duracion: 30 minutos.
            </p>
            <TimeSlotPicker selectedDate={selectedDate} selectedTime={selectedTime} onSelectDate={setSelectedDate} onSelectTime={(t) => setSelectedTime(t)} />
            <button type="button" disabled={!isStep2Valid} onClick={() => setStep(3)} className={btnClass}>
              Confirmar horario <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <p className="text-sm text-text-secondary mb-2">
              Ayudanos a preparar la reunion para aprovecharla al maximo.
            </p>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Actividad principal de tu despacho</label>
              <select value={formData.actividad} onChange={(e) => updateField("actividad", e.target.value)} className={selectClass}>
                <option value="">Seleccionar...</option>
                <option value="asesoria">Asesoria fiscal/contable</option>
                <option value="abogados">Despacho de abogados</option>
                <option value="consultora">Consultora de empresas</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">Empleados en tu despacho</label>
              <select value={formData.empleados} onChange={(e) => updateField("empleados", e.target.value)} className={selectClass}>
                <option value="">Seleccionar...</option>
                <option value="1-5">1-5</option>
                <option value="6-15">6-15</option>
                <option value="16-50">16-50</option>
                <option value="+50">+50</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">
                Principal reto de marketing ahora mismo <span className="text-error">*</span>
              </label>
              <textarea value={formData.retoMarketing} onChange={(e) => updateField("retoMarketing", e.target.value)} placeholder="Ej: No conseguimos leads cualificados desde la web..." rows={3} className={`${inputClass} resize-none`} />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">
                Algo mas que debamos saber <span className="text-text-secondary text-xs">(opcional)</span>
              </label>
              <textarea value={formData.notasAdicionales} onChange={(e) => updateField("notasAdicionales", e.target.value)} placeholder="Presupuesto aproximado, urgencia, competidores..." rows={2} className={`${inputClass} resize-none`} />
            </div>
            {submitError && (
              <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-error">{submitError}</div>
            )}
            <button type="button" disabled={!isStep3Valid || isSubmitting} onClick={handleSubmit} className={`${btnClass} mt-2`}>
              {isSubmitting ? (<><Loader2 className="h-4 w-4 animate-spin" /> Agendando...</>) : "Agendar reunion"}
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="text-center py-6 space-y-5">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
              <Check className="h-8 w-8 text-success" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Tu reunion ha sido agendada</h3>
              <div className="inline-flex items-center gap-2 rounded-lg bg-bg-secondary px-4 py-2.5 font-mono text-sm text-text-primary">
                <span>{selectedDate ? formatDisplayDate(selectedDate) : ""}</span>
                <span className="text-text-secondary">|</span>
                <span className="font-semibold">{selectedTime}h</span>
              </div>
            </div>
            <div className="space-y-2 text-sm text-text-secondary">
              <p>Te hemos enviado un email de confirmacion con el enlace de Google Meet.</p>
              <p>Revisa tu bandeja de entrada para preparar la reunion.</p>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Volver al inicio
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
