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
        home: 'Home',
        rass: 'RASS',
        four: 'FOUR',
        gcs: 'GCS',
        fentanyl: 'Fentanyl',
        ultrasound_visualization: 'Ultrasound Visualization',
        intubation: 'Intubation',
      },
      scale: {
        totalScore: 'Total Score: ',
        result: 'Result: ',
        glasgow: {
          name: 'Glasgow Coma Scale',
          description:
            'Assessment of consciousness based on eye, verbal, and motor responses.',
          criteria: {
            eye: {
              label: 'Eye Opening',
              option1: 'No eye opening',
              option2: 'Eye opening to pain',
              option3: 'Eye opening to voice',
              option4: 'Spontaneous eye opening',
            },
            verbal: {
              label: 'Verbal Response',
              option1: 'No verbal response',
              option2: 'Incomprehensible sounds',
              option3: 'Inappropriate words',
              option4: 'Confused',
              option5: 'Oriented',
            },
            motor: {
              label: 'Motor Response',
              option1: 'No motor response',
              option2: 'Extension to pain',
              option3: 'Abnormal flexion to pain',
              option4: 'Withdrawal from pain',
              option5: 'Localizes pain',
              option6: 'Obeys commands',
            },
          },
          result: {
            clear: 'Clear consciousness',
            moderateStunning: 'Moderate stunning',
            deepStunning: 'Deep stunning',
            stupor: 'Stupor',
            moderateComa: 'Moderate coma',
            deepComa: 'Deep coma',
            terminalComa: 'Terminal coma',
          },
        },
        four: {
          name: 'FOUR Score',
          description:
            'A coma scale used to assess patients with impaired consciousness.',
          criteria: {
            eye: {
              label: 'Eye Response',
              option0: 'No response',
              option1: 'Eye opening to pain',
              option2: 'Eye opening to verbal command',
              option3: 'Eyes tracking',
              option4: 'Eyes open, spontaneous',
            },
            motor: {
              label: 'Motor Response',
              option0: 'No response',
              option1: 'Abnormal extension',
              option2: 'Flexion to pain',
              option3: 'Localizes pain',
              option4: 'Obeys commands',
            },
            brainstem: {
              label: 'Brainstem Reflexes',
              option0: 'No response',
              option1: 'One reflex present',
              option2: 'Both reflexes abnormal',
              option3: 'One reflex abnormal',
              option4: 'Normal',
            },
            respiration: {
              label: 'Respiration',
              option0: 'Apnea',
              option1: 'No spontaneous breathing',
              option2: 'Breathing with effort',
              option3: 'Irregular breathing',
              option4: 'Regular breathing',
            },
          },
          result: {
            clear: 'Clear consciousness',
            moderateStupor: 'Moderate stupor',
            deepStupor: 'Deep stupor',
            stupor: 'Stupor',
            comaI: 'Coma I (moderate)',
            comaII: 'Coma II (deep)',
            comaIII: 'Coma III (extreme), death of the cerebral cortex',
          },
        },
        rass: {
          name: 'RASS Scale',
          description: 'Richmond Agitation Sedation Scale.',
          criteria: {
            alertness: {
              label: 'Alertness',
              negative5: 'No response to voice or physical stimulation',
              negative4:
                'No response to voice, but movement to physical stimulation',
              negative3:
                'Any movement (without eye contact) in response to voice',
              negative2: 'Brief awakening with eye contact (<10 seconds)',
              negative1:
                'Sustained awakening with eye contact upon voice stimulation',
              zero: 'Alert and calm',
              positive1: 'Restless or anxious',
              positive2:
                'Pulls or removes tubes/catheters or acts aggressively',
              positive3:
                'Frequent non-purposeful movements or ventilator dyssynchrony',
              positive4:
                'Excessively aggressive; immediate danger to personnel',
            },
          },
          result: {
            unarousable: 'Unarousable',
            deepSedation: 'Deep sedation',
            moderateSedation: 'Moderate sedation',
            lightSedation: 'Light sedation',
            drowsy: 'Drowsy',
            alertAndCalm: 'Alert and calm',
            restless: 'Restless',
            agitated: 'Agitated',
            veryAgitated: 'Very agitated',
            combative: 'Combative',
          },
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
          title: 'Блокады',
          description:
            'Получите доступ к ультразвуковой визуализации и полным руководствам по нервным блокам.',
        },
        practical_skills: {
          title: 'Практические навыки',
          description:
            'Погрузитесь в подробную информацию о медицинских процедурах и практических навыках в различных подразделах.',
        },
        explore: 'Исследовать',
        home: 'Главная',
        rass: 'Шкала RASS',
        four: 'Шкала FOUR',
        gcs: 'Шкала комы Глазго',
        fentanyl: 'Фентанил',
        ultrasound_visualization: 'УЗД',
        intubation: 'Интубация',
      },
      scale: {
        totalScore: 'Общий балл: ',
        result: 'Результат: ',
        glasgow: {
          name: 'Шкала комы Глазго',
          description:
            'Оценка сознания на основе реакций глаз, речи и моторики.',
          criteria: {
            eye: {
              label: 'Открытие глаз',
              option1: 'Нет открытия глаз',
              option2: 'Открытие глаз в ответ на боль',
              option3: 'Открытие глаз на голос',
              option4: 'Спонтанное открытие глаз',
            },
            verbal: {
              label: 'Вербальный ответ',
              option1: 'Отсутствие вербального ответа',
              option2: 'Неразборчивые звуки',
              option3: 'Непонятные слова',
              option4: 'Сбит с толку',
              option5: 'Ориентирован',
            },
            motor: {
              label: 'Моторный ответ',
              option1: 'Отсутствие моторного ответа',
              option2: 'Разгибание при боли',
              option3: 'Аномальное сгибание при боли',
              option4: 'Отведение от боли',
              option5: 'Локализует боль',
              option6: 'Выполняет команды',
            },
          },
          result: {
            clear: 'Ясное сознание',
            moderateStunning: 'Умеренное оглушение',
            deepStunning: 'Сильное оглушение',
            stupor: 'Ступор',
            moderateComa: 'Умеренная кома',
            deepComa: 'Глубокая кома',
            terminalComa: 'Терминальная кома',
          },
        },
        four: {
          name: 'Шкала FOUR',
          description: 'Шкала комы для оценки пациентов с нарушением сознания.',
          criteria: {
            eye: {
              label: 'Реакция глаз',
              option0: 'Нет реакции',
              option1: 'Открытие глаз при боли',
              option2: 'Открытие глаз при голосовой команде',
              option3: 'Отслеживание взглядом',
              option4: 'Спонтанное открытие глаз',
            },
            motor: {
              label: 'Моторный ответ',
              option0: 'Нет реакции',
              option1: 'Аномальное выпрямление',
              option2: 'Сгибание при боли',
              option3: 'Локализует боль',
              option4: 'Выполняет команды',
            },
            brainstem: {
              label: 'Рефлексы ствола мозга',
              option0: 'Нет реакции',
              option1: 'Один рефлекс присутствует',
              option2: 'Оба рефлекса аномальны',
              option3: 'Один рефлекс аномален',
              option4: 'Нормально',
            },
            respiration: {
              label: 'Дыхание',
              option0: 'Апное',
              option1: 'Нет спонтанного дыхания',
              option2: 'Дыхание с усилием',
              option3: 'Нерегулярное дыхание',
              option4: 'Регулярное дыхание',
            },
          },
          result: {
            clear: 'Ясное сознание',
            moderateStupor: 'Умеренное оглушение',
            deepStupor: 'Глубокое оглушение',
            stupor: 'Ступор',
            comaI: 'Кома I (умеренная)',
            comaII: 'Кома II (глубокая)',
            comaIII: 'Кома III (крайняя), гибель коры мозга',
          },
        },
        rass: {
          name: 'Шкала RASS',
          description: 'Шкала возбуждения-седации Ричмонда.',
          criteria: {
            alertness: {
              label: 'Критерий',
              negative5: 'Нет реакции на голос или физическое воздействие',
              negative4:
                'Нет реакции на голос, но есть движение в ответ на физическое воздействие',
              negative3:
                'Любое движение (без зрительного контакта) в ответ на голос',
              negative2:
                'Кратковременное пробуждение с установлением зрительного контакта (<10 сек)',
              negative1:
                'Пробуждение на длительный период при голосовой стимуляции',
              zero: 'Сознателен и спокоен',
              positive1: 'Беспокойный или тревожный',
              positive2:
                'Выдергивает трубки/катетеры или ведёт себя агрессивно',
              positive3:
                'Частые непроизвольные движения или диссинхрон с аппаратом ИВЛ',
              positive4:
                'Чрезмерная агрессия; непосредственная угроза персоналу',
            },
          },
          result: {
            unarousable: 'Не пробуждается',
            deepSedation: 'Глубокая седация',
            moderateSedation: 'Умеренная седация',
            lightSedation: 'Лёгкая седация',
            drowsy: 'Вялость',
            alertAndCalm: 'Сознателен и спокоен',
            restless: 'Беспокойный',
            agitated: 'Возбужден',
            veryAgitated: 'Сильно возбужден',
            combative: 'Крайне агрессивен',
          },
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
