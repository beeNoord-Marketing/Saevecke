import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export function StickyWhatsApp() {
  return (
    <Link
      to="/karriere#bewerbung"
      aria-label="WhatsApp Kontakt"
      className="fixed bottom-6 right-6 z-50 bg-brand-red text-white rounded-full p-4 shadow-lg hover:scale-105 transition-transform"
    >
      <MessageCircle size={24} />
    </Link>
  );
}
