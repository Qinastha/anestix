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
import { NAVIGATION_ITEMS } from '@/constants/navigation/NAVIGATION_ITEMS.constant';
import { CARDVARIANTS_BASE } from '@/constants/CARDVARIANTS_BASE.constant';
import Link from 'next/link';

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
        className="grid gap-6 grid-cols-1 md:grid-cols-2 md:auto-rows-fr"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {NAVIGATION_ITEMS.filter((_, index: number) => index !== 0).map(
          (item, index: number) => (
            <motion.div
              key={item.title}
              className="w-full h-full"
              custom={index}
              variants={CARDVARIANTS_BASE}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <Card className="flex flex-col md:h-full md:justify-between hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl leading-relaxed">
                    {t(item.title)}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-md">
                    {t(item.description)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full" variant="default">
                    <Link href={item.href}>
                      <span className="whitespace-normal break-words text-center">
                        {t('dashboard.explore')} {t(item.title).toLowerCase()}{' '}
                      </span>
                    </Link>
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
