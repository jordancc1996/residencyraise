import React from 'react'
import { motion } from 'framer-motion'

const AboutPage: React.FC = () => {
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
              About <span className="text-sage">Residency Raise</span>
            </h1>
            <p className="text-xl text-charcoal-green/70 leading-relaxed">
              We are the premier global mobility consultancy, specializing in investment migration 
              and international expansion for venture capital funds and startup founders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-charcoal-green mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-charcoal-green/70 mb-6 leading-relaxed">
                To democratize global mobility for the world's most innovative entrepreneurs and investors. 
                We believe that talent and capital should flow freely across borders, creating opportunities 
                for growth, innovation, and positive impact worldwide.
              </p>
              <p className="text-lg text-charcoal-green/70 leading-relaxed">
                Through our comprehensive suite of services, we remove the barriers that prevent 
                visionary leaders from accessing the global opportunities they deserve.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-cream/50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-serif font-bold text-charcoal-green mb-4">
                Global Footprint
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-green/70">Countries Served</span>
                  <span className="font-bold text-forest">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-green/70">Active Clients</span>
                  <span className="font-bold text-forest">2,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-green/70">Success Rate</span>
                  <span className="font-bold text-forest">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-charcoal-green/70">Years Experience</span>
                  <span className="font-bold text-forest">15+</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Story */}
      <section className="py-24 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-green mb-6">
              Founders' Story
            </h2>
            <p className="text-xl text-charcoal-green/70 max-w-3xl mx-auto">
              Born from personal experience navigating complex immigration systems while building global businesses.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-off-white p-8 md:p-12 rounded-2xl shadow-lg"
            >
              <blockquote className="text-lg md:text-xl text-charcoal-green/80 leading-relaxed mb-8 italic">
                "After experiencing firsthand the challenges of international expansion and citizenship acquisition 
                while scaling our previous ventures, we realized there was a significant gap in the market for 
                sophisticated, entrepreneur-focused global mobility services. Traditional immigration firms weren't 
                equipped to understand the unique needs of venture-backed startups and investment funds."
              </blockquote>
              <div className="flex items-center">
                <div>
                  <div className="font-semibold text-charcoal-green">Sarah Chen & Marcus Rodriguez</div>
                  <div className="text-sage">Co-Founders, Residency Raise</div>
                  <div className="text-sm text-charcoal-green/60 mt-1">
                    Former founders of 3 successful exits, including 2 unicorns
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Transparency',
                description: 'Clear communication, honest timelines, and upfront pricing. No hidden fees or false promises.',
              },
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in everything we do, from client service to regulatory compliance.',
              },
              {
                title: 'Innovation',
                description: 'Leveraging technology and creative solutions to streamline complex immigration processes.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-sage rounded-full"></div>
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal-green mb-4">
                  {value.title}
                </h3>
                <p className="text-charcoal-green/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

