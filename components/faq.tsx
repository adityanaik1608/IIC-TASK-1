'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { HelpCircle, Users, DollarSign, Trophy, Clock, FileCheck } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      icon: Users,
      question: 'Who can participate?',
      answer:
        'InnovateX 2026 is open to students, professionals, and innovators from any background. Whether you are a student at a college/university or working at a company, you are welcome to participate. You can be from any field - engineering, business, design, healthcare, or any other domain. The challenge welcomes diverse perspectives and interdisciplinary teams.',
    },
    {
      icon: DollarSign,
      question: 'Is there a registration fee?',
      answer:
        'We offer flexible registration options to make participation accessible. Early Bird registrations are available at $99, with Professional passes at $199 offering additional benefits like VIP lounge access. Enterprise packages at $499 include team passes and exclusive networking. All registrations include access to sessions, networking events, and lunch. Scholarships may be available for deserving participants - contact us for details.',
    },
    {
      icon: Users,
      question: 'Can I participate solo?',
      answer:
        'Yes, absolutely! You can participate as an individual. However, the challenge is designed for teams, and we recommend forming a team of 2-5 members for optimal collaboration and diverse skill sets. If you register solo, you can join a team during the event at our team-formation session on Day 1. Solo participants can also find teammates through our community platform before the event starts.',
    },
    {
      icon: Trophy,
      question: 'What are the prize details?',
      answer:
        'Winners of InnovateX 2026 will receive exciting prizes including cash awards, sponsored opportunities, and mentorship programs. The top 3 teams will be recognized with prizes ranging from $5,000 to $15,000. Additionally, winners get opportunities for startup funding, accelerator programs, and media coverage. Special prizes are awarded for innovation, design, and social impact in each theme category.',
    },
    {
      icon: Clock,
      question: 'How long is the event?',
      answer:
        'InnovateX 2026 is a 3-day event running from June 15-17, 2026. Day 1 focuses on Introduction & Ideation where you\'ll form teams and brainstorm ideas. Day 2 is dedicated to Development where teams work on building their solutions. Day 3 concludes with Final Presentations where teams pitch their innovations to judges. The event runs from 9 AM to 6 PM each day, with breaks for meals and networking.',
    },
    {
      icon: FileCheck,
      question: 'What do I need to submit?',
      answer:
        'Teams need to submit a problem statement (up to 500 words) describing the challenge they want to solve. During the event, you\'ll build a solution which can be a software application, hardware prototype, business plan, or any tangible deliverable. On the final day, teams submit their project along with a 5-minute presentation and a technical document. All submissions must adhere to the code of conduct and intellectual property guidelines.',
    },
    {
      icon: HelpCircle,
      question: 'Is mentorship available?',
      answer:
        'Yes! We provide mentorship from industry experts and experienced professionals. Professional and Enterprise ticket holders get dedicated mentoring sessions. On-demand mentorship is available to all participants during the event. We have domain experts in AI/ML, Healthcare, FinTech, and Sustainability who can guide your team. Mentors are available on-site during development hours to provide technical and strategic guidance.',
    },
    {
      icon: DollarSign,
      question: 'Can remote teams participate?',
      answer:
        'Absolutely! InnovateX 2026 is a hybrid event, so you can participate fully online or join us in person. Remote teams have full access to all sessions, mentorship, and networking opportunities via our virtual platform. You\'ll get live streams of keynotes, virtual collaboration spaces for team development, and online judging for final presentations. Both online and offline teams compete on equal footing for all prizes and recognition.',
    },
  ];

  return (
    <section id="faq" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-balance">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions about InnovateX 2026. Can&apos;t find what you&apos;re looking for? Contact us for more help.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="glass rounded-2xl border border-white/10 overflow-hidden reveal" style={{ transitionDelay: '200ms' }}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-white/5 last:border-b-0 group"
                >
                  <AccordionTrigger className="px-6 md:px-8 py-5 md:py-6 hover:bg-white/5 transition-all duration-300 text-left">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="mt-1 transition-transform duration-300 group-hover:scale-110">
                        <Icon
                          size={24}
                          className="text-cyan-400 flex-shrink-0 group-hover:text-purple-400 transition-colors duration-300"
                        />
                      </div>
                      <span className="text-base md:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 text-balance">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 md:px-8 pb-6">
                    <div className="ml-10 text-gray-400 leading-relaxed text-sm md:text-base animate-in fade-in slide-in-from-top-1">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center reveal" style={{ transitionDelay: '400ms' }}>
          <p className="text-gray-400 mb-6">
            Still have questions? We&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-lg border-2 border-cyan-500 text-cyan-400 font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 btn-hover">
              Contact Support
            </button>
            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold btn-hover btn-glow-primary">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
