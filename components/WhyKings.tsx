export default function WhyKings() {
    return (
        <section className="py-16 sm:py-24 bg-gray-900 text-gray-200">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-4 text-amber-400 tracking-wide">
                        Why Aarman Capital
                    </h2>
                    <p className="text-base max-w-3xl mx-auto">
                        Discover the core strengths that set Aarman Capital apart and drive our success.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 text-center">
                    <div className="p-6 rounded-xl shadow-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
                        <span className="material-icons-outlined text-9xl mb-4 text-amber-400">groups</span>
                        <h4 className="font-bold text-md text-gray-100">Experienced Team</h4>
                    </div>
                    <div className="p-6 rounded-xl shadow-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
                        <span className="material-icons-outlined text-9xl mb-4 text-amber-400">hub</span>
                        <h4 className="font-bold text-md text-gray-100">Extensive Network</h4>
                    </div>
                    <div className="p-6 rounded-xl shadow-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
                        <span className="material-icons-outlined text-9xl mb-4 text-amber-400">handshake</span>
                        <h4 className="font-bold text-md text-gray-100">Active Sponsors</h4>
                    </div>
                    <div className="p-6 rounded-xl shadow-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
                        <span className="material-icons-outlined text-9xl mb-4 text-amber-400">insights</span>
                        <h4 className="font-bold text-md text-gray-100">Strategic Partnership</h4>
                    </div>
                    <div className="p-6 rounded-xl shadow-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
                        <span className="material-icons-outlined text-9xl mb-4 text-amber-400">speed</span>
                        <h4 className="font-bold text-md text-gray-100">Quick Execution</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}
