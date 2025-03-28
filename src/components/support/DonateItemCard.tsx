import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { Link } from '@/i18n/navigation';

interface DonateItemCardProps {
  title: string;
  description: string;
  cardContent: string;
  buttonText: string;
  link?: string;
}

export const DonateItemCard: React.FC<DonateItemCardProps> = ({
  title,
  description,
  cardContent,
  buttonText,
  link,
}) => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-4 flex flex-col justify-between">
        <p className="text-sm text-muted-foreground flex-1">{cardContent}</p>
        <motion.div whileTap={{ scaleX: 0.95 }} className="w-full text-center">
          <Link className="w-full" href={link || '#'}>
            <Button className="w-full whitespace-pre-wrap text-pretty self-center">
              {buttonText}
            </Button>
          </Link>
        </motion.div>
      </CardContent>
    </Card>
  );
};
