import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, Clock, ChevronLeft, ChevronRight, Check, ArrowLeft,
  User, Phone, Mail
} from 'lucide-react';
import { translations } from './translations';
import type { Language } from './translations';

const CARE_TYPES = [
  'Détartrage',
  'Urgence',
  'Blanchiment',
  'Autre type de soin'
];

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30'
];

const DAYS_OF_WEEK = ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTHS_FR = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

export default function Reservation({ lang }: { lang: Language }) {
  const t = translations[lang].reservation;
  
  const [step, setStep] = useState(1);
  const [selectedCare, setSelectedCare] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  // Calendar state
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const daysInMonth = useMemo(() => getDaysInMonth(viewYear, viewMonth), [viewYear, viewMonth]);
  const firstDay = useMemo(() => getFirstDayOfMonth(viewYear, viewMonth), [viewYear, viewMonth]);

  // Previous month days for leading blanks
  const prevMonthDays = useMemo(() => getDaysInMonth(viewYear, viewMonth - 1), [viewYear, viewMonth]);

  const calendarDays = useMemo(() => {
    const days: { day: number; inMonth: boolean; date: Date }[] = [];

    // Leading days from previous month
    for (let i = firstDay - 1; i >= 0; i--) {
      const d = prevMonthDays - i;
      days.push({ day: d, inMonth: false, date: new Date(viewYear, viewMonth - 1, d) });
    }

    // Current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, inMonth: true, date: new Date(viewYear, viewMonth, i) });
    }

    // Trailing days
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({ day: i, inMonth: false, date: new Date(viewYear, viewMonth + 1, i) });
    }

    return days;
  }, [viewYear, viewMonth, daysInMonth, firstDay, prevMonthDays]);

  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  }

  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  }

  function isToday(date: Date) {
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  }

  function isSelected(date: Date) {
    if (!selectedDate) return false;
    return date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear();
  }

  function isPast(date: Date) {
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return date < todayStart;
  }

  function isSunday(date: Date) {
    return date.getDay() === 0;
  }

  function handleSelectCare(care: string) {
    setSelectedCare(care);
    setTimeout(() => setStep(2), 300);
  }

  function handleSelectDate(date: Date) {
    if (isPast(date) || isSunday(date) || !calendarDays.find(d => d.date === date)?.inMonth) return;
    setSelectedDate(date);
  }

  function handleSelectTime(time: string) {
    setSelectedTime(time);
    setTimeout(() => setStep(3), 300);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function resetForm() {
    setStep(1);
    setSelectedCare(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: '', phone: '', email: '' });
    setSubmitted(false);
  }

  const stepVariants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
    exit: { opacity: 0, x: -40, transition: { duration: 0.25, ease: 'easeIn' as const } }
  };

  return (
    <section id="reservation" className="reservation-section">
      <div className="container">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="reservation-header"
          >
            <span className="reservation-label">{t.overline}</span>
            <h2 className="reservation-title">{t.title}</h2>
          </motion.div>

        <motion.div
          className="reservation-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Stepper */}
          <div className="stepper">
            <div className={`stepper-step ${step > 1 ? 'completed' : ''} ${step === 1 ? 'active' : ''}`}>
              <div className="stepper-circle">
                {step > 1 ? <Check size={14} strokeWidth={3} /> : '1'}
              </div>
              <span className="stepper-text">{t.step1}</span>
            </div>
            <div className={`stepper-step ${step > 2 ? 'completed' : ''} ${step === 2 ? 'active' : ''}`}>
              <div className="stepper-circle">
                {step > 2 ? <Check size={14} strokeWidth={3} /> : '2'}
              </div>
              <span className="stepper-text">{t.step2}</span>
            </div>
            <div className={`stepper-step ${step === 3 ? 'active' : ''}`}>
              <div className="stepper-circle">3</div>
              <span className="stepper-text">{t.step3}</span>
            </div>
          </div>

          {/* Steps Content */}
          <div className="reservation-body">
            <AnimatePresence mode="wait">
              {/* Step 1 */}
              {step === 1 && (
                <motion.div key="step1" variants={stepVariants} initial="enter" animate="center" exit="exit">
                  <h3 className="step-question">{t.careQuestion}</h3>
                  <div className="care-options">
                    {CARE_TYPES.map((care) => (
                      <button
                        key={care}
                        className={`care-option ${selectedCare === care ? 'selected' : ''}`}
                        onClick={() => handleSelectCare(care)}
                      >
                        {(t.careTypes as any)[care]}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <motion.div key="step2" variants={stepVariants} initial="enter" animate="center" exit="exit">
                  <div className="step2-content">
                    <h3 className="step-question">
                      <Calendar size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                      {t.dateQuestion}
                    </h3>

                    <div className="calendar-wrapper">
                      <div className="calendar">
                        <div className="calendar-header">
                          <button className="cal-nav-btn" onClick={prevMonth}>
                            <ChevronLeft size={18} />
                          </button>
                          <span className="cal-month-label">
                            {MONTHS_FR[viewMonth]} {viewYear}
                          </span>
                          <button className="cal-nav-btn" onClick={nextMonth}>
                            <ChevronRight size={18} />
                          </button>
                        </div>

                        <div className="calendar-grid">
                          {DAYS_OF_WEEK.map((d) => (
                            <div key={d} className="cal-day-header">{d}</div>
                          ))}
                          {calendarDays.map((dayObj, idx) => {
                            const disabled = !dayObj.inMonth || isPast(dayObj.date) || isSunday(dayObj.date);
                            return (
                              <button
                                key={idx}
                                className={`cal-day
                                  ${!dayObj.inMonth ? 'cal-day-outside' : ''}
                                  ${isToday(dayObj.date) && dayObj.inMonth ? 'cal-day-today' : ''}
                                  ${isSelected(dayObj.date) && dayObj.inMonth ? 'cal-day-selected' : ''}
                                  ${disabled ? 'cal-day-disabled' : ''}
                                `}
                                onClick={() => !disabled && handleSelectDate(dayObj.date)}
                                disabled={disabled}
                              >
                                {dayObj.day}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Time slots — appear after date selection */}
                    <AnimatePresence>
                      {selectedDate && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="timeslots-section"
                        >
                          <h3 className="step-question" style={{ marginTop: '2rem' }}>
                            <Clock size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                            {t.timeQuestion}
                          </h3>
                          <div className="timeslots-grid">
                            {TIME_SLOTS.map((time) => (
                              <button
                                key={time}
                                className={`timeslot ${selectedTime === time ? 'selected' : ''}`}
                                onClick={() => handleSelectTime(time)}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button className="back-btn" onClick={() => setStep(1)}>
                      <ArrowLeft size={16} /> {t.backBtn}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3 */}
              {step === 3 && !submitted && (
                <motion.div key="step3" variants={stepVariants} initial="enter" animate="center" exit="exit">
                  <h3 className="step-question">{t.confirmTitle}</h3>

                  <div className="summary-card">
                    <div className="summary-row">
                      <span className="summary-label">{t.summaryCare}</span>
                      <span className="summary-value">{(t.careTypes as any)[selectedCare || '']}</span>
                    </div>
                    <div className="summary-row">
                      <span className="summary-label">{t.summaryDate}</span>
                      <span className="summary-value">
                        {selectedDate?.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', {
                          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="summary-row">
                      <span className="summary-label">{t.summaryTime}</span>
                      <span className="summary-value">{selectedTime}</span>
                    </div>
                  </div>

                  <form className="confirmation-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="res-name">
                        <User size={16} />
                        {t.fullName}
                      </label>
                      <input
                        id="res-name"
                        type="text"
                        placeholder={t.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="res-phone">
                        <Phone size={16} />
                        {t.phone}
                      </label>
                      <input
                        id="res-phone"
                        type="tel"
                        placeholder={t.phonePlaceholder}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="res-email">
                        <Mail size={16} />
                        {t.email}
                      </label>
                      <input
                        id="res-email"
                        type="email"
                        placeholder={t.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-actions">
                      <button type="button" className="back-btn" onClick={() => setStep(2)}>
                        <ArrowLeft size={16} /> {t.backBtn}
                      </button>
                      <button type="submit" className="confirm-btn">
                        {t.confirmBtn}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Success */}
              {step === 3 && submitted && (
                <motion.div
                  key="success"
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="success-state"
                >
                  <div className="success-icon">
                    <Check size={40} strokeWidth={3} />
                  </div>
                  <h3 className="step-question">{t.successTitle}</h3>
                  <p className="success-text">
                    {t.successThanks} {formData.name}. {t.successText1} <strong>{(t.careTypes as any)[selectedCare || '']}</strong> {t.successText2}{' '}
                    <strong>
                      {selectedDate?.toLocaleDateString(lang === 'fr' ? 'fr-FR' : 'en-US', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long'
                      })}
                    </strong>{' '}
                    {t.successText3} <strong>{selectedTime}</strong>.
                  </p>
                  <p className="success-sub">{t.successSub}</p>
                  <button className="confirm-btn" onClick={resetForm} style={{ marginTop: '1.5rem' }}>
                    {t.anotherBtn}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
