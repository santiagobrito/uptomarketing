"use client";

import { useState, useEffect } from "react";

interface TimeSlotPickerProps {
  selectedDate: string | null;
  selectedTime: string | null;
  onSelectDate: (date: string) => void;
  onSelectTime: (time: string) => void;
}

interface SlotData {
  slots: string[];
  loading: boolean;
  error: string | null;
}

function getAvailableBusinessDays(): Date[] {
  const days: Date[] = [];
  const current = new Date();
  current.setHours(0, 0, 0, 0);

  // Start from 3 days ahead (minimum advance)
  current.setDate(current.getDate() + 3);

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 15);

  while (current <= maxDate) {
    const dayOfWeek = current.getDay();
    // Lunes a viernes (1-5)
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      days.push(new Date(current));
    }
    current.setDate(current.getDate() + 1);
  }

  return days;
}

function formatDateLabel(date: Date): string {
  const days = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  const months = [
    "Ene", "Feb", "Mar", "Abr", "May", "Jun",
    "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
  ];
  return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
}

function formatDateISO(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function TimeSlotPicker({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
}: TimeSlotPickerProps) {
  const businessDays = getAvailableBusinessDays();
  const [slotData, setSlotData] = useState<SlotData>({
    slots: [],
    loading: false,
    error: null,
  });

  // Auto-select first day if nothing selected
  useEffect(() => {
    if (!selectedDate && businessDays.length > 0) {
      onSelectDate(formatDateISO(businessDays[0]));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Fetch slots when date changes
  useEffect(() => {
    if (!selectedDate) return;

    const controller = new AbortController();
    setSlotData({ slots: [], loading: true, error: null });

    fetch(`/api/calendar/available-slots?date=${selectedDate}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar horarios");
        return res.json();
      })
      .then((data) => {
        // API returns { slots: [{ time: "09:00", available: true }, ...] } or { slots: ["09:00", ...] }
        const rawSlots = data.slots || [];
        const normalizedSlots = rawSlots.map((s: string | { time: string }) =>
          typeof s === "string" ? s : s.time
        );
        setSlotData({ slots: normalizedSlots, loading: false, error: null });
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setSlotData({ slots: [], loading: false, error: err.message });
      });

    return () => controller.abort();
  }, [selectedDate]);

  return (
    <div className="space-y-6">
      {/* Day tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {businessDays.map((day) => {
          const iso = formatDateISO(day);
          const isActive = selectedDate === iso;
          return (
            <button
              key={iso}
              type="button"
              onClick={() => {
                onSelectDate(iso);
                onSelectTime("");
              }}
              className={`flex-shrink-0 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-bg-secondary text-text-secondary hover:bg-blue-50 hover:text-blue-600 border border-border"
              }`}
            >
              {formatDateLabel(day)}
            </button>
          );
        })}
      </div>

      {/* Slots grid */}
      <div className="min-h-[180px]">
        {slotData.loading && (
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="h-11 rounded-lg bg-bg-secondary animate-pulse"
              />
            ))}
          </div>
        )}

        {slotData.error && (
          <div className="flex items-center justify-center h-[180px] text-error text-sm">
            {slotData.error}
          </div>
        )}

        {!slotData.loading && !slotData.error && slotData.slots.length === 0 && selectedDate && (
          <div className="flex items-center justify-center h-[180px] text-text-secondary text-sm">
            No hay horarios disponibles para este dia
          </div>
        )}

        {!slotData.loading && !slotData.error && slotData.slots.length > 0 && (
          <div className="grid grid-cols-3 gap-3">
            {slotData.slots.map((slot) => {
              const isSelected = selectedTime === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => onSelectTime(slot)}
                  className={`rounded-lg border px-3 py-2.5 font-mono text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-copper-500 text-white border-copper-500 shadow-md"
                      : "border-border text-text-primary hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  {slot}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
