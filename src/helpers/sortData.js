function sortData(activeFilter, data, term, modificator) {
  switch (activeFilter) {
    case 'name':
      return filterInput(stringSort(data, modificator), 'name', term);

    case 'quantity':
      return filterCountInput(data, modificator, 'quantity', term);

    case 'distance':
      return filterCountInput(data, modificator, 'distance', term);

    default:
      return [...data];
  }
}

function filterInput(arr, activeFilter, term) {
  return arr.filter((item) => {
    const lowerName = String(item[activeFilter]).toLowerCase();
    return lowerName.indexOf(term) > -1;
  });
}

function stringSort(data, modificator) {
  switch (modificator) {
    case 'more':
      return [...data].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    case 'less':
      return [...data].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      });
    default:
      return [...data];
  }
}

function filterCountInput(data, modificator, activeFilter, term) {
  const parsedTerm = parseInt(term);
  switch (modificator) {
    case 'more':
      return [...data]
        .sort((a, b) => a[activeFilter] - b[activeFilter])
        .filter((item) =>
          isNaN(parsedTerm) ? item : item[activeFilter] > parsedTerm
        );
    case 'less':
      return [...data]
        .sort((a, b) => b[activeFilter] - a[activeFilter])
        .filter((item) =>
          isNaN(parsedTerm) ? item : item[activeFilter] < parsedTerm
        );
    default:
      return [...data];
  }
}

export default sortData;
