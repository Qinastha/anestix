'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { NAVIGATION_ITEMS } from '@/constants/NAVIGATION_ITEMS.constant';

export default function DashboardPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <motion.h1
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t('dashboard.dashboard_title')}
      </motion.h1>
      <motion.div
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {NAVIGATION_ITEMS.filter((item, index: number) => index !== 0).map(
          (item, index: number) => (
            <motion.div
              key={item.title}
              className="w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{t(item.title)}</CardTitle>
                  <CardDescription>{t(item.description)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full" variant="default">
                    <a href={item.href}>
                      {t('dashboard.explore')} {t(item.title)}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
}
