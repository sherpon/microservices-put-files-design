
const saveStyle = (
    firestore, 
    websiteId, 
    filename, 
    style
  ) => {
    const websiteRef = firestore.collection('websites').doc(websiteId);
    return websiteRef.collection('files').doc(filename).update({ style });
  };

module.exports = saveStyle;