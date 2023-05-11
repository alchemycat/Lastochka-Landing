export default function questions() {
	try {
		const questions = document.querySelectorAll(".questions__question");

		questions.forEach((question) => {
			question.addEventListener("click", (e) => {
				const caption = question.querySelector(".questions__caption");
				const top = question.querySelector(".questions__top");
				if (question.classList.contains("collapsed")) {
					question.classList.remove("active");
					caption.classList.remove("active");
					top.classList.remove("active");
				} else {
					question.classList.add("active");
					caption.classList.add("active");
					top.classList.add("active");
				}
			});
		});

		questions[0].click();
	} catch {}
}
