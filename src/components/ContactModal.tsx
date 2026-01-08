import React, { useEffect } from 'react';
import { Mail, Phone, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

const CONTACT = {
  email: 'info@inventline.ae',
  phones: ['+971 4 397 9044', '+971 52 462 7279'],
};

const toTelHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;

const ContactModal = ({ open, onClose }: ContactModalProps) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[200]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-hidden={!open}
        >
          {/* Overlay */}
          <button
            type="button"
            className="absolute inset-0 w-full h-full bg-slate-950/70 backdrop-blur-sm"
            aria-label="Close contact modal"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="relative z-[201] w-full h-full flex items-center justify-center p-6">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Contact details"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="w-full max-w-lg rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              <div className="flex items-center justify-between px-7 py-5 border-b border-slate-700/60">
                <div>
                  <h3 className="text-xl font-bold text-white">Contact Us</h3>
                  <p className="text-sm text-gray-400">Reach us instantly via email or phone.</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-slate-800/60 hover:bg-slate-800 flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X size={18} className="text-white" />
                </button>
              </div>

              <div className="px-7 py-6 space-y-4">
                {/* Email */}
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-700/60 bg-slate-950/20 px-5 py-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center">
                      <Mail className="text-blue-400" size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm text-gray-400">Email</div>
                      <a
                        className="text-white hover:text-blue-400 transition-colors break-all"
                        href={`mailto:${CONTACT.email}`}
                      >
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="shrink-0 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Email
                  </a>
                </div>

                {/* Phones */}
                {CONTACT.phones.map((phone) => (
                  <div
                    key={phone}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-slate-700/60 bg-slate-950/20 px-5 py-4"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
                        <Phone className="text-emerald-400" size={18} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm text-gray-400">Phone</div>
                        <a
                          className="text-white hover:text-emerald-300 transition-colors"
                          href={toTelHref(phone)}
                        >
                          {phone}
                        </a>
                      </div>
                    </div>
                    <a
                      href={toTelHref(phone)}
                      className="shrink-0 bg-emerald-600 text-white px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors text-sm font-medium"
                    >
                      Call
                    </a>
                  </div>
                ))}
              </div>

              <div className="px-7 pb-6 text-center text-xs text-gray-500">
                Tip: Press <span className="text-gray-300">Esc</span> to close.
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default ContactModal;


