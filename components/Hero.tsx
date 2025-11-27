export default function Hero() {
    return (
        <section className="relative h-[60vh] min-h-[500px] text-white flex items-center">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <img
                alt="Dubai skyline with Burj Khalifa"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYa1hNqavnBnYKh3Tvy-f5UnCwTVfsWZ5r8EYAI5l9ILqeLvGF56xBCRH8oNoavryS3Pc0X8UljK2GojiqdrDW91sFttanD295NW5hD5Sgt6j3KOR5tphi-kHExDefFVWwWdTWk1RB7zml_YdTW01FU4Bchv58ujfIBS9Ukxav4n1hq97eUc40HVGYXHdax53NDH5hGQEa3WYy-N7L9k-hGJ6cKGrn7HnsMrX8osM7BYaQfiWNs7uhjnXa5z4yAM43zO_NLQLTgxg"
            />
            <div className="container mx-auto px-6 relative z-20 text-center">
                <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold leading-tight">
                    Licensed and Regulated from UAE
                </h1>
                <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold leading-tight mt-2">
                    Financial Authority and Federal Government Law
                </h2>
                <button className="mt-8 bg-[#8B0000] hover:bg-red-800 text-white font-semibold py-3 px-8 rounded transition-colors">
                    Get in Touch
                </button>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                    <span className="block w-6 h-1 bg-white rounded-full"></span>
                    <span className="block w-2 h-1 bg-white/50 rounded-full"></span>
                    <span className="block w-2 h-1 bg-white/50 rounded-full"></span>
                    <span className="block w-2 h-1 bg-white/50 rounded-full"></span>
                </div>
            </div>
        </section>
    );
}
