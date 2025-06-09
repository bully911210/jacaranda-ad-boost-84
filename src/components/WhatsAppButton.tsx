
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "1234567890"; // Remove spaces and special characters
    const message = "Hi! I'm interested in learning more about your Meta advertising services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-jacaranda hover:bg-jacaranda-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;
