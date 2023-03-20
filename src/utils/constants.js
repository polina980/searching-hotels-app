// Валидация почты и пароля в окне Modal
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex = /^[^\u0400-\u04FF]{8,}$/;

// Сегодняшняя дата
export const todaysDate = new Date().toISOString().split('T')[0];

// Склонение отелей
export function getHotelWord(count) {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return 'отелей';
  } else if (lastDigit === 1) {
    return 'отель';
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return 'отеля';
  } else {
    return 'отелей';
  }
}

// Склонение дней
export function getDayWord(count) {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return 'дней';
  } else if (lastDigit === 1) {
    return 'день';
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return 'дня';
  } else {
    return 'дней';
  }
}
