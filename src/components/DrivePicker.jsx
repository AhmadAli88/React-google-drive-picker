/*eslint-disable*/
import { useState } from 'react';
import  useDrivePicker  from 'react-google-drive-picker';

const DrivePicker = () => {
  const [openPicker, authResponse] = useDrivePicker(); // Hook initialization
  const [fileUrl, setFileUrl] = useState('');

  const handleOpenPicker = () => {
    openPicker(
      {
        clientId: '971809489889-k3cfe9koiphe7esdq6kp4h1310ohlpft.apps.googleusercontent.com',
        developerKey: 'AIzaSyBXmJPBFcAHbhyfQ2xYk3jePUcmBdHPbW8',
        viewId: 'DOCS',
        showUploadView: true,
        showUploadFolders: true,
        supportDrives: true,
        multiselect: false,
        callbackFunction: (data) => handleFileSelection(data),
      }
    );
  };

  const handleFileSelection = (data) => {
    if (data && data.docs) {
      const file = data.docs[0]; // Assuming one file selected
      setFileUrl(file.url);
    }
  };

  return (
    <div>
      <button onClick={handleOpenPicker}>Select a file from Google Drive</button>
      {fileUrl && (
        <div>
          <p>Selected File URL:</p>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            {fileUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default DrivePicker;
