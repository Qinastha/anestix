'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { KEY_FEATURES } from '@/constants/KEY_FEATURES.constant';
import { useTranslations } from 'use-intl';
import { Link } from '@/i18n/navigation';
import { Navbar } from '@/components/landing/Navbar';

export default function Home() {
  const tHome = useTranslations('Home');
  const tFeat = useTranslations('Features');
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <Navbar />
      <main className="container mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">{tHome('welcome')}</h2>
          <p className="text-lg md:text-xl mb-8">
            {tHome('platformDescription')}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/dashboard">
              <Button size="lg" className="bg-primary text-primary-foreground">
                {tHome('enterPlatform')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {KEY_FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-card text-card-foreground rounded-lg shadow-md"
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
