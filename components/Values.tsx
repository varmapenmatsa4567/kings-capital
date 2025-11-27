import Link from "next/link";

export default function Values() {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Link href="/our-values" className="block group">
                        <div className="text-center bg-white rounded-lg border border-gray-100 shadow-sm p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                            <img
                                alt="Modern skyscraper architecture"
                                className="w-full h-48 object-cover rounded-lg mb-6"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzEwJy1nG4F-P4kFcJVc1enW4hnN3dnde9bA8x2mN1_ub7ApWlhMeQ8yUZWfV9AhPVBnZBuWw5MoEowbPok1cGf6bgTFqu1yV1VMN4kxwT8ITZscpubQ5ddIiHh26CxL1OnObQGDE_nlYs-3GHHtM7gzfibPj8ijC91Nu1ge-fodzWiGBopDnHQqKHa5Hi9lolwC4afFhogVnO-g1QkxNLTXbHk83wny3qYurGYqZpbmUAO5_BwUldymz_Irytfh_P97DCh8lj0zY"
                            />
                            <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold mb-2 text-[#333333] group-hover:text-[#8B0000] transition-colors">
                                Our Values
                            </h3>
                            <p className="text-[#666666]">
                                Commitment to integrity, excellence, and client success guides every decision we make.
                            </p>
                        </div>
                    </Link>
                    <Link href="/our-culture" className="block group">
                        <div className="text-center bg-white rounded-lg border border-gray-100 shadow-sm p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                            <img
                                alt="People playing a game of chess"
                                className="w-full h-48 object-cover rounded-lg mb-6"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4nlgBF5bdQYOR_i4IULEScLu1FwTOyUZIjEKoGkuhdfLxSp9azfMWz3lRC7t4fpbjiYmbdh7wUEZYJuTh73-ZW7VcYVe8E-3BNGdET0NI2I7ekfb2ZjBKCLspWPk1mN5ckb39rLlQBcyhsS9zbqgeEmTVdQWusB0HcwC9gZw2DQV-7lv1yAzeX40ubJxg7d_fVcUhQuoTUX3BPkmsSCGMx5rwsWDzVCcyMyBQKKSPCMtAWeI8IMMPdChdz6DCIRyWz0ve-wIlrQ8"
                            />
                            <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold mb-2 text-[#333333] group-hover:text-[#8B0000] transition-colors">
                                Our Culture
                            </h3>
                            <p className="text-[#666666]">
                                Fostering a collaborative environment where expertise and innovation thrive.
                            </p>
                        </div>
                    </Link>
                    <Link href="/achievements" className="block group">
                        <div className="text-center bg-white rounded-lg border border-gray-100 shadow-sm p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                            <img
                                alt="A professional in a business suit"
                                className="w-full h-48 object-cover rounded-lg mb-6"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmb4xQ9oa_M1MXbcSW4lAYycl6Ohgn3IgSuv9-yqk_vpqdgG9BGNUNnrr4G3CSv_ZcBVp16pKqvEQi_SAgvSH0rUXFzp_11xU4ln9lRcparP7G6tV0NyAv_PL54scyYihHwjdMKEqdsjrn1LfN3cNjMo0gFtmPQht0u4GzIG1i3PvHmumNKM_H1V8-m0kPmucViTSorKPUNqIbPhNEiYxHyiwr7ONOHol6lpK_v5sT3XSVAxcU3bn5ffHKteDQBnDRdK2NL4-B0Dc"
                            />
                            <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold mb-2 text-[#333333] group-hover:text-[#8B0000] transition-colors">
                                Achievements
                            </h3>
                            <p className="text-[#666666]">
                                A proven track record of delivering exceptional results and building long-term value.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
