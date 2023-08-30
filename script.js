document.addEventListener("DOMContentLoaded", function() {
    const earningsForm = document.getElementById("earnings-form");
    const dailyViewsInput = document.getElementById("daily-views");
    const estimatedCPMInput = document.getElementById("estimated-cpm");
    const resultsDiv = document.getElementById("results");
    const dailyViewsValue = document.getElementById("daily-views-value");
    const estimatedCPMValue = document.getElementById("estimated-cpm-value");

    dailyViewsInput.addEventListener("input", function() {
        dailyViewsValue.textContent = dailyViewsInput.value;
    });

    estimatedCPMInput.addEventListener("input", function() {
        estimatedCPMValue.textContent = estimatedCPMInput.value;
    });
    earningsForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const dailyViews = parseFloat(dailyViewsInput.value);
        const estimatedCPM = parseFloat(estimatedCPMInput.value);

        if (isNaN(dailyViews) || isNaN(estimatedCPM)) {
            resultsDiv.innerHTML = "<p>Please enter valid numbers.</p>";
            return;
        }

        const estimatedDailyEarnings = (dailyViews / 1000) * estimatedCPM;
        const estimatedMonthlyEarnings = estimatedDailyEarnings * 30;
        const estimatedYearlyEarnings = estimatedMonthlyEarnings * 12;

        const resultsHTML = `
            <p>Your Estimated Daily Earnings: $${estimatedDailyEarnings.toFixed(2)}</p>
            <p>Your Estimated Monthly Earnings: $${estimatedMonthlyEarnings.toFixed(2)}</p>
            <p>Your Estimated Yearly Earnings: $${estimatedYearlyEarnings.toFixed(2)}</p>
        `;

        resultsDiv.innerHTML = resultsHTML;
    });
});