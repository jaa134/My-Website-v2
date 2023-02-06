const sanitizePathRegex = /\/\/+/g;
export const sanitizePath = (path: string) => {
  let result = path.replace(sanitizePathRegex, '/');
  if (result.startsWith('/')) {
    result = result.substring(1, result.length);
  }
  if (result.endsWith('/')) {
    result = result.substring(0, result.length - 1);
  }
  return result;
};

export const isPathMatch = (pathToMatch: string, currentPath: string) =>
  sanitizePath(pathToMatch) === sanitizePath(currentPath);

export const isParentPath = (pathToMatch: string, currentPath: string) =>
  sanitizePath(currentPath).startsWith(sanitizePath(pathToMatch));
