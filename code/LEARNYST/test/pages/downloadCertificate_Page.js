var page=require('./page');
var DownloadCertificate = require('../Components/downloadCertificate_Com');

var downloadCertificatePage=Object.create(page,{
  DownloadCertificate: {get: function() {return DownloadCertificate;} }
});  

module.exports = downloadCertificatePage;