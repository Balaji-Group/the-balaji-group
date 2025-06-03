import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 dark:bg-accent/20 rounded-full mb-6">
            <span className="text-accent text-sm font-semibold tracking-wide">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">Contact Us</h2>
          <p className="text-xl text-off-white max-w-3xl mx-auto">
            Ready to discuss your packaging needs? Get in touch with our team today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-8">Get In Touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Phone</h4>
                  <p className="text-off-white">+91 9829069467</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Email</h4>
                  <p className="text-off-white">sumit@thebalajigroup.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Address</h4>
                  <p className="text-off-white">
                    B1/2b, C-block, SDC Gateway,<br />
                    Bani Park, Jaipur, Rajasthan - 302016
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/80 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Business Hours</h4>
                  <p className="text-off-white">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="bg-background rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                <div className="text-sm text-off-white">Support Available</div>
              </div>
              <div className="bg-background rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-accent mb-1">{"< 24hrs"}</div>
                <div className="text-sm text-off-white">Response Time</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-background rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">First Name</label>
                    <Input placeholder="Enter your first name" className="border-border focus:border-accent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">Last Name</label>
                    <Input placeholder="Enter your last name" className="border-border focus:border-accent" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Email</label>
                  <Input type="email" placeholder="Enter your email" className="border-border focus:border-accent" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Phone</label>
                  <Input type="tel" placeholder="Enter your phone number" className="border-border focus:border-accent" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Company</label>
                  <Input placeholder="Enter your company name" className="border-border focus:border-accent" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your packaging requirements..." 
                    rows={5}
                    className="border-border focus:border-accent"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
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
