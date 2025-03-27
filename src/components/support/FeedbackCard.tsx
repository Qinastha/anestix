import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'use-intl';
import { Feedback } from '@/types/Feedback.type';

interface FeedbackCardProps {
  formValues: Feedback;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSendFeedback: () => void;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({
  formValues,
  handleInputChange,
  handleSendFeedback,
}) => {
  const tSup = useTranslations('SupportMe');
  const isFormValid =
    formValues.email.trim() !== '' && formValues.feedback.trim() !== '';
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">
          {tSup('feedback.title')}
        </CardTitle>
        <CardDescription>{tSup('feedback.description')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {tSup('feedback.cardContent')}
        </p>
        <div className="flex flex-col gap-4">
          <Input
            name="email"
            type="text"
            placeholder={tSup('feedback.emailPlaceholder')}
            value={formValues.email}
            onChange={(e) => handleInputChange(e)}
            required
            autoComplete="off"
          />
          <Textarea
            name="feedback"
            placeholder={tSup('feedback.feedbackPlaceholder')}
            value={formValues.feedback}
            onChange={(e) => handleInputChange(e)}
            required
            autoComplete="off"
          />
        </div>
        <motion.div whileTap={{ scaleY: isFormValid ? 0.9 : 1 }}>
          <Button onClick={handleSendFeedback} disabled={!isFormValid}>
            {' '}
            {tSup('feedback.buttonText')}
          </Button>
        </motion.div>
        <div className="pt-4 text-sm">
          <p className="font-medium"> {tSup('credentials.title')}</p>
          <ul className="list-disc list-inside text-muted-foreground ml-2 mt-2">
            <li>{tSup('credentials.email')}</li>
            <li>{tSup('credentials.patreon')}</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
