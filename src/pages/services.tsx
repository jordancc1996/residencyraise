import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-gradient py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-charcoal-green mb-6">
              Our <span className="text-sage">Services</span>
            </h1>
            <p className="text-xl text-charcoal-green/70 leading-relaxed">
              Comprehensive global mobility solutions tailored for venture capital funds and startup founders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Citizenship by Investment */}
      <section id="citizenship-investment" className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-sage/10 text-sage px-3 py-1 rounded-full text-sm font-medium mb-4">
                Premium Service
              </div>
              <h2 className="text-4xl font-serif font-bold text-charcoal-green mb-6">
                Citizenship by Investment
              </h2>
              <p className="text-lg text-charcoal-green/70 mb-8 leading-relaxed">
                Strategic pathways to second citizenship through carefully vetted investment programs. 
                Our expert team guides you through the entire process, from initial consultation to passport delivery.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-green mb-3">EU & Caribbean Programs</h3>
                  <p className="text-charcoal-green/70">Portugal Golden Visa, Malta IIP, Antigua & Barbuda, St. Kitts & Nevis</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-green mb-3">Due Diligence Support</h3>
                  <p className="text-charcoal-green/70">Comprehensive background checks and compliance assistance</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-green mb-3">Family Inclusion</h3>
                  <p className="text-charcoal-green/70">Spouse, children, and dependent parents coverage</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-cream/50 p-8 rounded-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-sm text-charcoal-green/60">Starting from</div>
                  <div className="text-3xl font-bold text-forest">€250,000</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-charcoal-green/60">Timeline</div>
                  <div className="text-xl font-semibold text-charcoal-green">6-18 months</div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-charcoal-green mb-4">Our Process</h3>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Initial Consultation', desc: 'Assess your goals and recommend optimal programs' },
                  { step: '02', title: 'Documentation', desc: 'Prepare and review all required documents' },
                  { step: '03', title: 'Investment Setup', desc: 'Facilitate qualifying investment transactions' },
                  { step: '04', title: 'Application Submission', desc: 'Submit application with government liaison' },
                  { step: '05', title: 'Approval & Delivery', desc: 'Receive citizenship and passport delivery' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-sage text-off-white rounded-full flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-green">{item.title}</div>
                      <div className="text-sm text-charcoal-green/70">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Startup Expansion */}
      <section id="startup-expansion" className="py-24 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <div className="inline-block bg-sage/10 text-sage px-3 py-1 rounded-full text-sm font-medium mb-4">
                Growth Focused
              </div>
              <h2 className="text-4xl font-serif font-bold text-charcoal-green mb-6">
                Startup Expansion
              </h2>
              <p className="text-lg text-charcoal-green/70 mb-8 leading-relaxed">
                Comprehensive support for scaling your venture across international markets. 
                From regulatory compliance to local partnerships, we handle every aspect of your global expansion.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-green mb-3">Market Entry Strategy</h3>
                  <p className="text-charcoal-green/70">Comprehensive market analysis and entry planning</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-green mb-3">Legal Framework Setup</h3>
                  <p className="text-charcoal-green/70">Entity formation, compliance, and regulatory navigation</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-green mb-3">Tax Optimization</h3>
                  <p className="text-charcoal-green/70">International tax planning and structure optimization</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:order-1 bg-off-white p-8 rounded-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-sm text-charcoal-green/60">Investment from</div>
                  <div className="text-3xl font-bold text-forest">$50,000</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-charcoal-green/60">Timeline</div>
                  <div className="text-xl font-semibold text-charcoal-green">3-6 months</div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-charcoal-green mb-4">Expansion Markets</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { region: 'Europe', countries: '27 EU Countries' },
                  { region: 'Americas', countries: 'US, Canada, LATAM' },
                  { region: 'Asia-Pacific', countries: 'Singapore, Australia, NZ' },
                  { region: 'Middle East', countries: 'UAE, Saudi Arabia' },
                ].map((market) => (
                  <div key={market.region} className="text-center p-4 bg-cream/50 rounded-lg">
                    <div className="font-semibold text-charcoal-green">{market.region}</div>
                    <div className="text-sm text-charcoal-green/70">{market.countries}</div>
                  </div>
                ))}
              </div>
              
              <div className="bg-sage/10 p-4 rounded-lg">
                <h4 className="font-semibold text-charcoal-green mb-2">Success Metrics</h4>
                <div className="flex justify-between">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-forest">200+</div>
                    <div className="text-xs text-charcoal-green/70">Startups Expanded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-forest">85%</div>
                    <div className="text-xs text-charcoal-green/70">Market Success Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Networking */}
      <section id="global-networking" className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-sage/10 text-sage px-3 py-1 rounded-full text-sm font-medium mb-4">
              Exclusive Access
            </div>
            <h2 className="text-4xl font-serif font-bold text-charcoal-green mb-6">
              Global Networking
            </h2>
            <p className="text-xl text-charcoal-green/70 max-w-3xl mx-auto leading-relaxed">
              Access to exclusive networks of investors, entrepreneurs, and government officials. 
              Our curated connections open doors to opportunities that drive business growth and personal success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold text-charcoal-green mb-6">Network Categories</h3>
              <div className="space-y-4">
                {[
                  { category: 'Venture Capital', desc: 'Top-tier VC funds and partners', count: '500+' },
                  { category: 'Family Offices', desc: 'Ultra-high-net-worth families', count: '200+' },
                  { category: 'Government Officials', desc: 'Ministers, ambassadors, trade reps', count: '150+' },
                  { category: 'Entrepreneurs', desc: 'Successful founders and CEOs', count: '2,000+' },
                  { category: 'Legal Partners', desc: 'International law firms', count: '300+' },
                ].map((item) => (
                  <div key={item.category} className="flex items-center justify-between p-4 bg-cream/30 rounded-lg">
                    <div>
                      <div className="font-semibold text-charcoal-green">{item.category}</div>
                      <div className="text-sm text-charcoal-green/70">{item.desc}</div>
                    </div>
                    <div className="text-2xl font-bold text-forest">{item.count}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-cream/50 p-8 rounded-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-sm text-charcoal-green/60">Membership from</div>
                  <div className="text-3xl font-bold text-forest">$25,000/year</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-charcoal-green/60">Network size</div>
                  <div className="text-xl font-semibold text-charcoal-green">5,000+ contacts</div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-charcoal-green mb-3">Investor Introductions</h4>
                  <p className="text-charcoal-green/70 text-sm">Connect with VCs, family offices, and angel investors</p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-green mb-3">Government Relations</h4>
                  <p className="text-charcoal-green/70 text-sm">Direct access to policy makers and trade officials</p>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-green mb-3">Industry Events</h4>
                  <p className="text-charcoal-green/70 text-sm">Exclusive conferences, summits, and networking gatherings</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lifestyle Integration */}
      <section id="lifestyle-integration" className="py-24 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-sage/10 text-sage px-3 py-1 rounded-full text-sm font-medium mb-4">
                White Glove Service
              </div>
              <h2 className="text-4xl font-serif font-bold text-charcoal-green mb-6">
                Lifestyle Integration
              </h2>
              <p className="text-lg text-charcoal-green/70 mb-8 leading-relaxed">
                Seamless transition support including real estate, education, and cultural integration. 
                Our comprehensive concierge services ensure your new life abroad exceeds expectations.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-green mb-3">Property Acquisition</h3>
                  <p className="text-charcoal-green/70">Luxury real estate sourcing and purchase management</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-green mb-3">Education Planning</h3>
                  <p className="text-charcoal-green/70">International school placement and university admissions</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-charcoal-green mb-3">Cultural Concierge</h3>
                  <p className="text-charcoal-green/70">Language training, cultural orientation, and social integration</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-off-white p-8 rounded-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-sm text-charcoal-green/60">Service from</div>
                  <div className="text-3xl font-bold text-forest">$15,000</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-charcoal-green/60">Support period</div>
                  <div className="text-xl font-semibold text-charcoal-green">12+ months</div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-charcoal-green mb-4">Concierge Services</h3>
              <div className="space-y-4">
                {[
                  { service: 'Property Search', desc: 'Luxury real estate acquisition and management' },
                  { service: 'Education Planning', desc: 'International schools and university admissions' },
                  { service: 'Healthcare Access', desc: 'Premium medical care and insurance setup' },
                  { service: 'Cultural Integration', desc: 'Language training and cultural orientation' },
                  { service: 'Banking & Finance', desc: 'International banking and wealth management' },
                  { service: 'Legal Support', desc: 'Ongoing legal counsel and compliance' },
                ].map((item) => (
                  <div key={item.service} className="border-l-4 border-sage pl-4">
                    <div className="font-semibold text-charcoal-green">{item.service}</div>
                    <div className="text-sm text-charcoal-green/70">{item.desc}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center bg-sage/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-forest">24/7</div>
                <div className="text-sm text-charcoal-green/70">Concierge Support</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-green mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-charcoal-green/70 mb-8 leading-relaxed">
              Schedule a consultation to discuss your specific needs and learn how we can help you achieve your global mobility goals.
            </p>
            <Link href="/contact" className="btn-primary">
              Book Your Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage

