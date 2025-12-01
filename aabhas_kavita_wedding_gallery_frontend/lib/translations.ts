export type Language = 'en' | 'hi'

export const translations = {
  en: {
    couple: {
      firstName: 'Aabhas',
      secondName: 'Kavita',
      fullName: 'Aabhas & Kavita',
    },
    home: {
      title: 'Our Wedding Gallery',
      subtitle: 'Relive the beautiful moments from our special day',
      viewGallery: 'View Gallery',
      noFunctions: 'No functions available yet.',
    },
    login: {
      title: 'Wedding Gallery',
      subtitle: 'Enter your phone number to continue',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '9413078947',
      enterGallery: 'Enter Gallery',
      loggingIn: 'Logging in...',
      loginFailed: 'Login failed',
      notAuthorized: 'You are not authorized',
    },
    common: {
      language: 'Language',
      english: 'English',
      hindi: 'हिंदी',
      downloadMultiple: 'Download Multiple',
      cancelSelection: 'Cancel Selection',
      howToDownload: 'How to Download',
      uploadYours: 'Upload Yours',
      noPhotosUploaded: 'No photos uploaded yet.',
      noVideosUploaded: 'No videos uploaded yet.',
    },
    upload: {
      title: 'Upload Your Memories',
      selectFunction: 'Select Function',
      selectFunctionOptional: '(Optional - will use "Other" if none selected)',
      uploadPhotosVideos: 'Upload Photos or Videos (Multiple)',
      uploadFiles: 'Upload files',
      orDragAndDrop: 'or drag and drop',
      fileTypes: 'PNG, JPG, GIF, HEIC, MP4, MOV up to 100MB each',
      selectedFiles: 'Selected Files',
      cancel: 'Cancel',
      uploadFilesButton: 'Upload Files',
      uploading: 'Uploading...',
      compressing: 'Compressing for best quality...',
      ready: 'Ready',
      error: 'Error',
      remove: 'Remove',
      size: 'Size',
      uploadedSuccessfully: 'Uploaded successfully',
      uploadingFiles: 'Uploading {current} of {total} files...',
      uploadFile: 'Upload File',
      uploadFiles: 'Upload Files',
      pleaseSelectFile: 'Please select at least one file',
      pleaseWaitProcessing: 'Please wait for files to be processed',
      uploadFailed: 'Upload failed. Please try again.',
    },
  },
  hi: {
    couple: {
      firstName: 'आभास',
      secondName: 'कविता',
      fullName: 'आभास और कविता',
    },
    home: {
      title: 'हमारी शादी की गैलरी',
      subtitle: 'हमारे खास दिन के खूबसूरत पलों को फिर से जीएं',
      viewGallery: 'गैलरी देखें',
      noFunctions: 'अभी तक कोई कार्यक्रम उपलब्ध नहीं है।',
    },
    login: {
      title: 'शादी की गैलरी',
      subtitle: 'जारी रखने के लिए अपना फोन नंबर दर्ज करें',
      phoneLabel: 'फोन नंबर',
      phonePlaceholder: '9413078947',
      enterGallery: 'गैलरी में प्रवेश करें',
      loggingIn: 'लॉग इन हो रहा है...',
      loginFailed: 'लॉगिन विफल',
      notAuthorized: 'आप अधिकृत नहीं हैं',
    },
    common: {
      language: 'भाषा',
      english: 'English',
      hindi: 'हिंदी',
      downloadMultiple: 'कई डाउनलोड करें',
      cancelSelection: 'चयन रद्द करें',
      howToDownload: 'कैसे डाउनलोड करें',
      uploadYours: 'अपना अपलोड करें',
      noPhotosUploaded: 'अभी तक कोई तस्वीरें अपलोड नहीं की गई हैं।',
      noVideosUploaded: 'अभी तक कोई वीडियो अपलोड नहीं किए गए हैं।',
    },
    upload: {
      title: 'अपनी यादें अपलोड करें',
      selectFunction: 'कार्यक्रम चुनें',
      selectFunctionOptional: '(वैकल्पिक - यदि कोई चयन नहीं किया गया तो "अन्य" का उपयोग किया जाएगा)',
      uploadPhotosVideos: 'तस्वीरें या वीडियो अपलोड करें (कई)',
      uploadFiles: 'फ़ाइलें अपलोड करें',
      orDragAndDrop: 'या खींचकर छोड़ें',
      fileTypes: 'PNG, JPG, GIF, HEIC, MP4, MOV प्रत्येक 100MB तक',
      selectedFiles: 'चयनित फ़ाइलें',
      cancel: 'रद्द करें',
      uploadFilesButton: 'फ़ाइलें अपलोड करें',
      uploading: 'अपलोड हो रहा है...',
      compressing: 'सर्वोत्तम गुणवत्ता के लिए संपीड़ित किया जा रहा है...',
      ready: 'तैयार',
      error: 'त्रुटि',
      remove: 'हटाएं',
      size: 'आकार',
      uploadedSuccessfully: 'सफलतापूर्वक अपलोड किया गया',
      uploadingFiles: '{current} में से {total} फ़ाइलें अपलोड हो रही हैं...',
      uploadFile: 'फ़ाइल अपलोड करें',
      uploadFiles: 'फ़ाइलें अपलोड करें',
      pleaseSelectFile: 'कृपया कम से कम एक फ़ाइल चुनें',
      pleaseWaitProcessing: 'कृपया फ़ाइलों के प्रसंस्करण की प्रतीक्षा करें',
      uploadFailed: 'अपलोड विफल। कृपया पुनः प्रयास करें।',
    },
  },
}

// Function name translations
export const functionNameTranslations: Record<string, { en: string; hi: string }> = {
  'Hath Daan': { en: 'Hath Daan', hi: 'हाथ दान' },
  'Vinayak Sthapna': { en: 'Vinayak Sthapna', hi: 'विनायक स्थापना' },
  'Haldi': { en: 'Haldi', hi: 'हल्दी' },
  'Engagenemt': { en: 'Engagenemt', hi: 'सगाई' },
  'Sangeet': { en: 'Sangeet', hi: 'संगीत' },
  'Mayra': { en: 'Mayra', hi: 'मायरा' },
  'Phere': { en: 'Phere', hi: 'फेरे' },
  'Reception': { en: 'Reception', hi: 'रिसेप्शन' },
  'Others': { en: 'Others', hi: 'अन्य' },
  'Other': { en: 'Other', hi: 'अन्य' },
  'DJ Night': { en: 'DJ Night', hi: 'डीजे नाइट' },
}

export function getTranslations(lang: Language) {
  return translations[lang]
}

export function translateFunctionName(functionName: string, lang: Language): string {
  const translation = functionNameTranslations[functionName]
  if (!translation) return functionName
  return lang === 'hi' ? translation.hi : translation.en
}

