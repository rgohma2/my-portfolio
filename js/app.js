console.log('hello world!');



// nav bar transitions to purple while scrolling down the page
$(window).scroll(() => {
	const scrollHeight = $(window).scrollTop()
	console.log(scrollHeight);
	if (scrollHeight !== 789 && scrollHeight !== 1887 && scrollHeight !== 2556) {
		console.log(scrollHeight);
		$('nav').toggleClass('scrolled', $(window).scrollTop() > 90)
	} else {
	// becomes transparent when scrollHeight is at specific points  
		$('nav').removeClass('scrolled')
	}
})






