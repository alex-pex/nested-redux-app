const objectMap = (source, mapper) => {
  const result = {};
  Object.entries(source).forEach(([key, value]) => {
    result[key] = mapper(value, key);
  });
  return result;
};

export default objectMap;
