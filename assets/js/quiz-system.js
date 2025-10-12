/**
 * Quiz System for FutureFunds Courses
 * Handles pre-quizzes and post-quizzes with scoring and explanations
 */

// Quiz data for all lessons
const quizData = {
  1: {
    pre: {
      title: "Pre-Quiz: Introduction to Budgeting",
      questions: [
        {
          question: "Which statement best defines the purpose of a budget?",
          options: [
            "To track spending and prioritize financial goals",
            "To maximize short-term consumption",
            "To avoid paying bills",
            "To invest only in high-risk assets"
          ],
          correct: 0,
          explanation: "✅ Correct; a budget helps organize finances and meet goals."
        },
        {
          question: "Which of the following is considered irregular income?",
          options: [
            "Weekly paycheck",
            "Annual tax refund",
            "Monthly salary",
            "Social security benefits"
          ],
          correct: 1,
          explanation: "✅ Correct; tax refunds are not guaranteed or consistent."
        },
        {
          question: "True or False: A budget should adjust based on changes in income or expenses.",
          options: [
            "True",
            "False"
          ],
          correct: 0,
          explanation: "✅ Correct; budgets must adapt to reflect new financial realities."
        },
        {
          question: "Which scenario demonstrates a negative cash flow?",
          options: [
            "Spending $2,500 when earning $2,000",
            "Saving $500 from $2,000 income",
            "Spending $1,500 when earning $2,000",
            "All expenses exactly match income"
          ],
          correct: 0,
          explanation: "✅ Correct; expenses exceed income."
        },
        {
          question: "What is the main reason a person might fail to stick to a budget?",
          options: [
            "Lack of realistic planning",
            "Overestimating income",
            "Unexpected expenses",
            "All of the above"
          ],
          correct: 3,
          explanation: "✅ Correct; multiple factors can cause budget failure."
        }
      ]
    },
    post: {
      title: "Post-Quiz: Introduction to Budgeting",
      questions: [
        {
          question: "Which pair correctly identifies the components of a budget?",
          options: [
            "Income and Expenses",
            "Credit and Investments",
            "Wants and Leisure",
            "Assets and Liabilities"
          ],
          correct: 0,
          explanation: "✅ Correct; budgets balance money earned and money spent."
        },
        {
          question: "If a person spends $1,200 on rent, $300 on groceries, $200 on entertainment, and earns $2,000 monthly, what is their remaining balance?",
          options: [
            "$200",
            "$300",
            "$400",
            "$500"
          ],
          correct: 1,
          explanation: "✅ Correct; $2,000 – ($1,200 + $300 + $200) = $300."
        },
        {
          question: "True or False: Budgets are only useful for individuals with debt.",
          options: [
            "True",
            "False"
          ],
          correct: 1,
          explanation: "✅ Correct; budgeting helps anyone manage money and reach goals."
        },
        {
          question: "Which strategy is most effective for avoiding overspending in a budget?",
          options: [
            "Tracking all expenses, including small purchases",
            "Ignoring variable expenses",
            "Estimating income roughly",
            "Spending first, saving later"
          ],
          correct: 0,
          explanation: "✅ Correct; full tracking ensures awareness and control."
        },
        {
          question: "What is the potential impact of failing to track income and expenses accurately?",
          options: [
            "Overspending",
            "Reduced ability to save",
            "Financial stress",
            "All of the above"
          ],
          correct: 3,
          explanation: "✅ Correct; all consequences result from poor tracking."
        }
      ]
    }
  },
  2: {
    pre: {
      title: "Pre-Quiz: Tracking Income and Expenses",
      questions: [
        {
          question: "Which of the following is an example of variable income?",
          options: [
            "Monthly salary",
            "Freelance project payment",
            "Social security check",
            "Pension"
          ],
          correct: 1,
          explanation: "✅ Correct; freelance project payments vary and are irregular."
        },
        {
          question: "True or False: Tracking small expenses is less important than tracking large expenses.",
          options: [
            "True",
            "False"
          ],
          correct: 1,
          explanation: "✅ Correct; even small purchases impact total budget."
        },
        {
          question: "Which tool is most accurate for recording daily expenses?",
          options: [
            "Budgeting app",
            "Spreadsheet",
            "Manual notebook",
            "All of the above"
          ],
          correct: 3,
          explanation: "✅ Correct; all methods can track expenses effectively."
        },
        {
          question: "Fixed expenses typically:",
          options: [
            "Change each month",
            "Remain constant each month",
            "Are always optional",
            "Include entertainment"
          ],
          correct: 1,
          explanation: "✅ Correct; fixed expenses are recurring and predictable."
        },
        {
          question: "Which of the following is NOT an example of an expense?",
          options: [
            "Rent",
            "Utilities",
            "Salary",
            "Groceries"
          ],
          correct: 2,
          explanation: "✅ Correct; salary is income, not an expense."
        }
      ]
    },
    post: {
      title: "Post-Quiz: Tracking Income and Expenses",
      questions: [
        {
          question: "True or False: Understanding cash flow requires tracking both income and expenses.",
          options: [
            "True",
            "False"
          ],
          correct: 0,
          explanation: "✅ Correct; both income and expenses must be tracked to understand cash flow."
        },
        {
          question: "If your total monthly expenses are $1,800 and income is $2,200, what is your surplus?",
          options: [
            "$200",
            "$300",
            "$400",
            "$500"
          ],
          correct: 2,
          explanation: "✅ Correct; $2,200 – $1,800 = $400 remaining."
        },
        {
          question: "Variable expenses include:",
          options: [
            "Rent",
            "Utilities",
            "Dining out",
            "Insurance"
          ],
          correct: 2,
          explanation: "✅ Correct; dining out varies month to month."
        },
        {
          question: "Monitoring expenses regularly helps you:",
          options: [
            "Avoid financial surprises",
            "Track spending patterns",
            "Adjust budget allocations",
            "All of the above"
          ],
          correct: 3,
          explanation: "✅ Correct; all listed benefits result from regular monitoring."
        },
        {
          question: "True or False: Ignoring small discretionary expenses does not affect long-term budgeting.",
          options: [
            "True",
            "False"
          ],
          correct: 1,
          explanation: "✅ Correct; small expenses add up over time and impact budgets."
        }
      ]
    }
  },
  3: {
    pre: {
      title: "Pre-Quiz: Creating Your First Budget",
      questions: [
        {
          question: "According to the 50-30-20 rule, what portion is allocated to savings?",
          options: [
            "50%",
            "30%",
            "20%",
            "10%"
          ],
          correct: 2,
          explanation: "✅ Correct; 20% is allocated to savings and debt repayment."
        },
        {
          question: "True or False: A budget should only account for monthly fixed expenses.",
          options: [
            "True",
            "False"
          ],
          correct: 1,
          explanation: "✅ Correct; budgets should include all expenses, both fixed and variable."
        },
        {
          question: "Which of the following is classified as a 'want'?",
          options: [
            "Rent",
            "Dining out",
            "Utilities",
            "Groceries"
          ],
          correct: 1,
          explanation: "✅ Correct; dining out is discretionary spending."
        },
        {
          question: "What is the purpose of dividing a budget into categories?",
          options: [
            "To increase debt",
            "To allocate funds efficiently",
            "To avoid saving",
            "None of the above"
          ],
          correct: 1,
          explanation: "✅ Correct; categorization helps allocate money efficiently."
        },
        {
          question: "True or False: The 50-30-20 rule is flexible and can be adjusted based on personal goals.",
          options: [
            "True",
            "False"
          ],
          correct: 0,
          explanation: "✅ Correct; the rule can be adapted to individual circumstances."
        }
      ]
    },
    post: {
      title: "Post-Quiz: Creating Your First Budget",
      questions: [
        {
          question: "If someone earns $4,000 per month, how much should be allocated to 'needs' using the 50-30-20 rule?",
          options: [
            "$1,000",
            "$2,000",
            "$2,500",
            "$3,000"
          ],
          correct: 1,
          explanation: "✅ Correct; 50% of $4,000 = $2,000 for needs."
        },
        {
          question: "True or False: Savings should be prioritized after discretionary spending.",
          options: [
            "True",
            "False"
          ],
          correct: 1,
          explanation: "✅ Correct; savings should be prioritized before discretionary spending."
        },
        {
          question: "Which of the following is a key benefit of using a structured budget?",
          options: [
            "Avoiding planning",
            "Tracking progress toward goals",
            "Ignoring expenses",
            "Increasing debt"
          ],
          correct: 1,
          explanation: "✅ Correct; structured budgets help track progress toward financial goals."
        },
        {
          question: "Fixed expenses in a budget typically include:",
          options: [
            "Rent and insurance",
            "Entertainment and dining out",
            "Vacation and gifts",
            "Impulse purchases"
          ],
          correct: 0,
          explanation: "✅ Correct; rent and insurance are predictable fixed expenses."
        },
        {
          question: "True or False: Categorizing expenses allows you to see where adjustments are needed.",
          options: [
            "True",
            "False"
          ],
          correct: 0,
          explanation: "✅ Correct; categorization reveals areas for potential adjustments."
        }
      ]
    }
  },
  4: {
    pre: {
      title: "Pre-Quiz: Needs vs. Wants",
      questions: [
        {
          question: "Which of the following is considered a 'need'?",
          options: [
            "Designer clothing",
            "Basic shelter",
            "Premium cable package",
            "Latest smartphone"
          ],
          correct: 1,
          explanation: "✅ Correct; basic shelter is essential for survival."
        },
        {
          question: "True or False: All food expenses are considered needs.",
          options: [
            "True",
            "False"
          ],
          correct: 1,
          explanation: "✅ Correct; basic groceries are needs, but dining out is often a want."
        },
        {
          question: "Which strategy helps distinguish between needs and wants?",
          options: [
            "Buy everything immediately",
            "Ask 'What happens if I don't buy this?'",
            "Only consider the price",
            "Follow what friends are buying"
          ],
          correct: 1,
          explanation: "✅ Correct; this question helps evaluate necessity."
        },
        {
          question: "A smartphone can be both a need and a want depending on:",
          options: [
            "The color",
            "The brand",
            "Your specific situation and usage",
            "The price"
          ],
          correct: 2,
          explanation: "✅ Correct; context determines whether it's essential or discretionary."
        },
        {
          question: "What is the 24-hour rule?",
          options: [
            "Shop for 24 hours straight",
            "Wait 24 hours before making non-essential purchases",
            "Return items within 24 hours",
            "Budget every 24 hours"
          ],
          correct: 1,
          explanation: "✅ Correct; this helps avoid impulse purchases."
        }
      ]
    },
    post: {
      title: "Post-Quiz: Needs vs. Wants",
      questions: [
        {
          question: "Which expense category should be prioritized in a budget?",
          options: [
            "Entertainment",
            "Needs",
            "Wants",
            "Luxury items"
          ],
          correct: 1,
          explanation: "✅ Correct; needs should always be prioritized first."
        },
        {
          question: "True or False: It's okay to spend on wants after covering needs and savings.",
          options: [
            "True",
            "False"
          ],
          correct: 0,
          explanation: "✅ Correct; balanced budgets include room for discretionary spending."
        },
        {
          question: "What is opportunity cost in spending decisions?",
          options: [
            "The price of an item",
            "What you give up by making a purchase",
            "The time spent shopping",
            "The store's profit margin"
          ],
          correct: 1,
          explanation: "✅ Correct; opportunity cost is what you sacrifice for each choice."
        },
        {
          question: "Which is the best approach to handling wants?",
          options: [
            "Never buy anything you want",
            "Buy everything you want immediately",
            "Budget for some wants after covering needs",
            "Only buy wants on sale"
          ],
          correct: 2,
          explanation: "✅ Correct; balanced budgeting includes planned discretionary spending."
        },
        {
          question: "True or False: Needs and wants are the same for everyone.",
          options: [
            "True",
            "False"
          ],
          correct: 1,
          explanation: "✅ Correct; needs and wants vary based on individual circumstances."
        }
      ]
    }
  },
  5: {
    pre: {
      title: "Pre-Quiz: Emergency Funds",
      questions: [
        {
          question: "What is the primary purpose of an emergency fund?",
          options: [
            "To buy luxury items",
            "To cover unexpected expenses",
            "To invest in stocks",
            "To pay regular bills"
          ],
          correct: 1,
          explanation: "✅ Correct; emergency funds provide financial protection for unexpected situations."
        },
        {
          question: "How much should a starter emergency fund contain?",
          options: [
            "$500",
            "$1,000",
            "$5,000",
            "$10,000"
          ],
          correct: 1,
          explanation: "✅ Correct; $1,000 covers most minor emergencies."
        },
        {
          question: "True or False: Emergency funds should be easily accessible.",
          options: [
            "True",
            "False"
          ],
          correct: 0,
          explanation: "✅ Correct; you need quick access during emergencies."
        },
        {
          question: "Which is NOT typically considered an emergency?",
          options: [
            "Car repair",
            "Medical bill",
            "Vacation",
            "Job loss"
          ],
          correct: 2,
          explanation: "✅ Correct; vacations are planned expenses, not emergencies."
        },
        {
          question: "Where should emergency funds be stored?",
          options: [
            "Under your mattress",
            "In a separate savings account",
            "In stocks",
            "In your checking account"
          ],
          correct: 1,
          explanation: "✅ Correct; separate savings accounts keep emergency funds safe and accessible."
        }
      ]
    },
    post: {
      title: "Post-Quiz: Emergency Funds",
      questions: [
        {
          question: "A full emergency fund should cover how many months of expenses?",
          options: [
            "1-2 months",
            "3-6 months",
            "12 months",
            "24 months"
          ],
          correct: 1,
          explanation: "✅ Correct; 3-6 months provides adequate protection for most situations."
        },
        {
          question: "True or False: You should stop all other savings to build your emergency fund first.",
          options: [
            "True",
            "False"
          ],
          correct: 1,
          explanation: "✅ Correct; you can build emergency funds alongside other goals, though it should be prioritized."
        },
        {
          question: "What's the best way to build an emergency fund?",
          options: [
            "Save large amounts irregularly",
            "Wait for a windfall",
            "Make small, consistent contributions",
            "Use credit cards instead"
          ],
          correct: 2,
          explanation: "✅ Correct; consistent small amounts build the habit and add up over time."
        },
        {
          question: "When should you use your emergency fund?",
          options: [
            "For any unexpected expense",
            "Only for true emergencies",
            "For planned purchases",
            "For investment opportunities"
          ],
          correct: 1,
          explanation: "✅ Correct; preserve emergency funds for genuine unexpected situations."
        },
        {
          question: "True or False: Once you use your emergency fund, you should replenish it as soon as possible.",
          options: [
            "True",
            "False"
          ],
          correct: 0,
          explanation: "✅ Correct; maintaining your emergency fund ensures continued financial protection."
        }
      ]
    }
  },
  6: {
    pre: {
      title: "Pre-Quiz: Setting Financial Goals",
      questions: [
        {
          question: "What does the 'S' in SMART goals stand for?",
          options: ["Simple", "Specific", "Structured", "Strategic"],
          correct: 1,
          explanation: "✅ Correct; Specific means clearly defining what you want to achieve."
        },
        {
          question: "True or False: Financial goals should have deadlines.",
          options: ["True", "False"],
          correct: 0,
          explanation: "✅ Correct; time-bound goals create urgency and accountability."
        },
        {
          question: "Which is an example of a measurable goal?",
          options: ["Save money", "Save $5,000", "Be wealthy", "Have more money"],
          correct: 1,
          explanation: "✅ Correct; $5,000 is a specific, measurable amount."
        },
        {
          question: "Short-term financial goals typically cover what time period?",
          options: ["1-12 months", "1-5 years", "5-10 years", "10+ years"],
          correct: 0,
          explanation: "✅ Correct; short-term goals are achieved within a year."
        },
        {
          question: "Why are financial goals important?",
          options: ["They guarantee wealth", "They provide direction and motivation", "They eliminate all financial risk", "They make budgeting unnecessary"],
          correct: 1,
          explanation: "✅ Correct; goals give purpose and direction to your financial decisions."
        }
      ]
    },
    post: {
      title: "Post-Quiz: Setting Financial Goals",
      questions: [
        {
          question: "A SMART goal should be all of the following EXCEPT:",
          options: ["Specific", "Measurable", "Spontaneous", "Time-bound"],
          correct: 2,
          explanation: "✅ Correct; SMART goals are planned, not spontaneous."
        },
        {
          question: "True or False: It's better to have one big goal than several smaller goals.",
          options: ["True", "False"],
          correct: 1,
          explanation: "✅ Correct; multiple smaller goals provide more frequent motivation and success."
        },
        {
          question: "Which goal is most achievable for someone earning $40,000 annually?",
          options: ["Save $50,000 in one year", "Save $2,000 in one year", "Buy a $100,000 house with cash", "Retire in 2 years"],
          correct: 1,
          explanation: "✅ Correct; $2,000 represents 5% of annual income, which is achievable."
        },
        {
          question: "What should you do if you're not making progress toward a goal?",
          options: ["Give up completely", "Ignore it and hope it improves", "Review and adjust the goal", "Set a bigger goal"],
          correct: 2,
          explanation: "✅ Correct; goals should be reviewed and adjusted as needed."
        },
        {
          question: "True or False: Financial goals should align with your personal values.",
          options: ["True", "False"],
          correct: 0,
          explanation: "✅ Correct; goals aligned with values are more motivating and sustainable."
        }
      ]
    }
  },
  7: {
    pre: {
      title: "Pre-Quiz: Reducing Expenses",
      questions: [
        {
          question: "Which type of expense reduction typically has the biggest impact?",
          options: ["Variable expenses", "Fixed expenses", "Entertainment", "Food"],
          correct: 1,
          explanation: "✅ Correct; fixed expense reductions provide ongoing monthly savings."
        },
        {
          question: "True or False: You should cut all entertainment expenses to save money.",
          options: ["True", "False"],
          correct: 1,
          explanation: "✅ Correct; balanced budgets include some entertainment for quality of life."
        },
        {
          question: "What's the first step in reducing expenses?",
          options: ["Cut everything by 50%", "Track where your money goes", "Cancel all subscriptions", "Stop eating out"],
          correct: 1,
          explanation: "✅ Correct; you need to know where money goes before you can reduce it."
        },
        {
          question: "Which housing strategy can significantly reduce expenses?",
          options: ["Buy more expensive furniture", "Get a roommate", "Increase rent", "Move to a bigger place"],
          correct: 1,
          explanation: "✅ Correct; sharing housing costs can dramatically reduce expenses."
        },
        {
          question: "True or False: Generic brands are always lower quality than name brands.",
          options: ["True", "False"],
          correct: 1,
          explanation: "✅ Correct; many generic products have similar quality at lower prices."
        }
      ]
    },
    post: {
      title: "Post-Quiz: Reducing Expenses",
      questions: [
        {
          question: "The 30-day expense tracking challenge helps you:",
          options: ["Spend more money", "Identify spending patterns", "Increase income", "Avoid budgeting"],
          correct: 1,
          explanation: "✅ Correct; tracking reveals where your money actually goes."
        },
        {
          question: "True or False: Reducing expenses means you can never enjoy life.",
          options: ["True", "False"],
          correct: 1,
          explanation: "✅ Correct; smart expense reduction focuses on waste, not all enjoyment."
        },
        {
          question: "Which subscription strategy saves the most money?",
          options: ["Subscribe to everything", "Cancel unused subscriptions", "Upgrade all subscriptions", "Share no subscriptions"],
          correct: 1,
          explanation: "✅ Correct; unused subscriptions are pure waste."
        },
        {
          question: "What's the benefit of reducing transportation costs?",
          options: ["It's usually impossible", "It only saves a few dollars", "It can free up hundreds monthly", "It requires buying a new car"],
          correct: 2,
          explanation: "✅ Correct; transportation is often the second-largest expense after housing."
        },
        {
          question: "True or False: Every dollar saved on expenses can be redirected to financial goals.",
          options: ["True", "False"],
          correct: 0,
          explanation: "✅ Correct; expense reduction directly increases available money for goals."
        }
      ]
    }
  },
  8: {
    pre: {
      title: "Pre-Quiz: Automating Savings",
      questions: [
        {
          question: "What is the main benefit of automating savings?",
          options: ["It increases your income", "It removes the need for willpower", "It guarantees investment returns", "It eliminates all expenses"],
          correct: 1,
          explanation: "✅ Correct; automation makes saving effortless and consistent."
        },
        {
          question: "True or False: You should automate savings before paying bills.",
          options: ["True", "False"],
          correct: 0,
          explanation: "✅ Correct; 'pay yourself first' ensures savings happen before other spending."
        },
        {
          question: "Which is an example of automated savings?",
          options: ["Manually transferring money weekly", "Direct deposit split", "Checking account balance daily", "Paying bills by hand"],
          correct: 1,
          explanation: "✅ Correct; direct deposit splits automatically save money."
        },
        {
          question: "Round-up programs save money by:",
          options: ["Rounding down purchases", "Rounding up purchases and saving the difference", "Eliminating purchases", "Increasing income"],
          correct: 1,
          explanation: "✅ Correct; round-up programs save the 'change' from each purchase."
        },
        {
          question: "True or False: Automated savings only work for high-income earners.",
          options: ["True", "False"],
          correct: 1,
          explanation: "✅ Correct; automation works for any income level, even small amounts."
        }
      ]
    },
    post: {
      title: "Post-Quiz: Automating Savings",
      questions: [
        {
          question: "The 'pay yourself first' principle means:",
          options: ["Pay bills before saving", "Save money before other expenses", "Only pay yourself", "Avoid all payments"],
          correct: 1,
          explanation: "✅ Correct; prioritizing savings ensures it happens consistently."
        },
        {
          question: "True or False: You should automate savings to multiple goals simultaneously.",
          options: ["True", "False"],
          correct: 0,
          explanation: "✅ Correct; you can automate different amounts to different savings goals."
        },
        {
          question: "What's the best day to schedule automatic transfers?",
          options: ["Random days", "The day after payday", "Month-end", "When you remember"],
          correct: 1,
          explanation: "✅ Correct; transferring right after payday ensures the money is available."
        },
        {
          question: "Automated savings help build wealth because they:",
          options: ["Increase investment returns", "Ensure consistent saving habits", "Eliminate all expenses", "Guarantee income growth"],
          correct: 1,
          explanation: "✅ Correct; consistency is key to long-term wealth building."
        },
        {
          question: "True or False: Once you set up automated savings, you never need to review or adjust them.",
          options: ["True", "False"],
          correct: 1,
          explanation: "✅ Correct; you should periodically review and adjust automation as your situation changes."
        }
      ]
    }
  },
  9: {
    pre: {
      title: "Pre-Quiz: Tracking Progress and Adjusting Budget",
      questions: [
        {
          question: "How often should you review your budget?",
          options: ["Never", "Once a year", "Monthly", "Only when problems arise"],
          correct: 2,
          explanation: "✅ Correct; monthly reviews help you stay on track and make timely adjustments."
        },
        {
          question: "True or False: A good budget never needs to be changed.",
          options: ["True", "False"],
          correct: 1,
          explanation: "✅ Correct; budgets should be adjusted as life circumstances change."
        },
        {
          question: "What is a savings rate?",
          options: ["Interest earned on savings", "Percentage of income saved", "Speed of saving money", "Type of savings account"],
          correct: 1,
          explanation: "✅ Correct; savings rate is the percentage of income you save each month."
        },
        {
          question: "When should you adjust your budget?",
          options: ["Never", "Only when you get a raise", "When consistently over or under spending in categories", "Only during emergencies"],
          correct: 2,
          explanation: "✅ Correct; consistent variances indicate the budget needs adjustment."
        },
        {
          question: "True or False: Tracking progress is only about looking at numbers.",
          options: ["True", "False"],
          correct: 1,
          explanation: "✅ Correct; progress tracking also involves understanding patterns and behaviors."
        }
      ]
    },
    post: {
      title: "Post-Quiz: Tracking Progress and Adjusting Budget",
      questions: [
        {
          question: "A healthy savings rate is typically:",
          options: ["5% or less", "10-15%", "20% or more", "50% or more"],
          correct: 2,
          explanation: "✅ Correct; financial experts recommend saving 20% or more of income."
        },
        {
          question: "True or False: Net worth is calculated as assets minus debts.",
          options: ["True", "False"],
          correct: 0,
          explanation: "✅ Correct; net worth = total assets - total debts."
        },
        {
          question: "What should you do if you consistently overspend in a category?",
          options: ["Ignore it", "Increase the budget for that category", "Feel guilty", "Stop budgeting"],
          correct: 1,
          explanation: "✅ Correct; adjust the budget to reflect realistic spending patterns."
        },
        {
          question: "Weekly budget check-ins should take about:",
          options: ["3 hours", "1 hour", "15 minutes", "All day"],
          correct: 2,
          explanation: "✅ Correct; brief weekly reviews keep you on track without being burdensome."
        },
        {
          question: "True or False: Budget adjustments mean you've failed at budgeting.",
          options: ["True", "False"],
          correct: 1,
          explanation: "✅ Correct; adjustments show you're actively managing your finances responsibly."
        }
      ]
    }
  },
  10: {
    pre: {
      title: "Pre-Quiz: Developing a Saving Mindset",
      questions: [
        {
          question: "A scarcity mindset about money typically includes thinking:",
          options: ["I can build wealth over time", "There's never enough money", "I can learn to manage money better", "Saving is investing in my future"],
          correct: 1,
          explanation: "✅ Correct; scarcity mindset focuses on lack and limitation."
        },
        {
          question: "True or False: Your relationship with money is influenced by emotions and experiences.",
          options: ["True", "False"],
          correct: 0,
          explanation: "✅ Correct; psychology plays a major role in financial behavior."
        },
        {
          question: "Which is an example of an abundance mindset?",
          options: ["I'll never have enough", "Rich people are just lucky", "Every dollar saved matters", "Saving is too hard"],
          correct: 2,
          explanation: "✅ Correct; abundance mindset recognizes that small actions compound over time."
        },
        {
          question: "The 24-hour rule helps with:",
          options: ["Increasing income", "Avoiding impulse purchases", "Paying bills faster", "Calculating interest"],
          correct: 1,
          explanation: "✅ Correct; waiting 24 hours helps you make more thoughtful spending decisions."
        },
        {
          question: "True or False: People who are good with money never want to spend it.",
          options: ["True", "False"],
          correct: 1,
          explanation: "✅ Correct; good money management includes planned spending on things you value."
        }
      ]
    },
    post: {
      title: "Post-Quiz: Developing a Saving Mindset",
      questions: [
        {
          question: "Building positive money habits involves:",
          options: ["Never spending money", "Thinking before purchases", "Avoiding all financial planning", "Only focusing on income"],
          correct: 1,
          explanation: "✅ Correct; mindful spending decisions are key to good money habits."
        },
        {
          question: "True or False: You need to make a lot of money to start building wealth.",
          options: ["True", "False"],
          correct: 1,
          explanation: "✅ Correct; wealth building is more about habits than income level."
        },
        {
          question: "Which strategy helps maintain motivation for financial goals?",
          options: ["Hiding your goals", "Visualizing your goals", "Avoiding progress tracking", "Setting impossible goals"],
          correct: 1,
          explanation: "✅ Correct; visualization keeps goals top-of-mind and motivating."
        },
        {
          question: "The most important factor in long-term financial success is:",
          options: ["High income", "Perfect timing", "Consistent habits", "Luck"],
          correct: 2,
          explanation: "✅ Correct; consistent good habits compound over time to create wealth."
        },
        {
          question: "True or False: Completing this course means you're now a financial expert.",
          options: ["True", "False"],
          correct: 1,
          explanation: "✅ Correct; this course provides a foundation, but financial learning is ongoing."
        }
      ]
    }
  }
};

class QuizSystem {
  constructor() {
    this.currentQuiz = null;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.userAnswers = [];
    this.quizType = null; // 'pre' or 'post'
    this.lessonNumber = null;
  }

  startQuiz(lessonNumber, type) {
    this.lessonNumber = lessonNumber;
    this.quizType = type;
    this.currentQuiz = quizData[lessonNumber]?.[type];
    
    if (!this.currentQuiz) {
      alert(`Quiz not available for Lesson ${lessonNumber}`);
      return;
    }

    this.currentQuestionIndex = 0;
    this.score = 0;
    this.userAnswers = [];
    
    this.showQuizInterface();
    this.displayQuestion();
  }

  showQuizInterface() {
    const content = document.getElementById('lesson-content');
    content.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-header">
          <h1>${this.currentQuiz.title}</h1>
          <div class="quiz-progress">
            <div class="quiz-progress-bar">
              <div class="quiz-progress-fill" id="quiz-progress-fill"></div>
            </div>
            <span class="quiz-progress-text" id="quiz-progress-text">Question 1 of ${this.currentQuiz.questions.length}</span>
          </div>
        </div>
        
        <div class="quiz-content" id="quiz-content">
          <!-- Question content will be inserted here -->
        </div>
        
        <div class="quiz-actions" id="quiz-actions">
          <button class="btn btn--secondary" id="quiz-prev" onclick="quizSystem.previousQuestion()" disabled>Previous</button>
          <button class="btn btn--primary" id="quiz-next" onclick="quizSystem.nextQuestion()" disabled>Next</button>
        </div>
      </div>
    `;
  }

  displayQuestion() {
    const question = this.currentQuiz.questions[this.currentQuestionIndex];
    const quizContent = document.getElementById('quiz-content');
    
    quizContent.innerHTML = `
      <div class="question-container">
        <div class="question-number">Question ${this.currentQuestionIndex + 1}</div>
        <h2 class="question-text">${question.question}</h2>
        
        <div class="options-container">
          ${question.options.map((option, index) => {
            const id = `q${this.currentQuestionIndex}-opt${index}`;
            return `
            <label class="option-label" data-index="${index}" for="${id}">
              <input id="${id}" type="radio" name="question-${this.currentQuestionIndex}" value="${index}">
              <span class="option-text">${option}</span>
            </label>`;
          }).join('')}
        </div>
      </div>
    `;

    // Restore previous answer if exists and selected state
    const previousAnswer = this.userAnswers[this.currentQuestionIndex];
    if (previousAnswer !== undefined) {
      const name = `question-${this.currentQuestionIndex}`;
      const radio = document
        .getElementById('quiz-content')
        .querySelector(`input[type="radio"][name="${name}"][value="${previousAnswer}"]`);
      if (radio) radio.checked = true;
      // Toggle selected class for labels
      const labels = document.getElementById('quiz-content').querySelectorAll('.option-label');
      labels.forEach((label, idx) => {
        label.classList.toggle('selected', idx === previousAnswer);
      });
      document.getElementById('quiz-next').disabled = false;
    }

    // Bind change handlers to radios (most reliable across browsers)
    const radios = quizContent.querySelectorAll(`input[type="radio"][name="question-${this.currentQuestionIndex}"]`);
    radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        const idx = Number(radio.value);
        this.selectAnswer(idx);
      });
    });

    this.updateQuizProgress();
    this.updateNavigationButtons();
  }

  selectAnswer(answerIndex) {
    this.userAnswers[this.currentQuestionIndex] = answerIndex;

    // Scope to current question container
    const quizContent = document.getElementById('quiz-content');

    // Update the radio button for the current question only
    const radio = quizContent.querySelector(`input[type="radio"][name="question-${this.currentQuestionIndex}"][value="${answerIndex}"]`);
    if (radio) {
      radio.checked = true;
    }

    // Toggle selected class on labels for visual feedback
    const labels = quizContent.querySelectorAll('.option-label');
    labels.forEach((label, idx) => {
      label.classList.toggle('selected', idx === answerIndex);
    });

    document.getElementById('quiz-next').disabled = false;
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.currentQuiz.questions.length - 1) {
      this.currentQuestionIndex++;
      this.displayQuestion();
    } else {
      this.finishQuiz();
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.displayQuestion();
    }
  }

  updateQuizProgress() {
    const progress = ((this.currentQuestionIndex + 1) / this.currentQuiz.questions.length) * 100;
    document.getElementById('quiz-progress-fill').style.width = `${progress}%`;
    document.getElementById('quiz-progress-text').textContent = 
      `Question ${this.currentQuestionIndex + 1} of ${this.currentQuiz.questions.length}`;
  }

  updateNavigationButtons() {
    const prevBtn = document.getElementById('quiz-prev');
    const nextBtn = document.getElementById('quiz-next');
    
    prevBtn.disabled = this.currentQuestionIndex === 0;
    
    if (this.currentQuestionIndex === this.currentQuiz.questions.length - 1) {
      nextBtn.textContent = 'Finish Quiz';
    } else {
      nextBtn.textContent = 'Next';
    }
  }

  finishQuiz() {
    // Calculate score
    this.score = 0;
    this.userAnswers.forEach((answer, index) => {
      if (answer === this.currentQuiz.questions[index].correct) {
        this.score++;
      }
    });

    // Save quiz score to progress tracker
    if (window.progressTracker) {
      window.progressTracker.saveQuizScore(
        this.lessonNumber, 
        this.quizType, 
        this.score, 
        this.currentQuiz.questions.length
      );
    }

    this.showResults();
  }

  showResults() {
    const percentage = Math.round((this.score / this.currentQuiz.questions.length) * 100);
    const passed = percentage >= 70;
    
    const content = document.getElementById('lesson-content');
    content.innerHTML = `
      <div class="quiz-results">
        <div class="results-header">
          <h1>Quiz Results</h1>
          <div class="score-display ${passed ? 'passed' : 'failed'}">
            <div class="score-circle">
              <span class="score-percentage">${percentage}%</span>
            </div>
            <div class="score-details">
              <p class="score-text">${this.score} out of ${this.currentQuiz.questions.length} correct</p>
              <p class="pass-status ${passed ? 'passed' : 'failed'}">
                ${passed ? '✅ Passed' : '❌ Need to retry (70% required)'}
              </p>
            </div>
          </div>
        </div>
        
        <div class="detailed-results">
          <h2>Detailed Results</h2>
          ${this.currentQuiz.questions.map((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correct;
            
            return `
              <div class="result-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="result-header">
                  <span class="result-icon">${isCorrect ? '✅' : '❌'}</span>
                  <span class="question-number">Question ${index + 1}</span>
                </div>
                <p class="result-question">${question.question}</p>
                <p class="result-answer">
                  <strong>Your answer:</strong> ${question.options[userAnswer] || 'Not answered'}
                </p>
                ${!isCorrect ? `<p class="result-correct"><strong>Correct answer:</strong> ${question.options[question.correct]}</p>` : ''}
                <p class="result-explanation">${question.explanation}</p>
              </div>
            `;
          }).join('')}
        </div>
        
        <div class="results-actions">
          ${!passed ? `<button class="btn btn--secondary" onclick="quizSystem.retakeQuiz()">Retake Quiz</button>` : ''}
          <button class="btn btn--primary" onclick="quizSystem.returnToLesson()">
            ${passed ? 'Continue to Lesson' : 'Return to Lesson'}
          </button>
        </div>
      </div>
    `;
  }

  retakeQuiz() {
    this.startQuiz(this.lessonNumber, this.quizType);
  }

  returnToLesson() {
    // Return to lesson content
    window.lessonViewer.loadLesson(window.lessonViewer.currentLesson);
  }
}

// Global quiz system instance
window.quizSystem = new QuizSystem();

export default QuizSystem;
