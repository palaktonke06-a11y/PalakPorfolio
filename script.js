document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("project-box");
  if (!box) return;

  // Only show a Live Demo button for projects with an actual deployed URL in their README.
  const projects = [
    { title: "Yatrikart Real-Time Retail Operations Analytics", tech: "Power BI • Power Query • DAX • Excel", desc: "Retail operations dashboard for revenue, cost, profit, inventory profitability, regional demand and category performance.", github: "https://github.com/palaktonke06-a11y/Yatrikart-Dashboard" },
    { title: "Credit Card Fraud Detection – Live ML Dashboard", tech: "Python • Machine Learning • EDA • Feature Engineering", desc: "Fraud monitoring and transaction analysis with an interactive machine-learning dashboard.", github: "https://github.com/palaktonke06-a11y/Credit-card-fraud-detection", demo: "https://palaktonke.pythonanywhere.com/static/ml_dashboard.html" },
    { title: "AI Marketing Campaign Intelligence Platform", tech: "Python • Machine Learning • Streamlit • SQL", desc: "Campaign ROI analysis, success prediction, AI business recommendations, risk detection, budget optimization and performance forecasting.", github: "https://github.com/palaktonke06-a11y/AI-Marketing-Campaign-Intelligence-Platform", demo: "https://ai-marketing-campaign-intelligence-platform-vtcdprfh7evhjy2kql.streamlit.app/" },
    { title: "Enterprise AI Performance, ROI & Governance Intelligence", tech: "Python • SQL • Machine Learning • Streamlit", desc: "An enterprise intelligence platform combining AI performance, business ROI, governance risk, ML risk classification and business prioritization.", github: "https://github.com/palaktonke06-a11y/Enterprise-AI-Performance-ROI-Governance-Intelligence-Platform", demo: "https://enterprise-ai-performance-roi-governance-intelligence-platform.streamlit.app/" },
    { title: "Netflix Movie Recommendation System", tech: "Python • Machine Learning • Streamlit", desc: "A movie recommendation application built to demonstrate recommendation-system concepts.", github: "https://github.com/palaktonke06-a11y/Netflix-Movie-Recommendation-System", demo: "https://netflix-movie-recommendation-system-zchaznts7bmkncwbsfpgjy.streamlit.app/" },
    { title: "NLP Emotion Classifier", tech: "Python • NLP • Machine Learning • Streamlit", desc: "Text emotion classification using NLP preprocessing, feature extraction and model evaluation.", github: "https://github.com/palaktonke06-a11y/NLP-Emotion-Classifier", demo: "https://nlpemotionclassifier.streamlit.app/" },
    { title: "CleanSenseAI", tech: "Python • Data Cleaning • AI • Streamlit", desc: "An AI-assisted data-cleaning project for preparing datasets for analysis.", github: "https://github.com/palaktonke06-a11y/CleanSenseAI", demo: "https://cleansenseai.streamlit.app/" },
    { title: "Google Play Store Analytics Dashboard", tech: "Power BI • Data Analytics • Visualization", desc: "App marketplace analysis covering installs, reviews, ratings and paid-app trends.", github: "https://github.com/palaktonke06-a11y/Google-Play-Store-Dashboard" },
    { title: "Sales Power BI Dashboard", tech: "Power BI • DAX • Data Visualization", desc: "Interactive sales reporting and business performance analysis.", github: "https://github.com/palaktonke06-a11y/Sales-Power-bi-Dashboard" },
    { title: "Sales & Profit Dashboard", tech: "Power BI • DAX • Excel", desc: "Sales, profit and business KPI analysis.", github: "https://github.com/palaktonke06-a11y/Sale-Dashboard" },
    { title: "RBI ATM Card Dashboard", tech: "Power BI • Data Analytics", desc: "ATM card statistics and financial trend visualization.", github: "https://github.com/palaktonke06-a11y/RBI-ATM-Card-Dashboard" },
    { title: "Flipkart Sales & Product Dashboard", tech: "Power BI • DAX • Excel", desc: "Product and sales performance analysis.", github: "https://github.com/palaktonke06-a11y/Flipkart-Dashboard" },
    { title: "Healthcare Operational Analytics Dashboard", tech: "Power BI • DAX • Excel", desc: "Healthcare operations, patient demographics, billing and resource utilization analysis.", github: "https://github.com/palaktonke06-a11y/Healthcare-Dashboard" },
    { title: "HR Analytics Dashboard", tech: "Power BI • DAX • Excel", desc: "Workforce demographics, tenure, compensation, satisfaction and attrition analysis.", github: "https://github.com/palaktonke06-a11y/HR-Analytics-Dashboard" },
    { title: "IPL Matches Dashboard", tech: "Power BI • Data Visualization", desc: "IPL match and cricket performance analysis.", github: "https://github.com/palaktonke06-a11y/IPL-Matches-Dashboard" },
    { title: "Zomato Restaurant Dashboard", tech: "Power BI • DAX • Excel", desc: "Restaurant listings, cuisine trends, ordering behavior, geography and customer ratings analysis.", github: "https://github.com/palaktonke06-a11y/Zomato-Resturent-Dashboard" },
    { title: "Disney+ Content Visualization", tech: "Data Analytics • Python • Visualization", desc: "Exploration and visualization of Disney+ content and audience trends.", github: "https://github.com/palaktonke06-a11y/Disney-Plus-dataset-Visualisation" },
    { title: "Netflix Data Visualization", tech: "Data Analytics • Visualization", desc: "Analysis of Netflix content and streaming catalogue trends.", github: "https://github.com/palaktonke06-a11y/Netflix-data-visualization" },
    { title: "Credit Card Fraud Detection Dashboard", tech: "Power BI • DAX • Excel", desc: "Fraud and legitimate transaction patterns, transaction values and risk indicators.", github: "https://github.com/palaktonke06-a11y/Credit-Card-Fraud-Detection-dashboard" },
    { title: "Amazon Data Analysis", tech: "Python • Data Analysis", desc: "Exploratory analysis of Amazon-related data.", github: "https://github.com/palaktonke06-a11y/Amazon_data_Analysis" },
    { title: "Coffee Shop Sales Analysis", tech: "Data Analysis • Visualization", desc: "Sales trends, product performance and customer purchasing patterns.", github: "https://github.com/palaktonke06-a11y/Coffee-shop-sales" },
    { title: "Zomato Data Insights", tech: "Data Analysis • Visualization", desc: "Restaurant data exploration and business insights.", github: "https://github.com/palaktonke06-a11y/Zomato-Data-Insights" },
    { title: "Flight Price Prediction", tech: "Python • EDA • Feature Engineering • ML", desc: "Machine-learning project to analyze and predict flight ticket prices.", github: "https://github.com/palaktonke06-a11y/Flight-Price-Prediction" },
    { title: "Black Friday Sales Analysis", tech: "Python • EDA • Feature Engineering", desc: "Customer demographics and purchase behavior analysis.", github: "https://github.com/palaktonke06-a11y/Black-Friday-Sales-Analysis" }
  ];

  box.innerHTML = projects.map((p) => `
    <article class="card">
      <h3 class="card-title">${p.title}</h3>
      <p>${p.desc}</p>
      <b>${p.tech}</b>
      <div class="project-buttons">
        <a class="btn" href="${p.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
        ${p.demo ? `<a class="btn" href="${p.demo}" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ""}
      </div>
    </article>
  `).join("");
});