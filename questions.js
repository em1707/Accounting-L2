// This file holds all your quiz questions for Lecture 2.
// You can edit the text or add new sections here without touching index.html.

var quizSections = [
    {
        title: "Section 1: Business Activities & The Accounting Equation",
        summary: `
        Organizations engage in three main activities:
        <strong>Financing Activities</strong> provide funds to purchase resources.
        <strong>Investing Activities</strong> acquire long-term assets needed to operate.
        <strong>Operating Activities</strong> use resources to produce and sell goods/services.
        The <strong>Accounting Equation</strong> must always remain in balance:
        <strong>Assets = Liabilities + Equity</strong>.
        `,
        questions: [
            // MCQ
            {
                question: "1. Which type of activity involves acquiring resources like buildings and equipment?",
                options: { a: "Financing Activities", b: "Investing Activities", c: "Operating Activities" },
                correctAnswer: "b",
                explanation: "Investing activities involve acquiring assets needed for business operations."
            },
            {
                question: "2. Which activity relates to using resources to produce and sell products?",
                options: { a: "Operating Activities", b: "Financing Activities", c: "Investing Activities" },
                correctAnswer: "a",
                explanation: "Operating activities represent the main business operations."
            },
            {
                question: "3. Which of the following represents the accounting equation?",
                options: { a: "Assets = Equity - Liabilities", b: "Liabilities = Assets + Equity", c: "Assets = Liabilities + Equity" },
                correctAnswer: "c",
                explanation: "This equation must remain balanced after every transaction."
            },
            {
                question: "4. Financing activities include:",
                options: { a: "Paying employee salaries", b: "Receiving loans from creditors", c: "Purchasing supplies" },
                correctAnswer: "b",
                explanation: "Financing provides funds (from owners or creditors)."
            },

            // True / False
            {
                question: "5. True or False: Operating activities involve selling products or providing services.",
                options: { a: "True", b: "False" },
                correctAnswer: "a",
                explanation: "Operating activities include day-to-day operations."
            },
            {
                question: "6. True or False: The accounting equation must always remain balanced.",
                options: { a: "True", b: "False" },
                correctAnswer: "a",
                explanation: "Every transaction affects at least two accounts to maintain balance."
            },
            {
                question: "7. True or False: Investing activities provide the funding to purchase assets.",
                options: { a: "True", b: "False" },
                correctAnswer: "b",
                explanation: "Financing activities provide funding; investing activities *use* funds to purchase assets."
            }
        ]
    },

    {
        title: "Section 2: Transaction Analysis",
        summary: `
        Every transaction affects the accounting equation.
        Examples:
        - Owner invests cash → Assets increase, Equity increases.
        - Buying supplies for cash → One asset increases, another decreases.
        - Buying on credit → Asset increases, Liability increases.
        - Providing services increases <strong>Revenue</strong>, which increases <strong>Equity</strong>.
        - Paying expenses decreases <strong>Equity</strong>.
        `,
        questions: [
            // MCQ
            {
                question: "8. When the owner invests cash into the business, which accounts are affected?",
                options: { a: "Cash increases, Equity increases", b: "Cash decreases, Liabilities increase", c: "Supplies increase, Cash decreases" },
                correctAnswer: "a",
                explanation: "Investment increases both assets and equity."
            },
            {
                question: "9. Buying supplies for cash affects the equation how?",
                options: { a: "Assets increase and Liabilities increase", b: "One asset increases and another asset decreases", c: "Equity decreases and Liabilities decrease" },
                correctAnswer: "b",
                explanation: "Supplies increase while cash decreases (both are assets)."
            },
            {
                question: "10. When supplies are purchased on credit:",
                options: { a: "Assets increase, Liabilities increase", b: "Assets decrease, Equity decreases", c: "Liabilities decrease, Equity increases" },
                correctAnswer: "a",
                explanation: "This creates Accounts Payable, a liability."
            },
            {
                question: "11. Paying for expenses such as rent affects equity how?",
                options: { a: "Equity increases", b: "Equity decreases", c: "Equity does not change" },
                correctAnswer: "b",
                explanation: "Expenses reduce equity."
            },

            // True / False
            {
                question: "12. True or False: Providing services for cash increases assets and equity.",
                options: { a: "True", b: "False" },
                correctAnswer: "a",
                explanation: "Revenue increases equity, and cash received increases assets."
            },
            {
                question: "13. True or False: Paying a liability reduces both assets and liabilities.",
                options: { a: "True", b: "False" },
                correctAnswer: "a",
                explanation: "Cash decreases (asset), and Accounts Payable decreases (liability)."
            },
            {
                question: "14. True or False: Expenses increase equity.",
                options: { a: "True", b: "False" },
                correctAnswer: "b",
                explanation: "Expenses decrease equity."
            }
        ]
    },

    {
        title: "Section 3: Financial Statements",
        summary: `
        Four main financial statements:
        <strong>Income Statement</strong> — Shows revenues, expenses, and net income over a period.
        <strong>Statement of Owner’s Equity</strong> — Shows changes in equity from investments, net income, and withdrawals.
        <strong>Balance Sheet</strong> — Shows assets, liabilities, and equity at a point in time.
        <strong>Statement of Cash Flows</strong> — Reports cash inflows/outflows from operating, investing, and financing activities.
        `,
        questions: [
            // MCQ
            {
                question: "15. Which statement shows revenues and expenses?",
                options: { a: "Balance Sheet", b: "Income Statement", c: "Statement of Cash Flows" },
                correctAnswer: "b",
                explanation: "The income statement measures performance over time."
            },
            {
                question: "16. The Statement of Owner’s Equity shows:",
                options: { a: "Assets and Liabilities", b: "Changes in Owner’s Equity", c: "Cash inflows only" },
                correctAnswer: "b",
                explanation: "It tracks investments, withdrawals, and net income effects."
            },
            {
                question: "17. The Balance Sheet reports:",
                options: { a: "Performance over time", b: "Financial position at a point in time", c: "Only liabilities" },
                correctAnswer: "b",
                explanation: "It is a snapshot of financial position at a single date."
            },
            {
                question: "18. The Statement of Cash Flows reports:",
                options: { a: "Only profits", b: "The ability to generate and use cash", c: "Owner's withdrawals only" },
                correctAnswer: "b",
                explanation: "It shows cash movements across operating, investing, and financing activities."
            },

            // True / False
            {
                question: "19. True or False: The income statement reports a company's financial performance.",
                options: { a: "True", b: "False" },
                correctAnswer: "a",
                explanation: "It measures revenues and expenses to show net income."
            },
            {
                question: "20. True or False: The balance sheet shows financial results over a period of time.",
                options: { a: "True", b: "False" },
                correctAnswer: "b",
                explanation: "It shows a financial position at one moment, not over time."
            },
            {
                question: "21. True or False: Cash flow statements include investing and financing activities.",
                options: { a: "True", b: "False" },
                correctAnswer: "a",
                explanation: "Cash flow reports include operating, investing, and financing activities."
            }
        ]
    }
];
