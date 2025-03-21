
    // Simple counter animation for the preview
    document.addEventListener('DOMContentLoaded', function() {
      const counters = document.querySelectorAll('.counter');
      const speed = 200;
      
      counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let count = 0;
        const inc = target / speed;
        counter.textContent = '0';
        
        const updateCount = () => {
          if(count < target) {
            count += inc;
            counter.textContent = Math.ceil(count);
            setTimeout(updateCount, 1);
          } else {
            counter.textContent = target;
          }
        };
        
        // Start the animation after a small delay
        setTimeout(updateCount, 500);
      });
      
      // Add hover effects for credential blocks
      const credBlocks = document.querySelectorAll('.meet-mentori-cred-block-2');
      credBlocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-5px)';
          this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
        });
        
        block.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
          this.style.boxShadow = '0 3px 15px rgba(0, 0, 0, 0.08)';
        });
      });
      
    });
