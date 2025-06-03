
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-balaji-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-balaji-navy dark:text-balaji-off-white mb-6">Contact Us</h2>
          <p className="text-xl text-balaji-gray-600 dark:text-balaji-gray-300 max-w-3xl mx-auto">
            Ready to discuss your packaging needs? Get in touch with our team today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-balaji-navy dark:text-balaji-off-white mb-8">Get In Touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-balaji-red rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-balaji-navy dark:text-balaji-off-white mb-2">Phone</h4>
                  <p className="text-balaji-gray-600 dark:text-balaji-gray-300">+91 9829069467</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-balaji-navy dark:bg-balaji-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-balaji-navy dark:text-balaji-off-white mb-2">Email</h4>
                  <p className="text-balaji-gray-600 dark:text-balaji-gray-300">sumit@thebalajigroup.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-balaji-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-balaji-navy dark:text-balaji-off-white mb-2">Address</h4>
                  <p className="text-balaji-gray-600 dark:text-balaji-gray-300">
                    B1/2b, C-block, SDC Gateway,<br />
                    Bani Park, Jaipur, Rajasthan - 302016
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-balaji-navy-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-balaji-navy dark:text-balaji-off-white mb-2">Business Hours</h4>
                  <p className="text-balaji-gray-600 dark:text-balaji-gray-300">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="bg-balaji-gray-50 dark:bg-balaji-gray-800 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-balaji-red mb-1">24/7</div>
                <div className="text-sm text-balaji-gray-600 dark:text-balaji-gray-300">Support Available</div>
              </div>
              <div className="bg-balaji-gray-50 dark:bg-balaji-gray-800 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-balaji-red mb-1">{"< 24hrs"}</div>
                <div className="text-sm text-balaji-gray-600 dark:text-balaji-gray-300">Response Time</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-balaji-gray-50 dark:bg-balaji-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-balaji-navy dark:text-balaji-off-white mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-balaji-navy dark:text-balaji-off-white mb-2">First Name</label>
                    <Input placeholder="Enter your first name" className="border-balaji-gray-300 dark:border-balaji-gray-600 focus:border-balaji-red" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-balaji-navy dark:text-balaji-off-white mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" className="border-balaji-gray-300 dark:border-balaji-gray-600 focus:border-balaji-red" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-balaji-navy dark:text-balaji-off-white mb-2">Email</label>
                  <Input type="email" placeholder="Enter your email" className="border-balaji-gray-300 dark:border-balaji-gray-600 focus:border-balaji-red" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-balaji-navy dark:text-balaji-off-white mb-2">Phone</label>
                  <Input type="tel" placeholder="Enter your phone number" className="border-balaji-gray-300 dark:border-balaji-gray-600 focus:border-balaji-red" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-balaji-navy dark:text-balaji-off-white mb-2">Company</label>
                  <Input placeholder="Enter your company name" className="border-balaji-gray-300 dark:border-balaji-gray-600 focus:border-balaji-red" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-balaji-navy dark:text-balaji-off-white mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your packaging requirements..." 
                    rows={5}
                    className="border-balaji-gray-300 dark:border-balaji-gray-600 focus:border-balaji-red"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-balaji-red hover:bg-balaji-red-dark text-white font-semibold"
                >
                  Send Message <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
