export default function Events() {
  const events = [
    {
      id: 1,
      title: 'Opening Keynote',
      time: '09:00 AM - 10:30 AM',
      location: 'Main Hall',
      speakers: 'Jane Smith, Tech Visionary',
      description: 'Dive into the future of technology with our keynote speaker.',
    },
    {
      id: 2,
      title: 'AI & Innovation Workshop',
      time: '11:00 AM - 12:30 PM',
      location: 'Conference Room A',
      speakers: 'Dr. Alex Johnson',
      description: 'Hands-on workshop exploring the latest AI breakthroughs.',
    },
    {
      id: 3,
      title: 'Networking Lunch',
      time: '12:30 PM - 1:30 PM',
      location: 'Grand Ballroom',
      speakers: 'All Attendees',
      description: 'Connect with industry leaders and fellow innovators.',
    },
    {
      id: 4,
      title: 'Future of Web3',
      time: '2:00 PM - 3:30 PM',
      location: 'Conference Room B',
      speakers: 'Sam Chen, Web3 Expert',
      description: 'Explore the decentralized future and blockchain innovation.',
    },
    {
      id: 5,
      title: 'Product Launch Demo',
      time: '4:00 PM - 5:00 PM',
      location: 'Main Hall',
      speakers: 'Product Team',
      description: 'Live demonstration of our next-gen platform.',
    },
    {
      id: 6,
      title: 'Evening Gala & Networking',
      time: '6:00 PM - 9:00 PM',
      location: 'Rooftop Terrace',
      speakers: 'All Attendees',
      description: 'Celebrate the day with food, drinks, and great company.',
    },
  ];

  return (
    <section
      id="events"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-[#0f1436] to-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Event <span className="gradient-text">Schedule</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our carefully curated lineup of sessions and experiences
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group glass rounded-xl p-6 card-hover reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Time */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                <span className="text-sm text-primary font-semibold">{event.time}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {event.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">{event.description}</p>

              {/* Location and Speaker */}
              <div className="space-y-2 pt-4 border-t border-white/10">
                <div className="text-sm">
                  <span className="text-gray-500">Location:</span>{' '}
                  <span className="text-gray-300">{event.location}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Speaker:</span>{' '}
                  <span className="text-primary">{event.speakers}</span>
                </div>
              </div>

              {/* Register Button */}
              <button className="w-full mt-4 px-4 py-2 rounded-lg bg-white/5 text-primary border border-primary/30 font-semibold btn-hover hover:bg-primary/10">
                Register Event
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
