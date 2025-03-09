import React, { useState } from 'react';

const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState('');

    const plans = [
        {
            name: 'Basic',
            price: '₹499/month',
            features: ['5 Content Generations', 'Basic SEO Optimization', 'Email Support'],
            recommended: false,
        },
        {
            name: 'Pro',
            price: '₹999/month',
            features: ['Unlimited Generations', 'Advanced SEO Tools', 'Priority Support'],
            recommended: true,
        },
        {
            name: 'Premium',
            price: '₹1,499/month',
            features: ['Unlimited Generations', 'SEO Tools + Insights', 'Dedicated Support'],
            recommended: false,
        }
    ];

    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Affordable Pricing Plans</h2>
                <p className="text-gray-600 mb-12">Choose a plan that suits your content creation needs.</p>
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-xl shadow-lg border cursor-pointer transition-all ${
                                selectedPlan === plan.name
                                    ? 'border-blue-500' 
                                    : 'border-gray-200'
                            }`}
                            onClick={() => setSelectedPlan(plan.name)}
                        >
                            {plan.recommended && (
                                <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded-tl-xl rounded-br-xl w-max mx-auto mb-3">
                                    Recommended
                                </div>
                            )}
                            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                            <p className="text-3xl font-bold text-blue-500 mb-6">{plan.price}</p>
                            <ul className="space-y-2 text-gray-700 mb-6">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>✅ {feature}</li>
                                ))}
                            </ul>
                            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;