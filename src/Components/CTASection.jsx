import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-16 px-8 text-center rounded-2xl shadow-xl max-w-4xl mx-auto my-12">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-snug">
        Get Started with <span className="text-white">ContentCraft AI</span> Today
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
        Boost your content creation game with AI-powered, SEO-optimized content in seconds. 
        Write smarter, rank higher, and grow faster.
      </p>

      <div className="flex justify-center">
        <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full flex items-center gap-2 
          hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md">
          Start Creating for Free
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <p className="text-sm mt-4 opacity-90">
        No credit card required — Start in seconds
      </p>
    </div>
  );
};

export default CTASection;
