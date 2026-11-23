function runUnitTests() {

  console.assert(validateName('Anna') === true, 'validateName: "Anna" should be valid');
  console.assert(validateName('Jo') === true, 'validateName: 2 letters is the minimum and should be valid');
  console.assert(validateName('  Anna  ') === true, 'validateName: spaces around a name should be ignored');
  console.assert(validateName('') === false, 'validateName: empty string should be invalid');
  console.assert(validateName('   ') === false, 'validateName: only spaces should be invalid');
  console.assert(validateName('A') === false, 'validateName: 1 letter is too short');
  console.assert(validateName(null) === false, 'validateName: null should be invalid');
  console.assert(validateName(42) === false, 'validateName: a number should be invalid');


  console.assert(validateEmail('anna@example.com') === true, 'validateEmail: normal email should be valid');
  console.assert(validateEmail('  anna@example.com  ') === true, 'validateEmail: spaces around should be ignored');
  console.assert(validateEmail('') === false, 'validateEmail: empty string should be invalid');
  console.assert(validateEmail('   ') === false, 'validateEmail: only spaces should be invalid');
  console.assert(validateEmail('anna.example.com') === false, 'validateEmail: no "@" should be invalid');
  console.assert(validateEmail('anna@example') === false, 'validateEmail: no dot after "@" should be invalid');
  console.assert(validateEmail('@.') === false, 'validateEmail: "@." alone should be invalid');
  console.assert(validateEmail('an na@example.com') === false, 'validateEmail: space inside should be invalid');
  console.assert(validateEmail(undefined) === false, 'validateEmail: undefined should be invalid');

  console.log('runUnitTests: finished (if there is no "Assertion failed" above, all tests passed)');
}

runUnitTests();
