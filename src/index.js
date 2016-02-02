import _mockMethod from './mockMethod';
import MockObject from './mockObject';

export function mockMethod(...args) {
  return _mockMethod._create(...args);
}

export function mockObject(...args) {
  return MockObject.create(...args);
}
