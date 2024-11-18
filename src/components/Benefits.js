import React, { useContext } from 'react';
// icons 
import { FaLeaf, FaHeart, FaTruck } from "react-icons/fa";
import { LanguageContext } from '../context/LanguageContext';

const Benefits = () => {
  const { language } = useContext(LanguageContext);

  // Translations for different languages
  const translations = {
    en: {
      title: "Benefits of our Honey",
      naturalHoney: "100% Natural Honey",
      naturalHoneyDesc: "Pure honey with no additives or preservatives",
      healthBenefits: "Health Benefits",
      healthBenefitsDesc: "Rich in antioxidants and nutrients",
      fastDelivery: "Fast Delivery",
      fastDeliveryDesc: "Quick and secure shipping to your doorstep"
    },
    sv: {
      title: "Fördelar med vår Honung",
      naturalHoney: "100% Naturlig Honung",
      naturalHoneyDesc: "Ren honung utan tillsatser eller konserveringsmedel",
      healthBenefits: "Hälsosamma Fördelar",
      healthBenefitsDesc: "Rik på antioxidanter och näringsämnen",
      fastDelivery: "Snabb Leverans",
      fastDeliveryDesc: "Snabb och säker leverans till din dörr"
    },
    ar: {
      title: "فوائد عسلنا",
      naturalHoney: "عسل طبيعي 100%",
      naturalHoneyDesc: "عسل نقي بدون إضافات أو مواد حافظة",
      healthBenefits: "فوائد صحية",
      healthBenefitsDesc: "غني بمضادات الأكسدة والعناصر الغذائية",
      fastDelivery: "توصيل سريع",
      fastDeliveryDesc: "شحن سريع وآمن إلى باب منزلك"
    }
  };

  // Get the current language's translations
  const t = translations[language];

  return (
    <div className="grad py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl uppercase mb-6 font-semibold text-white">{t.title}</h2>
        </div>

        {/* Benefits Section */}
        <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 justify-center items-center gap-x-10 text-white/60">
          <div className="flex flex-col items-center max-w-xs">
            <FaLeaf size={40} className="mb-3 text-gray-600" />
            <p className="text-center text-white font-semibold text-lg">{t.naturalHoney}</p>
            <span className="text-center text-xs mt-2">{t.naturalHoneyDesc}</span>
          </div>

          <div className="flex flex-col items-center max-w-xs">
            <FaHeart size={40} className="mb-3 text-gray-600" />
            <p className="text-center text-white font-semibold text-lg">{t.healthBenefits}</p>
            <span className="text-center text-xs mt-2">{t.healthBenefitsDesc}</span>
          </div>

          <div className="flex flex-col items-center max-w-xs">
            <FaTruck size={40} className="mb-3 text-gray-600" />
            <p className="text-center text-white font-semibold text-lg">{t.fastDelivery}</p>
            <span className="text-center text-xs mt-2">{t.fastDeliveryDesc}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;