const test = document.querySelector('.test');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const testContent = ['one', 'two', 'three'];


nextButton.addEventListener('click', function() {
	if (test.innerText === testContent[0]) {
  	test.innerText = testContent[1];
  } else if (test.innerText === testContent[1]) {
  	test.innerText = testContent[2];
  } else if (test.innerText === testContent[2]) {
  	test.innerText = testContent[0];
  }
});

previousButton.addEventListener('click', function() {
	if (test.innerText === testContent[2]) {
  	test.innerText = testContent[1];
  } else if (test.innerText === testContent[1]) {
  	test.innerText = testContent[0];
  } else if (test.innerText === testContent[0]) {
  	test.innerText = testContent[2];
  }
});