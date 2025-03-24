'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { KEY_FEATURES } from '@/constants/KEY_FEATURES.constant';
import { useTranslations } from 'use-intl';
import { Link } from '@/i18n/navigation';
import { Navbar } from '@/components/landing/Navbar';
import {
  CHILD_VARIANT_Y,
  PARENT_VARIANT_Y,
} from '@/constants/frameVariants/ITEMS_LIST_VARIANT-Y.constant';

export default function Home() {
  const tHome = useTranslations('Home');
  const tFeat = useTranslations('Features');
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <Navbar />
      <main className="container mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <motion.h2 className="text-4xl font-bold mb-4">
            {tHome('welcome')}
          </motion.h2>
          <motion.p className="text-lg md:text-xl mb-8">
            {tHome('platformDescription')}
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/dashboard">
              <Button size="lg">{tHome('enterPlatform')}</Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={PARENT_VARIANT_Y}
          initial="hidden"
          animate="show"
          exit="exit"
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {KEY_FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              variants={CHILD_VARIANT_Y}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="p-6 bg-card text-foreground rounded-lg shadow-md"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {tFeat(feature.title)}
              </h3>
              <p>{tFeat(feature.description)}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
