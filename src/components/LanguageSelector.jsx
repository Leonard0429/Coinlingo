import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, switchLanguage, t } = useLanguage();

  return (
    <div style={{ position: 'relative' }}>
      <select
        value={language}
        onChange={(e) => switchLanguage(e.target.value)}
        className="glass-input"
        style={{
          padding: 'var(--spacing-sm) var(--spacing-md)',
          fontSize: '14px',
          cursor: 'pointer',
          outline: 'none',
          transition: 'all var(--transition-normal)'
        }}
      >
        <option value="en">🇺🇸 English</option>
        <option value="zh">🇨🇳 中文</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
