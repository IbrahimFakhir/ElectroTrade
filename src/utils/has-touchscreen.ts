const hasTouchScreen: boolean = 'maxTouchPoints' in navigator && navigator.maxTouchPoints > 0;

export default hasTouchScreen;
