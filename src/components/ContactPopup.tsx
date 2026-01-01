import { useState, useEffect } from 'react';
import { X, Send, Phone, Mail, User, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
  });

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem('balaji_popup_seen');
    const popupDismissedAt = localStorage.getItem('balaji_popup_dismissed_at');
    
    if (hasSeenPopup && popupDismissedAt) {
      const dismissedTime = new Date(popupDismissedAt).getTime();
      const now = new Date().getTime();
      const sevenDays = 7 * 24 * 60 * 60 * 1000;
      
      // Show popup again after 7 days
      if (now - dismissedTime > sevenDays) {
        setTimeout(() => setIsOpen(true), 3000);
      }
    } else if (!hasSeenPopup) {
      // First time visitor - show popup after 3 seconds
      setTimeout(() => setIsOpen(true), 3000);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('balaji_popup_seen', 'true');
    localStorage.setItem('balaji_popup_dismissed_at', new Date().toISOString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          firstName: formData.name.split(' ')[0] || formData.name,
          lastName: formData.name.split(' ').slice(1).join(' ') || '',
          email: formData.email,
          phone: formData.phone,
          company: formData.company || 'Not provided',
          message: 'Quick enquiry from popup form',
        },
      });

      if (error) throw error;

      toast({
        title: 'Thank you for your interest!',
        description: 'Our team will contact you shortly.',
      });

      setIsOpen(false);
      localStorage.setItem('balaji_popup_seen', 'true');
      localStorage.setItem('balaji_popup_dismissed_at', new Date().toISOString());
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: 'Something went wrong',
        description: 'Please try again or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card border border-border rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-fadeIn">
        {/* Decorative header */}
        <div className="bg-gradient-to-r from-primary via-accent to-secondary h-2" />
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-background/80 hover:bg-background text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-2">
              Let's Connect!
            </h3>
            <p className="text-muted-foreground">
              Get a free quote for your packaging needs. Our team will reach out within 24 hours.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="pl-10"
                required
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="tel"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="pl-10"
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="pl-10"
                required
              />
            </div>

            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Company Name (Optional)"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="pl-10"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold h-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Get Free Quote'} 
              <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground mt-4">
            By submitting, you agree to receive communications from Balaji Group.
          </p>

          <button
            onClick={handleClose}
            className="w-full text-center text-sm text-muted-foreground hover:text-foreground mt-4 transition-colors"
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
