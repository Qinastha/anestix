'use client';
import { motion } from 'motion/react';
import { useTranslations } from 'use-intl';
import { FeedbackCard } from '@/components/support/FeedbackCard';
import { DonateItemCard } from '@/components/support/DonateItemCard';
import { useFeedback } from '@/hooks/useFeedback';

export default function SupportMePage() {
  const tSup = useTranslations('SupportMe');
  const { formValues, handleInputChange, handleSendFeedback } = useFeedback();

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center w-full py-10 px-4"
      >
        {/* Title section */}
        <div className="max-w-2xl text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">{tSup('title')}</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            {tSup('aboutMe')}
          </p>
        </div>

        {/* Donation options */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-3xl flex flex-col md:flex-row gap-4 mb-10"
        >
          {/* One-time donation */}
          <DonateItemCard
            title={tSup('oneDonate.title')}
            description={tSup('oneDonate.description')}
            cardContent={tSup('oneDonate.cardContent')}
            buttonText={tSup('oneDonate.buttonText')}
          />
          {/* Monthly sponsor */}
          <DonateItemCard
            title={tSup('subscription.title')}
            description={tSup('subscription.description')}
            cardContent={tSup('subscription.cardContent')}
            buttonText={tSup('subscription.buttonText')}
          />
        </motion.div>

        {/* Feedback and credentials section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-3xl"
        >
          <FeedbackCard
            formValues={formValues}
            handleInputChange={handleInputChange}
            handleSendFeedback={handleSendFeedback}
          />
        </motion.div>
      </motion.section>
    </>
  );
}
