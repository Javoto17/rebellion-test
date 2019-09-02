const getColorRepo = (language) => {
  switch (language.toLowerCase()) {
    case 'html':
    case 'javascript':
      return 'red';
    default:
      return 'yellow';
  }
}


export {
  getColorRepo,
}