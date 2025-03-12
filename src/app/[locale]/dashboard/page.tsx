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
import { NAVIGATION_ITEMS } from '@/constants/navigation/NAVIGATION_ITEMS.constant';
import { CARDVARIANTS_BASE } from '@/constants/CARDVARIANTS_BASE.constant';
import { useTranslations } from 'use-intl';
import { Link } from '@/i18n/navigation';

export default function DashboardPage() {
  const tDash = useTranslations('Dashboard');

  return (
    <div className="space-y-8">
      <motion.h1
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {tDash('title')}
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
                    {tDash(item.title)}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-md">
                    {tDash(item.description)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    className={`w-full ${item.underDev ? 'bg-accent hover:bg-accent cursor-no-drop' : 'bg-primary'}`}
                    variant="default"
                  >
                    {item.underDev ? (
                      <span className="whitespace-normal break-words text-center">
                        {tDash('underDev')} {tDash(item.title).toLowerCase()}
                      </span>
                    ) : (
                      <Link href={item.href}>
                        <span className="whitespace-normal break-words text-center">
                          {tDash('explore')} {tDash(item.title).toLowerCase()}
                        </span>
                      </Link>
                    )}
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
