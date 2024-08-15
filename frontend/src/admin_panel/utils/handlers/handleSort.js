const handleSorting = (cat, orderByDateValue) => {
  if (orderByDateValue === 'newest') {
    return cat.sort((a, b) => (a.date_added < b.date_added ? 1 : -1));
  } else if (orderByDateValue === 'oldest') {
    return cat.sort((a, b) => (a.date_added > b.date_added ? 1 : -1));
  } else {
    return cat;
  }
};

export default handleSorting;
