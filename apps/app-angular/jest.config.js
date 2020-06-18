module.exports = {
  name: 'app-angular',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app-angular',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
