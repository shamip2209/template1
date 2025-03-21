document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll('.faq-question');
  
  questions.forEach(question => {
    question.addEventListener('click', () => {
      question.classList.toggle('active');
      
      const answer = question.nextElementSibling;
      answer.classList.toggle('active');
      
      // Ensure content is fully visible when active
      if (answer.classList.contains('active')) {
        // Remove any height limitations
        answer.style.maxHeight = answer.scrollHeight + "px";
        
        // Close other questions
        questions.forEach(otherQuestion => {
          if (otherQuestion !== question) {
            otherQuestion.classList.remove('active');
            const otherAnswer = otherQuestion.nextElementSibling;
            otherAnswer.classList.remove('active');
            otherAnswer.style.maxHeight = "0";
          }
        });
      } else {
        answer.style.maxHeight = "0";
      }
    });
  });
});