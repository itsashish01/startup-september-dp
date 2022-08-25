const buttonUpload = document.getElementById('button-upload');

const uploadWidget = cloudinary.createUploadWidget(
  {
    cloudName: 'ashishimages',
    uploadPreset: 'ss2022dp',
    minImageWidth: 800,
    minImageHeight: 800,
    cropping: true,
    croppingAspectRatio: 1,
    croppingDefaultSelectionRatio: 1,
    croppingShowDimensions: true,
    croppingShowBackButton: true,
    croppingValidateDimensions: true,
  },
  (error, result) => {
    if (!error && result && result.event === 'success') {
      console.log('Done! Here is the image info: ', result.info);
    }
  }
);

buttonUpload.addEventListener(
  'click',
  function () {
    uploadWidget.open();
  },
  false
);
