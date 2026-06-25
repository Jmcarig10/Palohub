'use client';

export default function Contact() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input type="text" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input type="email" className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea rows={5} className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary outline-none" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-b from-primary to-primary/80 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">📍 Address</h3>
              <p className="text-white/90">TBD</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">📞 Phone</h3>
              <p className="text-white/90">TBD</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">📧 Email</h3>
              <p className="text-white/90">support@palohub.com</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">🕐 Hours</h3>
              <p className="text-white/90">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-white/90">Sat - Sun: 8:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
