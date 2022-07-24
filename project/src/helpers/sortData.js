function sortData(a, b, activeFilter) {
  switch (activeFilter) {
    case 'name':
      const nameA = a[activeFilter].toLowerCase(),
        nameB = b[activeFilter].toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    case 'quantity':
      return a[activeFilter] - b[activeFilter];
    case 'distance':
      return b[activeFilter] - a[activeFilter];
    default:
      throw new Error('Invalid active filter');
  }
}

export default sortData;
