import { WhatsAppIcon } from './icons';

type WhatsAppNoticeProps = {
  onClose: () => void;
};

export function WhatsAppNotice({ onClose }: WhatsAppNoticeProps) {
  return (
    <div
      className="whatsapp-notice"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="whatsapp-notice__box">
        <WhatsAppIcon size={32} style={{ color: '#25d366' }} />
        <p>
          <strong>WhatsApp próximamente</strong>
        </p>
        <span>
          El contacto por WhatsApp estará disponible en breve. Por ahora podés visitarnos en Uruguay 2051 de 9 a 17
          hs.
        </span>
        <button type="button" className="whatsapp-notice__close" onClick={onClose}>
          Entendido
        </button>
      </div>
    </div>
  );
}
