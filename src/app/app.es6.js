import testModel from 'models/testModel';
export default {
  getOptions: function() {
    return 'It worked';
  },
  testTestModel: function() {
    return testModel();
  }
}

console.log(window);
