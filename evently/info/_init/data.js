function(data) {
  // $.log(data)
  var p;
  return {
    info : data.rows.map(function(r) {
      p = (r.value) || {};
      p.cell = r.value.phone.cell;
      p.street = r.value.address.street;
      p.city = r.value.address.city;
      p.state = r.value.address.state;
      p.zip = r.value.address.zip;
      return p;
    })
  }
};