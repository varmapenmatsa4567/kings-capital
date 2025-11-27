export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div>
                        <h4 className="font-bold text-white mb-4">ABOUT US</h4>
                        <p className="text-sm text-gray-400">
                            Our mission is to associate individuals and corporations to determine and achieve their financial needs and fund-raising goals through comprehensive financial management and banking consultation.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">INFORMATION</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a className="hover:text-white" href="#">Home</a></li>
                            <li><a className="hover:text-white" href="#">About Us</a></li>
                            <li><a className="hover:text-white" href="#">Services</a></li>
                            <li><a className="hover:text-white" href="#">Blog</a></li>
                            <li><a className="hover:text-white" href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">SOLUTIONS</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a className="hover:text-white" href="#">Corporate Finance Services</a></li>
                            <li><a className="hover:text-white" href="#">Capital Restructuring</a></li>
                            <li><a className="hover:text-white" href="#">Project Financing</a></li>
                            <li><a className="hover:text-white" href="#">Venture Capital &amp; Joint Venture</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">OUR OFFICE</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start">
                                <span className="material-icons-outlined text-lg mr-3 mt-0.5">location_on</span>
                                <span>Burj 47, Downtown Near to Burj Khalifa, P.O. Box 7777, Dubai</span>
                            </li>
                            <li className="flex items-center">
                                <span className="material-icons-outlined text-lg mr-3">phone</span>
                                <span>+971 4 321 7754</span>
                            </li>
                            <li className="flex items-center">
                                <span className="material-icons-outlined text-lg mr-3">email</span>
                                <span>info@kingsfinancialcapital.com</span>
                            </li>
                            <li className="flex items-center">
                                <span className="material-icons-outlined text-lg mr-3">public</span>
                                <span>https://kingsfinancialcapital.com/</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <p className="text-gray-500">© Copyright 2000-2024. All right reserved.</p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <a className="text-gray-400 hover:text-white" href="#">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3v9h4v-9z"></path>
                            </svg>
                        </a>
                        <a className="text-gray-400 hover:text-white" href="#">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.54-.18-6.69-1.86-8.79-4.45-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.81 1.91 3.58-.7-.02-1.37-.21-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                            </svg>
                        </a>
                        <a className="text-gray-400 hover:text-white" href="#">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
