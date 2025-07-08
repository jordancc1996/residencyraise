import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

const HomePage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-medium mb-6">
              Global Mobility Experts
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Investment Migration{' '}
              <span className="text-gradient">Redefined</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-charcoal-green/80 mb-8 leading-relaxed">
              Sophisticated global mobility services for venture capital funds and startup founders. 
              Opening doors to citizenship, expansion, and lifestyle transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="btn-primary">
                Book a Consultation
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Your Options
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-20 left-0 right-0"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-forest mb-2">
                  {siteConfig.stats.countriesServed}
                </div>
                <div className="text-charcoal-green/70 font-medium">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-forest mb-2">
                  {siteConfig.stats.investmentsFacilitated}
                </div>
                <div className="text-charcoal-green/70 font-medium">Investments Facilitated</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-forest mb-2">
                  {siteConfig.stats.successRate}
                </div>
                <div className="text-charcoal-green/70 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-green mb-6">
              Our Services
            </h2>
            <p className="text-xl text-charcoal-green/70 max-w-3xl mx-auto">
              Comprehensive global mobility solutions tailored for venture capital funds and startup founders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {siteConfig.services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="service-card p-8 rounded-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-block bg-sage/10 text-sage px-3 py-1 rounded-full text-sm font-medium">
                    Premium Service
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-charcoal-green/60">Starting from</div>
                    <div className="text-lg font-bold text-forest">{service.startingPrice}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-charcoal-green mb-4">
                  {service.name}
                </h3>
                
                <p className="text-charcoal-green/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-charcoal-green/60">
                    Timeline: <span className="font-medium text-charcoal-green">{service.timeline}</span>
                  </div>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sage hover:text-forest font-medium transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-cream/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-sage/10 text-sage px-4 py-2 rounded-full text-sm font-medium mb-6">
              Ready to Get Started?
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-green mb-6">
              Book Your <span className="text-sage">Consultation</span>
            </h2>
            
            <p className="text-xl text-charcoal-green/70 mb-8 leading-relaxed">
              Schedule a complimentary 30-minute consultation with our global mobility experts. 
              Discover how we can accelerate your international expansion and citizenship goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="btn-primary">
                Book Free Consultation
              </Link>
              <Link href="/resources" className="btn-secondary">
                Download Guide
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-sage rounded-full"></div>
                </div>
                <h3 className="font-semibold text-charcoal-green mb-2">Expert Guidance</h3>
                <p className="text-sm text-charcoal-green/70">
                  Personalized advice from certified migration specialists
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-sage rounded-full"></div>
                </div>
                <h3 className="font-semibold text-charcoal-green mb-2">No Obligation</h3>
                <p className="text-sm text-charcoal-green/70">
                  Complimentary consultation with no strings attached
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-sage rounded-full"></div>
                </div>
                <h3 className="font-semibold text-charcoal-green mb-2">Fast Response</h3>
                <p className="text-sm text-charcoal-green/70">
                  Schedule within 24 hours of your request
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

