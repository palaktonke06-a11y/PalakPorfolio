document.addEventListener("DOMContentLoaded",()=>{


const box=document.getElementById("project-box");


const projects=[



{
title:"Yatrikart Real-Time Retail Operations Analytics Dashboard",
tech:"Power BI • Power Query • DAX • Excel",
desc:"Built a retail analytics dashboard to monitor sales operations, performance and key business insights.",
github:"https://github.com/palaktonke06-a11y/Yatrikart-Dashboard",
demo:"https://github.com/palaktonke06-a11y/Yatrikart-Dashboard"
},


{
title:"Credit Card Fraud Detection System with Live ML Dashboard",
tech:"Python • Machine Learning • EDA • Feature Engineering",
desc:"Developed an ML fraud detection system with an interactive dashboard for prediction insights.",
github:"https://github.com/palaktonke06-a11y/Credit-card-fraud-detection",
demo:"https://palaktonke.pythonanywhere.com/static/ml_dashboard.html"
},


{
title:"Coffee Shop Sales",
tech:"Data Analysis • Data Visualization",
desc:"Analyzed sales data to identify trends, product performance and customer purchasing patterns.",
github:"https://github.com/palaktonke06-a11y/Coffee-shop-sales.git",
demo:"https://github.com/palaktonke06-a11y/Coffee-shop-sales.git"
},


{
title:"Flight Price Prediction",
tech:"Python • EDA • Feature Engineering • ML",
desc:"Built a machine learning solution to analyze and predict flight ticket prices.",
github:"https://github.com/palaktonke06-a11y/Flight-Price-Prediction.git",
demo:"https://github.com/palaktonke06-a11y/Flight-Price-Prediction.git"
},


{
title:"Netflix AI Movie Recommendation System",
tech:"Data Analysis • Machine Learning",
desc:"Created AI based movie recommendation system.",
github:"https://github.com/palaktonke06-a11y/Netflix-Movie-Recommendation-System",
demo:"https://netflix-movie-recommendation-system-zchaznts7bmkncwbsfpgjy.streamlit.app/"
},


{
title:"Disney+ Content Strategy & Streaming Insights",
tech:"Data Analysis • Visualization",
desc:"Analyzed Disney+ content data to find audience trends.",
github:"https://github.com/your-username/disney-data-analysis.git",
demo:"https://github.com/your-username/disney-data-analysis.git"
},


{
title:"Zomato Restaurant Strategy & Consumer Analytics Dashboard",
tech:"Power BI • DAX • Excel",
desc:"Dashboard to analyze restaurant performance and customer behavior.",
github:"https://github.com/palaktonke06-a11y/Zomato-Resturent-Dashboard",
demo:"https://github.com/palaktonke06-a11y/Zomato-Resturent-Dashboard"
},


{
title:"Flipkart Sales & Product Analytics Dashboard",
tech:"Power BI • DAX • Excel",
desc:"Analyzed product sales and business performance.",
github:"https://github.com/palaktonke06-a11y/Flipkart-Dashboard",
demo:"https://github.com/palaktonke06-a11y/Flipkart-Dashboard"
},


{
title:"RBI ATM Card Statistics Dashboard",
tech:"Power BI • DAX • Excel",
desc:"Analyzed ATM card statistics and financial trends.",
github:"https://github.com/palaktonke06-a11y/RBI-ATM-Card-Dashboard",
demo:"https://github.com/palaktonke06-a11y/RBI-ATM-Card-Dashboard"
},


{
title:"Sales & Profit Performance Dashboard",
tech:"Power BI • DAX • Excel",
desc:"Tracked sales, profit and business KPIs.",
github:"https://github.com/palaktonke06-a11y/Sale-Dashboard",
demo:"https://github.com/palaktonke06-a11y/Sale-Dashboard"
},


{
title:"Black Friday Sales Analysis",
tech:"Python • EDA • Feature Engineering",
desc:"Analyzed customer purchase behavior.",
github:"https://github.com/palaktonke06-a11y/Black-Friday-Sales-Analysis",
demo:"https://github.com/palaktonke06-a11y/Black-Friday-Sales-Analysis"
},


{
title:"Credit Card Fraud Detection Dashboard",
tech:"Power BI • DAX • Excel",
desc:"Visualized fraud patterns and transaction insights.",
github:"https://github.com/palaktonke06-a11y/Credit-Card-Fraud-Detection-dashboard",
demo:"https://github.com/palaktonke06-a11y/Credit-Card-Fraud-Detection-dashboard"
},


{
title:"Healthcare Operational Analytics Dashboard",
tech:"Power BI • DAX • Excel",
desc:"Analyzed healthcare operations and financial metrics.",
github:"https://github.com/palaktonke06-a11y/Healthcare-Dashboard",
demo:"https://github.com/palaktonke06-a11y/Healthcare-Dashboard"
},


{
title:"Zomato Data Insights",
tech:"Data Analysis • Visualization",
desc:"Explored restaurant data to find business insights.",
github:"https://github.com/palaktonke06-a11y/Zomato-Data-Insights.git",
demo:"https://github.com/palaktonke06-a11y/Zomato-Data-Insights.git"
},


{
title:"Netflix Data Analysis",
tech:"Data Analysis • Visualization",
desc:"Analyzed Netflix content trends.",
github:"https://github.com/palaktonke06-a11y/Netflix-Data-analysis.git",
demo:"https://github.com/palaktonke06-a11y/Netflix-Data-analysis.git"
},


{
title:"Sales Analytics Dashboard",
tech:"Power BI • DAX • Excel",
desc:"Created interactive sales dashboard.",
github:"https://github.com/palaktonke06-a11y/Sales-Power-bi-Dashboard",
demo:"https://github.com/palaktonke06-a11y/Sales-Power-bi-Dashboard"
},


{
title:"IPL Cricket Performance Dashboard",
tech:"Power BI • DAX • Excel",
desc:"Analyzed IPL matches and player performance.",
github:"https://github.com/palaktonke06-a11y/IPL-Matches-Dashboard",
demo:"https://github.com/palaktonke06-a11y/IPL-Matches-Dashboard"
},


{
title:"HR Workforce Analytics Dashboard",
tech:"Power BI • DAX • Excel",
desc:"Analyzed employee trends and retention insights.",
github:"https://github.com/palaktonke06-a11y/HR-Analytics-Dashboard",
demo:"https://github.com/palaktonke06-a11y/HR-Analytics-Dashboard"
}

];

projects.forEach(p=>{


box.innerHTML+=`

<div class="card">


<h3 class="card-title">
${p.title}
</h3>


<p>
${p.desc}
</p>


<b>
${p.tech}
</b>



<div class="project-buttons">


<a class="btn"
href="${p.github}"
target="_blank">

GitHub

</a>


<a class="btn"
href="${p.demo}"
target="_blank">

Demo

</a>


</div>


</div>

`;

});


});

