import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import i18n from '../../services/i18n';
import { theme } from '../../theme';

const langs = {
  en: { nativeName: 'English' },
  vi: { nativeName: 'Vietnam' },
};

const SwitchLang = () => {
  const handleSwitch = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <Box>
      {Object.keys(langs).map((lang) => (
        <Button
          sx={{
            '&.Mui-disabled': {
              color: theme.palette.grey[800],
            },
          }}
          variant="text"
          disabled={i18n.resolvedLanguage === lang}
          key={lang}
          onClick={() => handleSwitch(lang)}>
          {langs[lang].nativeName}
        </Button>
      ))}
    </Box>
  );
};

export default SwitchLang;
