'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const scheduleData = [
  {
    day: 1,
    title: 'Introduction & Ideation',
    time: '9:00 AM - 5:00 PM',
    description:
      'Kick off with keynote speeches from industry leaders. Network with fellow innovators and participate in brainstorming sessions to identify the most promising ideas.',
    highlights: [
      'Opening Keynote',
      'Networking Breakfast',
      'Ideation Workshops',
      'Speed Networking',
    ],
  },
  {
    day: 2,
    title: 'Development',
    time: '9:00 AM - 6:00 PM',
    description:
      'Deep dive into technical implementation. Collaborate with your team, attend expert-led workshops, and leverage mentorship from seasoned professionals.',
    highlights: [
      'Technical Workshops',
      'Mentorship Sessions',
      'Code Hacking',
      'Team Collaboration',
    ],
  },
  {
    day: 3,
    title: 'Final Presentation',
    time: '10:00 AM - 8:00 PM',
    description:
      'Showcase your innovations to judges and investors. Celebrate achievements, network at the closing ceremony, and discover opportunities ahead.',
    highlights: [
      'Project Pitching',
      'Demo Showcase',
      'Award Ceremony',
      'Closing Reception',
    ],
  },
];

const rulesData = [
  {
    id: 'teams',
    title: 'Team Participation',
    content:
      'Teams should consist of 2-5 members. Each team member must register individually and wear the provided identification badge. Teams can be formed on-site if you don\'t have prior connections.',
  },
  {
    id: 'registration',
    title: 'Registration Requirements',
    content:
      'Valid ID is required at check-in. Early bird registrations receive exclusive swag and priority seating. Late registrations are accepted until 15 minutes before the event starts.',
  },
  {
    id: 'submissions',
    title: 'Project Submission',
    content:
      'Projects must be submitted by 12:00 PM on Day 3. All code and documentation should be uploaded to the official platform. Late submissions are not accepted but presentations may be adjusted.',
  },
  {
    id: 'conduct',
    title: 'Code of Conduct',
    content:
      'All participants must adhere to our community code of conduct promoting respect, inclusion, and professionalism. Violations may result in removal from the event. We maintain zero tolerance for harassment or discrimination.',
  },
  {
    id: 'intellectual',
    title: 'Intellectual Property',
    content:
      'Participants retain all intellectual property rights to their projects. Organizers receive a non-exclusive license for promotional purposes. Commercial use rights remain with the original creators.',
  },
  {
    id: 'prizes',
    title: 'Prize Distribution',
    content:
      'Top 3 teams receive cash prizes and sponsorship opportunities. Prize money: 1st Place: $10,000, 2nd Place: $5,000, 3rd Place: $2,500. Winners must complete tax documentation.',
  },
];

export default function EventDetails() {
  return (
    <section id="details" className="relative w-full py-20 px-4 bg-background">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 right-0 w-96 h-96 bg-gradient-to-bl from-purple-600/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-32 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-600/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Event <span className="gradient-text">Details</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to know about InnovateX 2026
          </p>
        </div>

        {/* Event Info Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Description Card */}
          <div className="glass rounded-2xl p-8 border border-cyan-500/20 card-hover reveal" style={{ transitionDelay: '100ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Event Description</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              InnovateX 2026 is a three-day tech summit bringing together innovators, developers, and entrepreneurs from around the world. Connect, collaborate, and build the future together.
            </p>
          </div>

          {/* Date & Time Card */}
          <div className="glass rounded-2xl p-8 border border-purple-500/20 card-hover reveal" style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Date & Time</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Event Dates</p>
                <p className="text-cyan-300 font-semibold">June 15-17, 2026</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Check-in Starts</p>
                <p className="text-purple-300 font-semibold">8:00 AM (Daily)</p>
              </div>
            </div>
          </div>

          {/* Mode Card */}
          <div className="glass rounded-2xl p-8 border border-pink-500/20 card-hover reveal" style={{ transitionDelay: '300ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.452a6 6 0 00-5.011 1.748v.102a6 6 0 006.785 5.838c.04-.005.09-.01.176-.021m0 0a6.6 6.6 0 01-6.002-5.817m0 0a6 6 0 016.785 5.838m0 0A6.5 6.5 0 112.75 9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Event Mode</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 text-sm">Participation</p>
                <div className="flex gap-2 mt-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium">
                    Online
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium">
                    In-Person
                  </span>
                </div>
              </div>
              <p className="text-gray-300 text-sm">Choose your preferred mode during registration</p>
            </div>
          </div>
        </div>

        {/* Schedule Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 reveal">Event Schedule</h3>
          <div className="space-y-6">
            {scheduleData.map((day, index) => (
              <div key={day.day} className="relative reveal" style={{ transitionDelay: `${index * 150}ms` }}>
                {/* Timeline connector */}
                {index !== scheduleData.length - 1 && (
                  <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>
                )}

                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="relative flex flex-col items-center pt-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center font-bold text-white text-lg btn-hover">
                      {day.day}
                    </div>
                  </div>

                  {/* Timeline content */}
                  <div className="flex-1 glass rounded-2xl p-6 border border-white/10 card-hover">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                          {day.title}
                        </h4>
                        <p className="text-cyan-300 font-semibold">{day.time}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{day.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {day.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-200 text-sm hover:border-cyan-500/60 transition-colors"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rules Section with Accordion */}
        <div className="reveal">
          <h3 className="text-3xl font-bold text-white mb-8">Rules & Guidelines</h3>
          <Accordion
            type="single"
            collapsible
            className="glass rounded-2xl border border-white/10 p-2 overflow-hidden"
          >
            {rulesData.map((rule) => (
              <AccordionItem key={rule.id} value={rule.id} className="border-b-0">
                <AccordionTrigger className="text-lg font-semibold text-white hover:text-cyan-300 transition-all px-6 py-4 hover:bg-white/5 rounded-xl">
                  <span className="flex items-center gap-3 text-left">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                      ✓
                    </span>
                    {rule.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 px-6 pb-4">
                  <div className="ml-11 space-y-3 leading-relaxed">
                    <p>{rule.content}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
