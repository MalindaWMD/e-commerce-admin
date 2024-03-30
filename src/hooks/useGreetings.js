const greetings = [
    'Good Morning',
    'Good Afternoon',
    'Good Evening'
  ];

export const useGreetings = () => {
  return greetings[parseInt(new Date().getHours() / 24 * 3)];
}