'use client';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f8f7f4] py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="font-serif text-4xl md:text-6xl text-center text-[#2d2d2d] mb-16">
          Visit Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div className="space-y-8 text-center md:text-left">
            <div>
              <h3 className="font-serif text-2xl text-[#2d2d2d] mb-3">Address</h3>
              <p className="text-[#2d2d2d]/80 text-base leading-relaxed">
                12 Oxford Street<br />
                Osu, Accra<br />
                Ghana
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[#2d2d2d] mb-3">Contact</h3>
              <p className="text-[#2d2d2d]/80 text-base">
                <a href="tel:+233501234567" className="hover:text-[#d4af37] transition-colors">
                  +233 50 123 4567
                </a>
              </p>
              <p className="text-[#2d2d2d]/80 text-base">
                <a href="mailto:info@lepetitoiseau.com" className="hover:text-[#d4af37] transition-colors">
                  info@lepetitoiseau.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[#2d2d2d] mb-3">Hours</h3>
              <p className="text-[#2d2d2d]/80 text-base leading-relaxed">
                Tuesday – Saturday: 12pm – 10.30pm<br />
                Sunday: 12pm – 3.30pm<br />
                <span className="text-[#2d2d2d]/60">Closed Mondays</span>
              </p>
            </div>

            <div>
              <a
                href="https://instagram.com/lepetitoiseau"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#2d2d2d] hover:text-[#d4af37] transition-colors text-base font-medium"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow us on Instagram
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="aspect-square md:aspect-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8275506892744!2d-0.1818!3d5.5560!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzMnMjEuNiJOIDDCsDEwJzU0LjUiVw!5e0!3m2!1sen!2sgh!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
