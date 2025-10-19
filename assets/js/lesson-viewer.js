/**
 * Lesson Viewer for FutureFunds Courses
 * Handles lesson navigation and content display across multiple courses
 */

// Lesson data for Budgeting & Saving course
const budgetingLessons = {
  1: {
    title: "Introduction to Budgeting",
    subtitle: "What is a budget and why it matters",
    article: "Budgeting & Savings",
    content: `
      <h1>Introduction to Budgeting</h1>
      <p class="text-muted" style="font-size: 1.1rem; margin-bottom: var(--space-xl);">What is a budget and why it matters</p>
      
      <div class="lesson-section">
        <h2>What is a Budget?</h2>
        <p>A budget is a financial plan that helps you track your income and expenses over a specific period, typically monthly. It's a roadmap for your money that ensures you're spending within your means and working toward your financial goals.</p>
        
        <p>Think of a budget as your financial GPS - it shows you where your money is going and helps you navigate toward your destination (your financial goals).</p>
      </div>
      
      <div class="lesson-section">
        <h2>Why Budgeting Matters</h2>
        <ul class="lesson-list">
          <li><strong>Financial Control:</strong> Know exactly where your money goes each month</li>
          <li><strong>Goal Achievement:</strong> Allocate funds toward your priorities and dreams</li>
          <li><strong>Stress Reduction:</strong> Eliminate financial surprises and anxiety</li>
          <li><strong>Emergency Preparedness:</strong> Build funds for unexpected expenses</li>
          <li><strong>Wealth Building:</strong> Create systematic savings and investment habits</li>
        </ul>
      </div>
      
      <div class="lesson-section">
        <h2>Common Budgeting Myths</h2>
        <div class="myth-fact">
          <div class="myth">
            <h4>❌ Myth: Budgets are restrictive and boring</h4>
            <p>Many people think budgets limit their freedom and fun.</p>
          </div>
          <div class="fact">
            <h4>✅ Fact: Budgets provide freedom and peace of mind</h4>
            <p>A good budget actually gives you permission to spend on things you value while ensuring you meet your obligations.</p>
          </div>
        </div>
      </div>
      
      <div class="lesson-section">
        <h2>Key Takeaways</h2>
        <div class="key-points">
          <div class="point">
            <span class="point-number">1</span>
            <p>A budget is a plan for your money, not a restriction</p>
          </div>
          <div class="point">
            <span class="point-number">2</span>
            <p>Budgeting helps you achieve financial goals faster</p>
          </div>
          <div class="point">
            <span class="point-number">3</span>
            <p>Regular budgeting reduces financial stress and uncertainty</p>
          </div>
        </div>
      </div>
      
      <div class="lesson-actions">
        <button class="btn btn--primary" onclick="completeLesson()">Mark Complete & Continue</button>
      </div>
    `
  },
  2: {
    title: "Tracking Income and Expenses",
    subtitle: "How to record your income and spending",
    article: "How to Track Your Monthly Expenses",
    content: `
      <h1>Tracking Income and Expenses</h1>
      <p class="text-muted" style="font-size: 1.1rem; margin-bottom: var(--space-xl);">How to record your income and spending</p>
      
      <div class="lesson-section">
        <h2>Understanding Your Income</h2>
        <p>Before you can create an effective budget, you need to know exactly how much money you have coming in each month.</p>
        
        <h3>Types of Income</h3>
        <ul class="lesson-list">
          <li><strong>Regular Income:</strong> Salary, hourly wages, pension</li>
          <li><strong>Variable Income:</strong> Freelance work, commissions, tips</li>
          <li><strong>Passive Income:</strong> Investment returns, rental income</li>
          <li><strong>Irregular Income:</strong> Tax refunds, bonuses, gifts</li>
        </ul>
      </div>
      
      <div class="lesson-section">
        <h2>Categorizing Your Expenses</h2>
        <div class="expense-categories">
          <div class="category-card">
            <h4>Fixed Expenses</h4>
            <p>Same amount every month</p>
            <ul>
              <li>Rent/Mortgage</li>
              <li>Insurance premiums</li>
              <li>Loan payments</li>
              <li>Subscriptions</li>
            </ul>
          </div>
          <div class="category-card">
            <h4>Variable Expenses</h4>
            <p>Amount changes monthly</p>
            <ul>
              <li>Groceries</li>
              <li>Utilities</li>
              <li>Gas</li>
              <li>Entertainment</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="lesson-section">
        <h2>Tracking Methods</h2>
        <div class="tracking-methods">
          <div class="method">
            <h4>📱 Mobile Apps</h4>
            <p>Mint, YNAB, PocketGuard - automatic categorization and syncing</p>
          </div>
          <div class="method">
            <h4>📊 Spreadsheets</h4>
            <p>Excel, Google Sheets - customizable and detailed tracking</p>
          </div>
          <div class="method">
            <h4>📝 Pen & Paper</h4>
            <p>Traditional method - simple and always accessible</p>
          </div>
        </div>
      </div>
      
      <div class="lesson-actions">
        <button class="btn btn--primary" onclick="completeLesson()">Mark Complete & Continue</button>
      </div>
    `
  },
  3: {
    title: "Creating Your First Budget",
    subtitle: "Step-by-step personal budgeting",
    article: "50-30-20 Budget Rule",
    content: `
      <h1>Creating Your First Budget</h1>
      <p class="text-muted" style="font-size: 1.1rem; margin-bottom: var(--space-xl);">Step-by-step personal budgeting</p>
      
      <div class="lesson-section">
        <h2>The 50-30-20 Rule</h2>
        <p>One of the simplest and most effective budgeting methods for beginners is the 50-30-20 rule. This approach divides your after-tax income into three categories:</p>
        
        <div class="budget-breakdown">
          <div class="budget-category needs">
            <div class="percentage">50%</div>
            <h3>Needs</h3>
            <p>Essential expenses you can't avoid</p>
            <ul>
              <li>Rent/Mortgage</li>
              <li>Utilities</li>
              <li>Groceries</li>
              <li>Transportation</li>
              <li>Insurance</li>
              <li>Minimum debt payments</li>
            </ul>
          </div>
          
          <div class="budget-category wants">
            <div class="percentage">30%</div>
            <h3>Wants</h3>
            <p>Discretionary spending for enjoyment</p>
            <ul>
              <li>Dining out</li>
              <li>Entertainment</li>
              <li>Hobbies</li>
              <li>Shopping</li>
              <li>Subscriptions</li>
              <li>Travel</li>
            </ul>
          </div>
          
          <div class="budget-category savings">
            <div class="percentage">20%</div>
            <h3>Savings & Debt</h3>
            <p>Future security and debt payoff</p>
            <ul>
              <li>Emergency fund</li>
              <li>Retirement savings</li>
              <li>Extra debt payments</li>
              <li>Investment accounts</li>
              <li>Goal-specific savings</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="lesson-section">
        <h2>Step-by-Step Budget Creation</h2>
        <div class="steps">
          <div class="step">
            <span class="step-number">1</span>
            <div class="step-content">
              <h4>Calculate Your After-Tax Income</h4>
              <p>Add up all money coming in after taxes and deductions</p>
            </div>
          </div>
          <div class="step">
            <span class="step-number">2</span>
            <div class="step-content">
              <h4>List All Your Expenses</h4>
              <p>Write down every expense from the past 2-3 months</p>
            </div>
          </div>
          <div class="step">
            <span class="step-number">3</span>
            <div class="step-content">
              <h4>Categorize Expenses</h4>
              <p>Sort expenses into needs, wants, and savings/debt</p>
            </div>
          </div>
          <div class="step">
            <span class="step-number">4</span>
            <div class="step-content">
              <h4>Apply the 50-30-20 Rule</h4>
              <p>Allocate your income according to the percentages</p>
            </div>
          </div>
          <div class="step">
            <span class="step-number">5</span>
            <div class="step-content">
              <h4>Adjust as Needed</h4>
              <p>Fine-tune categories to fit your specific situation</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="lesson-actions">
        <button class="btn btn--primary" onclick="completeLesson()">Mark Complete & Continue</button>
      </div>
    `
  },
  4: {
    title: "Needs vs. Wants",
    subtitle: "Distinguishing essential from discretionary spending",
    article: "Smart Spending Decisions",
    content: `
      <h1>Needs vs. Wants</h1>
      <p class="text-muted" style="font-size: 1.1rem; margin-bottom: var(--space-xl);">Distinguishing essential from discretionary spending</p>
      
      <div class="lesson-section">
        <h2>Understanding the Difference</h2>
        <p>One of the most important skills in budgeting is learning to distinguish between needs and wants. This distinction helps you prioritize spending and make better financial decisions.</p>
        
        <div class="needs-wants-comparison">
          <div class="comparison-card needs-card">
            <h3>🏠 Needs</h3>
            <p>Essential expenses required for survival and basic functioning</p>
            <ul class="lesson-list">
              <li>Housing (rent/mortgage)</li>
              <li>Food and groceries</li>
              <li>Transportation to work</li>
              <li>Healthcare and insurance</li>
              <li>Basic clothing</li>
              <li>Utilities (electricity, water, heat)</li>
            </ul>
          </div>
          
          <div class="comparison-card wants-card">
            <h3>🎯 Wants</h3>
            <p>Discretionary expenses that enhance lifestyle but aren't essential</p>
            <ul class="lesson-list">
              <li>Dining out and takeout</li>
              <li>Entertainment and hobbies</li>
              <li>Designer clothing</li>
              <li>Latest gadgets</li>
              <li>Vacation travel</li>
              <li>Premium subscriptions</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="lesson-actions">
        <button class="btn btn--primary" onclick="completeLesson()">Mark Complete & Continue</button>
      </div>
    `
  },
  5: {
    title: "Emergency Funds",
    subtitle: "Building financial security for unexpected expenses",
    article: "Emergency Fund Essentials",
    content: `
      <h1>Emergency Funds</h1>
      <p class="text-muted" style="font-size: 1.1rem; margin-bottom: var(--space-xl);">Building financial security for unexpected expenses</p>
      
      <div class="lesson-section">
        <h2>What is an Emergency Fund?</h2>
        <p>An emergency fund is money set aside specifically for unexpected expenses or financial emergencies. It acts as a financial safety net, protecting you from going into debt when life throws you a curveball.</p>
      </div>
      
      <div class="lesson-actions">
        <button class="btn btn--primary" onclick="completeLesson()">Mark Complete & Continue</button>
      </div>
    `
  },
  6: {
    title: "Setting Financial Goals",
    subtitle: "Creating and achieving your money objectives",
    article: "SMART Financial Goals",
    content: `
      <h1>Setting Financial Goals</h1>
      <p class="text-muted" style="font-size: 1.1rem; margin-bottom: var(--space-xl);">Creating and achieving your money objectives</p>
      
      <div class="lesson-section">
        <h2>Why Set Financial Goals?</h2>
        <p>Financial goals give your money purpose and direction. Without clear goals, it's easy to spend aimlessly and wonder where your money went.</p>
      </div>
      
      <div class="lesson-section">
        <h2>SMART Goal Framework</h2>
        <p>Use the SMART framework to create effective financial goals:</p>
        
        <div class="smart-framework">
          <div class="smart-item">
            <h4><span class="smart-letter">S</span>pecific</h4>
            <p>Clearly define what you want to achieve</p>
          </div>
          <div class="smart-item">
            <h4><span class="smart-letter">M</span>easurable</h4>
            <p>Include numbers so you can track progress</p>
          </div>
          <div class="smart-item">
            <h4><span class="smart-letter">A</span>chievable</h4>
            <p>Set realistic goals based on your income</p>
          </div>
          <div class="smart-item">
            <h4><span class="smart-letter">R</span>elevant</h4>
            <p>Ensure goals align with your values</p>
          </div>
          <div class="smart-item">
            <h4><span class="smart-letter">T</span>ime-bound</h4>
            <p>Set a specific deadline</p>
          </div>
        </div>
      </div>
      
      <div class="lesson-actions">
        <button class="btn btn--primary" onclick="completeLesson()">Mark Complete & Continue</button>
      </div>
    `
  },
  7: {
    title: "Reducing Expenses",
    subtitle: "Smart strategies to cut costs",
    article: "Expense Reduction Strategies",
    content: `
      <h1>Reducing Expenses</h1>
      <p class="text-muted" style="font-size: 1.1rem; margin-bottom: var(--space-xl);">Smart strategies to cut costs without sacrificing quality of life</p>
      
      <div class="lesson-section">
        <h2>Why Reduce Expenses?</h2>
        <p>Reducing expenses is often easier than increasing income and can have an immediate impact on your budget. Every dollar you save can be redirected toward your financial goals.</p>
      </div>
      
      <div class="lesson-actions">
        <button class="btn btn--primary" onclick="completeLesson()">Mark Complete & Continue</button>
      </div>
    `
  },
  8: {
    title: "Automating Savings",
    subtitle: "Set up systems to save money effortlessly",
    article: "Automated Savings Systems",
    content: `
      <h1>Automating Savings</h1>
      <p class="text-muted" style="font-size: 1.1rem; margin-bottom: var(--space-xl);">Set up systems to save money effortlessly</p>
      
      <div class="lesson-section">
        <h2>Why Automate Savings?</h2>
        <p>Automation removes the decision-making and willpower from saving money. When savings happen automatically, you're more likely to stick to your financial goals.</p>
      </div>
      
      <div class="lesson-actions">
        <button class="btn btn--primary" onclick="completeLesson()">Mark Complete & Continue</button>
      </div>
    `
  },
  9: {
    title: "Tracking Progress and Adjusting Budget",
    subtitle: "Monitor your financial journey",
    article: "Budget Review and Adjustment",
    content: `
      <h1>Tracking Progress and Adjusting Budget</h1>
      <p class="text-muted" style="font-size: 1.1rem; margin-bottom: var(--space-xl);">Monitor your financial journey and make necessary changes</p>
      
      <div class="lesson-section">
        <h2>Why Track Your Progress?</h2>
        <p>A budget isn't a "set it and forget it" tool. Regular tracking helps you stay on course and make adjustments when life changes.</p>
      </div>
      
      <div class="lesson-actions">
        <button class="btn btn--primary" onclick="completeLesson()">Mark Complete & Continue</button>
      </div>
    `
  },
  10: {
    title: "Developing a Saving Mindset",
    subtitle: "Build lasting habits and attitudes toward money",
    article: "Psychology of Saving",
    content: `
      <h1>Developing a Saving Mindset</h1>
      <p class="text-muted" style="font-size: 1.1rem; margin-bottom: var(--space-xl);">Build lasting habits and attitudes toward money</p>
      
      <div class="lesson-section">
        <h2>The Psychology of Money</h2>
        <p>Your relationship with money is shaped by emotions, experiences, and beliefs. Developing a healthy saving mindset is crucial for long-term financial success.</p>
      </div>
      
      <div class="lesson-section">
        <h2>Your Financial Journey Continues</h2>
        <div class="journey-next-steps">
          <h3>🎓 Congratulations!</h3>
          <p>You've completed the Budgeting & Saving course. You now have the knowledge and tools to take control of your finances.</p>
          
          <div class="next-steps">
            <h4>Next Steps:</h4>
            <ul class="lesson-list">
              <li>Create your first budget using the 50-30-20 rule</li>
              <li>Set up automatic savings for your emergency fund</li>
              <li>Choose one expense category to reduce this month</li>
              <li>Set a SMART financial goal and start working toward it</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="lesson-actions">
        <button class="btn btn--primary" onclick="completeLesson()">Complete Course!</button>
      </div>
    `
  }
  // All lessons complete!
};

// Lesson data for Investing 101 course (8 lessons)
const investingLessons = {
  1: {
    title: "Investment Fundamentals",
    subtitle: "Core concepts every investor should know",
    article: "Investing Basics",
    content: `
      <h1>Investment Fundamentals</h1>
      <p class="text-muted" style="font-size: 1.1rem; margin-bottom: var(--space-xl);">Core concepts every investor should know</p>
      <div class="lesson-section">
        <h2>What is Investing?</h2>
        <p>Investing is the act of allocating resources, usually money, with the expectation of generating an income or profit.</p>
      </div>
      <div class="lesson-actions">
        <button class="btn btn--primary" onclick="completeLesson()">Mark Complete & Continue</button>
      </div>
    `
  },
  2: {
    title: "Types of Investments",
    subtitle: "Stocks, bonds, funds and more",
    article: "Investment Vehicles",
    content: `
      <h1>Types of Investments</h1>
      <p class="text-muted" style="font-size: 1.1rem; margin-bottom: var(--space-xl);">Stocks, bonds, mutual funds, ETFs and more</p>
      <div class="lesson-actions">
        <button class="btn btn--primary" onclick="completeLesson()">Mark Complete & Continue</button>
      </div>
    `
  },
  3: {
    title: "Risk and Return",
    subtitle: "Balancing potential gains and losses",
    article: "Risk Basics",
    content: `
      <h1>Risk and Return</h1>
      <p class="text-muted" style="font-size: 1.1rem; margin-bottom: var(--space-xl);">Balancing potential gains and losses</p>
      <div class="lesson-actions">
        <button class="btn btn--primary" onclick="completeLesson()">Mark Complete & Continue</button>
      </div>
    `
  },
  4: {
    title: "Building a Portfolio",
    subtitle: "Asset allocation and diversification",
    article: "Portfolio Basics",
    content: `
      <h1>Building a Portfolio</h1>
      <p class="text-muted" style="font-size: 1.1rem; margin-bottom: var(--space-xl);">Asset allocation and diversification</p>
      <div class="lesson-actions">
        <button class="btn btn--primary" onclick="completeLesson()">Mark Complete & Continue</button>
      </div>
    `
  },
  5: {
    title: "Market Analysis",
    subtitle: "Fundamental and technical overviews",
    article: "Market Analysis",
    content: `
      <h1>Market Analysis</h1>
      <p class="text-muted" style="font-size: 1.1rem; margin-bottom: var(--space-xl);">Fundamental and technical overviews</p>
      <div class="lesson-actions">
        <button class="btn btn--primary" onclick="completeLesson()">Mark Complete & Continue</button>
      </div>
    `
  },
  6: {
    title: "Investment Strategies",
    subtitle: "Approaches for different goals",
    article: "Strategies",
    content: `
      <h1>Investment Strategies</h1>
      <p class="text-muted" style="font-size: 1.1rem; margin-bottom: var(--space-xl);">Approaches for different goals</p>
      <div class="lesson-actions">
        <button class="btn btn--primary" onclick="completeLesson()">Mark Complete & Continue</button>
      </div>
    `
  },
  7: {
    title: "Common Pitfalls",
    subtitle: "Mistakes to avoid",
    article: "Pitfalls",
    content: `
      <h1>Common Investment Pitfalls</h1>
      <p class="text-muted" style="font-size: 1.1rem; margin-bottom: var(--space-xl);">Mistakes to avoid</p>
      <div class="lesson-actions">
        <button class="btn btn--primary" onclick="completeLesson()">Mark Complete & Continue</button>
      </div>
    `
  },
  8: {
    title: "Long-term Planning",
    subtitle: "Staying the course",
    article: "Long-term Investing",
    content: `
      <h1>Long-term Planning</h1>
      <p class="text-muted" style="font-size: 1.1rem; margin-bottom: var(--space-xl);">Staying the course</p>
      <div class="lesson-actions">
        <button class="btn btn--primary" onclick="completeLesson()">Mark Complete & Continue</button>
      </div>
    `
  }
};

// Course datasets registry
const courseDatasets = {
  budgeting: {
    name: "Budgeting & Saving",
    courseUrl: "/course-budgeting-101.html",
    totalLessons: 10,
    lessons: budgetingLessons,
    lessonTitles: [
      "Introduction to Budgeting",
      "Tracking Income and Expenses",
      "Creating Your First Budget",
      "Needs vs. Wants",
      "Emergency Funds",
      "Setting Financial Goals",
      "Reducing Expenses",
      "Automating Savings",
      "Tracking Progress and Adjusting Budget",
      "Developing a Saving Mindset"
    ]
  },
  investing: {
    name: "Investing 101",
    courseUrl: "/course-investing-101.html",
    totalLessons: 8,
    lessons: investingLessons,
    lessonTitles: [
      "Investment Fundamentals",
      "Types of Investments",
      "Risk and Return",
      "Building a Portfolio",
      "Market Analysis",
      "Investment Strategies",
      "Common Pitfalls",
      "Long-term Planning"
    ]
  }
};

class LessonViewer {
  constructor() {
    const urlParams = new URLSearchParams(window.location.search);
    this.courseKey = urlParams.get('course') || 'budgeting';
    this.dataset = courseDatasets[this.courseKey] || courseDatasets.budgeting;
    this.currentLesson = 1;
    this.totalLessons = this.dataset.totalLessons;
    this.init();
  }

  init() {
    this.populateLessonSelect();
    this.updateCourseBreadcrumb();
    this.updateProgress();
    this.loadLesson(this.currentLesson);
    this.bindEvents();
  }

  bindEvents() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const lessonSelect = document.getElementById('lesson-select');

    prevBtn.addEventListener('click', () => this.previousLesson());
    nextBtn.addEventListener('click', () => this.nextLesson());
    lessonSelect.addEventListener('change', (e) => this.goToLesson(parseInt(e.target.value)));
  }

  loadLesson(lessonNumber) {
    const lesson = this.dataset.lessons[lessonNumber];
    if (!lesson) {
      // If lesson data doesn't exist, show placeholder
      document.getElementById('lesson-content').innerHTML = `
        <h1>Lesson ${lessonNumber}</h1>
        <p class="text-muted">This lesson content is being developed. Please check back soon!</p>
        <div class="lesson-actions">
          <button class="btn btn--primary" onclick="completeLesson()">Mark Complete & Continue</button>
        </div>
      `;
      return;
    }

    document.getElementById('lesson-content').innerHTML = lesson.content;
    document.getElementById('lesson-breadcrumb').textContent = `Lesson ${lessonNumber}`;
    document.getElementById('lesson-select').value = lessonNumber;
    
    this.updateProgress();
    this.updateNavigationButtons();
  }

  populateLessonSelect() {
    const select = document.getElementById('lesson-select');
    if (!select) return;
    select.innerHTML = '';
    this.dataset.lessonTitles.forEach((title, index) => {
      const option = document.createElement('option');
      const lessonNumber = index + 1;
      option.value = String(lessonNumber);
      option.textContent = `Lesson ${lessonNumber}: ${title}`;
      select.appendChild(option);
    });
  }

  updateCourseBreadcrumb() {
    const breadcrumbLink = document.getElementById('course-breadcrumb');
    if (breadcrumbLink) {
      breadcrumbLink.textContent = this.dataset.name;
      breadcrumbLink.setAttribute('href', this.dataset.courseUrl);
    }
    // Optionally update document title to reflect course
    try {
      if (document && document.title) {
        const base = 'Lesson - ' + this.dataset.name + ' - FutureFunds';
        document.title = base;
      }
    } catch (_) {}
  }

  updateProgress() {
    const progressPercent = (this.currentLesson / this.totalLessons) * 100;
    document.getElementById('progress-fill').style.width = `${progressPercent}%`;
    document.getElementById('progress-text').textContent = `Lesson ${this.currentLesson} of ${this.totalLessons}`;
  }

  updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.disabled = this.currentLesson === 1;
    nextBtn.disabled = this.currentLesson === this.totalLessons;
  }

  previousLesson() {
    if (this.currentLesson > 1) {
      this.currentLesson--;
      this.loadLesson(this.currentLesson);
    }
  }

  nextLesson() {
    if (this.currentLesson < this.totalLessons) {
      this.currentLesson++;
      this.loadLesson(this.currentLesson);
    }
  }

  goToLesson(lessonNumber) {
    if (lessonNumber >= 1 && lessonNumber <= this.totalLessons) {
      this.currentLesson = lessonNumber;
      
      // Update progress tracker
      if (window.progressTracker) {
        window.progressTracker.setCurrentLesson(lessonNumber);
      }
      
      this.loadLesson(this.currentLesson);
    }
  }
}

// Global functions for lesson interactions
window.completeLesson = function() {
  const viewer = window.lessonViewer;
  
  // Mark lesson as complete in progress tracker
  if (window.progressTracker) {
    window.progressTracker.markLessonComplete(viewer.currentLesson);
  }
  
  if (viewer.currentLesson < viewer.totalLessons) {
    viewer.nextLesson();
  } else {
    // Show course completion with achievements
    const achievements = window.progressTracker ? window.progressTracker.getAchievements() : [];
    const courseName = viewer.dataset.name;
    const completionMessage = `
      🎉 Congratulations! You have completed the ${courseName} course!
      
      ${achievements.length > 0 ? 'Achievements Unlocked:\n' + achievements.map(a => `${a.icon} ${a.title}`).join('\n') : ''}
      
      Keep going on your financial journey!
    `;
    alert(completionMessage);
  }
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get lesson number from URL parameter if provided
  const urlParams = new URLSearchParams(window.location.search);
  const startLesson = parseInt(urlParams.get('lesson')) || 1;
  
  window.lessonViewer = new LessonViewer();
  if (startLesson !== 1) {
    window.lessonViewer.goToLesson(startLesson);
  }
});

export default LessonViewer;
