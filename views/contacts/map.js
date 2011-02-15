function(doc) {
  if (doc.name) {
    emit([doc.name.last, doc.name.first], doc);
  }
};