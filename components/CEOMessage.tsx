export default function CEOMessage() {
    return (
        <section className="py-16 sm:py-24 bg-[#F8F7F5]">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
                    <h2 className="text-center text-3xl font-[family-name:var(--font-display)] font-bold mb-8 text-[#333333]">
                        CEO Message
                    </h2>
                    <div className="relative">
                        <span className="absolute -top-4 -left-4 text-8xl text-[#8B0000]/10 font-[family-name:var(--font-display)]">
                            “
                        </span>
                        <p className="text-lg text-center text-[#666666] italic leading-relaxed">
                            Our aim is to develop and refine our lending products and services, utilizing its vast industry experience and applying the most optimal financial instruments in order to deliver the most suited customized strategies and solutions to its clients.
                        </p>
                        <span className="absolute -bottom-4 -right-4 text-8xl text-[#8B0000]/10 font-[family-name:var(--font-display)]">
                            ”
                        </span>
                    </div>
                    <div className="mt-8 flex items-center justify-center">
                        <img
                            alt="Portrait of Dr. ABDUL KHALIK"
                            className="w-16 h-16 rounded-full object-cover"
                            src="https://pbs.twimg.com/profile_images/698591780065792000/jGoNrlQB_400x400.jpg"
                        />
                        <div className="ml-4">
                            <p className="font-semibold text-[#333333]">Dr. ABDUL KHALIK</p>
                            <p className="text-sm text-[#666666]">Founder &amp; CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
