import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="w-full mx-auto bg-white">
            <Header />

            {/* Page Header */}
            <section className="relative py-20 bg-[#8B0000] text-center">
                {/* Pattern overlay simulation */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] font-bold text-white mb-8">
                        CONTACT <span className="font-light">US</span>
                    </h1>

                    <div className="inline-block bg-white py-3 px-8 rounded-sm shadow-sm">
                        <p className="text-sm font-medium text-[#666666]">
                            You are here: <Link href="/" className="hover:text-[#8B0000]">Home</Link> <span className="mx-2">»</span> <span className="text-[#8B0000]">Contact</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-center gap-16">

                        {/* Contact Form */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[#333333] uppercase tracking-wide">
                                    FILL THE CONTACT FORM
                                </h2>
                                <div className="h-1 w-20 bg-[#E5E7EB] mt-4 relative">
                                    <div className="absolute top-0 left-0 h-full w-full bg-[#D4AF37]/40"></div> {/* Gold accent simulation */}
                                </div>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <input
                                        type="text"
                                        placeholder="Your name here"
                                        className="w-full bg-[#F8F7F5] border-none p-4 text-sm text-[#333333] placeholder-[#999999] focus:ring-1 focus:ring-[#8B0000] outline-none"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="w-full bg-[#F8F7F5] border-none p-4 text-sm text-[#333333] placeholder-[#999999] focus:ring-1 focus:ring-[#8B0000] outline-none"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        className="w-full bg-[#F8F7F5] border-none p-4 text-sm text-[#333333] placeholder-[#999999] focus:ring-1 focus:ring-[#8B0000] outline-none"
                                    />
                                </div>

                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full bg-[#F8F7F5] border-none p-4 text-sm text-[#333333] placeholder-[#999999] focus:ring-1 focus:ring-[#8B0000] outline-none"
                                />

                                <textarea
                                    rows={6}
                                    placeholder="Your message"
                                    className="w-full bg-[#F8F7F5] border-none p-4 text-sm text-[#333333] placeholder-[#999999] focus:ring-1 focus:ring-[#8B0000] outline-none resize-none"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="bg-[#8B0000] text-white font-bold py-4 px-8 text-sm uppercase tracking-wider hover:bg-red-900 transition-colors"
                                >
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>

                        {/* Office Address */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[#333333] uppercase tracking-wide">
                                    OFFICE ADDRESS
                                </h2>
                                <div className="h-1 w-20 bg-[#E5E7EB] mt-4 relative">
                                    <div className="absolute top-0 left-0 h-full w-full bg-[#D4AF37]/40"></div>
                                </div>
                            </div>

                            <div className="space-y-6 text-[#666666]">
                                <div className="flex items-start">
                                    <span className="material-icons-outlined text-[#D4AF37] mr-4 mt-1">location_on</span>
                                    <p className="leading-relaxed">
                                        Burj 47, Downtown Near to<br />
                                        Burj Khalifa .P.O. Box 7777, Dubai.
                                    </p>
                                </div>

                                <div className="flex items-start">
                                    <span className="material-icons-outlined text-[#D4AF37] mr-4 mt-1">phone</span>
                                    <div>
                                        <p>+971 4 321 7754</p>
                                        <p>+971 50 455 4588</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="material-icons-outlined text-[#D4AF37] mr-4 mt-1">call</span>
                                    <p>Swiss No: +41 76 6626 933</p>
                                </div>

                                <div className="flex items-start">
                                    <span className="material-icons-outlined text-[#D4AF37] mr-4 mt-1">fax</span>
                                    <p>+971 4 321 7725</p>
                                </div>

                                <div className="flex items-start">
                                    <span className="material-icons-outlined text-[#D4AF37] mr-4 mt-1">email</span>
                                    <div>
                                        <p className="font-medium text-[#333333]">info@kingsfinancialcapital.com</p>
                                        <p className="mt-1">helpdesk@kingsfinancialcapital.com</p>
                                        <p className="mt-1">clientcare@kingsfinancialcapital.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="material-icons-outlined text-[#D4AF37] mr-4 mt-1">public</span>
                                    <p>https://kingsfinancialcapital.com/</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
