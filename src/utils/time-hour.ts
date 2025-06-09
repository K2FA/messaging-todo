export const TimeTwentyFourHour = (time: Date) => {
  const timeMessage = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return timeMessage;
};
