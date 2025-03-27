import { sendFeedback } from '@/actions/sendFeedback';
import { useState } from 'react';
import { Feedback } from '@/types/Feedback.type';
import { useTranslations } from 'use-intl';

export function useFeedback() {
  const tToast = useTranslations('Toasts');
  const [formValues, setFormValues] = useState<Feedback>({
    email: '',
    feedback: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSendFeedback = async () => {
    const success = await sendFeedback(
      formValues.email,
      formValues.feedback,
      tToast
    );
    if (success) {
      setFormValues({ email: '', feedback: '' });
    }
  };

  return { formValues, handleInputChange, handleSendFeedback };
}
