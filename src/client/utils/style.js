export const upvote = (isLoading) => {
  return {
    padding: '0',
    fontSize: 0,
    width: '60px',
    height: '60px',
    border: 'none',
    backgroundColor: 'rgba(0,0,0,0.05)',
    cursor: isLoading ? 'none' : 'pointer',
    overflow: 'hidden',
  };
};

export const tableLoader = {
  display: 'block',
  minWidth: '200px',
  width: '100%',
  height: '300px',
  lineHeight: '300px',
  textAlign: 'center',
};
