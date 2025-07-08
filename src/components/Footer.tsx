import React from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-green text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-serif font-bold mb-4">
              <span className="text-sage">Residency</span>{' '}
              <span className="text-cream">Raise</span>
            </div>
            <p className="text-light-sage mb-6 leading-relaxed">
              Global mobility and investment migration services for venture capital funds and startup founders.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-light-sage">{siteConfig.contact.offices.join(' • ')}</p>
              <p className="text-light-sage">{siteConfig.contact.phone}</p>
              <p className="text-light-sage">{siteConfig.contact.email}</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sage">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#citizenship-investment" className="text-light-sage hover:text-sage transition-colors">
                  Citizenship by Investment
                </Link>
              </li>
              <li>
                <Link href="/services#startup-expansion" className="text-light-sage hover:text-sage transition-colors">
                  Startup Expansion
                </Link>
              </li>
              <li>
                <Link href="/services#global-networking" className="text-light-sage hover:text-sage transition-colors">
                  Global Networking
                </Link>
              </li>
              <li>
                <Link href="/services#lifestyle-integration" className="text-light-sage hover:text-sage transition-colors">
                  Lifestyle Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sage">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/resources" className="text-light-sage hover:text-sage transition-colors">
                  Country Guides
                </Link>
              </li>
              <li>
                <Link href="/resources#case-studies" className="text-light-sage hover:text-sage transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-light-sage hover:text-sage transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-light-sage hover:text-sage transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sage">Get Started</h3>
            <p className="text-light-sage mb-4 text-sm">
              Ready to explore your global mobility options?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-sage hover:bg-forest text-charcoal-green font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-xl"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sage/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-sage text-sm">
            © {currentYear} Residency Raise. All rights reserved. | Privacy Policy | Terms of Service
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-sage hover:text-sage transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-sage hover:text-sage transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="text-light-sage hover:text-sage transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

