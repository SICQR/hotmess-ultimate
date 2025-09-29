import { useState } from "react";
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 border-t border-orange-glow flex justify-center items-center md:hidden">
      <button className="flex-1 py-4 text-orange-glow font-bold" onClick={()=>setOpen(!open)}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-orange-400/20">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">HM</span>
            </div>
            <span className="text-white font-bold">HOTMESS</span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-orange-400 transition-colors p-2"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <div className="p-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`
                flex items-center space-x-4 px-4 py-3 rounded-lg
                transition-all duration-200 group
                ${isActive(item.href)
                  ? 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-400/50 text-orange-400'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                }
              `}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
              {isActive(item.href) && (
                <div className="ml-auto w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              )}
            </Link>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-orange-400/20">
          <div className="space-y-3">
            <Link
              href="/affiliate/dashboard"
              onClick={onClose}
              className="flex items-center justify-center space-x-2 w-full py-3 px-4
                       bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg
                       text-white font-medium hover:from-orange-600 hover:to-orange-700
                       transition-all duration-200 transform hover:scale-105"
            >
              <span>💰</span>
              <span>Join Affiliate Program</span>
            </Link>
            
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-2">Follow us</div>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <span className="text-lg">📱</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <span className="text-lg">🐦</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <span className="text-lg">📺</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Orange Glow Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-4 w-8 h-32 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent 
                          transform rotate-12 animate-pulse" />
          <div className="absolute bottom-1/4 -right-4 w-8 h-24 bg-gradient-to-r from-transparent via-orange-600/20 to-transparent 
                          transform -rotate-12 animate-pulse delay-1000" />
        </div>
      </div>
    </>
  );
}