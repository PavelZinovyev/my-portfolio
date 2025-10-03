const scriptId = import.meta.env.VITE_GOOGLE_SCRIPT_ID;
const url = `https://script.google.com/macros/s/${scriptId}/exec`;

export const updateVisits = () => {
  fetch(url).catch((e) => console.error('error while setting visits', e));
};
