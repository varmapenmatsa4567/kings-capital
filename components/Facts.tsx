export default function Facts() {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#333333]">
                        Our Facts and Figures
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <span className="material-icons-outlined text-4xl text-[#8B0000] mb-2">receipt_long</span>
                        <p className="text-4xl font-bold text-[#333333]">799</p>
                        <p className="text-[#666666]">Transactions</p>
                    </div>
                    <div className="text-center">
                        <span className="material-icons-outlined text-4xl text-[#8B0000] mb-2">business_center</span>
                        <p className="text-4xl font-bold text-[#333333]">87</p>
                        <p className="text-[#666666]">Projects</p>
                    </div>
                    <div className="text-center">
                        <span className="material-icons-outlined text-4xl text-[#8B0000] mb-2">sentiment_satisfied</span>
                        <p className="text-4xl font-bold text-[#333333]">1087</p>
                        <p className="text-[#666666]">Happy Clients</p>
                    </div>
                    <div className="text-center">
                        <span className="material-icons-outlined text-4xl text-[#8B0000] mb-2">groups_2</span>
                        <p className="text-4xl font-bold text-[#333333]">107</p>
                        <p className="text-[#666666]">Partners</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
