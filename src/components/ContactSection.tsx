import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  PaperPlaneTilt, 
  EnvelopeSimple,
  User,
  ChatCircle
} from '@phosphor-icons/react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const result = await emailjs.send(
        'service_uq7o3i2',
        'template_krec17g',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'amalkadarshana9@gmail.com'
        },
        'Ho9sYLIkdswMUOGSs'
      );
      
      console.log('Email sent successfully:', result);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      setError(err?.text || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="floating-orb floating-orb-pink w-72 h-72 -top-20 -left-20 opacity-25" />
      <div className="floating-orb w-56 h-56 bottom-20 -right-10 opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="section-header text-center mb-16">
            <h2 className="section-title mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="contact-form-element">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User 
                      size={20} 
                      weight="light" 
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" 
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass-input w-full pl-12 text-foreground placeholder:text-muted-foreground focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="contact-form-element">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <EnvelopeSimple 
                      size={20} 
                      weight="light" 
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" 
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass-input w-full pl-12 text-foreground placeholder:text-muted-foreground focus:outline-none"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="contact-form-element">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <ChatCircle 
                      size={20} 
                      weight="light" 
                      className="absolute left-4 top-4 text-muted-foreground" 
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="glass-input w-full pl-12 text-foreground placeholder:text-muted-foreground focus:outline-none resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`contact-form-element glow-button w-full flex items-center justify-center gap-3 ${
                    isSubmitted ? 'bg-green-500' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  ) : isSubmitted ? (
                    <>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <PaperPlaneTilt size={20} weight="light" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center">
              <div className="glass-card p-8 mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm currently available for freelance work and exciting opportunities. 
                  Whether you have a question or just want to say hi, I'll get back to you!
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:amalkadarshana9@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <EnvelopeSimple size={24} weight="light" />
                    <span>amalkadarshana9@gmail.com</span>
                  </a>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
