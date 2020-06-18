module.exports = {
  name: 'my-library-angular',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/my-library-angular',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
