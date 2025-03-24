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
import { useTranslations } from 'use-intl';
import { Link } from '@/i18n/navigation';
import {
  CHILD_VARIANT_Y,
  PARENT_VARIANT_Y,
} from '@/constants/frameVariants/ITEMS_LIST_VARIANT-Y.constant';

export default function DashboardPage() {
  const tDash = useTranslations('Dashboard');

  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center"
      >
        {tDash('title')}
      </motion.h1>
      <motion.div
        variants={PARENT_VARIANT_Y}
        initial="hidden"
        animate="show"
        exit="exit"
        className="grid gap-6 grid-cols-1 md:grid-cols-2 md:auto-rows-fr"
      >
        {NAVIGATION_ITEMS.filter((_, index: number) => index !== 0).map(
          (item) => (
            <motion.div
              key={item.title}
              className="w-full h-full"
              variants={CHILD_VARIANT_Y}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, type: 'spring', stiffness: 100 }}
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
                    className={`w-full ${item.underDev ? 'bg-primary/50 hover:bg-primary/50 cursor-no-drop' : 'bg-primary'}`}
                    variant="default"
                  >
                    {item.underDev ? (
                      <span className="whitespace-normal break-words text-center">
                        {tDash('underDev')} {tDash(item.title).toLowerCase()}
                      </span>
                    ) : (
                      <Link href={item.href}>
                        <span className="whitespace-normal break-words text-center text-white">
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
