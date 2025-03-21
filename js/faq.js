document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll('.faq-question');
    
    questions.forEach(question => {
      question.addEventListener('click', () => {
        // Toggle active class
        question.classList.toggle('active');
        
        // Get answer element
        const answer = question.nextElementSibling;
        
        // Toggle active class on answer
        answer.classList.toggle('active');
        
        // Set dynamic height based on content
        if (answer.classList.contains('active')) {
          // Set height to auto to measure content
          answer.style.maxHeight = "none";
          const height = answer.scrollHeight;
          // Then set it to that specific height for animation
          answer.style.maxHeight = height + "px";
          
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
    
    // Initialize to ensure proper initial state
    questions.forEach(question => {
      const answer = question.nextElementSibling;
      if (!answer.classList.contains('active')) {
        answer.style.maxHeight = "0";
      }
    });
  });