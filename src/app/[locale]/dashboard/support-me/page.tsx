'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { motion } from 'motion/react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function SupportMePage() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center w-full py-10 px-4"
      >
        {/* Title section */}
        <div className="max-w-2xl text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Support My Work</h1>
          <p className="text-lg text-muted-foreground">
            As a solo developer creating tool for medical professionals, your
            support enables me to continuously develop, update, and enhance this
            resource for everyone.
          </p>
        </div>

        {/* Donation options */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-3xl flex flex-col md:flex-row gap-4 mb-10"
        >
          {/* One-time donation */}
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">
                One-time Donation
              </CardTitle>
              <CardDescription>
                If my application makes your day-to-day work easier, consider a
                small one-time donation.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4 flex flex-col justify-between">
              <p className="text-sm text-muted-foreground flex-">
                Every donation goes towards hosting, ongoing development, and
                adding more features.
              </p>
              <Button className="w-full sm:w-1/2 md:w-full whitespace-pre-wrap text-pretty self-center">
                Donate via Credit/Debit Card
              </Button>
            </CardContent>
          </Card>

          {/* Monthly sponsor */}
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">
                Monthly Sponsor
              </CardTitle>
              <CardDescription>
                Keep this project sustainable by sponsoring me on a monthly
                basis via Patreon.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4 flex flex-col justify-between">
              <p className="text-sm text-muted-foreground flex-">
                By becoming a monthly sponsor, you help ensure ongoing
                improvements and dedicated support.
              </p>
              <Button className="w-full sm:w-1/2 md:w-full whitespace-pre-wrap text-pretty self-center">
                Become a Patreon Sponsor
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Feedback and credentials section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-3xl"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">
                Feedback & Credentials
              </CardTitle>
              <CardDescription>
                Your feedback is vital for shaping improvements and new
                features.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Have suggestions, bug reports, or ideas for new calculations?
                Share them below. I&#39;d also love to hear how you&#39;ve used
                these tools in practice.
              </p>
              <div className="flex flex-col gap-4">
                <Input type="text" placeholder="Your email or contact" />
                <Textarea placeholder="Your feedback or suggestions..." />
              </div>
              <Button>Send Feedback</Button>
              <div className="pt-4 text-sm">
                <p className="font-medium">Developer Credentials:</p>
                <ul className="list-disc list-inside text-muted-foreground ml-2 mt-2">
                  <li>My email for connect:</li>
                  <li>My patreon link:</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </>
  );
}
