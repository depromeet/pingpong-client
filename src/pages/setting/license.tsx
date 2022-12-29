import useHeader from '@/hooks/useHeader';

const license = [
  {
    libraryName: '@react-native-firebase/app',
    version: '16.5.0',
    _license: 'Apache-2.0',
    _description:
      'A well tested, feature rich Firebase implementation for React Native, supporting iOS & Android. Individual module support for Admob, Analytics, Auth, Crash Reporting, Cloud Firestore, Database, Dynamic Links, Functions, Messaging (FCM), Remote Config, Storage and more.',
    author: { name: 'Invertase', email: 'oss@invertase.io', url: 'http://invertase.io' },
    repository: { type: 'git', url: 'https://github.com/invertase/react-native-firebase/tree/main/packages/app' },
    _licenseContent:
      'Apache-2.0 License\n------------------\n\nCopyright (c) 2016-present Invertase Limited <oss@invertase.io>\n\nLicensed under the Apache License, Version 2.0 (the "License");\nyou may not use this library except in compliance with the License.\n\nYou may obtain a copy of the Apache-2.0 License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n\n\nCreative Commons Attribution 3.0 License\n----------------------------------------\n\nCopyright (c) 2016-present Invertase Limited <oss@invertase.io>\n\nDocumentation and other instructional materials provided for this project\n(including on a separate documentation repository or it\'s documentation website) are\nlicensed under the Creative Commons Attribution 3.0 License. Code samples/blocks\ncontained therein are licensed under the Apache License, Version 2.0 (the "License"), as above.\n\nYou may obtain a copy of the Creative Commons Attribution 3.0 License at\n\n    https://creativecommons.org/licenses/by/3.0/\n',
  },
  {
    libraryName: '@react-native-firebase/messaging',
    version: '16.5.0',
    _license: 'Apache-2.0',
    _description:
      'React Native Firebase - React Native Firebase provides native integration of Firebase Cloud Messaging (FCM) for both Android & iOS. FCM is a cost free service, allowing for server-device and device-device communication. The React Native Firebase Messaging module provides a simple JavaScript API to interact with FCM.',
    author: { name: 'Invertase', email: 'oss@invertase.io', url: 'http://invertase.io' },
    repository: {
      type: 'git',
      url: 'https://github.com/invertase/react-native-firebase/tree/main/packages/messaging',
    },
    _licenseContent:
      'Apache-2.0 License\n------------------\n\nCopyright (c) 2016-present Invertase Limited <oss@invertase.io> & Contributors\n\nLicensed under the Apache License, Version 2.0 (the "License");\nyou may not use this library except in compliance with the License.\n\nYou may obtain a copy of the Apache-2.0 License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n\n\nCreative Commons Attribution 3.0 License\n----------------------------------------\n\nCopyright (c) 2016-present Invertase Limited <oss@invertase.io> & Contributors\n\nDocumentation and other instructional materials provided for this project\n(including on a separate documentation repository or it\'s documentation website) are\nlicensed under the Creative Commons Attribution 3.0 License. Code samples/blocks\ncontained therein are licensed under the Apache License, Version 2.0 (the "License"), as above.\n\nYou may obtain a copy of the Creative Commons Attribution 3.0 License at\n\n    https://creativecommons.org/licenses/by/3.0/\n',
  },
  {
    libraryName: '@react-navigation/native',
    version: '6.0.14',
    _license: 'MIT',
    _description: 'React Native integration for React Navigation',
    homepage: 'https://reactnavigation.org',
    repository: {
      type: 'git',
      url: 'git+https://github.com/react-navigation/react-navigation.git',
      directory: 'packages/native',
    },
    _licenseContent:
      'MIT License\n\nCopyright (c) 2017 React Navigation Contributors\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n',
  },
  {
    libraryName: '@react-navigation/native-stack',
    version: '6.9.2',
    _license: 'MIT',
    _description: 'Native stack navigator using react-native-screens',
    homepage: 'https://github.com/software-mansion/react-native-screens#readme',
    repository: {
      type: 'git',
      url: 'git+https://github.com/react-navigation/react-navigation.git',
      directory: 'packages/native-stack',
    },
    _licenseContent:
      'MIT License\n\nCopyright (c) 2017 React Navigation Contributors\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n',
  },
  {
    libraryName: 'firebase',
    version: '9.15.0',
    _license: 'Apache-2.0',
    _description: 'Firebase JavaScript library for web and Node.js',
    homepage: 'https://firebase.google.com/',
    author: { name: 'Firebase', email: 'firebase-support@google.com', url: 'https://firebase.google.com/' },
    repository: { type: 'git', url: 'git+https://github.com/firebase/firebase-js-sdk.git' },
  },
  {
    libraryName: 'react',
    version: '18.1.0',
    _license: 'MIT',
    _description: 'React is a JavaScript library for building user interfaces.',
    homepage: 'https://reactjs.org/',
    repository: { type: 'git', url: 'git+https://github.com/facebook/react.git', directory: 'packages/react' },
    _licenseContent:
      'MIT License\n\nCopyright (c) Facebook, Inc. and its affiliates.\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n',
  },
  {
    libraryName: 'react-native',
    version: '0.70.3',
    _license: 'MIT',
    _description: 'A framework for building native apps using React',
    homepage: 'https://github.com/facebook/react-native#readme',
    repository: { type: 'git', url: 'git+https://github.com/facebook/react-native.git' },
    _licenseContent:
      'MIT License\n\nCopyright (c) Meta Platforms, Inc. and affiliates.\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n',
  },
  {
    libraryName: 'react-native-oss-license',
    version: '0.7.0',
    _license: 'MIT',
    _description: 'License list generator for react-native app',
    homepage: 'https://github.com/k-tomoyasu/react-native-oss-license#readme',
    author: { name: 'k-tomoyasu' },
    repository: { type: 'git', url: 'git+https://github.com/k-tomoyasu/react-native-oss-license.git' },
    _licenseContent:
      'MIT License\n\nCopyright (c) 2019 k-tomoyasu\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n',
  },
  {
    libraryName: 'react-native-push-notification',
    version: '8.1.1',
    _license: 'MIT',
    _description: 'React Native Local and Remote Notifications',
    homepage: 'https://github.com/zo0r/react-native-push-notification#readme',
    author: { name: 'zo0r', email: 'http://zo0r.me' },
    repository: { type: 'git', url: 'git+ssh://git@github.com/zo0r/react-native-push-notification.git' },
    _licenseContent:
      'The MIT License (MIT)\n\nCopyright (c) 2015 Dieam\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n\n',
  },
  {
    libraryName: 'react-native-safe-area-context',
    version: '4.4.1',
    _license: 'MIT',
    _description: 'A flexible way to handle safe area, also works on Android and web.',
    homepage: 'https://github.com/th3rdwave/react-native-safe-area-context#readme',
    author: { name: 'Janic Duplessis', email: 'janicduplessis@gmail.com' },
    repository: { type: 'git', url: 'git+https://github.com/th3rdwave/react-native-safe-area-context.git' },
    _licenseContent:
      'MIT License\n\nCopyright (c) 2019 Th3rd Wave\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n',
  },
  {
    libraryName: 'react-native-screens',
    version: '3.18.2',
    _license: 'MIT',
    _description: 'Native navigation primitives for your React Native app.',
    homepage: 'https://github.com/software-mansion/react-native-screens#readme',
    author: { name: 'Krzysztof Magiera', email: 'krzys.magiera@gmail.com' },
    repository: { type: 'git', url: 'git+https://github.com/software-mansion/react-native-screens.git' },
    _licenseContent:
      'The MIT License (MIT)\n\nCopyright (c) 2018 Software Mansion <swmansion.com>\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n',
  },
  {
    libraryName: 'react-native-splash-screen',
    version: '3.3.0',
    _license: 'MIT',
    _description: 'A splash screen for react-native, hide when application loaded ,it works on iOS and Android.',
    homepage: 'https://github.com/crazycodeboy/react-native-splash-screen#readme',
    author: { name: 'crazycodeboy' },
    repository: { type: 'git', url: 'git+https://github.com/crazycodeboy/react-native-splash-screen.git' },
    _licenseContent:
      'MIT License\n\nCopyright (c) 2016 Jia PengHui\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n',
  },
  {
    libraryName: 'react-native-webview',
    version: '11.23.1',
    _license: 'MIT',
    _description: 'React Native WebView component for iOS, Android, macOS, and Windows',
    homepage: 'https://github.com/react-native-webview/react-native-webview#readme',
    author: { name: 'Jamon Holmgren', email: 'jamon@infinite.red' },
    repository: { type: 'git', url: 'git+https://github.com/react-native-webview/react-native-webview.git' },
    _licenseContent:
      'MIT License\n\nCopyright (c) 2015-present, Facebook, Inc.\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n',
  },
];

export default function License() {
  useHeader({ title: '오픈소스 라이센스' });

  return (
    <div className="p-5">
      {license.map(
        ({ _description, _license, libraryName, repository, version, _licenseContent, author, homepage }, i) => (
          <ul className="py-[20px] border-b border-b-gray-400" key={i}>
            <li>libraryName: {libraryName}</li>
            <li>version: {version}</li>
            <li>_license: {_license}</li>
            <li>_description: {_description}</li>
            <li>homepage: {homepage}</li>
            <li>author: {`${author?.name} / ${author?.email} / ${author?.url}`}</li>
            <li>repository: {`${repository.type} / ${repository.directory} / ${repository.url}`}</li>
            <li className="list-disc">_licenseContent: {_licenseContent}</li>
          </ul>
        ),
      )}
    </div>
  );
}
