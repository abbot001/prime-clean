import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, Calendar, User, MapPin, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { SERVICE_OPTIONS, BUSINESS } from '@/lib/business';
import { base44 } from '@/api/base44Client';

const TIME_WINDOWS = [
  '8:00 AM – 10:00 AM',
  '10:00 AM – 12:00 PM',
  '12:00 PM – 2:00 PM',
  '2:00 PM – 4:00 PM',
  '4:00 PM – 6:00 PM',
  '6:00 PM – 8:00 PM',
];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[+()\d\s-]{7,}$/;

const todayStr = () => new Date().toISOString().split('T')[0];

const STEPS = [
  { key: 'services', label: 'Service', icon: Sparkles },
  { key: 'details', label: 'Your details', icon: User },
  { key: 'pickup', label: 'Pickup', icon: MapPin },
  { key: 'review', label: 'Review', icon: Calendar },
];

export default function Book() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    services: [],
    full_name: '',
    phone: '',
    email: '',
    address: '',
    city_area: '',
    address_notes: '',
    preferred_date: '',
    preferred_time: '',
    special_instructions: '',
    order_notes: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [bookingId, setBookingId] = useState(null);

  const set = (k) => (e) => {
    const v = e.target ? e.target.value : e;
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const toggleService = (s) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s],
    }));
    setErrors((er) => ({ ...er, services: undefined }));
  };

  const validateStep = () => {
    const e = {};
    if (step === 0) {
      if (form.services.length === 0) e.services = 'Select at least one service.';
    } else if (step === 1) {
      if (!form.full_name.trim()) e.full_name = 'Please enter your full name.';
      if (!form.phone.trim()) e.phone = 'Please enter your phone number.';
      else if (!phoneRe.test(form.phone)) e.phone = 'Enter a valid phone number.';
      if (form.email && !emailRe.test(form.email)) e.email = 'Enter a valid email address.';
    } else if (step === 2) {
      if (!form.address.trim()) e.address = 'Please enter your address.';
      if (!form.city_area.trim()) e.city_area = 'Please enter your city or area.';
      if (!form.preferred_date) e.preferred_date = 'Choose a pickup date.';
      else if (form.preferred_date < todayStr()) e.preferred_date = 'Date cannot be in the past.';
      if (!form.preferred_time) e.preferred_time = 'Choose a pickup time window.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    if (!validateStep()) return;
    setStatus('submitting');
    try {
      const created = await base44.entities.Booking.create({
        full_name: form.full_name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || undefined,
        address: form.address.trim(),
        city_area: form.city_area.trim(),
        address_notes: form.address_notes.trim() || undefined,
        services: form.services,
        preferred_date: form.preferred_date,
        preferred_time: form.preferred_time,
        special_instructions: form.special_instructions.trim() || undefined,
        order_notes: form.order_notes.trim() || undefined,
      });
      setBookingId(created?.id || null);
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section className="mx-auto max-w-2xl px-5 sm:px-8 pt-20 pb-24 text-center">
        <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="h-10 w-10" />
        </span>
        <h1 className="display-serif mt-7 text-4xl sm:text-5xl text-foreground">Pickup scheduled</h1>
        <p className="mt-4 text-base text-muted-foreground">
          Thank you, {form.full_name.split(' ')[0]}. We've received your booking and will confirm shortly.
        </p>
        {bookingId && (
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm">
            <span className="text-muted-foreground">Booking ID</span>
            <span className="font-mono font-semibold text-foreground">{bookingId.slice(0, 8).toUpperCase()}</span>
          </div>
        )}
        <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-left text-sm">
          <Row label="Services" value={form.services.join(', ')} />
          <Row label="Pickup date" value={form.preferred_date} />
          <Row label="Time window" value={form.preferred_time} />
          <Row label="Address" value={`${form.address}, ${form.city_area}`} />
          <Row label="Phone" value={form.phone} />
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors">Back home</Link>
          <a href={`tel:${BUSINESS.phoneRaw}`} className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground">Call to confirm</a>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="mx-auto max-w-3xl px-5 sm:px-8 pt-14 sm:pt-20 pb-6">
        <SectionHeading
          eyebrow="Book a Pickup"
          title="Fresh clothes in four quick steps."
          subtitle="Takes under a minute. We'll confirm your pickup by phone or WhatsApp."
        />
      </section>

      <section className="mx-auto max-w-3xl px-5 sm:px-8 pb-24">
        {/* Stepper */}
        <div className="mt-6 flex items-center justify-between">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const done = i < step;
            const active = i === step;
            return (
              <div key={s.key} className="flex flex-1 items-center last:flex-none">
                <div className="flex flex-col items-center gap-2">
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-full border-2 transition-all duration-300 ${
                      active ? 'border-accent bg-accent text-accent-foreground scale-110' : done ? 'border-accent bg-accent/10 text-accent' : 'border-border bg-card text-muted-foreground'
                    }`}
                  >
                    {done ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                  </span>
                  <span className={`hidden text-xs font-medium sm:block ${active || done ? 'text-foreground' : 'text-muted-foreground'}`}>{s.label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`mx-2 h-0.5 flex-1 rounded-full transition-colors duration-300 ${i < step ? 'bg-accent' : 'bg-border'}`} />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-card p-6 sm:p-8">
          {/* Step 0 — Services */}
          {step === 0 && (
            <div className="animate-fade-in">
              <h2 className="display-serif text-2xl text-foreground">Which services do you need?</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">Select all that apply — you can mix services in one pickup.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {SERVICE_OPTIONS.map((s) => {
                  const active = form.services.includes(s);
                  return (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleService(s)}
                      className={`flex items-center justify-between rounded-2xl border p-4 text-left transition-all duration-200 ${
                        active ? 'border-accent bg-accent/5 shadow-[0_8px_24px_-16px_hsl(187_85%_53%/0.6)]' : 'border-border hover:border-accent/50'
                      }`}
                    >
                      <span className="text-sm font-semibold text-foreground">{s}</span>
                      <span className={`grid h-6 w-6 place-items-center rounded-full border-2 transition-colors ${active ? 'border-accent bg-accent text-accent-foreground' : 'border-border'}`}>
                        {active && <Check className="h-3.5 w-3.5" />}
                      </span>
                    </button>
                  );
                })}
              </div>
              {errors.services && <p className="mt-3 text-xs text-destructive">{errors.services}</p>}
            </div>
          )}

          {/* Step 1 — Details */}
          {step === 1 && (
            <div className="animate-fade-in space-y-5">
              <div>
                <h2 className="display-serif text-2xl text-foreground">Your details</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">So we can reach you to confirm.</p>
              </div>
              <Field label="Full name" error={errors.full_name} required>
                <input value={form.full_name} onChange={set('full_name')} className={inputCls(errors.full_name)} placeholder="Jane Doe" />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone number" error={errors.phone} required>
                  <input value={form.phone} onChange={set('phone')} type="tel" className={inputCls(errors.phone)} placeholder="(555) 000-0000" />
                </Field>
                <Field label="Email" error={errors.email} hint="Optional">
                  <input value={form.email} onChange={set('email')} type="email" className={inputCls(errors.email)} placeholder="you@email.com" />
                </Field>
              </div>
            </div>
          )}

          {/* Step 2 — Pickup */}
          {step === 2 && (
            <div className="animate-fade-in space-y-5">
              <div>
                <h2 className="display-serif text-2xl text-foreground">Pickup details</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">Where and when should we collect your items?</p>
              </div>
              <Field label="Address" error={errors.address} required>
                <input value={form.address} onChange={set('address')} className={inputCls(errors.address)} placeholder="123 Main Street, Apt 4B" />
              </Field>
              <Field label="City / Area" error={errors.city_area} required>
                <input value={form.city_area} onChange={set('city_area')} className={inputCls(errors.city_area)} placeholder="Your neighborhood" />
              </Field>
              <Field label="Address notes" hint="Optional">
                <input value={form.address_notes} onChange={set('address_notes')} className={inputCls()} placeholder="Gate code, parking, where to collect" />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Preferred date" error={errors.preferred_date} required>
                  <input value={form.preferred_date} onChange={set('preferred_date')} type="date" min={todayStr()} className={inputCls(errors.preferred_date)} />
                </Field>
                <Field label="Preferred time" error={errors.preferred_time} required>
                  <select value={form.preferred_time} onChange={set('preferred_time')} className={inputCls(errors.preferred_time)}>
                    <option value="">Select a window</option>
                    {TIME_WINDOWS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
              </div>
              <Field label="Special instructions" hint="Optional">
                <textarea value={form.special_instructions} onChange={set('special_instructions')} rows={3} className={inputCls()} placeholder="Delicate items, detergent preferences, etc." />
              </Field>
              <Field label="Order notes" hint="Optional">
                <textarea value={form.order_notes} onChange={set('order_notes')} rows={2} className={inputCls()} placeholder="Anything else we should know" />
              </Field>
            </div>
          )}

          {/* Step 3 — Review */}
          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="display-serif text-2xl text-foreground">Review your booking</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">Make sure everything looks right, then schedule your pickup.</p>
              <div className="mt-6 divide-y divide-border rounded-2xl border border-border">
                <ReviewRow label="Services" value={form.services.join(', ')} onEdit={() => setStep(0)} />
                <ReviewRow label="Name" value={form.full_name} onEdit={() => setStep(1)} />
                <ReviewRow label="Phone" value={form.phone} onEdit={() => setStep(1)} />
                {form.email && <ReviewRow label="Email" value={form.email} onEdit={() => setStep(1)} />}
                <ReviewRow label="Address" value={`${form.address}, ${form.city_area}`} onEdit={() => setStep(2)} />
                <ReviewRow label="Pickup" value={`${form.preferred_date} · ${form.preferred_time}`} onEdit={() => setStep(2)} />
                {form.special_instructions && <ReviewRow label="Instructions" value={form.special_instructions} onEdit={() => setStep(2)} />}
              </div>

              {status === 'error' && (
                <div className="mt-5 flex items-center gap-2 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  We couldn't submit your booking. Please try again or call us.
                </div>
              )}
            </div>
          )}

          {/* Nav buttons */}
          <div className="mt-8 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground disabled:opacity-0 disabled:pointer-events-none hover:border-accent hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>

            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={next}
                className="btn-expand inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground"
              >
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={submit}
                disabled={status === 'submitting'}
                className="btn-expand inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground disabled:opacity-60"
              >
                {status === 'submitting' ? 'Scheduling…' : (<>Schedule Pickup <Check className="h-4 w-4" /></>)}
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-6 py-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right font-medium text-foreground">{value}</span>
    </div>
  );
}

function ReviewRow({ label, value, onEdit }) {
  return (
    <div className="flex items-start justify-between gap-4 p-4">
      <div>
        <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm font-medium text-foreground">{value}</p>
      </div>
      <button onClick={onEdit} className="text-xs font-semibold text-accent hover:underline">Edit</button>
    </div>
  );
}

function Field({ label, error, hint, required, children }) {
  return (
    <label className="block">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{label}{required && <span className="text-accent"> *</span>}</span>
        {hint && <span className="text-xs text-muted-foreground">{hint}</span>}
      </div>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </label>
  );
}

const inputCls = (err) =>
  `w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30 ${err ? 'border-destructive' : 'border-border'}`;