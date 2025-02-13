// LanguageSwitcher.jsx
import React from 'react';
import { Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages = [
  { code: 'en', name: 'English' },
 /*  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' }, */
  { code: 'zh', name: '中文' },
  { code: 'jp', name: '日本語' },
];

const LanguageSwitcher = ({ currentPath = '' }) => {
  // Get current language from URL or default to 'en'
  const [currentLang, setCurrentLang] = React.useState('en');

  const handleLanguageChange = (langCode) => {
    setCurrentLang(langCode);
    // Update URL using Astro's routing
    const newPath = `/${langCode}${currentPath.substring(3) || ''}`;
    window.location.pathname = newPath;
  };

  // Set initial language based on URL when component mounts
  React.useEffect(() => {
    const pathLang = window.location.pathname.split('/')[1];
    if (pathLang && languages.some(lang => lang.code === pathLang)) {
      setCurrentLang(pathLang);
    }
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none">
        <Languages className="h-5 w-5" />
        <span className="text-sm font-medium">{currentLang.toUpperCase()}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`flex items-center space-x-2 cursor-pointer ${
              currentLang === lang.code ? 'bg-gray-100' : ''
            }`}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <span className="text-sm">{lang.name}</span>
            <span className="text-xs text-gray-500 ml-auto">
              {lang.code.toUpperCase()}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;