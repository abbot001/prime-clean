import { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { BUSINESS } from '@/lib/business';
import { base44 } from '@/api/base44Client';

const whatsappUrl = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi PRIME CLEAN, I have a question.")}`;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[+()\d\s-]{7,}$/;

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number.';
    else if (!phoneRe.test(form.phone)) e.phone = 'Enter a valid phone number.';
    if (form.email && !emailRe.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.message.trim()) e.message = 'Please write a short message.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (status === 'submitting') return;
    if (!validate()) return;
    setStatus('submitting');
    try {
      await base44.entities.ContactSubmission.create({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim() || undefined,
        message: form.message.trim(),
      });
      setStatus('success');
      setForm({ name: '', phone: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 sm:px-8 pt-14 sm:pt-20 pb-8">
        <SectionHeading
          eyebrow="Contact"
          title="We're here, every business day."
          subtitle="Questions, special requests, or ready to book — reach us however suits you."
        />
      </section>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="fold-line w-full" />
      </div>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Form */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center py-12 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-accent/15 text-accent">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="display-serif mt-5 text-3xl text-foreground">Message sent</h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  Thank you — our team will get back to you during business hours. For anything urgent, call or WhatsApp us.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" error={errors.name} required>
                    <input value={form.name} onChange={set('name')} className={inputCls(errors.name)} placeholder="Your name" />
                  </Field>
                  <Field label="Phone" error={errors.phone} required>
                    <input value={form.phone} onChange={set('phone')} type="tel" className={inputCls(errors.phone)} placeholder="(555) 000-0000" />
                  </Field>
                </div>
                <Field label="Email" error={errors.email} hint="Optional">
                  <input value={form.email} onChange={set('email')} type="email" className={inputCls(errors.email)} placeholder="you@email.com" />
                </Field>
                <Field label="Message" error={errors.message} required>
                  <textarea value={form.message} onChange={set('message')} rows={5} className={inputCls(errors.message)} placeholder="How can we help?" />
                </Field>

                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    Something went wrong sending your message. Please try again or call us.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-expand inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending…' : (<>Send message <Send className="h-4 w-4" /></>)}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-4">
            <a href={`tel:${BUSINESS.phoneRaw}`} className="soft-glow flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-foreground text-background"><Phone className="h-5 w-5" /></span>
              <div><p className="text-xs text-muted-foreground">Call us</p><p className="text-base font-semibold text-foreground">{BUSINESS.phone}</p></div>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="soft-glow flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-foreground text-background"><MessageCircle className="h-5 w-5" /></span>
              <div><p className="text-xs text-muted-foreground">WhatsApp</p><p className="text-base font-semibold text-foreground">Chat with us instantly</p></div>
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="soft-glow flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-foreground text-background"><Mail className="h-5 w-5" /></span>
              <div><p className="text-xs text-muted-foreground">Email</p><p className="text-base font-semibold text-foreground">{BUSINESS.email}</p></div>
            </a>
            <div className="soft-glow rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-foreground text-background"><Clock className="h-5 w-5" /></span><p className="text-sm font-semibold text-foreground">Business hours</p></div>
              <ul className="mt-3 space-y-1.5 text-sm">
                {BUSINESS.hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-muted-foreground"><span>{h.day}</span><span className="text-foreground/80">{h.time}</span></li>
                ))}
              </ul>
            </div>
            <div className="soft-glow rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-foreground text-background"><MapPin className="h-5 w-5" /></span><p className="text-sm font-semibold text-foreground">Service area</p></div>
              <p className="mt-3 text-sm text-muted-foreground">{BUSINESS.serviceArea}</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-border">
          <iframe
            title="PRIME CLEAN service area"
            className="h-72 w-full sm:h-96"
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-74.05%2C40.68%2C-73.85%2C40.82&layer=mapnik&marker=40.745%2C-73.95"
          />
        </div>
      </section>
    </>
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