import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-background text-off-white font-sans">
            <Header />
            <main className="pt-24 pb-16 container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-heading font-bold text-primary mb-8 animate-fadeIn">Terms of Service</h1>

                <div className="space-y-6 text-muted-foreground animate-slideUp">
                    <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">1. Acceptance of Terms</h2>
                        <p className="mb-4">
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                            In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable
                            to such services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">2. Intellectual Property</h2>
                        <p className="mb-4">
                            The Site and its original content, features and functionality are owned by Balaji Group and are protected by international
                            copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">3. Products and Services</h2>
                        <p className="mb-4">
                            We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">4. Limitation of Liability</h2>
                        <p className="mb-4">
                            In no event shall Balaji Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any
                            indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use,
                            goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">5. Governing Law</h2>
                        <p className="mb-4">
                            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">6. Changes to Terms</h2>
                        <p className="mb-4">
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
