'use client';

import { useState } from 'react';
import { FiPackage, FiUser, FiCreditCard, FiSettings } from 'react-icons/fi';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<'orders' | 'addresses' | 'payment' | 'settings'>('orders');

  const tabs = [
    { id: 'orders' as const, label: 'My Orders', icon: FiPackage },
    { id: 'addresses' as const, label: 'Addresses', icon: FiUser },
    { id: 'payment' as const, label: 'Payment Methods', icon: FiCreditCard },
    { id: 'settings' as const, label: 'Account Settings', icon: FiSettings },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">My Account</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-black/95 backdrop-blur-lg border border-white/10 rounded-xl p-4 space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-red-600 text-white'
                        : 'bg-white/10 hover:bg-white/20 text-white/80'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-black/95 backdrop-blur-lg border border-white/10 rounded-xl p-6 md:p-8">
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">My Orders</h2>
                  <div className="text-center py-12">
                    <FiPackage className="w-16 h-16 text-white/20 mx-auto mb-4" />
                    <p className="text-white/60">No orders yet</p>
                    <p className="text-white/40 text-sm mt-2">
                      When you place an order, it will appear here.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'addresses' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Shipping Addresses</h2>
                  <div className="text-center py-12">
                    <p className="text-white/60">No saved addresses</p>
                    <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-lg transition-colors">
                      Add Address
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'payment' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Payment Methods</h2>
                  <div className="text-center py-12">
                    <p className="text-white/60">No saved payment methods</p>
                    <button className="mt-4 bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-lg transition-colors">
                      Add Payment Method
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Password</label>
                      <input
                        type="password"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                        placeholder="••••••••"
                      />
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

