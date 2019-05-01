const invertCase = (str) => {
  let output = '';
  const new_str = toUpperCase(str);

  for(let i = 0; i < length(str); i += 1) {
    const shouldBeSmall = str[i] === new_str[i];
    output += shouldBeSmall ? toLowerCase(str[i]) : toUpperCase(str[i]);
  }
  
  return output;
};
