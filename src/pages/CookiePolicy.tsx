import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
    return (
        <div className="min-h-screen bg-background text-off-white font-sans">
            <Header />
            <main className="pt-24 pb-16 container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-heading font-bold text-primary mb-8 animate-fadeIn">Cookie Policy</h1>

                <div className="space-y-6 text-muted-foreground animate-slideUp">
                    <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">1. What Are Cookies</h2>
                        <p className="mb-4">
                            As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">2. How We Use Cookies</h2>
                        <p className="mb-4">
                            We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">3. The Cookies We Set</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Forms related cookies:</strong> When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.
                            </li>
                            <li>
                                <strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.
                            </li>
                            <li>
                                <strong>Analytics cookies:</strong> This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">4. Disabling Cookies</h2>
                        <p className="mb-4">
                            You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this the site. Therefore it is recommended that you do not disable cookies.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CookiePolicy;
