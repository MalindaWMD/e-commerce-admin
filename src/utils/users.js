export const getGroupFromValue = (value, groups) => {
  return groups.filter((group) => group.value === value)[0] || null;
};
