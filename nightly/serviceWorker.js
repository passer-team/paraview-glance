importScripts('workbox-sw.prod.v2.1.2.js');

const workboxSW = new self.WorkboxSW({ clientsClaim: true });
workboxSW.precache([
  {
    "url": "glance-external-ITKReader.js",
    "revision": "347e12ac4a5ffa2af78e4e20f925bc00"
  },
  {
    "url": "glance-external-Workbox.js",
    "revision": "5a70dcf2c7760770f4c21505ed97e1d8"
  },
  {
    "url": "glance.css",
    "revision": "5fd6bd6d92e9911d8d25511055f119b3"
  },
  {
    "url": "glance.js",
    "revision": "da77346fde15baa5f8c6cfa4a996be9d"
  },
  {
    "url": "global.css",
    "revision": "305f035e3feab812571a66912b405c78"
  },
  {
    "url": "index.html",
    "revision": "36e5343e1111aa303be739b2938e422e"
  },
  {
    "url": "itk/bufferToTypedArray.js",
    "revision": "fc3c0b40eb13b33f260a70baa3797763"
  },
  {
    "url": "itk/createWebworkerPromise.js",
    "revision": "a67988d2ac2f03d131f3b654f3caa233"
  },
  {
    "url": "itk/extensionToImageIO.js",
    "revision": "3103aff5e1935d3349fd6987e65bb6d9"
  },
  {
    "url": "itk/extensionToMeshIO.js",
    "revision": "6047791b09b38e5e2dfc3e976a8ffda1"
  },
  {
    "url": "itk/extensionToPolyDataIO.js",
    "revision": "805072ae47ac2e8307cf2b0f3a4610c1"
  },
  {
    "url": "itk/FloatTypes.js",
    "revision": "786c92c0279ce8eacd7cd96eba8a48f3"
  },
  {
    "url": "itk/getFileExtension.js",
    "revision": "04917c3ff34191f39354bb00332572ef"
  },
  {
    "url": "itk/getMatrixElement.js",
    "revision": "b5b833b11487416068b17f1395023a40"
  },
  {
    "url": "itk/Image.js",
    "revision": "088184a92ce08bbc0cb664cade150176"
  },
  {
    "url": "itk/imageIOComponentToJSComponent.js",
    "revision": "895102fb7c928d61e36e10d8d9391b11"
  },
  {
    "url": "itk/ImageIOIndex.js",
    "revision": "9b88a4190ddca44da03daa1474d1d3f6"
  },
  {
    "url": "itk/imageIOPixelTypeToJSPixelType.js",
    "revision": "5603b2b293f344b99ee6f1823ef13824"
  },
  {
    "url": "itk/ImageIOs/itkBioRadImageIOJSBinding.js",
    "revision": "135bd5b75135612c45201f1c171ff90a"
  },
  {
    "url": "itk/ImageIOs/itkBioRadImageIOJSBindingWasm.js",
    "revision": "2f7c09d5c84d929d125daf193722ffd5"
  },
  {
    "url": "itk/ImageIOs/itkBMPImageIOJSBinding.js",
    "revision": "4170bfedcf04a12dce46e6235de03a85"
  },
  {
    "url": "itk/ImageIOs/itkBMPImageIOJSBindingWasm.js",
    "revision": "bca710d164068b50d04ff32c3bf02442"
  },
  {
    "url": "itk/ImageIOs/itkDCMTKImageIOJSBindingWasm.js",
    "revision": "45f1633c05d6bf63350c5a6971b5673e"
  },
  {
    "url": "itk/ImageIOs/itkDICOMImageSeriesReaderJSBindingWasm.js",
    "revision": "4ab502a9016d32c6f865d8661ccd34f0"
  },
  {
    "url": "itk/ImageIOs/itkGDCMImageIOJSBindingWasm.js",
    "revision": "e6567a51aa11dba98c46f67b471d71d7"
  },
  {
    "url": "itk/ImageIOs/itkGE4ImageIOJSBinding.js",
    "revision": "55dd22f021e387141706e9dffb096595"
  },
  {
    "url": "itk/ImageIOs/itkGE4ImageIOJSBindingWasm.js",
    "revision": "50c5be7876e5c032f41ef65829b385c5"
  },
  {
    "url": "itk/ImageIOs/itkGE5ImageIOJSBinding.js",
    "revision": "596559fcce3c49f78aa6cca6f3a33e9a"
  },
  {
    "url": "itk/ImageIOs/itkGE5ImageIOJSBindingWasm.js",
    "revision": "68695440785b8d03d552edee596b1337"
  },
  {
    "url": "itk/ImageIOs/itkGEAdwImageIOJSBinding.js",
    "revision": "c32e3fcdaf586b0a06eff930719866d1"
  },
  {
    "url": "itk/ImageIOs/itkGEAdwImageIOJSBindingWasm.js",
    "revision": "a00f980b51480ac07ed320923b82f4e7"
  },
  {
    "url": "itk/ImageIOs/itkGiplImageIOJSBinding.js",
    "revision": "654a1273869a807548640cf3b0225b35"
  },
  {
    "url": "itk/ImageIOs/itkGiplImageIOJSBindingWasm.js",
    "revision": "692a2e403a91743fab7cba3cfb2dcb94"
  },
  {
    "url": "itk/ImageIOs/itkHDF5ImageIOJSBindingWasm.js",
    "revision": "f1500edacdbae16aead51ae89c4c5254"
  },
  {
    "url": "itk/ImageIOs/itkJPEGImageIOJSBinding.js",
    "revision": "12bcecaeadf9dcccecd3deebf4057843"
  },
  {
    "url": "itk/ImageIOs/itkJPEGImageIOJSBindingWasm.js",
    "revision": "6ce432265ce7815025dcc1a15e181058"
  },
  {
    "url": "itk/ImageIOs/itkJSONImageIOJSBinding.js",
    "revision": "080cf00754cdeacaa87e02abec37339f"
  },
  {
    "url": "itk/ImageIOs/itkJSONImageIOJSBindingWasm.js",
    "revision": "3909f645c3640ee3bf3f144ed1402661"
  },
  {
    "url": "itk/ImageIOs/itkLSMImageIOJSBinding.js",
    "revision": "20d0ac288937f41e572a790ebf46eb6c"
  },
  {
    "url": "itk/ImageIOs/itkLSMImageIOJSBindingWasm.js",
    "revision": "f925d2c507ca1d7474e387db77330097"
  },
  {
    "url": "itk/ImageIOs/itkMetaImageIOJSBinding.js",
    "revision": "55508a35099215a0dc77a9abc5116a7e"
  },
  {
    "url": "itk/ImageIOs/itkMetaImageIOJSBindingWasm.js",
    "revision": "358011f082f1cb87047f14dbc776d6fa"
  },
  {
    "url": "itk/ImageIOs/itkMGHImageIOJSBinding.js",
    "revision": "38746f7c3e9a895b49556b206d5568ae"
  },
  {
    "url": "itk/ImageIOs/itkMGHImageIOJSBindingWasm.js",
    "revision": "2057aba489bb7c0d5344f3ff9177c320"
  },
  {
    "url": "itk/ImageIOs/itkMINCImageIOJSBindingWasm.js",
    "revision": "92a0fb24dde303190e7846edff5c846f"
  },
  {
    "url": "itk/ImageIOs/itkMRCImageIOJSBinding.js",
    "revision": "77924068f584e10121aec42c0f969eb7"
  },
  {
    "url": "itk/ImageIOs/itkMRCImageIOJSBindingWasm.js",
    "revision": "8e584b350d260545523cf027ff730492"
  },
  {
    "url": "itk/ImageIOs/itkNiftiImageIOJSBinding.js",
    "revision": "70b27a67ea87153a0f48d1731328723a"
  },
  {
    "url": "itk/ImageIOs/itkNiftiImageIOJSBindingWasm.js",
    "revision": "33965b14f3906d862b55ff207140ab3e"
  },
  {
    "url": "itk/ImageIOs/itkNrrdImageIOJSBinding.js",
    "revision": "07f33118b1758b86c0232f4fffbfd18d"
  },
  {
    "url": "itk/ImageIOs/itkNrrdImageIOJSBindingWasm.js",
    "revision": "7c64573a19ec3d68a43c93d6407a54f8"
  },
  {
    "url": "itk/ImageIOs/itkPNGImageIOJSBinding.js",
    "revision": "e00623fb406f5c02953786d0b92bbcdb"
  },
  {
    "url": "itk/ImageIOs/itkPNGImageIOJSBindingWasm.js",
    "revision": "af1570ecb6c12e930ba077c07399e6bb"
  },
  {
    "url": "itk/ImageIOs/itkTIFFImageIOJSBinding.js",
    "revision": "7e6f53e32fcd715d1c4f24e37a827292"
  },
  {
    "url": "itk/ImageIOs/itkTIFFImageIOJSBindingWasm.js",
    "revision": "e50c1825f6a4d31d37d83d8f749adaca"
  },
  {
    "url": "itk/ImageIOs/itkVTKImageIOJSBinding.js",
    "revision": "4f96278a8a1aac0652c1e6fbbd6ac8a3"
  },
  {
    "url": "itk/ImageIOs/itkVTKImageIOJSBindingWasm.js",
    "revision": "a97499a952126bc215b05717018029ec"
  },
  {
    "url": "itk/imageJSComponentToIOComponent.js",
    "revision": "2088702a4cb9117c9116bef51376d658"
  },
  {
    "url": "itk/imageJSPixelTypeToIOPixelType.js",
    "revision": "31b0f68a30ede357ed4ea68fc3719601"
  },
  {
    "url": "itk/ImageType.js",
    "revision": "4d52f2d76a46b0adffd2b184b41028e3"
  },
  {
    "url": "itk/index.js",
    "revision": "91a66a44d662570155b1c357a3ee921e"
  },
  {
    "url": "itk/IntTypes.js",
    "revision": "32a87875e1d723c67e39b439d662af79"
  },
  {
    "url": "itk/IOTypes.js",
    "revision": "274a7502c8f12328d3746e0492504140"
  },
  {
    "url": "itk/itk-js-cli.js",
    "revision": "c693a106b22461ca55b8112cb738bb1b"
  },
  {
    "url": "itk/itkConfig.js",
    "revision": "a9da642a4fc895b80a933bea1de52377"
  },
  {
    "url": "itk/itkConfigCDN.js",
    "revision": "0d81309dd9518d64c9006374a77e946c"
  },
  {
    "url": "itk/loadEmscriptenModuleBrowser.js",
    "revision": "612237fb68a8f1369ef73e995a67e3fb"
  },
  {
    "url": "itk/loadEmscriptenModuleNode.js",
    "revision": "662f4d63587344b9304226d96222833f"
  },
  {
    "url": "itk/Matrix.js",
    "revision": "696e1fd396a08372c12853fe14520607"
  },
  {
    "url": "itk/Mesh.js",
    "revision": "39ee277da2b2eaa8c94f989aa4cd4a6e"
  },
  {
    "url": "itk/meshIOComponentToJSComponent.js",
    "revision": "90de7c32cf5cd3d60126c6f919b68787"
  },
  {
    "url": "itk/MeshIOIndex.js",
    "revision": "663e93bd8be843afff0354112e3287e8"
  },
  {
    "url": "itk/meshIOPixelTypeToJSPixelType.js",
    "revision": "ec7177162b0dc19137f59b9f583e6add"
  },
  {
    "url": "itk/MeshIOs/itkBYUMeshIOJSBinding.js",
    "revision": "822502e56715e14e87f3aa4ee26a4f47"
  },
  {
    "url": "itk/MeshIOs/itkBYUMeshIOJSBindingWasm.js",
    "revision": "7c23fa4ca6f9405f4f875a1a7e5435a9"
  },
  {
    "url": "itk/MeshIOs/itkFreeSurferAsciiMeshIOJSBinding.js",
    "revision": "8e409dfad5d7b0e67a28bf16f8b927bd"
  },
  {
    "url": "itk/MeshIOs/itkFreeSurferAsciiMeshIOJSBindingWasm.js",
    "revision": "d34fb716acfa41ce101c843fafec786e"
  },
  {
    "url": "itk/MeshIOs/itkFreeSurferBinaryMeshIOJSBinding.js",
    "revision": "f3864a71661215d4d89265bec09a1472"
  },
  {
    "url": "itk/MeshIOs/itkFreeSurferBinaryMeshIOJSBindingWasm.js",
    "revision": "e34dcaffadbf84b45bfcb53d6db648fc"
  },
  {
    "url": "itk/MeshIOs/itkOBJMeshIOJSBinding.js",
    "revision": "375619e6dd1f5998e63bebee43959bf3"
  },
  {
    "url": "itk/MeshIOs/itkOBJMeshIOJSBindingWasm.js",
    "revision": "208d729212a3161e07b033d59993e29f"
  },
  {
    "url": "itk/MeshIOs/itkOFFMeshIOJSBinding.js",
    "revision": "4877ebae52c83699979b4a427bfa0680"
  },
  {
    "url": "itk/MeshIOs/itkOFFMeshIOJSBindingWasm.js",
    "revision": "fd011c2389d732d0ae42e6edef15df8e"
  },
  {
    "url": "itk/MeshIOs/itkSTLMeshIOJSBinding.js",
    "revision": "9390cf6327e31094cf85dc9f9c5017b8"
  },
  {
    "url": "itk/MeshIOs/itkSTLMeshIOJSBindingWasm.js",
    "revision": "25cdd9705d03cf8a51f496883d610f5f"
  },
  {
    "url": "itk/MeshIOs/itkVTKPolyDataMeshIOJSBinding.js",
    "revision": "1c9653dbaee410ae70888528c7d08635"
  },
  {
    "url": "itk/MeshIOs/itkVTKPolyDataMeshIOJSBindingWasm.js",
    "revision": "010d743f4a0e9a2209df0c18a6b7b8f8"
  },
  {
    "url": "itk/meshJSComponentToIOComponent.js",
    "revision": "2b27cef5a7d43957a28f4da96626fd14"
  },
  {
    "url": "itk/meshJSPixelTypeToIOPixelType.js",
    "revision": "05f00c2dd4bc66db539e4f414de6a2b1"
  },
  {
    "url": "itk/MeshType.js",
    "revision": "f2ec2302c5f1bf554ca8d3cac9e19c05"
  },
  {
    "url": "itk/MimeToImageIO.js",
    "revision": "3e76827bb8cbf4b7c540ed2805eb9b9e"
  },
  {
    "url": "itk/MimeToMeshIO.js",
    "revision": "aba361459fce0489e3be3cc8b0b58e23"
  },
  {
    "url": "itk/MimeToPolyDataIO.js",
    "revision": "aba361459fce0489e3be3cc8b0b58e23"
  },
  {
    "url": "itk/node_modules/axios/dist/axios.js",
    "revision": "73fcc4182a225c2dcb1d8dde1538535f"
  },
  {
    "url": "itk/node_modules/axios/dist/axios.min.js",
    "revision": "e63531350b726384f625ead641f5ad66"
  },
  {
    "url": "itk/node_modules/axios/index.js",
    "revision": "7057c14dacb26642c8e57acd1febb0b8"
  },
  {
    "url": "itk/node_modules/axios/lib/adapters/http.js",
    "revision": "2804d3e4b600ce93fa099528359ec6e1"
  },
  {
    "url": "itk/node_modules/axios/lib/adapters/xhr.js",
    "revision": "eec82f5a4702043bd9f13becf397945e"
  },
  {
    "url": "itk/node_modules/axios/lib/axios.js",
    "revision": "bbc19b5030890f2bab53eba3fe6a01e8"
  },
  {
    "url": "itk/node_modules/axios/lib/cancel/Cancel.js",
    "revision": "e583d0dcca1cc1d22a26e5482d99e599"
  },
  {
    "url": "itk/node_modules/axios/lib/cancel/CancelToken.js",
    "revision": "d42641a6c22ec71365e24f453e730b18"
  },
  {
    "url": "itk/node_modules/axios/lib/cancel/isCancel.js",
    "revision": "0a6a3b3ade1a42f61f2c7ebf56b38419"
  },
  {
    "url": "itk/node_modules/axios/lib/core/Axios.js",
    "revision": "b326b462d63ddbe80b1083a16b8de9cb"
  },
  {
    "url": "itk/node_modules/axios/lib/core/buildFullPath.js",
    "revision": "fa83814d8b074afbf7585c716a7d0f9b"
  },
  {
    "url": "itk/node_modules/axios/lib/core/createError.js",
    "revision": "47b9e8b556cbbfafaa16494df8c5a343"
  },
  {
    "url": "itk/node_modules/axios/lib/core/dispatchRequest.js",
    "revision": "7e3797355c56b9c8ad268615fbad0f8d"
  },
  {
    "url": "itk/node_modules/axios/lib/core/enhanceError.js",
    "revision": "8359e5e9a065491266049799295037cb"
  },
  {
    "url": "itk/node_modules/axios/lib/core/InterceptorManager.js",
    "revision": "54214e1330787e4ed5735a9996f39fe5"
  },
  {
    "url": "itk/node_modules/axios/lib/core/mergeConfig.js",
    "revision": "be9feba2b764778bd84294a4373e65bf"
  },
  {
    "url": "itk/node_modules/axios/lib/core/settle.js",
    "revision": "45f0e2244bc031a06c6061c4eb2726ab"
  },
  {
    "url": "itk/node_modules/axios/lib/core/transformData.js",
    "revision": "917700b21d020f1d2446b5bc14cb50e4"
  },
  {
    "url": "itk/node_modules/axios/lib/defaults.js",
    "revision": "36850c1f0b016e4ed28a9bd9e4a7b82f"
  },
  {
    "url": "itk/node_modules/axios/lib/helpers/bind.js",
    "revision": "38600da1e81ede8cd8f1d10fd1012cda"
  },
  {
    "url": "itk/node_modules/axios/lib/helpers/buildURL.js",
    "revision": "0cf7887862ffc192863ff71c1d7a4ec8"
  },
  {
    "url": "itk/node_modules/axios/lib/helpers/combineURLs.js",
    "revision": "6a5f44f8bc3b8460552c15743c96be11"
  },
  {
    "url": "itk/node_modules/axios/lib/helpers/cookies.js",
    "revision": "3eb7ef75580020e60df0e5409288e8e3"
  },
  {
    "url": "itk/node_modules/axios/lib/helpers/deprecatedMethod.js",
    "revision": "aed58ab654a201e2309c73cd93aec84c"
  },
  {
    "url": "itk/node_modules/axios/lib/helpers/isAbsoluteURL.js",
    "revision": "5e91f207890f3cdb48a2021685b7f19a"
  },
  {
    "url": "itk/node_modules/axios/lib/helpers/isURLSameOrigin.js",
    "revision": "df1b887c1130ecf8dd7e588b8b33ec4a"
  },
  {
    "url": "itk/node_modules/axios/lib/helpers/normalizeHeaderName.js",
    "revision": "87472e06b6f430c59b2c419f62086cc4"
  },
  {
    "url": "itk/node_modules/axios/lib/helpers/parseHeaders.js",
    "revision": "9afdf3d5ed4e2f60770faf8d063fedc6"
  },
  {
    "url": "itk/node_modules/axios/lib/helpers/spread.js",
    "revision": "f3932e6bab8473987bd2ee295c773606"
  },
  {
    "url": "itk/node_modules/axios/lib/utils.js",
    "revision": "4a98ffa0b72062280dc2555154a7bb31"
  },
  {
    "url": "itk/node_modules/webworker-promise/coverage/lcov-report/base.css",
    "revision": "8eff00e811a7b84143fcd962eb512d87"
  },
  {
    "url": "itk/node_modules/webworker-promise/coverage/lcov-report/index.html",
    "revision": "c905c929b4c36cdbb6bdabe6c194fd67"
  },
  {
    "url": "itk/node_modules/webworker-promise/coverage/lcov-report/prettify.css",
    "revision": "31f0c9da5ac09f2563cab46ebc6e445a"
  },
  {
    "url": "itk/node_modules/webworker-promise/coverage/lcov-report/prettify.js",
    "revision": "fdaf2510a4125a409882ed554f89c039"
  },
  {
    "url": "itk/node_modules/webworker-promise/coverage/lcov-report/sorter.js",
    "revision": "2451f54f011e7d0295be5a4c6fd597f5"
  },
  {
    "url": "itk/node_modules/webworker-promise/coverage/lcov-report/src/index.html",
    "revision": "42fe86298616a2b2bddc3622581b1231"
  },
  {
    "url": "itk/node_modules/webworker-promise/coverage/lcov-report/src/index.js.html",
    "revision": "34cc8317753a824f370f368acbf93531"
  },
  {
    "url": "itk/node_modules/webworker-promise/coverage/lcov-report/src/node-worker.js.html",
    "revision": "2a68ab5bd90052728582d7c19b767719"
  },
  {
    "url": "itk/node_modules/webworker-promise/coverage/lcov-report/src/pool.js.html",
    "revision": "b20dd6b1c844a1319082cef1db53ee0a"
  },
  {
    "url": "itk/node_modules/webworker-promise/coverage/lcov-report/src/tiny-emitter.js.html",
    "revision": "c8171a85905910142f5ba728afdf4836"
  },
  {
    "url": "itk/node_modules/webworker-promise/dist/pool.js",
    "revision": "0b780d951352a3a069b137d85b8ea5bc"
  },
  {
    "url": "itk/node_modules/webworker-promise/dist/pool.min.js",
    "revision": "b0a06059e37bf121cd154c887f5664b1"
  },
  {
    "url": "itk/node_modules/webworker-promise/dist/register.js",
    "revision": "e0369f22b3d8e26960ff0186a72b9687"
  },
  {
    "url": "itk/node_modules/webworker-promise/dist/register.min.js",
    "revision": "0f6a2c1b92d6cc3a1755dd6062061137"
  },
  {
    "url": "itk/node_modules/webworker-promise/dist/worker.js",
    "revision": "f1127a8978b7b1d6749699dcba56c142"
  },
  {
    "url": "itk/node_modules/webworker-promise/dist/worker.min.js",
    "revision": "be108aafc78d8367fedb817a5b80a66a"
  },
  {
    "url": "itk/node_modules/webworker-promise/lib/index.js",
    "revision": "c3a694f8bf6d1b00edf7b02986a43292"
  },
  {
    "url": "itk/node_modules/webworker-promise/lib/node-child-proccess.js",
    "revision": "6559dfb214bac5e3c37bd8ca1dec6e37"
  },
  {
    "url": "itk/node_modules/webworker-promise/lib/node-child-process.js",
    "revision": "6559dfb214bac5e3c37bd8ca1dec6e37"
  },
  {
    "url": "itk/node_modules/webworker-promise/lib/node-worker.js",
    "revision": "5a2a024c5bd2cb1bbb3c0e36aa5ad3a3"
  },
  {
    "url": "itk/node_modules/webworker-promise/lib/node.js",
    "revision": "5a2a024c5bd2cb1bbb3c0e36aa5ad3a3"
  },
  {
    "url": "itk/node_modules/webworker-promise/lib/pool.js",
    "revision": "ea746fabd53aae343ad305858d674b6e"
  },
  {
    "url": "itk/node_modules/webworker-promise/lib/register.js",
    "revision": "4084eb97498b708c72fac0e87439e6f5"
  },
  {
    "url": "itk/node_modules/webworker-promise/lib/tiny-emitter.js",
    "revision": "514e487e38e7a1ba725c463671c388c2"
  },
  {
    "url": "itk/node_modules/webworker-promise/lib/worker-pool.js",
    "revision": "c2e44d933620fab65532bf4b5e87c574"
  },
  {
    "url": "itk/node_modules/webworker-promise/src/index.js",
    "revision": "12d39ad771a2364143806cab56ef6ab1"
  },
  {
    "url": "itk/node_modules/webworker-promise/src/node-child-process.js",
    "revision": "f2d9571a8967108b872d8557a900c409"
  },
  {
    "url": "itk/node_modules/webworker-promise/src/node-worker.js",
    "revision": "04203d1529440aaaf8ae250e43aa5d3c"
  },
  {
    "url": "itk/node_modules/webworker-promise/src/pool.js",
    "revision": "9589e86a28196dc459ac55c9f19ecfcf"
  },
  {
    "url": "itk/node_modules/webworker-promise/src/register.js",
    "revision": "0c82b4426ef61c7a80b7fd291bc37ac0"
  },
  {
    "url": "itk/node_modules/webworker-promise/src/tiny-emitter.js",
    "revision": "fa21cca3b340222647e905026aaf5a4d"
  },
  {
    "url": "itk/node_modules/webworker-promise/test/index.test.js",
    "revision": "e18e6eb3b097b8a95a0fc0baef76105d"
  },
  {
    "url": "itk/node_modules/webworker-promise/test/math.worker.js",
    "revision": "2227a080f4006769160d0003eba2ec18"
  },
  {
    "url": "itk/node_modules/webworker-promise/test/payload-type.worker.js",
    "revision": "56a39523acbd0883ea49036a75652edb"
  },
  {
    "url": "itk/node_modules/webworker-promise/test/tiny-emitter.test.js",
    "revision": "61ad6aff62dcb5810b53617116a152c3"
  },
  {
    "url": "itk/node_modules/webworker-promise/webpack.config.js",
    "revision": "f9eeedb3c62286b36caa9b17ffe902f0"
  },
  {
    "url": "itk/Pipelines/itkfiltering.js",
    "revision": "58956cdac3c0d8838b771abf7cfdd9e6"
  },
  {
    "url": "itk/Pipelines/itkfilteringWasm.js",
    "revision": "e14b48e1bf552a5beebada601e900c8c"
  },
  {
    "url": "itk/Pipelines/MeshToPolyDataWasm.js",
    "revision": "27e14233ea01fb91e9c26d8b3823e05e"
  },
  {
    "url": "itk/PixelTypes.js",
    "revision": "4fa031705ef3b81acc4a2717e0fd2049"
  },
  {
    "url": "itk/PolyDataIOIndex.js",
    "revision": "9c4ff3746125324d240de953be9d145d"
  },
  {
    "url": "itk/PolyDataIOs/VTKExodusFileReaderWasm.js",
    "revision": "869e4142f0caa604c1e57703425be1c9"
  },
  {
    "url": "itk/PolyDataIOs/VTKLegacyFileReaderWasm.js",
    "revision": "4c72c01fed6aa38a00020e80fae2bff8"
  },
  {
    "url": "itk/PolyDataIOs/VTKXMLFileReaderWasm.js",
    "revision": "a9ef3e1eeca66d8dd2a913e4cb11e641"
  },
  {
    "url": "itk/readArrayBuffer.js",
    "revision": "52c7067839ff7a061d7b7ab36c6f3060"
  },
  {
    "url": "itk/readBlob.js",
    "revision": "b9c4329a7319055ed6fa6bc207f38c26"
  },
  {
    "url": "itk/readFile.js",
    "revision": "3050ea678e543b5d76ca2f3939516e59"
  },
  {
    "url": "itk/readImageArrayBuffer.js",
    "revision": "a259a00465ba77dab3ab7af895c1963b"
  },
  {
    "url": "itk/readImageBlob.js",
    "revision": "37c28c5ca49b26a58a643701d05b3615"
  },
  {
    "url": "itk/readImageDICOMFileSeries.js",
    "revision": "78a4b3503aa2f8b9fc6c6fc11b59a4a8"
  },
  {
    "url": "itk/readImageEmscriptenFSDICOMFileSeries.js",
    "revision": "2364488c28e28b558fa0409fc0e1e5f8"
  },
  {
    "url": "itk/readImageEmscriptenFSFile.js",
    "revision": "9dcb75216b2bcc76fb82a17a3efd49d3"
  },
  {
    "url": "itk/readImageFile.js",
    "revision": "972c0f132fa59f991c69870f7334e793"
  },
  {
    "url": "itk/readImageHTTP.js",
    "revision": "16d70e5fdc745c1f135f79b9c75af71e"
  },
  {
    "url": "itk/readImageLocalDICOMFileSeries.js",
    "revision": "ae400fe4b398d153b238c3235a9bd359"
  },
  {
    "url": "itk/readImageLocalDICOMFileSeriesSync.js",
    "revision": "f5304b91ab32c64e97cb7914073e1e09"
  },
  {
    "url": "itk/readImageLocalFile.js",
    "revision": "737d2cb279cddbd825f37d09847700d5"
  },
  {
    "url": "itk/readImageLocalFileSync.js",
    "revision": "109df853264bcf775af5dd0b3b55f61e"
  },
  {
    "url": "itk/readLocalFile.js",
    "revision": "8fb0efca265914d2852880cdea0c9df8"
  },
  {
    "url": "itk/readLocalFileSync.js",
    "revision": "bbb6d14f78b3741b252cd577591200e7"
  },
  {
    "url": "itk/readMeshArrayBuffer.js",
    "revision": "3ac0c0d4ad2b914277576007a7f0a9d6"
  },
  {
    "url": "itk/readMeshBlob.js",
    "revision": "761e3e9e45b214e01df98f1f9c14f6ad"
  },
  {
    "url": "itk/readMeshEmscriptenFSFile.js",
    "revision": "25dc1fdbab7b50e8e47222cd8f80458f"
  },
  {
    "url": "itk/readMeshFile.js",
    "revision": "4846a9eda71178535634b335617e29c5"
  },
  {
    "url": "itk/readMeshLocalFile.js",
    "revision": "a257c746adfc7f224dd00585882d4d57"
  },
  {
    "url": "itk/readMeshLocalFileSync.js",
    "revision": "93367c12748c47e1b1f420285feec59e"
  },
  {
    "url": "itk/readPolyDataArrayBuffer.js",
    "revision": "3e4fbdd59d13e372d685d6f6c0ab8438"
  },
  {
    "url": "itk/readPolyDataBlob.js",
    "revision": "054aebd1b227eb71dc9220dc32c2bde5"
  },
  {
    "url": "itk/readPolyDataFile.js",
    "revision": "c4d76cf30c4d6b3d16d7a7c5d01c4831"
  },
  {
    "url": "itk/readPolyDataLocalFile.js",
    "revision": "72d197d73334673dae99747216b6f052"
  },
  {
    "url": "itk/readPolyDataLocalFileSync.js",
    "revision": "8a9c327159998fe88c4792c6f633a387"
  },
  {
    "url": "itk/runPipelineBrowser.js",
    "revision": "ae43b90d604adf0dabd2cacd8b64bac6"
  },
  {
    "url": "itk/runPipelineEmscripten.js",
    "revision": "2c996749c20c37aee6df7a7fc6818300"
  },
  {
    "url": "itk/runPipelineNode.js",
    "revision": "bad2e6fb64ae0258958b5da17d166789"
  },
  {
    "url": "itk/runPipelineNodeSync.js",
    "revision": "5361e5412d619c76d357a7568e51d6b8"
  },
  {
    "url": "itk/setMatrixElement.js",
    "revision": "a0099a7c2321a96954e51816e53c6074"
  },
  {
    "url": "itk/stackImages.js",
    "revision": "68382b996c21f8e4d5167f6b1a63a8b8"
  },
  {
    "url": "itk/umd/index.html",
    "revision": "760b6d2e85900ffc70fff6cdb5f721a9"
  },
  {
    "url": "itk/umd/itk.js",
    "revision": "9875833164834e64a460805b53f67f91"
  },
  {
    "url": "itk/WebWorkers/ImageIO.worker.js",
    "revision": "311b921f99da05504e5ae41cf5fb1a03"
  },
  {
    "url": "itk/WebWorkers/MeshIO.worker.js",
    "revision": "02e71a71c3bbcdb394af303838e9f0f3"
  },
  {
    "url": "itk/WebWorkers/Pipeline.worker.js",
    "revision": "6ee01a11e3e41a3e52cffb8ceba0cb85"
  },
  {
    "url": "itk/WorkerPool.js",
    "revision": "32b5f89775ad73295dd09af968009b24"
  },
  {
    "url": "itk/writeArrayBuffer.js",
    "revision": "30d656c5e27d8146da1c971482dd8706"
  },
  {
    "url": "itk/writeImageArrayBuffer.js",
    "revision": "a6bccc57b7bb0453900b445c52c3b894"
  },
  {
    "url": "itk/writeImageEmscriptenFSFile.js",
    "revision": "6b45773bc0eccf6dd0ef17773a7dbc46"
  },
  {
    "url": "itk/writeImageLocalFile.js",
    "revision": "4e0622719fdc7a2e51dea811a1aa401a"
  },
  {
    "url": "itk/writeImageLocalFileSync.js",
    "revision": "38932fa7a9d4746850294a61ad1b7a80"
  },
  {
    "url": "itk/writeLocalFile.js",
    "revision": "f9d99f8f674622d089cbecabd848669b"
  },
  {
    "url": "itk/writeLocalFileSync.js",
    "revision": "811f2e370fac4bf4ce9dd05180903807"
  },
  {
    "url": "itk/writeMeshArrayBuffer.js",
    "revision": "4766a1caa590a090ea1078c9a9fb2cc5"
  },
  {
    "url": "itk/writeMeshEmscriptenFSFile.js",
    "revision": "ec1057f541c847b05666501a649c9327"
  },
  {
    "url": "itk/writeMeshLocalFile.js",
    "revision": "0797ad346c4a1b0e6655b79c78813313"
  },
  {
    "url": "itk/writeMeshLocalFileSync.js",
    "revision": "23fb1410a127c4861127777e7d39ab87"
  },
  {
    "url": "runtime.js",
    "revision": "3e509b6fbb60e3bacdc070373e53e258"
  },
  {
    "url": "version.js",
    "revision": "f697fff752e0593e9ecc5cf70596a3f8"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
]);

workboxSW.router.registerRoute(
  /\.js|\.png|\.wasm$/,
  workboxSW.strategies.networkFirst({
    cacheName: 'networkFirstContent',
    cacheExpiration: {
      maxEntries: 50,
      maxAgeSeconds: 7 * 24 * 60 * 60 * 26,
    },
  })
);
