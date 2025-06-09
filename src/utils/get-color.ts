const colors = [
  { text: 'text-Purple2', bg: 'bg-Gray8' },
  { text: 'text-Orange3', bg: 'bg-Orange2' },
  { text: 'text-Blue2', bg: 'bg-Blue3' },
];

export function getColorByName(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % colors.length;
  return colors[index];
}
