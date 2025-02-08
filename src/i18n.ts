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
      sidebar: {
        home: 'Home',
        scale_calculators: 'Scale Calculators',
        rass: 'RASS',
        four: 'FOUR',
        drug_calculators: 'Drug Calculators',
        fentanyl: 'Fentanyl',
        peripheral_nerve_block: 'Peripheral Nerve Block',
        ultrasound_visualization: 'Ultrasound Visualization',
        practical_skills: 'Practical Skills',
        intubation: 'Intubation',
      },
      dashboard: {
        dashboard_title: 'Dashboard',
        scale_calculators: {
          title: 'Scale Calculators',
          description:
            'Calculate various scales such as RASS, FOUR, etc. Explore detailed sub‑sections for each scale.',
        },
        drug_calculators: {
          title: 'Drug Calculators',
          description:
            'Calculate drug dosages (e.g. mg of atracurium per weight) and more with detailed guides.',
        },
        peripheral_nerve_block: {
          title: 'Peripheral Nerve Block',
          description:
            'Access ultrasound visualizations and comprehensive guides for nerve blocks.',
        },
        practical_skills: {
          title: 'Practical Skills',
          description:
            'Dive into in‑depth information on medical procedures and practical skills across many sub‑sections.',
        },
        explore: 'Explore',
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
      sidebar: {
        home: 'Главная',
        scale_calculators: 'Калькулятор шкал',
        rass: 'RASS',
        four: 'FOUR',
        drug_calculators: 'Рассчет препаратов',
        fentanyl: 'Фентанил',
        peripheral_nerve_block: 'Блокады',
        ultrasound_visualization: 'УЗД',
        practical_skills: 'Практические навыки',
        intubation: 'Интубация',
      },
      dashboard: {
        dashboard_title: 'Разделы',
        scale_calculators: {
          title: 'Калькуляторы шкал',
          description:
            'Рассчитайте различные шкалы, такие как RASS, FOUR и другие. Исследуйте подробные подразделы для каждой шкалы.',
        },
        drug_calculators: {
          title: 'Калькуляторы препаратов',
          description:
            'Рассчитайте дозировки лекарств (например, мг атракурия на кг веса) и многое другое с подробными руководствами.',
        },
        peripheral_nerve_block: {
          title: 'Периферический нервный блок',
          description:
            'Получите доступ к ультразвуковой визуализации и полным руководствам по нервным блокам.',
        },
        practical_skills: {
          title: 'Практические навыки',
          description:
            'Погрузитесь в подробную информацию о медицинских процедурах и практических навыках в различных подразделах.',
        },
        explore: 'Исследовать',
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
