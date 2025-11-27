import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Contact() {
    return (
        <div className="w-full mx-auto bg-white">
            <Header />

            {/* Page Header */}
            <section className="relative py-24 md:py-32 bg-gradient-to-br from-gray-900 to-black text-center overflow-hidden">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'6\' height=\'6\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M5 0h1v5h-1V0zm0 1h1v4h-1V1z\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>

                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-display)] font-extrabold text-white mb-4 tracking-tight">
                        GET IN <span className="text-[#D4AF37]">TOUCH</span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        We're here to help and answer any question you might have. We look forward to hearing from you.
                    </p>

                    <div className="flex justify-center items-center text-sm font-medium text-gray-400">
                        <Link href="/" className="hover:text-[#D4AF37] transition-colors duration-200">Home</Link>
                        <span className="mx-3 text-gray-500">/</span>
                        <span className="text-[#D4AF37]">Contact Us</span>
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
                                        className="w-full bg-[#F8F7F5] border border-gray-300 rounded-md p-4 text-sm text-[#333333] placeholder-[#999999] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all duration-200"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="w-full bg-[#F8F7F5] border border-gray-300 rounded-md p-4 text-sm text-[#333333] placeholder-[#999999] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all duration-200"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        className="w-full bg-[#F8F7F5] border border-gray-300 rounded-md p-4 text-sm text-[#333333] placeholder-[#999999] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all duration-200"
                                    />
                                </div>

                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full bg-[#F8F7F5] border border-gray-300 rounded-md p-4 text-sm text-[#333333] placeholder-[#999999] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37] outline-none transition-all duration-200"
                                />

                                <textarea
                                    rows={6}
                                    placeholder="Your message"
                                    className="w-full bg-[#F8F7F5] border border-gray-300 rounded-md p-4 text-sm text-[#333333] placeholder-[#999999] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37] outline-none resize-none transition-all duration-200"
                                ></textarea>

                                <button
                                    type="submit"
                                    className="bg-[#8B0000] hover:cursor-pointer text-white font-bold py-4 px-8 text-sm uppercase tracking-wider rounded-md shadow-lg hover:bg-red-900 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:ring-opacity-50"
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
                                        <p className="font-medium text-[#333333]">info@aarmancapital.com</p>
                                        <p className="mt-1">helpdesk@aarmancapital.com</p>
                                        <p className="mt-1">clientcare@aarmancapital.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <span className="material-icons-outlined text-[#D4AF37] mr-4 mt-1">public</span>
                                    <p>https://aarmancapital.com/</p>
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
