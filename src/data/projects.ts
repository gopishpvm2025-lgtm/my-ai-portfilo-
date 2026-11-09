export type Project = {
  slug: string; number: string; title: string; category: string; level: string;
  summary: string; problem: string; solution: string; stack: string[];
  features: string[]; architecture: string[]; evaluation: string;
  nextSteps: string[]; accent: "violet" | "cyan" | "pink";
  status: string;
};

export const projects: Project[] = [
  {
    slug: "smart-expense-analyzer", number: "01", title: "Smart Expense Analyzer",
    category: "Full-stack software · Data analytics", level: "Beginner",
    summary: "A personal finance dashboard concept that turns transaction records into understandable spending insights.",
    problem: "People often record expenses but struggle to see patterns across categories and time periods.",
    solution: "Build a responsive expense tracker with a Python API, structured transaction data and clear visual summaries. A later iteration can explore simple forecasting after a reliable baseline exists.",
    stack: ["Python", "JavaScript", "FastAPI", "Pandas", "SQLite"],
    features: ["Create, edit and categorize transactions", "Filter spending by date and category", "Visualize monthly totals and trends", "Export transaction data for analysis"],
    architecture: ["Browser UI", "FastAPI REST endpoints", "Validation and business logic", "SQLite transaction store", "Pandas analytics layer"],
    evaluation: "EDITABLE PLACEHOLDER — report tested workflows, correctness checks and measured response times only after implementation.",
    nextSteps: ["Add authentication and per-user data isolation", "Compare simple forecasting baselines", "Add automated tests and deployment"],
    accent: "violet", status: "Planned project"
  },
  {
    slug: "student-performance-predictor", number: "02", title: "Student Performance Predictor",
    category: "Machine learning · Applied data science", level: "Beginner–Intermediate",
    summary: "An educational ML experiment that demonstrates the complete workflow from dataset exploration to model evaluation.",
    problem: "A tabular dataset can contain patterns worth exploring, but a model must be evaluated carefully and its limitations explained.",
    solution: "Use an appropriately licensed or synthetic dataset, define a prediction target, establish a baseline, compare models and present estimates with clear caveats.",
    stack: ["Python", "NumPy", "Pandas", "Scikit-learn", "Streamlit"],
    features: ["Explore and clean a tabular dataset", "Build a reproducible preprocessing pipeline", "Compare baseline and candidate models", "Display predictions with limitations"],
    architecture: ["Dataset and data dictionary", "Exploratory analysis notebook", "Preprocessing pipeline", "Train/validation/test split", "Model evaluation and demo UI"],
    evaluation: "EDITABLE PLACEHOLDER — add actual MAE/RMSE or classification metrics appropriate to the target, plus a baseline comparison. Never fabricate scores.",
    nextSteps: ["Check for data leakage and subgroup performance", "Document dataset limitations", "Add reproducibility and model versioning"],
    accent: "cyan", status: "Planned project"
  },
  {
    slug: "ai-document-assistant", number: "03", title: "AI Document Assistant",
    category: "Generative AI · Retrieval-augmented generation", level: "Intermediate",
    summary: "A document question-answering application concept that grounds responses in uploaded material and points users to relevant sources.",
    problem: "Finding a specific answer in a long document can be time-consuming, and unsupported generated answers reduce trust.",
    solution: "Create a retrieval-augmented generation pipeline that extracts text, splits it into chunks, retrieves relevant passages and asks an LLM to answer using those sources.",
    stack: ["Python", "FastAPI", "Embeddings", "FAISS or pgvector", "LLM API"],
    features: ["Extract text from user-provided PDFs", "Chunk and embed document passages", "Retrieve relevant passages for a query", "Show source references alongside answers"],
    architecture: ["Document upload and validation", "Text extraction and chunking", "Embedding generation", "Vector similarity retrieval", "LLM response with source context"],
    evaluation: "EDITABLE PLACEHOLDER — create a small question set and assess retrieval relevance, answer faithfulness, latency and failure cases.",
    nextSteps: ["Add document deletion and retention controls", "Evaluate chunking and retrieval strategies", "Add prompt-injection and malformed-file safeguards"],
    accent: "pink", status: "Planned project"
  }
];
