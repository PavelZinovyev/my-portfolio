export const updateVisits = async () => {
  try {
    await fetch('/api/visits');
  } catch (e) {
    console.error('error while updating visits', e);
  }
};
