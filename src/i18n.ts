import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: {
        Title: 'Anestix',
        Welcome: "Welcome to the Anesthesiologist's guide",
        EnterPlatform: 'Enter Platform',
        PlatformDescription:
          'Your comprehensive platform for anesthesiology professionals',
      },
      key_features: {
        comprehensive_resources: {
          title: 'Comprehensive Resources',
          description:
            'Access a wide range of anesthesiology resources, clinical guidelines, and research papers.',
        },
        calculators_for_scales: {
          title: 'Calculators for Scales',
          description:
            'Utilize built-in calculators for common anesthesiology scales, risk assessments, dosage calculations, and more to support informed clinical decision-making.',
        },
        continuous_learning: {
          title: 'Continuous Learning',
          description:
            'Stay updated with the latest in anesthesiology practices, certifications, and continuing medical education opportunities.',
        },
      },
    },
  },
  ru: {
    translation: {
      home: {
        Title: 'Anestix',
        Welcome: 'Добро пожаловать в руководство анестезиолога',
        EnterPlatform: 'Войти в платформу',
        PlatformDescription:
          'Ваша всеобъемлющая платформа для специалистов анестезиологии',
      },
      key_features: {
        comprehensive_resources: {
          title: 'Полный спектр ресурсов',
          description:
            'Получите доступ к широкому спектру анестезиологических ресурсов, клинических руководств и научных публикаций.',
        },
        calculators_for_scales: {
          title: 'Калькуляторы шкал',
          description:
            'Используйте встроенные калькуляторы для распространённых шкал анестезиологии, оценки рисков, расчётов доз и многого другого для поддержки клинического принятия решений.',
        },
        continuous_learning: {
          title: 'Непрерывное обучение',
          description:
            'Будьте в курсе последних практик в анестезиологии, сертификатов и возможностей повышения квалификации.',
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
