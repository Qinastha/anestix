import { toast } from 'react-toastify';

export async function sendFeedback(
  email: string,
  feedback: string,
  tToast: (key: string) => string
): Promise<boolean> {
  try {
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, feedback }),
    });

    if (!response.ok) {
      toast.error(tToast('feedbackError'), {
        position: 'top-right',
        autoClose: 2000,
      });
      return false;
    }

    toast.success(tToast('feedbackSuccess'), {
      position: 'top-right',
      autoClose: 2000,
    });

    return true;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error);
    } else {
      console.error('Unknown error:', error);
    }
    toast.error(tToast('unexpectedError'), {
      position: 'top-right',
      autoClose: 2000,
    });
    return false;
  }
}
