const copyText = async (text: string) => {
  try {
    navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text.');
  }
  return false;
};

export default copyText;
