// Валидация почты и пароля в окне Modal
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const passwordRegex = /^[^\u0400-\u04FF]{8,}$/;

// Сегодняшняя дата
export const todaysDate = new Date().toISOString().split('T')[0];
