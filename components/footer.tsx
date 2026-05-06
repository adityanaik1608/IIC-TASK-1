import { Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, link: '#', label: 'Twitter', color: 'hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]' },
    { icon: Linkedin, link: '#', label: 'LinkedIn', color: 'hover:text-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]' },
    { icon: Instagram, link: '#', label: 'Instagram', color: 'hover:text-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]' },
  ];

  return (
    <footer className="relative bg-[#050810] pt-16 pb-8 overflow-hidden">
      {/* Subtle Top Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 reveal">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter gradient-text">
              InnovateX 2026
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Building the Future Through Innovation. Join us for the most advanced tech event of the decade.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href="mailto:contact@innovatex.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-cyan-400 transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">contact@innovatex.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground group">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+1 (555) 000-0000</span>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  aria-label={social.label}
                  className={`p-3 rounded-full bg-white/5 border border-white/10 text-muted-foreground transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color} hover:border-transparent`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 reveal" style={{ transitionDelay: '200ms' }}>
          <p className="text-muted-foreground text-xs font-medium tracking-wide">
            © 2026 InnovateX. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <a href="#" className="text-xs text-muted-foreground hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
    </footer>
  );
}
