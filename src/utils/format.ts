import { theme } from '../styles/theme';

export const getWeatherEmoji = (desc: string): string => {
  if (!desc) return '🌤️';
  if (desc.includes('맑')) return '☀️';
  if (desc.includes('구름')) return '⛅';
  if (desc.includes('비')) return '🌧️';
  if (desc.includes('눈')) return '❄️';
  return '🌤️';
};

export const getTpoColor = (tpo: string): string => {
  const map: Record<string, string> = {
    '데이트': '#FF6B9D', '직장': '#4A90D9', '캐주얼': '#7EC8A4',
    '운동': '#F5A623', '파티': '#BD10E0', '여행': '#50E3C2',
    '일상': '#9B9B9B', '격식': '#4A4A4A'
  };
  return map[tpo] || theme.colors.primary;
};

export const getTpoEmoji = (tpo: string): string => {
  const map: Record<string, string> = {
    '데이트':'💑', '직장':'💼', '캐주얼':'👟', '운동':'🏃',
    '파티':'🎉', '여행':'✈️', '일상':'☀️', '격식':'👔'
  };
  return map[tpo] || '📅';
};