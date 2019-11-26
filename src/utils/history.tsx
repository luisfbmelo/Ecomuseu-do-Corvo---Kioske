//
//  Return current page type based on path
//

export const getPageType = (path: string) => {
  const toCompare = [
    {
      key: '/archive',
      value: 'arquivo'
    },
    {
      key: '/videos',
      value: 'testemunhos'
    },
    {
      key: '/visit',
      value: 'website'
    }
  ];

  const wasFound = toCompare.find(el => {
    return path.indexOf(el.key)>=0;
  })

  return wasFound ? wasFound.value : null;
}