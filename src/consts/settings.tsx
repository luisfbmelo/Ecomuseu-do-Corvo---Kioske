export const getTranslatedOptions = (t: any, func: any) => {
  switch(func){
    case 'languages':
      return languages(t);
    case 'reset':
        return reset(t);
    default:
      return null;
  }
};

const languages = (t: any) => [
  {
    value: 'en',
    label: 'English'
  },
  {
    value: 'pt',
    label: 'Português'
  }
];

const reset = (t: any) => [
  { 
    value: (30).toString(),
    label: `30 ${t('segundos')}`
  },
  { 
    value: (1*60).toString(),
    label: `1 ${t('minuto')}`
  },
  { 
    value: (5*60).toString(),
    label: `5 ${t('minutos')}`
  },
  { 
    value: (10*60).toString(),
    label: `10 ${t('minutos')}`
  },
  { 
    value: (30*60).toString(),
    label: `30 ${t('minutos')}`
  }
]