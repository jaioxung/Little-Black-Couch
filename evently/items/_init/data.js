function(data) {
  // $.log(data)
  var p;
  return {
    items : data.rows.map(function(r) {
      p = (r.value) || {};
      p.id = r.value._id;
      p.cell = r.value.phone.cell;
      p.last = r.value.name.last;
      p.first = r.value.name.first;
      return p;
    })
  }
};